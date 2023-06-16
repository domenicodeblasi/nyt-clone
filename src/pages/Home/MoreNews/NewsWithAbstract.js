import React from "react"
import BookmarkButton from "../../../components/ui/BookmarkButton"

const NewsWithAbstract = ({ newsWithAbstract, moreNews }) => {
    return (
        <>
            {newsWithAbstract.map(singleNewsObj => {
                const { title, abstract, id, url } = singleNewsObj
                return (
                    <div key={id} className={`w-full h-fit flex flex-col gap-2 py-4 border-b border-gray-300 ${moreNews.length <= 4 && "last:border-0"} md:last:border-0`}>
                        <a href={url} title={title} className="flex flex-col gap-2">
                            <h1 className="font-spectral font-bold text-2xl tracking-wide md:text-lg md:tracking-normal">{title}</h1>
                            <p className="font-spectral tracking-tight text-gray-600">{abstract}</p>
                        </a>
                        <div className="w-full flex justify-end">
                            <BookmarkButton singleNews={singleNewsObj} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default NewsWithAbstract