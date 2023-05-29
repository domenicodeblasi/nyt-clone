import React, { useState, useEffect } from "react"
import axios from "axios"
import Article from "./Article"
import Opinion from "./Opinion"
import InCaseYouMissedIt from "./InCaseYouMissedIt"
import MoreNews from "./MoreNews"
import Well from "./Well"
import Movies from "./Movies"
import Games from "./Games"

// const HOME_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
const OPINIONS_URL = `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${process.env.REACT_APP_API_KEY}`
// const INCASEYOUMISSEDIT_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_API_KEY}`
// const WELL_URL = `https://api.nytimes.com/svc/topstories/v2/well.json?api-key=${process.env.REACT_APP_API_KEY}`
// const MOVIES_URL = `https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${process.env.REACT_APP_API_KEY}`

const Home = () => {
    const [opinions, setOpinions] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(OPINIONS_URL)
                setOpinions(response.data.results)
            } catch(err) {
                console.log("error in fetching data", err)
            }
        }
        getData()
    },[])

    return (
        <section className="w-full max-w-screen-xl px-4 font-source-sans bg-slate-300">
            <div className="flex flex-col gap-4 lg:flex-row lg:border-b lg:border-black">
                <div className="lg:w-2/3 max-w-2/3 bg-pink-500">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
                <div className="lg:w-1/3 max-w-1/3 ">
                    <Opinion opinions={opinions} />
                    <InCaseYouMissedIt />
                </div>
            </div>
            <MoreNews />
            <Well />
            <Movies />
            <Games />
        </section>
    )
}

export default Home