import React from "react"
import { useBreakpoints } from "../Context"
import Navbar from "./Navbar"
import DateSection from "./DateSection"


const Header = () => {

    const { screenWidth, lg } = useBreakpoints()

    const getCurrentDate = () => {
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const date = new Date()
        const weekDay = weekDays[date.getDay()]
        const month = months[date.getMonth()]
        const day = date.getDate()
        const year = date.getFullYear()
        const currentDate = `${weekDay}, ${month} ${day}, ${year}`
        return currentDate
    }

    return (
        <header className="flex flex-col items-center w-screen">
            <Navbar currentDate={getCurrentDate()} />
            {screenWidth < lg && <DateSection currentDate={getCurrentDate()} />}
        </header>
    )
}

export default Header