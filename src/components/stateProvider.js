import React, {useContext, createContext, useState} from "react";

const ListContext = createContext()
export const useList = () => useContext(ListContext)

export const StateProvider = ({children}) => {
    const [weather, setWeather] = useState(null)
    const [activeCategory, setActiveCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [hour, setHour] = useState(0)
    const [farenheight, setFarenheight] = useState(false)

    return <ListContext.Provider value={{weather, setWeather, activeCategory, setActiveCategory, searchTerm, setSearchTerm, loading, setLoading, hour, setHour, farenheight, setFarenheight}}>
        {children}
    </ListContext.Provider>
}