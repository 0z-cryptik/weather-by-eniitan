import React, {useContext, createContext, useState} from "react";

const ListContext = createContext()
export const useList = () => useContext(ListContext)

export const StateProvider = ({children}) => {
    const [weather, setWeather] = useState(null)
    const [activeCategory, setActiveCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)

    return <ListContext.Provider value={{weather, setWeather, activeCategory, setActiveCategory, searchTerm, setSearchTerm, loading, setLoading}}>
        {children}
    </ListContext.Provider>
}