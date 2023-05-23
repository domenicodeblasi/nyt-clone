import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useBreakpoints } from "../Context"
import { Bars3Icon as Hamburger, BookmarkIcon, MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/solid"
import SearchBar from "./ui/SearchBar"
import NYTLogo from "./../assets/imgs/ny-times-logo.svg"
import NavList from "./NavList"

const Navbar = ({ currentDate }) => {

    const { screenWidth, lg } = useBreakpoints()
    const [isSearchBarShown, setIsSearchBarShown] = useState(false)

    return (
        <nav className="w-full max-w-screen-xl px-4 pt-2 pb-1 font-source-sans">
            <div className="relative flex justify-between h-8 items-center lg:h-24 lg:justify-center lg:items-end lg:border-b lg:pb-1 lg:border-gray-200">
                <div className="flex gap-2 h-6 items-center lg:absolute lg:top-0 lg:left-0">
                    <div className="flex justify-center h-full w-6 rounded transition-colors duration-500 hover:bg-gray-200">
                        <Hamburger className="w-5 cursor-pointer" />
                    </div>
                    {screenWidth >= lg && (
                        <>
                            <div className={`flex justify-center h-full w-6 rounded transition-colors duration-500 hover:bg-gray-200 ${isSearchBarShown && "bg-gray-200"}`}>
                                <SearchIcon
                                    className="w-5 cursor-pointer"
                                    onClick={() => {
                                        setIsSearchBarShown(!isSearchBarShown)
                                    }}
                                />
                            </div>
                            {isSearchBarShown && <SearchBar isSearchBarShown={isSearchBarShown} />}
                        </>
                    )}
                </div>
                {screenWidth >= lg && (
                    <div className="text-xs absolute left-0 bottom-5">
                        <p className="font-bold">{currentDate}</p>
                        <p>Today's Paper</p>
                    </div>
                )}
                <Link to="/">
                    <img
                        src={NYTLogo}
                        alt="The New York Times"
                        className="h-6 cursor-pointer lg:h-14"
                    />
                </Link>
                <Link to="/bookmarks">
                    <div className="flex relative justify-center items-center h-6 w-6 rounded transition-all duration-200 cursor-pointer hover:bg-gray-200 lg:hover:w-[110px] lg:justify-end lg:absolute lg:top-0 lg:right-0 lg:before:absolute lg:before:right-[22px] lg:before:items-center lg:before:text-xs lg:before:invisible lg:before:transition-all lg:before:delay-200 lg:hover:before:visible lg:hover:before:content-['Your_Bookmarks_']">
                        <BookmarkIcon className="absolute w-5 transition-all duration-500" />
                    </div>
                </Link>
            </div>
            {screenWidth >= lg && (
                <NavList />
            )}
        </nav>
    )
}

export default Navbar