import React from "react"
import { useCarousel } from "../../hooks/useCarousel"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const Carousel = ({ children }) => {

    const { slideNext, slideBefore } = useCarousel()

    return (
        <>
            <div className="flex overflow-hidden">
                {children}
            </div>
            <div className="flex justify-center gap-8 pt-2">
                <ChevronLeftIcon
                    className="w-6 border border-black p-1 rounded-[50%] cursor-pointer select-none transition-colors duration-300 hover:bg-gray-300"
                    onClick={slideBefore}
                />
                <ChevronRightIcon
                    className="w-6 text border border-black p-1 rounded-[50%] cursor-pointer select-none transition-colors duration-300 hover:bg-gray-300"
                    onClick={slideNext}
                />
            </div>
        </>

    )
}

export default Carousel