import { useList } from "./stateProvider"
import axios from "axios"
import ToggleButton from 'react-toggle-button'

export const NavBar = () => {

    const { setWeather, activeCategory, setActiveCategory, setLoading, setSearchTerm, fahrenheit, setFahrenheit, setError } = useList()

    const searchWeather = (place) => {
        setActiveCategory(place)
        setError('')
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

    return <nav className="lg:text-2xl text-sm flex flex-row lg:justify-center relative py-6">
        <span onClick={() => searchWeather('tokyo')} className={`lg:mr-[3rem] mx-[1rem] ${activeCategory == 'tokyo' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Tokyo
        </span>
        <span onClick={() => searchWeather('london')} className={`lg:mr-[3rem] mr-[1rem] hidden lg:flex ${activeCategory == 'london' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            London
        </span>
        <span onClick={() => searchWeather('paris')} className={`lg:mr-[3rem] mr-[1rem] ${activeCategory == 'paris' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Paris
        </span>
        <span onClick={() => searchWeather('sydney')} className={`lg:mr-[3rem] mr-[1rem] ${activeCategory == 'sydney' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Sydney
        </span>
        <span onClick={() => searchWeather('istanbul')} className={`lg:mr-[3rem] ${activeCategory == 'istanbul' ? 'text-[#004346]' : 'hover:text-[#004346]'} cursor-pointer`}>
            Istanbul
        </span>
        <span className="absolute right-8 top-6 lg:right-[5%] lg:top-7">
            <ToggleButton value = {fahrenheit} onToggle={() => setFahrenheit(!fahrenheit)} activeLabel='ºC' inactiveLabel='ºF'       colors={{
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