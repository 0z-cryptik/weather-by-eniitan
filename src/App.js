import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useList } from "./components/stateProvider";
import { NoNetwork, NotFound, OtherError } from "./components/errorComps";
import { reqFunc } from "./functions/requestHandler";
import { InitialLoader } from "./components/initialLoader";
import { NewSearchLoader } from "./components/newSearchLoader";
import { WeatherDetails } from "./components/weatherDetails";

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
      const location = `${position.coords.latitude},${position.coords.longitude}`;
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
      const response = await axios.request(reqFunc("accra"));
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (error) {
    if (error.response) {
      if (error.response.status == 400) return <NotFound />;
    }

    if (error.code) {
      if (error.code == "ERR_NETWORK") return <NoNetwork />;
    }

    return <OtherError />;
  }

  if (!weather) return <InitialLoader />;

  if (loading) return <NewSearchLoader />;

  return <WeatherDetails />;
};

export default App;
