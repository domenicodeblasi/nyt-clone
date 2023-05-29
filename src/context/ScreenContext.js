import React, { useState, useEffect, createContext } from "react"

export const ScreenContext = createContext()

export const ScreenContextProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const sm = 640
    const md = 768
    const lg = 1024
    const xl = 1280

    const handleResize = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return (
        <ScreenContext.Provider value={{screenWidth, sm, md, lg, xl}}>
            {children}
        </ScreenContext.Provider>
    )
}