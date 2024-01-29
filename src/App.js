import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { DateComp } from "./components/dateHandler";
import { NavBar } from "./components/navbar";
import { Search } from "./components/search";
import { useList } from "./components/stateProvider";
import { TodayF } from "./components/todayF";
import { TomorrowF } from "./components/tomorrowF";
import { ChanceOfRain } from "./components/COR";
import { Loader } from "./components/loader";
import { Location } from "./components/location";
import { CurrentWeather } from "./components/currentWeather";
import { NoNetwork, NotFound, OtherError } from "./components/errorComps";
import { reqFunc } from "./components/requestHandler";

const App = () => {
  const {
    weather,
    setWeather,
    setActiveCategory,
    loading,
    setLoading,
    searchTerm,
    error,
    setError
  } = useList();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  const success = (position) => {
    setLoading(true);

    let locationFetch = async () => {
      const location = `${position.coords.latitude},${position.coords.longitude}`
      try {
        const response = await axios.request(reqFunc(location));
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    locationFetch();
  };

  const fail = () => {
    initialWeatherData();
  };

  const initialWeatherData = async () => {
    try {
      const response = await axios.request(reqFunc('accra'));
      setWeather(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  

  if (error) {
    if (error.response) {
      if (error.response.status == 400)
        return <NotFound />
    }

    if (error.code) {
      if (error.code == "ERR_NETWORK") return <NoNetwork />;
    }

    return <OtherError />;
  }

  if (!weather)
    return (
      <div className="h-[100vh] w-[100vw] bg-[#395E66]">
        <Loader />
      </div>
    );

  if (loading)
    return (
      <div className="bg-[#395E66] h-[100vh] w-[100vw] text-white pb-8 overflow-hidden">
        <center>
          <NavBar />
          <Search />
          <div className="w-[100vw] h-[75.2vh] flex">
            <Loader />
          </div>
        </center>
      </div>
    );

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

export default App;
