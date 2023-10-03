import { useList } from "./stateProvider"
import React, { useEffect } from "react"


export const DateComp = () => {
    
    const { weather, setHour } = useList()

    useEffect(() => {hourHandler(weather.location.localtime)}, [])

    const hourHandler = (date) => {
        const dateObj = new Date(date)
        const hour = dateObj.getHours()
        setHour(hour)
    }

    const dateHandler = (date) => {
        const dateObj = new Date(date)
        const year = dateObj.getFullYear()
        const day = dateObj.getDate()
        const dayOfWeek =  dateObj.getDay()
        const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const month = dateObj.getMonth()
        const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const hour = dateObj.getHours()
        const minute = dateObj.getMinutes()
    
        return `${daysArr[dayOfWeek]}, ${day} ${monthArr[month]} ${year} | Local time: ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`
    }

    return <p className='my-5'>
        {dateHandler(weather.location.localtime)}
    </p>
}

