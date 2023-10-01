import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import { DateComp } from './components/dateHandler';
import { NavBar } from './components/navbar';
import { Search } from './components/search';
import { useList } from './components/stateProvider';
import { TodayF } from './components/todayF';
import { TomorrowF } from './components/tomorrowF';
import { ChanceOfRain } from './components/COR';
import { Loader } from './components/loader';
import { Location } from './components/location';
import { CurrentWeather } from './components/currentWeather';

const App = () => {

   const { weather, setWeather, setActiveCategory, loading, setLoading, searchTerm } = useList()

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(success, fail)
   }, [])

   const success = (position) => {
      
      setLoading(true)

      const weatherReq = {
         method: 'GET',
         url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
         params: {
            q: `${position.coords.latitude},${position.coords.longitude}`,
            days: '3'
         },
         headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
         }
      }
  
      let locationFetch = async() => {
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
  
      locationFetch()
   }

   const fail = () => {
      initialWeatherData()
   }

   const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
         q: searchTerm || 'new york',
         days: '3'
      },
      headers: {
         'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
   }

   const initialWeatherData = async () => {
      setActiveCategory('')
      try {
         const response = await axios.request(options);
         console.log(response.data);
         setWeather(response.data)
         setLoading(false)
      } catch (error) {
         console.error(error);
         setLoading(false)
      }
   }

   const onSearchSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setActiveCategory('')
      try {
         const response = await axios.request(options);
         console.log(response.data);
         setWeather(response.data)
         setLoading(false)
      } catch (error) {
         console.error(error);
         setLoading(false)
      }
   } 
   
   if (!weather) return <Loader />
 
   if (loading) return <center>
      <NavBar />
      <Search onSubmit={onSearchSubmit}/>
      <Loader />
   </center>

   return <div className='bg-gradient-to-b from-[#007EA7] to-[#a2b4cb] pb-8 text-white'>
      <center>
         <NavBar />
         <Search onSubmit={onSearchSubmit}/>
         <DateComp />
         <Location />
         <CurrentWeather />
      </center>

      <ChanceOfRain val={weather.forecast.forecastday[0].day.daily_chance_of_rain} />
      <TodayF />
      <TomorrowF />
   </div>
}


export default App
