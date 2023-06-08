import React, { useEffect, useReducer, createContext } from "react"
import axios from "axios"

export const DataContext = createContext()

const URLS = {
    MAIN_NEWS: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`,
    OPINION: `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${process.env.REACT_APP_API_KEY}`,
    MOST_POPULAR_NEWS: `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${process.env.REACT_APP_API_KEY}`,
    WELL: `https://api.nytimes.com/svc/topstories/v2/well.json?api-key=${process.env.REACT_APP_API_KEY}`,
    MOVIES: `https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${process.env.REACT_APP_API_KEY}`
}

const ACTIONS = {
    FETCH_LOADING: "FETCH_LOADING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
    TOGGLE_BOOKMARK: "TOGGLE_BOOKMARK"
}

const initialState = {
    loading: false,
    error: "",
    success: {
        mainNews: [],
        opinion: [],
        mostPopularNews: [],
        well: [],
        movies: [],
    }
}

const reducer = (data, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_LOADING:
            return {
                ...data,
                loading: true,
            }
        case ACTIONS.FETCH_SUCCESS:
            return {
                ...data,
                loading: false,
                success: action.payload
            }
        case ACTIONS.FETCH_ERROR:
            return {
                ...data,
                loading: false,
                error: "An error occurred, please wait a moment and try to refresh the page"
            }
        case ACTIONS.TOGGLE_BOOKMARK:
            return {
                ...data,
                success: {
                    ...data.success,
                    [action.payload.category]: data.success[action.payload.category].map(news => {
                        if (news.id === action.payload.id) {
                            return {
                                ...news,
                                bookmark: !news.bookmark,
                            }
                        } else return news
                    })
                }
            }
        default:
            return data
    }
}

export const DataContextProvider = ({ children }) => {

    const [data, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const getData = async () => {
            dispatch({ type: ACTIONS.FETCH_LOADING })
            try {
                const responseMainNews = (await axios.get(URLS.MAIN_NEWS)).data.results
                const responseOpinion = (await axios.get(URLS.OPINION)).data.results.slice(0, 14)
                const responseMostPopularNews = (await axios.get(URLS.MOST_POPULAR_NEWS)).data.results.slice(0, 6)
                const responseWell = (await axios.get(URLS.WELL)).data.results.slice(0, 5)
                const responseMovies = (await axios.get(URLS.MOVIES)).data.results.slice(0, 5)
                dispatch({
                    type: ACTIONS.FETCH_SUCCESS, payload: {
                        mainNews: responseMainNews.map(item => {
                            return {
                                ...item,
                                id: crypto.randomUUID(),
                                bookmark: false,
                                category: "mainNews"
                            }
                        }),
                        opinion: responseOpinion.map(item => {
                            return {
                                ...item,
                                id: crypto.randomUUID(),
                                category: "opinion"
                            }
                        }),
                        mostPopularNews: responseMostPopularNews.map(item => {
                            return {
                                ...item,
                                id: crypto.randomUUID(),
                                category: "mostPopularNews"
                            }
                        }),
                        well: responseWell.map(item => {
                            return {
                                ...item,
                                id: crypto.randomUUID(),
                                bookmark: false,
                                category: "well"
                            }
                        }),
                        movies: responseMovies.map(item => {
                            return {
                                ...item,
                                id: crypto.randomUUID(),
                                bookmark: false,
                                category: "movies"
                            }
                        }),
                    }
                })
            } catch (err) {
                console.log(err)
                dispatch({ type: ACTIONS.FETCH_ERROR })
            }
        }
        getData()
    }, [])

    const toggleBookmark = (category, id) => {
        dispatch({
            type: ACTIONS.TOGGLE_BOOKMARK,
            payload: { category, id }
        })
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <DataContext.Provider value={{ data, toggleBookmark }}>
            {children}
        </DataContext.Provider>
    )
}