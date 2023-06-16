import React from "react"
import { useData } from "../../../hooks/useData"
import NewsWithPhoto from "./NewsWithPhoto"
import NewsWithAbstract from "./NewsWithAbstract"
import NewsWithOnlyTitle from "./NewsWithOnlyTitle"


const MoreNews = () => {

    const { data } = useData()
    const { mainNews } = data.success
    const moreNews = mainNews.slice(18, 28)
    const newsWithPhoto = mainNews.slice(18, 19)
    const newsWithAbstract = mainNews.slice(19, 22)
    const newsWithOnlyTitle = mainNews.slice(22, 28)


    return (
        <article className="py-2 border-b-2 border-black lg:border-b">

            <h1 className="font-source-sans font-semibold">More News</h1>

            {/* MORE NEWS LIST */}
            {moreNews.length <= 4 ? (
                <div className="relative w-full flex flex-col-reverse md:flex-row md:justify-between">

                    <span className="absolute w-1/2 md:border-r md:border-gray-300 h-full"></span>

                    <div className="w-full h-fit md:max-w-[49%]">
                        <NewsWithAbstract newsWithAbstract={newsWithAbstract} moreNews={moreNews} />
                    </div>
                    <div className="w-full h-fit md:max-w-[49%]">
                        <NewsWithPhoto newsWithPhoto={newsWithPhoto} />
                    </div>

                </div>
            ) : (
                <div className="relative w-full flex flex-col md:flex-row md:justify-between">

                    <span className="absolute w-1/4 md:border-r md:border-gray-300 h-full -z-10"></span>
                    <span className="absolute w-[70%] md:border-r md:border-gray-300 h-full -z-10"></span>

                    <div className="w-full h-fit md:max-w-[43%] md:order-2">
                        <NewsWithPhoto newsWithPhoto={newsWithPhoto} />
                    </div>
                    <div className="md:max-w-[24%] md:order-1">
                        <NewsWithAbstract newsWithAbstract={newsWithAbstract} moreNews={moreNews} />
                    </div>
                    <div className="md:max-w-[29%] md:order-3">
                        <NewsWithOnlyTitle newsWithOnlyTitle={newsWithOnlyTitle} />
                    </div>

                </div>
            )}
        </article>
    )
}

export default MoreNews