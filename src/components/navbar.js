import { useList } from "./stateProvider"
import axios from "axios"

export const NavBar = () => {

    const { setWeather, activeCategory, setActiveCategory, setLoading, setSearchTerm } = useList()

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

    return <nav className="text-2xl py-6">
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
        <span onClick={() => searchWeather('istanbul')} className={`${activeCategory == 'istanbul' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Istanbul
        </span>
    </nav>
}