import { useList } from "../hooks/stateProvider";
import { NavBar } from "./navbar";
import { DateComp } from "./dateHandler";
import { Search } from "./search";
import { Location } from "./location";
import { CurrentWeather } from "./currentWeather";
import { ChanceOfRain } from "./COR";
import { TodayF } from "./todayForecast";
import { TomorrowF } from "./tomorrowForecast";

export const WeatherDetails = () => {
  const { weather } = useList();

  return (
    <div className="bg-[#395E66] text-white pb-8 ">
      <center>
        <NavBar />
        <Search />
        <DateComp />
        <Location />
        <CurrentWeather />
      </center>

      <ChanceOfRain
        val={weather.forecast.forecastday[0].day.daily_chance_of_rain}
      />
      <TodayF />
      <TomorrowF />
    </div>
  );
};
