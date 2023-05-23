import React, { useState, useEffect, useContext } from "react"

const BreakpointsContext = React.createContext()

export const useBreakpoints = () => {
    return useContext(BreakpointsContext)
}

export const ContextProvider = ({ children }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
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
        <BreakpointsContext.Provider value={{screenWidth, lg, xl}}>
            {children}
        </BreakpointsContext.Provider>
    )
}