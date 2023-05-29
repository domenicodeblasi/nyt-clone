import { useContext } from "react"
import { CarouselContext } from "../context/CarouselContext.js"

export const useCarousel = () => {
    return useContext(CarouselContext)
}