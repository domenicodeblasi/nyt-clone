import { useContext } from "react"
import { ScreenContext } from "./../context/ScreenContext"

export const useScreen = () => {
    return useContext(ScreenContext)
}