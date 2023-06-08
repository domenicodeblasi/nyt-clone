import React from "react"
import { useData } from "../../hooks/useData"

const MoreNews = () => {

    const { data } = useData()
    const { mainNews } = data.success
    const moreNews = mainNews.slice(18)

    return (
        <article className="bg-teal-300 border-b-2 border-black lg:border-b">
            <h1>More News</h1>
        </article>
    )
}

export default MoreNews