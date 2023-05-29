import React, { useState, useEffect, createContext } from "react"
import { useScreen } from "../hooks/useScreen"

export const CarouselContext = createContext()

export const CarouselContextProvider = ({ children }) => {

    const { screenWidth, sm, md, lg } = useScreen()
    const [opinionTranslateValue, setOpinionTranslateValue] = useState(0)

    useEffect(() => {
        setOpinionTranslateValue(0)
    }, [screenWidth])

    const slideNext = () => {
        if (screenWidth < sm && opinionTranslateValue > (-500)) {
            setOpinionTranslateValue(prevValue => prevValue - 100)
        } else if (screenWidth >= sm && screenWidth < md && opinionTranslateValue > (-400)) {
            setOpinionTranslateValue(prevValue => prevValue - 200)
        } else if (screenWidth >= md && screenWidth < lg && opinionTranslateValue > (-300)) {
            setOpinionTranslateValue(prevValue => prevValue - 300)
        } else if (screenWidth >= lg && opinionTranslateValue > (-400)) {
            setOpinionTranslateValue(prevValue => prevValue - 200)
        } else {
            if (screenWidth < sm) {
                setOpinionTranslateValue(-500)
            } else if (screenWidth >= sm && screenWidth < md) {
                setOpinionTranslateValue(-400)
            } else if (screenWidth >= md && screenWidth < lg) {
                setOpinionTranslateValue(-300)
            } else if (screenWidth >= lg) {
                setOpinionTranslateValue(-400)
            }
        }
    }

    const slideBefore = () => {
        if (screenWidth < sm && opinionTranslateValue < 0) {
            setOpinionTranslateValue(prevValue => prevValue + 100)
        } else if (screenWidth >= sm && screenWidth < md && opinionTranslateValue < 0) {
            setOpinionTranslateValue(prevValue => prevValue + 200)
        } else if (screenWidth >= md && screenWidth < lg && opinionTranslateValue < 0) {
            setOpinionTranslateValue(prevValue => prevValue + 300)
        } else if (screenWidth >= lg && opinionTranslateValue < 0) {
            setOpinionTranslateValue(prevValue => prevValue + 200)
        } else {
            setOpinionTranslateValue(0)
        }
    }

    return (
        <CarouselContext.Provider value={{ opinionTranslateValue, slideNext, slideBefore }}>
            {children}
        </CarouselContext.Provider>
    )
}