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
    TOGGLE_BOOKMARK: "TOGGLE_BOOKMARK",
    ADD_TO_BOOKMARKS: "ADD_TO_BOOKMARKS",
    REMOVE_FROM_BOOKMARKS: "REMOVE_FROM_BOOKMARKS",
}

const initialState = {
    loading: false,
    error: "",
    bookmarks: [],
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
            // single news to update (OBJECT)
            const newsToUpdate = data.success[action.payload.category].find(
                singleNewsObj => singleNewsObj.id === action.payload.id
            )

            // if the news object I've searched (in SUCCESS) exist,
            // then I have to check (in BOOKMARKS) if that news object is already there
            if (newsToUpdate) {
                const isBookmarked = data.bookmarks.some(
                    singleNewsObj => singleNewsObj.id === newsToUpdate.id
                )


                // if newsToUpdate is bookmarked (isBookmarked -> true), then I have to remove it from bookmarks,
                // but if newsToUpdate isn't bookmarked (isBookmarked -> false), then I have to add newsToUpdate to bookmarks
                const updatedBookmarks = isBookmarked
                    ? data.bookmarks.filter(bookmarkedNews => bookmarkedNews.id !== newsToUpdate.id)
                    : [...data.bookmarks, newsToUpdate]

                return {
                    ...data,
                    bookmarks: updatedBookmarks,
                    success: {
                        ...data.success,
                        [action.payload.category]: data.success[action.payload.category].map(singleNewsObj => {
                            if (singleNewsObj.id === action.payload.id) {
                                return {
                                    ...newsToUpdate,
                                    bookmark: !singleNewsObj.bookmark,
                                }
                            } else {
                                return singleNewsObj
                            }
                        }),
                    }
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
                let responseMainNews = []
                let responseOpinion = []
                let responseMostPopularNews = []
                let responseWell = []
                let responseMovies = []

                try {
                    responseMainNews = (await axios.get(URLS.MAIN_NEWS)).data.results
                } catch(err) {
                    responseMainNews = []
                    console.log(`${err.name} - error in fetching Main News section - ${err.message}`)
                }

                try {
                    responseOpinion = (await axios.get(URLS.OPINION)).data.results.slice(0, 14)
                } catch (err) {
                    responseOpinion = []
                    console.log(`${err.name} - error in fetching Opinion section - ${err.message}`)
                }

                try {
                    responseMostPopularNews = (await axios.get(URLS.MOST_POPULAR_NEWS)).data.results.slice(0, 6)
                } catch (err) {
                    responseMostPopularNews = []
                    console.log(`${err.name} - error in fetching Most Popular News section - ${err.message}`)
                }

                try {
                    responseWell = (await axios.get(URLS.WELL)).data.results.slice(0, 5)
                } catch (err) {
                    responseWell = []
                    console.log(`${err.name} - error in fetching Well section - ${err.message}`)
                }

                try {
                    responseMovies = (await axios.get(URLS.MOVIES)).data.results.slice(0, 5)
                } catch (err) {
                    responseMovies = []
                    console.log(`${err.name} - error in fetching Movies section - ${err.message}`)
                }

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
                            if (responseMostPopularNews) {
                                return {
                                    ...item,
                                    id: crypto.randomUUID(),
                                    category: "mostPopularNews"
                                }
                            } else return
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