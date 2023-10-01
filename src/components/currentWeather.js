import { useList } from "./stateProvider";
import { IoThermometer, IoWaterSharp } from "react-icons/io5";
import { GiWhirlwind } from "react-icons/gi";

export const CurrentWeather = () => {

    const { weather } = useList()
    
    return <div>
        <img className='mt-6' src={weather.current.condition.icon} alt={weather.current.condition.text} />
        <p className='text-2xl'>{weather.current.condition.text}</p>
         
        <div className='flex flex-row w-[55%] mt-6'>
            <p className='text-5xl w-[80%] mt-6'>
               {weather.current.temp_c}ºc
            </p>

            <section className='text-left'>
               <p>
                  <IoThermometer className='inline' />
                  Real feel: {weather.current.feelslike_c}ºc
               </p>
               <p className="">
                  <IoWaterSharp className='inline' />
                  Humidity: {weather.current.humidity}%
               </p>
               <p>
                  <GiWhirlwind className='inline' /> 
                  wind: {weather.current.wind_kph}km/h
               </p>
            </section>
        </div>
    </div>
}