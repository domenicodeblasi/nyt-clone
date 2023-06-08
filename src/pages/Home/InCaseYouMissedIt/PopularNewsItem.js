import React from "react"

const PopularNewsItem = ({ news }) => {
    const { title, media, url } = news

    return (
        <a className="cursor-pointer w-full" href={url} title={title}>
            <section className="relative flex justify-between items-start h-fit w-full py-4 border-b border-gray-400  md:border-0 lg:max-w-full lg:border-b lg:border-gray-400">
                <h3 className={`font-spectral font-bold ${media[0] ? "max-w-[70%]" : "max-w-full"}`}>{title}</h3>
                {media[0] && (
                    <img
                        src={media[0]["media-metadata"][1].url}
                        alt={title}
                        className="max-w-[25%]"
                    />
                )}
            </section>
        </a>
    )
}

export default PopularNewsItem