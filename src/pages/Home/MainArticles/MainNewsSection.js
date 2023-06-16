import React from "react"
import { useScreen } from "../../../hooks/useScreen"
import BookmarkButton from "../../../components/ui/BookmarkButton"
import ImgAndCopyright from "./../../../components/ui/ImgAndCopyright"


const MainNewsSection = ({ singleSection }) => {
    const { screenWidth, md } = useScreen()

    return (
        <section className="relative flex border-b-2 border-black last:border-0 md:border-b">
            <div className="md:max-w-[40%] md:pr-2 md:after:absolute md:after:w-[1px] md:after:h-[96%] md:after:bg-gray-300 md:after:top-[2%] md:after:left-[40%]">
                {singleSection.map(singleNews => {
                    const { id, title, abstract, multimedia, url } = singleNews
                    return (
                        <div className="flex flex-col gap-2 py-4 border-b border-gray-300 last:border-0" key={id}>
                            <a href={url} title={title} className="cursor-pointer flex flex-col gap-2">
                                <h1
                                    className={`font-spectral font-bold text-3xl tracking-wide ${singleNews === singleSection[2] && "text-lg tracking-wide"} md:text-lg md:tracking-normal`}
                                >
                                    {title}
                                </h1>

                                {(singleNews === singleSection[0] || singleNews === singleSection[1]) && (
                                    <p className="font-spectral tracking-tight text-gray-600">{abstract}</p>
                                )}

                                {(singleNews === singleSection[0] && singleSection[0].multimedia !== null && screenWidth < md) && (
                                    <ImgAndCopyright
                                        src={multimedia[0].url}
                                        alt={title}
                                        className="w-full"
                                        copyright={multimedia[0].copyright}
                                    />
                                )}
                            </a>

                            <div className="w-full flex justify-end">
                                <BookmarkButton singleNews={singleNews} />
                            </div>
                        </div>

                    )
                })}
            </div>
            {(singleSection[0] && singleSection[0].multimedia !== null && screenWidth > md) && (
                <div className="max-w-[60%] w-full h-fit py-4 pl-2">
                    <ImgAndCopyright
                        src={singleSection[0].multimedia[0].url}
                        alt={singleSection[0].title}
                        className="w-full"
                        copyright={singleSection[0].multimedia[0].copyright}
                    />
                </div>
            )}
        </section>

    )
}

export default MainNewsSection