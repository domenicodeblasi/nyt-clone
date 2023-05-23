import React, { useRef, useEffect } from "react"

const SearchBar = ({ isSearchBarShown }) => {

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if (isSearchBarShown) {
            inputRef.current.focus()
        } else return
    }, [isSearchBarShown])

    return (
        <form className="flex gap-1" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="SEARCH"
                className="border-2 border-gray-300 rounded w-[250px] px-2 py-[2px] text-sm focus:outline-none focus:border-black"
            />
            <button
                type="submit"
                className="px-2 uppercase bg-blue-300 rounded text-xs transition-colors duration-500 text-white border border-blue-400 hover:bg-blue-400"
            >go</button>
        </form>
    )
}

export default SearchBar