import { useList } from "./stateProvider";
import { Card } from "./card";

//5
export const F5Forecast = () => {
    const { hour, weather, farenheight } = useList()

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b-2 text-2xl pb-2'>Today's forecast for the next 5 hours</h1>
        <section>

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 1].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 1].condition.text} 
                time={`${hour + 1}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 1].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_c}`}
                windSpeed={weather.forecast.forecastday[0].hour[hour + 1].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 1].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 2].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 2].condition.text} 
                time={`${hour + 2}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 2].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 2].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 2].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 3].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 3].condition.text} 
                time={`${hour + 3}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 3].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 3].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 3].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 3].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 3].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 3].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 3].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 4].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 4].condition.text} 
                time={`${hour + 4}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 4].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 4].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 4].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 4].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 4].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 4].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 4].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 5].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 5].condition.text} 
                time={`${hour + 5}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 5].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 5].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 5].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 5].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 5].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 5].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 5].humidity} 
            />

        
        </section>    
    </div>
}


//4
export const F4Forecast = () => {
    const { hour, weather, farenheight } = useList()

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b-2 text-2xl pb-2'>Today's forecast for the next 4 hours</h1>
        <section>

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 1].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 1].condition.text} 
                time={`${hour + 1}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 1].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 1].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 1].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 2].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 2].condition.text} 
                time={`${hour + 2}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 2].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 2].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 2].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 3].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 3].condition.text} 
                time={`${hour + 3}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 3].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 3].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 3].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 3].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 3].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 3].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 3].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 4].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 4].condition.text} 
                time={`${hour + 4}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 4].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 4].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 4].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 4].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 4].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 4].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 4].humidity} 
            />
        
        </section>    
    </div>
}

//3
export const F3Forecast = () => {
    const { hour, weather, farenheight } = useList()

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b-2 text-2xl pb-2'>Today's forecast for the next 3 hours</h1>
        <section>

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 1].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 1].condition.text} 
                time={`${hour + 1}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 1].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 1].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 1].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 2].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 2].condition.text} 
                time={`${hour + 2}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 2].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 2].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 2].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 3].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 3].condition.text} 
                time={`${hour + 3}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 3].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 3].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 3].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 3].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 3].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 3].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 3].humidity} 
            />

        </section>    
    </div>
}

//2
export const F2Forecast = () => {
    const { hour, weather, farenheight } = useList()

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b-2 text-2xl pb-2'>Today's forecast for the next 2 hours</h1>
        <section>

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 1].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 1].condition.text} 
                time={`${hour + 1}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 1].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 1].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 1].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 2].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 2].condition.text} 
                time={`${hour + 2}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 2].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 2].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 2].humidity} 
            />

        </section>    
    </div>
}

//1
export const F1Forecast = () => {
    const { hour, weather, farenheight } = useList()

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b-2 text-2xl pb-2'>Today's forecast for the next 1 hour</h1>
        <section>

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 1].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 1].condition.text} 
                time={`${hour + 1}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].temp_c}`}
                cor={weather.forecast.forecastday[0].hour[hour + 1].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 1].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 1].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 1].humidity} 
            />
        
        </section>    
    </div>
}

//other
export const Other = () => {
    const { hour, weather, farenheight } = useList()

    return <div className='w-[60%] mt-[5rem] mx-auto'>
        <h1 className='border-b-2 text-2xl pb-2'>TODAY'S FORECAST</h1>
        <section>

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 2].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 2].condition.text} 
                time={`${hour + 2}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 2].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 2].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 2].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 2].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 4].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 4].condition.text} 
                time={`${hour + 4}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 4].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 4].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 4].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 4].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 4].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 4].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 4].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 6].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 6].condition.text} 
                time={`${hour + 6}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 6].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 6].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 6].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 6].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 6].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 6].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 6].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 8].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 8].condition.text} 
                time={`${hour + 8}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 8].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 8].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 8].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 8].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 8].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 8].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 8].humidity} 
            />

            <Card 
                src={weather.forecast.forecastday[0].hour[hour + 10].condition.icon} 
                condition={weather.forecast.forecastday[0].hour[hour + 10].condition.text} 
                time={`${hour + 10}:00`} 
                deg={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 10].temp_f}` : `${weather.forecast.forecastday[0].hour[hour + 10].temp_c}`} 
                cor={weather.forecast.forecastday[0].hour[hour + 10].chance_of_rain} 
                realFeel={farenheight ? `${weather.forecast.forecastday[0].hour[hour + 10].feelslike_f}` : `${weather.forecast.forecastday[0].hour[hour + 10].feelslike_c}`} 
                windSpeed={weather.forecast.forecastday[0].hour[hour + 10].wind_kph} 
                humidity={weather.forecast.forecastday[0].hour[hour + 10].humidity} 
            />
        </section>    
    </div>
}