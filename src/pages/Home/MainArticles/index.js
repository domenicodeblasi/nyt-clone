import React from "react"
import { useData } from "../../../hooks/useData"
import MainNewsSection from "./MainNewsSection"

const MainArticles = () => {

    const { data } = useData()
    const { mainNews } = data.success

    const firstMainNewsSection = mainNews.slice(0, 3)
    const secondMainNewsSection = mainNews.slice(3, 6)
    const thirdMainNewsSection = mainNews.slice(6, 9)
    const fourthMainNewsSection = mainNews.slice(9, 12)
    const fifthMainNewsSection = mainNews.slice(12, 15)
    const sixthMainNewsSection = mainNews.slice(15, 18)

    const sections = [
        firstMainNewsSection,
        secondMainNewsSection,
        thirdMainNewsSection,
        fourthMainNewsSection,
        fifthMainNewsSection,
        sixthMainNewsSection,
    ]

    return (
        <article className="border-b-2 border-black lg:border-0 w-full">
            <div>
                {sections.map(singleSection => {
                    return (
                        <MainNewsSection key={crypto.randomUUID()} singleSection={singleSection} />
                    )
                })}
            </div>
        </article>
    )

}

export default MainArticles