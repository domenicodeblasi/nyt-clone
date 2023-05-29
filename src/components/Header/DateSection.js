import React from "react"

const DateSection = ({ currentDate }) => {
    return (
        <div className="flex items-center md:justify-center w-screen h-9 bg-gray-100 border-y-2 border-gray-200 px-4">
            <p className="font-source-sans text-xs font-bold">{currentDate}</p>
        </div>
    )
}

export default DateSection