import React from "react"
import { useScreen } from "../../hooks/useScreen"
import { getCurrentDate } from "../../utils/currentDate"
import Navbar from "./Navbar"
import DateSection from "./DateSection"


const Header = () => {
    const { screenWidth, lg } = useScreen()
    return (
        <header className="flex flex-col items-center w-screen">
            <Navbar currentDate={getCurrentDate()} />
            {screenWidth < lg && <DateSection currentDate={getCurrentDate()} />}
        </header>
    )
}

export default Header