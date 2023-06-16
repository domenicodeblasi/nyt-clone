import React from "react"
import { useData } from "../../hooks/useData"
import { useCarousel } from "../../hooks/useCarousel"
import Carousel from "../../components/ui/Carousel"
import ImgAndCarousel from "../../components/ui/ImgAndCopyright"
import BookmarkButton from "../../components/ui/BookmarkButton"

const Well = () => {

    const { data } = useData()
    const { well } = data.success
    const { wellTranslateValue } = useCarousel()

    return (
        <article className="py-2 border-b-2 border-black lg:border-b">
            <h1 className="font-source-sans font-semibold">Well</h1>

            <Carousel>
                {well.map(singleNewsObj => {
                    const { title, multimedia, url, id } = singleNewsObj
                    return (
                        <div
                            key={id}
                            className="relative flex flex-col basis-full grow-0 shrink-0 p-4 border-r border-gray-300 last:border-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                            style={{
                                transform: `translateX(${wellTranslateValue}%)`,
                            }}
                        >
                            <a href={url} title={title}>
                                <section className="flex flex-col gap-2 transition-transform">
                                    <ImgAndCarousel
                                        src={multimedia[1].url}
                                        alt={title}
                                        className=""
                                        copyright={multimedia[1].copyright}
                                    />
                                    <h1 className="font-spectral font-bold text-sm pb-2">{title}</h1>

                                </section>
                            </a>
                            <div className="absolute bottom-0 right-4 w-full flex justify-end">
                                <BookmarkButton singleNews={singleNewsObj} />
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </article>
    )
}

export default Well