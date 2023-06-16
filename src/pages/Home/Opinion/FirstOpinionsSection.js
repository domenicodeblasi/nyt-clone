import React from "react"
import ImgAndCopyright from "./../../../components/ui/ImgAndCopyright"

const FirstOpinionsSection = ({ opinionsArray, singleOpinion }) => {
    const { title, byline, multimedia, url } = singleOpinion
    return (
        <a href={url} title={title} className="cursor-pointer">
        <section className={`flex gap-2 py-4 border-b border-gray-300 ${singleOpinion === opinionsArray[1] && "md:border-0 lg:border-b"}`}>
            <div className={`flex flex-col gap-1 ${singleOpinion === opinionsArray[1] && "basis-1/2"}`}>
                <h4 className="text-xs font-spectral text-gray-600">{byline.substring(3).toUpperCase()}</h4>
                <h3 className="text-2xl font-instrument font-bold md:text-xl">{title}</h3>
            </div>
            {(singleOpinion === opinionsArray[1]) && (
                <ImgAndCopyright
                    src={multimedia[1].url}
                    alt={title}
                    copyright={multimedia[1].copyright}
                    className="basis-1/2"
                />
            )}
        </section>
    </a>
    )
}

export default FirstOpinionsSection