import React from "react"

const FourthOpinionsSection = ({ opinionsArray, singleOpinion }) => {
    const { title, byline, url } = singleOpinion
    return (
        <a href={url} title={title} className="cursor-pointer">
        <section className={`flex flex-col gap-1 py-4 border-b border-gray-300 ${singleOpinion === opinionsArray[2] && "md:border-0 lg:border-b"}`}>
            <h4 className="text-xs font-spectral text-gray-600">{byline.substring(3).toUpperCase()}</h4>
            <h3 className="text-2xl font-instrument font-bold md:text-xl">{title}</h3>
        </section>
    </a>
    )
}

export default FourthOpinionsSection