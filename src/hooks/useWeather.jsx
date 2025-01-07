import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {configs} from '../configs';

const useWeather = () => {
  const currentWeather = async (cityLon, cityLat, setCurrentWeather) => {
    try {
      await axios
        .get(`${configs.CurrentWeatherAPI}&q=${cityLat},${cityLon}`)
        .then(response => setCurrentWeather(response.data.current));
    } catch (error) {
      console.log(error);
    }
  };
  const weatherForecast = () => {};

  return {currentWeather, weatherForecast};
};

export default useWeather;
