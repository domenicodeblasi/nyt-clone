import React from "react"
import { useData } from "./../../hooks/useData"
import { BookmarkIcon } from "@heroicons/react/24/solid"
import ImgAndCopyright from "../../components/ui/ImgAndCopyright"

const Bookmark = ({ bookmarkObj }) => {
    const { toggleBookmark } = useData()
    const { title, abstract, url, multimedia, category, id } = bookmarkObj

    const handleClick = () => {
        toggleBookmark(category, id)
    }

    return (
        <section className="flex flex-col justify-between gap-2 py-4 border-b border-gray-400 lg:max-w-[48%] lg:even:after:w-[1px] lg:even:after:h-full lg:even:after:top-0 lg:even:after:left-1/2 lg:even:after:absolute lg:even:after:bg-gray-400">
            <div className="relative flex flex-col gap-2 sm:flex-row lg:justify-between">
                <div className="flex flex-col gap-2 sm:w-1/2 sm:max-w-[50%] lg:w-3/4 lg:max-w-[75%]">
                    <h1 className="font-spectral text-lg font-bold lg:text-2xl">{title}</h1>
                    <p className="font-spectral font-light text-sm text-gray-600">{abstract}</p>
                </div>
                <ImgAndCopyright
                    src={multimedia[1].url}
                    alt={title}
                    className="sm:w-1/2 sm:max-w-[50%] lg:w-[23%]"
                    copyright={multimedia[1].copyright}
                />
                <a
                    href={url}
                    title={title}
                    className="cursor-pointer absolute w-full h-full"
                ></a>
            </div>

            <div className="flex justify-end">
                <button
                    className="flex relative justify-center items-center h-6 w-6 rounded transition-all duration-200 cursor-pointer 
                    hover:bg-red-400 hover:text-white 
                    lg:hover:w-[170px] lg:justify-end lg:top-0 lg:right-0 
                    lg:before:absolute lg:before:right-[22px] lg:before:items-center lg:before:text-xs lg:before:invisible lg:before:transition-all lg:before:delay-200 
                    lg:hover:before:visible lg:hover:before:content-['REMOVE_FROM_BOOKMARKS']"
                    onClick={handleClick}
                >
                    <BookmarkIcon className="absolute w-5 transition-all duration-500" />
                </button>
            </div>

        </section>
    )
}

export default Bookmark