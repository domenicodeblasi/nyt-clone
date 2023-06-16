import React from "react"
import { useScreen } from "./../../../hooks/useScreen"
import { useData } from "./../../../hooks/useData"
import PopularNewsItem from "./PopularNewsItem"

const InCaseYouMissedIt = () => {

    const { screenWidth, md, lg } = useScreen()
    const { data } = useData()
    const { mostPopularNews } = data.success
    const firstPopularNewsSection = mostPopularNews.slice(0, 2)
    const secondPopularNewsSection = mostPopularNews.slice(2, 4)
    const thirdPopularNewsSection = mostPopularNews.slice(4, 6)

    return (
        <article className="w-full py-2 lg:pt-2 border-b-2 border-black lg:border-0">
            <h2 className="font-source-sans font-semibold">In Case You Missed It</h2>
            <h3 className="font-instrument italic">Top picks from The Times, recommended for you</h3>

            {/* FIRST BLOCK */}
            <div className="relative md:flex md:border-b md:border-gray-300 md:gap-4 lg:gap-0 lg:flex-col lg:border-0">
                {(screenWidth >= md & screenWidth < lg) ? (
                    <div className="absolute bg-gray-300 w-[1px] h-[80%] top-[10%] left-[50%]"></div>
                ) : null}
                {firstPopularNewsSection.map(news => {
                    const { id } = news
                    return <PopularNewsItem key={id} news={news} />
                })}
            </div>


            {/* SECOND BLOCK */}
            <div className="relative md:flex md:border-b md:border-gray-300 md:gap-4 lg:gap-0 lg:flex-col lg:border-0">
                {(screenWidth >= md & screenWidth < lg) ? (
                    <div className="absolute bg-gray-300 w-[1px] h-[80%] top-[10%] left-[50%]"></div>
                ) : null}
                {secondPopularNewsSection.map(news => {
                    const { id } = news
                    return <PopularNewsItem key={id} news={news} />
                })}
            </div>


            {/* THIRD BLOCK */}
            <div className="relative md:gap-4 lg:gap-0 md:flex lg:flex-col lg:border-0 group">
                {(screenWidth >= md & screenWidth < lg) ? (
                    <div className="absolute bg-gray-300 w-[1px] h-[80%] top-[10%] left-[50%]"></div>
                ) : null}
                {thirdPopularNewsSection.map(news => {
                    const { id } = news
                    return <PopularNewsItem key={id} news={news} className="bg-red-400" />
                })}
            </div>
        </article>
    )
}

export default InCaseYouMissedIt