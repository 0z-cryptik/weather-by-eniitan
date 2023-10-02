import { useList } from "./stateProvider";
import { IoThermometer, IoWaterSharp } from "react-icons/io5";
import { GiWhirlwind } from "react-icons/gi";

export const CurrentWeather = () => {

    const { weather } = useList()
    
    return <div>
        <img className='mt-6' src={weather.current.condition.icon} alt={weather.current.condition.text} />
        <p className='text-2xl'>{weather.current.condition.text}</p>
         
        <div className='mt-6'>
            <p className='text-5xl mt-6'>
               {weather.current.temp_c}ºc
            </p>

            <section className='flex flex-row text-xl w-[60%] mt-8'>
               <p className="flex-grow">
                  <IoThermometer className='inline' />
                  Real feel: {weather.current.feelslike_c}ºc
               </p>
               <p className="flex-grow">
                  <IoWaterSharp className='inline' />
                  Humidity: {weather.current.humidity}%
               </p>
               <p className="flex-grow">
                  <GiWhirlwind className='inline mr-1' /> 
                  wind: {weather.current.wind_kph}km/h
               </p>
            </section>
        </div>
    </div>
}