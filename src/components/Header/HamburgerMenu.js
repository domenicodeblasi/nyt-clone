import React, { useState } from "react"
import { useScreen } from "../../hooks/useScreen"
import data from "../../data/dataSections.json"
import { XMarkIcon as CloseBtn } from "@heroicons/react/24/solid"
import { ChevronRightIcon as SubMenuIcon } from "@heroicons/react/24/solid"

const HamburgerMenu = ({ toggleHamburgerMenu }) => {
    const { screenWidth, lg } = useScreen()
    const [subMenuIsShown, setSubMenuIsShown] = useState(false)
    const [subMenu, setSubMenu] = useState({})

    const handleMouseEnterMenu = (e, item) => {
        console.log(e.target.tagName, "enter")
        if (item.subcategories.length > 0) {
            setSubMenuIsShown(true)
            setSubMenu(item)
        } else if (e.target.tagName === "DIV" || e.target.tagName === "UL") {
            setSubMenuIsShown(true)
        } else setSubMenuIsShown(false)
    }

    const handleMouseLeaveSubmenu = (e) => {
        console.log(e.target.tagName, "leave")
        if (e.target.tagName === "DIV" || e.target.tagName === "UL") {
            setSubMenuIsShown(false)
        } else setSubMenuIsShown(true)
    }

    return (
        <>
            <div
                className={`fixed overflow-y-auto top-0 left-0 bottom-0 right-0 h-[100dvh] border-black bg-white z-10 ${screenWidth < lg ? "w-screen border-b-2" : "w-[20vw] border-r-2 shadow-[10px_0_15px_rgba(0,0,0,0.2)]"}`}
                style={{
                    scrollbarWidth: "none"
                }}
            >
                <CloseBtn
                    className="w-6 cursor-pointer mt-4 ml-4"
                    onClick={toggleHamburgerMenu}
                />
                <div className="h-fit pt-4 pl-8 pb-8 flex flex-col gap-4">
                    <ul>
                        {data.map(item => {
                            const { id, title, url, subcategories } = item
                            return (
                                <li
                                    key={id}
                                    className=" py-[6px] transition-colors hover:bg-gray-100"
                                    onMouseEnter={(e) => handleMouseEnterMenu(e, item)}
                                // onMouseLeave={(e) => handleMouseLeaveMenu(e)}
                                >
                                    <a href={url} className="flex justify-between">
                                        <h2 className="font-source-sans font-semibold">{title}</h2>
                                        {(screenWidth >= lg && subcategories.length > 0) && (
                                            <SubMenuIcon className="w-2 mr-5 text-gray-600" />
                                        )}

                                    </a>
                                    {(subMenuIsShown && screenWidth >= lg) && (
                                        <div
                                            className="fixed top-0 w-[20vw] h-[100dvh] bg-gray-100 left-[20vw] z-10 border-r-2 border-black"
                                            onMouseLeave={(e) => handleMouseLeaveSubmenu(e)}
                                        >
                                            <ul className="p-6">
                                                {subMenu.subcategories.map(category => {
                                                    const { id, title, url } = category
                                                    return (
                                                        <li
                                                            key={id}
                                                            className="py-[6px] transition-colors hover:bg-gray-100"
                                                        >
                                                            <a href={url}>
                                                                <h2 className="font-source-sans font-semibold">{title}</h2>
                                                            </a>

                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </>

    )
}

export default HamburgerMenu