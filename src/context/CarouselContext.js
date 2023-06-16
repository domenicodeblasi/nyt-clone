import React, { useState, useEffect, createContext } from "react"
import { useScreen } from "../hooks/useScreen"

export const CarouselContext = createContext()

export const CarouselContextProvider = ({ children }) => {

    const { screenWidth, sm, md, lg } = useScreen()
    const [opinionTranslateValue, setOpinionTranslateValue] = useState(0)
    const [wellTranslateValue, setWellTranslateValue] = useState(0)

    useEffect(() => {
        setOpinionTranslateValue(0)
        setWellTranslateValue(0)
    }, [screenWidth])

    const slideNext = () => {
        if (screenWidth < sm && (opinionTranslateValue > (-500) || wellTranslateValue > (-500))) {
            setOpinionTranslateValue(prevValue => prevValue - 100)
            setWellTranslateValue(prevValue => prevValue - 100)
        } else if (screenWidth >= sm && screenWidth < md && (opinionTranslateValue > (-400) || wellTranslateValue > (-400))) {
            setOpinionTranslateValue(prevValue => prevValue - 200)
            setWellTranslateValue(prevValue => prevValue - 200)
        } else if (screenWidth >= md && screenWidth < lg && (opinionTranslateValue > (-300) || wellTranslateValue > (-300))) {
            setOpinionTranslateValue(prevValue => prevValue - 300)
            setWellTranslateValue(prevValue => prevValue - 300)
        } else if (screenWidth >= lg && (opinionTranslateValue > (-400) || wellTranslateValue > (-400))) {
            setOpinionTranslateValue(prevValue => prevValue - 200)
            setWellTranslateValue(0)
        } else {
            if (screenWidth < sm) {
                setOpinionTranslateValue(-500)
                setWellTranslateValue(-500)
            } else if (screenWidth >= sm && screenWidth < md) {
                setOpinionTranslateValue(-400)
                setWellTranslateValue(-400)
            } else if (screenWidth >= md && screenWidth < lg) {
                setOpinionTranslateValue(-300)
                setWellTranslateValue(-300)
            } else if (screenWidth >= lg) {
                setOpinionTranslateValue(-400)
                setWellTranslateValue(0)
            }
        }
    }

    const slideBefore = () => {
        if (screenWidth < sm && (opinionTranslateValue < 0 || wellTranslateValue < 0)) {
            setOpinionTranslateValue(prevValue => prevValue + 100)
            setWellTranslateValue(prevValue => prevValue + 100)
        } else if (screenWidth >= sm && screenWidth < md && (opinionTranslateValue < 0 || wellTranslateValue < 0)) {
            setOpinionTranslateValue(prevValue => prevValue + 200)
            setWellTranslateValue(prevValue => prevValue + 200)
        } else if (screenWidth >= md && screenWidth < lg && (opinionTranslateValue < 0 || wellTranslateValue < 0)) {
            setOpinionTranslateValue(prevValue => prevValue + 300)
            setWellTranslateValue(prevValue => prevValue + 300)
        } else if (screenWidth >= lg && (opinionTranslateValue < 0 || wellTranslateValue < 0)) {
            setOpinionTranslateValue(prevValue => prevValue + 200)
            setOpinionTranslateValue(0)
        } else {
            setOpinionTranslateValue(0)
        }
    }

    return (
        <CarouselContext.Provider value={{ opinionTranslateValue, wellTranslateValue, slideNext, slideBefore }}>
            {children}
        </CarouselContext.Provider>
    )
}