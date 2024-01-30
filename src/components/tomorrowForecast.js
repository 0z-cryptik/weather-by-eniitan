import { useList } from "./stateProvider";
import { Card } from "./card";

export const TomorrowF = () => {
  const { weather, fahrenheit } = useList();

  return (
    <div className="lg:w-[60%] md:w-[80%] w-[90%] mt-[3.5rem] mx-auto">
      <h1 className="border-b-2 md:text-2xl pb-2">
        Forecasts for tomorrow
      </h1>
      <section>
        {Array.from({ length: 5 }, (item, i) => (
          <Card
            key={i}
            src={
              weather.forecast.forecastday[1].hour[10 + i * 2].condition
                .icon
            }
            condition={
              weather.forecast.forecastday[1].hour[10 + i * 2].condition
                .text
            }
            time={`${10 + i * 2}:00`}
            deg={
              fahrenheit
                ? `${
                    weather.forecast.forecastday[1].hour[10 + i * 2].temp_f
                  }`
                : `${
                    weather.forecast.forecastday[1].hour[10 + i * 2].temp_c
                  }`
            }
            realFeel={
              fahrenheit
                ? `${
                    weather.forecast.forecastday[1].hour[10 + i * 2]
                      .feelslike_f
                  }`
                : `${
                    weather.forecast.forecastday[1].hour[10 + i * 2]
                      .feelslike_c
                  }`
            }
            cor={
              weather.forecast.forecastday[1].hour[10 + i * 2]
                .chance_of_rain
            }
            windSpeed={
              weather.forecast.forecastday[1].hour[10 + i * 2].wind_kph
            }
            humidity={
              weather.forecast.forecastday[1].hour[10 + i * 2].humidity
            }
          />
        ))}
      </section>
    </div>
  );
};
