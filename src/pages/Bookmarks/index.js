import React from "react"
import { useData } from "../../hooks/useData"
import Bookmark from "./Bookmark"

const Bookmarks = () => {

    const { data } = useData()

    return (
        <section className="w-full max-w-screen-xl px-4 py-2 font-source-sans">
            {(data.bookmarks !== []) ? (
                <div className="flex flex-wrap justify-between relative">
                    {data.bookmarks.map(bookmarkObj => (
                        <Bookmark key={bookmarkObj.id} bookmarkObj={bookmarkObj} />
                    ))}
                </div>
            ) : (
                <div className="pt-2 flex flex-col gap-2 items-center">
                    <h1 className="font-spectral text-xl font-semibold">There are no bookmarks!</h1>
                    <p className="font-spectral font-light">Try to add some news by clicking the bookmark icon in the homepage</p>
                </div>
            )}
        </section>

    )
}

export default Bookmarks