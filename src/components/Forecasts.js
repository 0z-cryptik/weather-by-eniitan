import React from "react";
import { useList } from "./stateProvider";
import { Card } from "./card";

const Forecast = ({ title, hours }) => {
  const { hour, weather, fahrenheit } = useList();

  return (
    <div className="lg:w-[60%] md:w-[80%] w-[90%] mt-[2.5rem] md:mt-[5rem] mx-auto">
      <h1 className="border-b-2 md:text-2xl pb-2">{title}</h1>
      <section>
        {Array.from({ length: hours }, (item, i) => (
          <Card
            key={i}
            src={
              weather.forecast.forecastday[0].hour[hour + i + 1]
                .condition.icon
            }
            condition={
              weather.forecast.forecastday[0].hour[hour + i + 1]
                .condition.text
            }
            time={`${hour + i + 1}:00`}
            deg={
              fahrenheit
                ? `${
                    weather.forecast.forecastday[0].hour[hour + i + 1]
                      .temp_f
                  }`
                : `${
                    weather.forecast.forecastday[0].hour[hour + i + 1]
                      .temp_c
                  }`
            }
            cor={
              weather.forecast.forecastday[0].hour[hour + i + 1]
                .chance_of_rain
            }
            realFeel={
              fahrenheit
                ? `${
                    weather.forecast.forecastday[0].hour[hour + i + 1]
                      .feelslike_f
                  }`
                : `${
                    weather.forecast.forecastday[0].hour[hour + i + 1]
                      .feelslike_c
                  }`
            }
            windSpeed={
              weather.forecast.forecastday[0].hour[hour + i + 1]
                .wind_kph
            }
            humidity={
              weather.forecast.forecastday[0].hour[hour + i + 1]
                .humidity
            }
          />
        ))}
      </section>
    </div>
  );
};

export const F5Forecast = () => (
  <Forecast
    title="Forecasts for the next 5 hours"
    hours={5}
  />
);
export const F4Forecast = () => (
  <Forecast
    title="Forecasts for the next 4 hours"
    hours={4}
  />
);
export const F3Forecast = () => (
  <Forecast
    title="Forecasts for the next 3 hours"
    hours={3}
  />
);
export const F2Forecast = () => (
  <Forecast
    title="Forecasts for the next 2 hours"
    hours={2}
  />
);
export const F1Forecast = () => (
  <Forecast
    title="Forecast for the next 1 hour"
    hours={1}
  />
);
export const Other = () => (
  <Forecast
    title="Forecasts for the coming hours"
    hours={5}
  />
);
