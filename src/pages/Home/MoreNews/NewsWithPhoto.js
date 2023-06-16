import React from "react"
import ImgAndCopyright from "../../../components/ui/ImgAndCopyright"
import BookmarkButton from "../../../components/ui/BookmarkButton"

const NewsWithPhoto = ({ newsWithPhoto }) => {
    return (
        <>
            {newsWithPhoto.map(singleNewsObj => {
                const { title, abstract, multimedia, id, url } = singleNewsObj
                return (
                    <div key={id} className="w-full h-fit flex flex-col gap-2 py-4 border-b border-gray-300 md:border-0">
                        <a href={url} title={title} className="flex flex-col gap-2">
                            <ImgAndCopyright
                                src={multimedia[0].url}
                                alt={title}
                                copyright={multimedia[0].copyright}
                                className=""
                            />
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

export default NewsWithPhoto