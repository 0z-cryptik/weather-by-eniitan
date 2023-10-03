import { useList } from "./stateProvider"
import axios from "axios"
import ToggleButton from 'react-toggle-button'

export const NavBar = () => {

    const { setWeather, activeCategory, setActiveCategory, setLoading, setSearchTerm, farenheight, setFarenheight } = useList()

    const searchWeather = (place) => {
        setActiveCategory(place)
        setLoading(true)
        setSearchTerm(place)

        const weatherReq = {
           method: 'GET',
           url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
           params: {
              q: place,
              days: '3'
           },
           headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
           }
        }
  
        let clickFetch = async() => {
           try {
              const response = await axios.request(weatherReq)
              console.log(response.data)
              setWeather(response.data)
              setLoading(false)
            } catch (error) {
              console.error(error);
              setLoading(false)
           }
        }
  
        clickFetch()
    }

    return <nav className="text-2xl flex flex-row justify-center relative py-6">
        <span onClick={() => searchWeather('tokyo')} className={`mr-[3rem] ${activeCategory == 'tokyo' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Tokyo
        </span>
        <span onClick={() => searchWeather('london')} className={`mr-[3rem] ${activeCategory == 'london' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            London
        </span>
        <span onClick={() => searchWeather('paris')} className={`mr-[3rem] ${activeCategory == 'paris' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Paris
        </span>
        <span onClick={() => searchWeather('sydney')} className={`mr-[3rem] ${activeCategory == 'sydney' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Sydney
        </span>
        <span onClick={() => searchWeather('istanbul')} className={`mr-[3rem] ${activeCategory == 'istanbul' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Istanbul
        </span>
        <span className="absolute right-[5%] top-7">
            <ToggleButton value = {farenheight} onToggle={() => setFarenheight(!farenheight)} activeLabel='ºC' inactiveLabel='ºF'       colors={{
                activeThumb: {
                    base: 'rgb(62,130,247)',
                },
                inactiveThumb: {
                    base: 'rgb(62,130,247)',
                },
                active: {
                    base: 'rgb(65,66,68)',
                    hover: 'rgb(65,66,68)',
                },
                inactive: {
                    base: 'rgb(65,66,68)',
                    hover: 'rgb(65,66,68)',
                }
            }} />
        </span>
    </nav>
}