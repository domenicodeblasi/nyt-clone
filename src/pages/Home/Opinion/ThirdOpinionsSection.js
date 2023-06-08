import React from "react"
import ImgAndCopyright from "./../../../components/ui/ImgAndCopyright"

const ThirdOpinionsSection = ({ singleOpinion }) => {
    const { title, byline, multimedia, url } = singleOpinion
    return (
        <a href={url} title={title} className="cursor-pointer">
            <section className="flex flex-col gap-3 py-4 border-b border-gray-400 md:flex-col-reverse md:border-0 lg:flex-col lg:border-b">
                <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-spectral text-gray-600">{byline.substring(3).toUpperCase()}</h4>
                    <h3 className="text-2xl font-instrument font-bold md:text-xl">{title}</h3>
                </div>
                <div className="flex w-full justify-center">
                    <ImgAndCopyright
                        src={multimedia[0].url}
                        alt={title}
                        copyright={multimedia[0].copyright}
                    />
                </div>
            </section>
        </a>
    )
}

export default ThirdOpinionsSection