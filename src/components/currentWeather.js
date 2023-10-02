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

            <div className='flex flex-row border py-5 bg-[#007EA7] rounded-xl text-xl w-[60%] mt-8'>
               <section className="flex-grow border-r">
                  <p className="font-bold">{weather.current.feelslike_c}ºc</p>
                  <span>
                     <IoThermometer className='inline' />
                     Real feel
                  </span>
               </section>
               <section className="flex-grow border-r">
                  <p className="font-bold">{weather.current.humidity}%</p>
                  <span>
                     <IoWaterSharp className='inline' />
                     Humidity
                  </span>
               </section>
               <section className="flex-grow">
                  <p className="font-bold">{weather.current.wind_kph}km/h</p>
                  <span>
                     <GiWhirlwind className='inline mr-1' /> 
                     wind
                  </span>
               </section>
            </div>
        </div>
    </div>
}