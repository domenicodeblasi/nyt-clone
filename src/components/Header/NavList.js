import React from "react"
import data from "./../../data/dataSections.json"

const NavList = () => {
    return (
        <div className="relative py-[10px] w-full text-xs border-b border-black after:w-full after:h-[1px] after:bg-black after:absolute after:-bottom-1">
            <ul className="flex justify-around px-10">
                {data.map(item => {
                    const { id, title, url } = item
                    return (
                        <li key={id}>
                            <a href={url} title={title}>
                                {title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavList