import React from "react"

const NavList = () => {
    return (
        <div className=" relative py-[10px] w-full text-xs border-b border-black after:w-full after:h-[1px] after:bg-black after:absolute after:-bottom-1">
            <ul className="flex justify-around">
                <li>World</li>
                <li>U.S.</li>
                <li>Politics</li>
                <li>N.Y.</li>
                <li>Business</li>
                <li>Opinion</li>
                <li>Science</li>
                <li>Health</li>
                <li>Sports</li>
                <li>Arts</li>
                <li>Books</li>
                <li>Style</li>
                <li>Food</li>
                <li>Travel</li>
                <li>Magazine</li>
                <li>Real Estate</li>
                <li>Cooking</li>
                <li>The Athletic</li>
                <li>Wirecutter</li>
                <li>Games</li>
            </ul>
        </div>
    )
}

export default NavList