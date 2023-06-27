import React from "react"
import { useData } from "../../hooks/useData"
import { useScreen } from "../../hooks/useScreen"
import ImgAndCopyright from "../../components/ui/ImgAndCopyright"
import BookmarkButton from "../../components/ui/BookmarkButton"

const Movies = () => {

    const { screenWidth, lg } = useScreen()
    const { data } = useData()
    const { movies } = data.success

    return (
        <article className="relative py-2 after:h-[2px] after:w-screen after:absolute after:bg-black after:bottom-0 after:-left-4 lg:after:w-full lg:after:left-0 lg:after:h-[1px]">
            <h1 className="font-source-sans font-semibold">Movies</h1>

            <div className="relative flex flex-col lg:flex-row lg:justify-between">

                {/* 2/3 of the full width */}
                <div className="py-4 flex flex-col gap-2 items-center w-full border-b border-gray-300 lg:border-0 lg:max-w-[65.6%]">
                    {movies.slice(0, 1).map(singleNewsObj => {
                        const { id, title, abstract, multimedia, url } = singleNewsObj
                        return (
                            <div key={id} className="w-full">
                                <a href={url} title={title} className="flex flex-col gap-2">
                                    <ImgAndCopyright
                                        src={multimedia[0].url}
                                        alt={title}
                                        copyright={multimedia[0].copyright}
                                        className=""
                                    />
                                    <h2 className="text-center text-2xl font-spectral font-light md:text-3xl">{title}</h2>
                                    <p className=" text-center font-spectral text-gray-600 md:text-lg">{abstract}</p>
                                </a>
                                <div className="w-full flex justify-end">
                                    <BookmarkButton singleNews={singleNewsObj} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* 1/3 of the full width */}
                <div className="lg:max-w-[32.3%] w-full">

                    {/* FIRST ROW */}
                    <div className="w-full flex flex-col md:flex-row md:justify-between pt-4 md:pb-12">
                        {movies.slice(1, 3).map(singleNewsObj => {
                            const { id, title, abstract, multimedia, url } = singleNewsObj
                            return (
                                <div key={id} className="relative mb-12 w-full md:w-[48%] md:mb-0">
                                    <a className="flex flex-col gap-2" href={url} title={title}>
                                        <div
                                            className="w-full h-[250px] lg:h-[125px]"
                                            style={{
                                                backgroundImage: `url(${multimedia[1].url})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                            }}
                                        ></div>
                                        <h3 className="font-spectral font-bold">{title}</h3>
                                        <p className="font-spectral text-sm text-gray-600">{abstract}</p>
                                    </a>
                                    <div className="absolute -bottom-7 w-full flex justify-end">
                                        <BookmarkButton singleNews={singleNewsObj} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                    {/* SECOND ROW */}
                    <div className="w-full flex flex-col md:flex-row md:justify-between md:pb-10">
                        {movies.slice(3, 5).map(singleNewsObj => {
                            const { id, title, abstract, multimedia, url } = singleNewsObj
                            return (
                                <div key={id} className="relative mb-12 w-full md:w-[48%] md:mb-0">
                                    <a className="flex flex-col gap-2" href={url} title={title}>
                                        <div
                                            className="w-full h-[250px] lg:h-[125px]"
                                            style={{
                                                backgroundImage: `url(${multimedia[1].url})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                            }}
                                        ></div>
                                        <h3 className="font-spectral font-bold">{title}</h3>
                                        <p className="font-spectral text-sm text-gray-600">{abstract}</p>
                                    </a>
                                    <div className="absolute -bottom-7 w-full flex justify-end">
                                        <BookmarkButton singleNews={singleNewsObj} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>

                {/* vertical line in large screens */}
                {screenWidth >= lg && (
                    <div className="absolute top-0 left-0 w-full h-full border-r border-gray-300 max-w-[66.6%] -z-10"></div>
                )}

            </div>


        </article>
    )
}

export default Movies