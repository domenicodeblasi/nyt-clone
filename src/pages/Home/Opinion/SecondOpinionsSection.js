import React from "react"

const SecondOpinionsSection = ({ opinionsArray, opinion }) => {
    const { title, byline, url } = opinion
    return (
        <a href={url} title={title} className="cursor-pointer">
            <section className={`flex flex-col gap-1 py-4 border-b border-gray-400 ${opinion === opinionsArray[1] && "md:border-0 lg:border-b"}`}>
                <h4 className="text-xs font-spectral text-gray-600">{byline.substring(3).toUpperCase()}</h4>
                <h3 className="text-2xl font-instrument font-bold md:text-xl">{title}</h3>
            </section>
        </a>
    )
}

export default SecondOpinionsSection