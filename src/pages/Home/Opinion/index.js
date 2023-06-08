import React from "react"
import { useData } from "../../../hooks/useData"
import { useCarousel } from "../../../hooks/useCarousel"
import FirstOpinionsSection from "./FirstOpinionsSection"
import SecondOpinionsSection from "./SecondOpinionsSection"
import ThirdOpinionsSection from "./ThirdOpinionsSection"
import FourthOpinionsSection from "./FourthOpinionsSection"
import Carousel from "./../../../components/ui/Carousel"

const Opinion = () => {

    const { data } = useData()
    const { opinion } = data.success
    const { opinionTranslateValue } = useCarousel()
    const firstOpinionsSection = opinion.slice(0, 2)
    const secondOpinionsSection = opinion.slice(2, 4);
    const thirdOpinionsSection = opinion.slice(4, 5);
    const fourthOpinionsSection = opinion.slice(5, 8);
    const carouselOpinionsSection = opinion.slice(8, 14);

    return (
        <article className="border-b-2 border-black lg:border-b w-full py-2">
            <h2 className="font-source-sans font-semibold">Opinion</h2>

            {/* FIRST BLOCK */}
            <div className="w-full flex flex-col md:flex-row-reverse md:border-b md:border-gray-400 lg:border-0 lg:flex-col">
                <div className="md:pl-2 md:max-w-[60%] lg:max-w-full lg:p-0">
                    {firstOpinionsSection.map(singleOpinion => {
                        const { id } = singleOpinion
                        return (
                            <FirstOpinionsSection
                                key={id}
                                opinionsArray={firstOpinionsSection}
                                singleOpinion={singleOpinion}
                            />
                        )
                    })}
                </div>
                <div className="w-full md:pr-2 md:mb-2 md:border-r md:border-gray-400 md:max-w-[40%] lg:max-w-full lg:border-0 lg:p-0 lg:m-0">
                    {secondOpinionsSection.map(singleOpinion => {
                        const { id } = singleOpinion
                        return (
                            <SecondOpinionsSection
                                key={id}
                                opinionsArray={secondOpinionsSection}
                                singleOpinion={singleOpinion}
                            />
                        )
                    })}
                </div>
            </div>

            {/* SECOND BLOCK */}
            <div className="w-full flex flex-col md:flex-row-reverse md:border-b md:border-gray-400 md:mt-2 lg:m-0 lg:border-0 lg:flex-col">
                <div className="md:pl-2 md:w-[60%] md:max-w-[60%] lg:w-full lg:max-w-full lg:p-0">
                    {thirdOpinionsSection.map(singleOpinion => {
                        const { id } = singleOpinion
                        return (
                            <ThirdOpinionsSection
                                key={id}
                                // opinionsArray={thirdOpinionsSection}
                                singleOpinion={singleOpinion}
                            />
                        )
                    })}
                </div>
                <div className="w-full md:pr-2 md:mb-2 md:border-r md:border-gray-400 md:max-w-[40%] lg:max-w-full lg:border-0 lg:p-0 lg:m-0">
                    {fourthOpinionsSection.map(singleOpinion => {
                        const { id } = singleOpinion
                        return (
                            <FourthOpinionsSection
                                key={id}
                                opinionsArray={fourthOpinionsSection}
                                singleOpinion={singleOpinion}
                            />
                        )
                    })}
                </div>
            </div>

            {/* CAROUSEL */}
            <Carousel>
                {carouselOpinionsSection.map(singleOpinion => {
                    const { title, byline, url, id } = singleOpinion
                    return (
                        <a
                            key={id}
                            href={url}
                            title={title}
                            className="relative flex flex-col gap-1 basis-full grow-0 shrink-0 py-4 pr-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/2 after:w-[1px] after:h-[80%] after:bg-gray-400 after:absolute after:top-[10%] after:right-[6px] last:after:hidden"
                            style={{
                                transform: `translateX(${opinionTranslateValue}%)`,
                            }}
                        >
                            <section className="transition-transform">
                                <h4 className="text-xs font-spectral text-gray-600">{byline.substring(3).toUpperCase()}</h4>
                                <h3 className="text-xl font-instrument font-bold md:text-lg">{title}</h3>
                            </section>
                        </a>

                    )
                })}
            </Carousel>
        </article>
    )
}

export default Opinion