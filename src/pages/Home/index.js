import React from "react"
import { useData } from "./../../hooks/useData"
import Loading from "./../../components/ui/Loading"
import MainArticles from "./MainArticles"
import Opinion from "./Opinion"
import InCaseYouMissedIt from "./InCaseYouMissedIt"
import MoreNews from "./MoreNews"
import Well from "./Well"
import Movies from "./Movies"
import Footer from "./Footer"

const Home = () => {
    const { data } = useData()
    const { loading, error } = data

    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <section className="w-full max-w-screen-xl px-4 font-source-sans" >
                    <div className="flex flex-col lg:flex-row lg:border-b lg:border-black">
                        <div className="relative lg:w-2/3 lg:pr-3 lg:after:w-[1px] lg:after:h-[99%] lg:after:bg-gray-300 lg:after:absolute lg:after:right-0 lg:after:top-[0.5%]">
                            <MainArticles />
                        </div>
                        <div className="lg:w-1/3 lg:pl-3">
                            <Opinion />
                            <InCaseYouMissedIt />
                        </div>
                    </div>
                    <MoreNews />
                    <Well />
                    <Movies />
                    <Footer />
                </section>
            )}
        </>

    )
}

export default Home