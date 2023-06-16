import React from "react"
import { Link } from "react-router-dom"
import NYTLogo from "./../../assets/imgs/ny-times-logo.svg"

const Footer = () => {

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="relative bottom-0 -left-4 py-2 px-4 w-screen bg-gray-100 flex flex-col items-center lg:left-0 lg:w-full lg:px-0">
            <img
                src={NYTLogo}
                alt="New York Times"
                className="w-[200px] py-2"
            />
            <div className="w-full flex flex-col border-y border-gray-300 font-spectral uppercase text-sm font-bold">

                <button
                    className="uppercase text-start py-2 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-500"
                    onClick={handleClick}>return to the top
                </button>

                <Link
                    className="py-2 hover:bg-gray-200 transition-colors duration-500"
                    to="/bookmarks"
                >
                    bookmarks
                </Link>

            </div>
            <h4 className="font-spectral pt-2 text-xs text-gray-600">© 2023 Domenico De Blasi</h4>
        </footer>
    )
}

export default Footer