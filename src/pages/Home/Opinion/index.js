import React from "react"
import { useCarousel } from "../../../hooks/useCarousel"
import FirstOpinionsSection from "./FirstOpinionsSection"
import SecondOpinionsSection from "./SecondOpinionsSection"
import ThirdOpinionsSection from "./ThirdOpinionsSection"
import FourthOpinionsSection from "./FourthOpinionsSection"
import Carousel from "./../../../components/ui/Carousel"

const Opinion = ({ opinions }) => {

    const { opinionTranslateValue } = useCarousel()
    const firstOpinionsSection = opinions.slice(0, 2)
    const secondOpinionsSection = opinions.slice(2, 4);
    const thirdOpinionsSection = opinions.slice(4, 5);
    const fourthOpinionsSection = opinions.slice(5, 8);
    const carouselOpinionsSection = opinions.slice(8, 14);

    return (
        <article className="border-b-2 border-black lg:border-b w-full pb-2 lg:pt-2">
            <h2 className="font-source-sans font-semibold">Opinion</h2>

            {/* FIRST BLOCK */}
            <div className="w-full flex flex-col md:flex-row-reverse md:border-b md:border-gray-400 lg:border-0 lg:flex-col">
                <div className="md:pl-2 md:max-w-[60%] lg:max-w-full lg:p-0">
                    {firstOpinionsSection.map(opinion => {
                        return (
                            <FirstOpinionsSection
                                key={crypto.randomUUID()}
                                opinionsArray={firstOpinionsSection}
                                opinion={opinion}
                            />
                        )
                    })}
                </div>
                <div className="w-full md:pr-2 md:mb-2 md:border-r md:border-gray-400 md:max-w-[40%] lg:max-w-full lg:border-0 lg:p-0 lg:m-0">
                    {secondOpinionsSection.map(opinion => {
                        return (
                            <SecondOpinionsSection
                                key={crypto.randomUUID()}
                                opinionsArray={secondOpinionsSection}
                                opinion={opinion}
                            />
                        )
                    })}
                </div>
            </div>

            {/* SECOND BLOCK */}
            <div className="w-full flex flex-col md:flex-row-reverse md:border-b md:border-gray-400 md:mt-2 lg:m-0 lg:border-0 lg:flex-col">
                <div className="md:pl-2 md:max-w-[60%] lg:max-w-full lg:p-0">
                    {thirdOpinionsSection.map(opinion => {
                        return (
                            <ThirdOpinionsSection
                                key={crypto.randomUUID()}
                                opinionsArray={thirdOpinionsSection}
                                opinion={opinion}
                            />
                        )
                    })}
                </div>
                <div className="w-full md:pr-2 md:mb-2 md:border-r md:border-gray-400 md:max-w-[40%] lg:max-w-full lg:border-0 lg:p-0 lg:m-0">
                    {fourthOpinionsSection.map(opinion => {
                        return (
                            <FourthOpinionsSection
                                key={crypto.randomUUID()}
                                opinionsArray={fourthOpinionsSection}
                                opinion={opinion}
                            />
                        )
                    })}
                </div>
            </div>

            {/* CAROUSEL */}
            <Carousel>
                {carouselOpinionsSection.map(opinion => {
                    const { title, byline, url } = opinion
                    return (
                        <a
                            key={crypto.randomUUID()}
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
        </article >
    )
}

export default Opinion