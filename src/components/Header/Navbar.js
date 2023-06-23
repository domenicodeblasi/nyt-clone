import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useScreen } from "../../hooks/useScreen"
import { Bars3Icon as HamburgerBtn, BookmarkIcon } from "@heroicons/react/24/solid"
import NYTLogo from "./../../assets/imgs/ny-times-logo.svg"
import NavList from "./NavList"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = ({ currentDate }) => {

    const { screenWidth, lg } = useScreen()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleHamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="w-full max-w-screen-xl px-4 pt-2 pb-1 font-source-sans">
                <div className="relative flex justify-between h-8 items-center lg:h-24 lg:justify-center lg:items-end lg:border-b lg:pb-1 lg:border-gray-200">
                    <div className="flex justify-center w-6 h-6 rounded transition-colors duration-500 hover:bg-gray-200 lg:absolute lg:top-0 lg:left-0">
                        <HamburgerBtn
                            className="w-5 cursor-pointer"
                            onClick={toggleHamburgerMenu}
                        />
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

            {isMenuOpen && (
                <HamburgerMenu isMenuOpen={isMenuOpen} toggleHamburgerMenu={toggleHamburgerMenu} />
            )}
        </>

    )
}

export default Navbar