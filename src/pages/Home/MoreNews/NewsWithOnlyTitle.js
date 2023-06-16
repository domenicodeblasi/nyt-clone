import React from "react"
import BookmarkButton from "../../../components/ui/BookmarkButton"

const NewsWithOnlyTitle = ({newsWithOnlyTitle}) => {
    return (
        <>
            {newsWithOnlyTitle.map(singleNewsObj => {
                const { title, id, url } = singleNewsObj
                return (
                    <div key={id} className="relative w-full h-fit flex flex-col gap-2 py-4 border-b border-gray-300 last:border-0">
                        <a href={url} title={title} className="flex flex-col gap-2">
                            <h1 className="font-spectral font-bold text-lg">{title}</h1>
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

export default NewsWithOnlyTitle