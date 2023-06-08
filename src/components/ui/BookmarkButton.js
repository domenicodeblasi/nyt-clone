import React from "react"
import { useData } from "../../hooks/useData"
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid"

const BookmarkButton = ({ singleNews }) => {

    const { bookmark, category, id } = singleNews
    const { toggleBookmark } = useData()

    const handleClick = () => {
        toggleBookmark(category, id)
    }

    return (
        <button onClick={handleClick}>
            {bookmark ? (
                <BookmarkSolid
                    className="w-6"
                />
            ) : (
                <BookmarkOutline
                    className="w-6"
                />
            )}
        </button>
    )
}

export default BookmarkButton