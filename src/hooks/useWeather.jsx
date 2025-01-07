import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {configs} from '../configs';
import {
  Cloudy,
  DayRain,
  LightRain,
  NightCloudy,
  NightLightRain,
  Overcast,
  PartlyCloudy,
  Showers,
  ThunderRain,
  Day,
  Night,
} from '../assets';

const useWeather = () => {
  const currentWeather = async (cityLon, cityLat, setCurrentWeather) => {
    try {
      await axios
        .get(`${configs.CurrentWeatherAPI}&q=${cityLat},${cityLon}`)
        .then(response => {
          const weatherCondition = response.data.current;
          const image = getWeatherImage(weatherCondition.condition.text, weatherCondition.is_day);
          weatherCondition.weatherImage = image;
          setCurrentWeather(weatherCondition)
        });
    } catch (error) {
      console.log(error);
    }
  };
  const weatherForecast = () => {};
  const getWeatherImage = (condition, isDay) => {
    const weatherImages = {
      Day: {
        Clear: Day,
        'Partly cloudy': PartlyCloudy,
        Cloudy: Cloudy,
        Overcast: Overcast,
        Showers: Showers,
        'Light rain': LightRain,
        'Heavy rain': DayRain,
        Thunderstorm: ThunderRain,
      },
      // Night Conditions
      Night: {
        Clear: Night,
        'Partly cloudy': NightCloudy,
        Cloudy: Cloudy,
        Overcast: Overcast,
        Showers: Showers,
        'Light rain': NightLightRain,
        'Heavy rain': LightRain,
        Thunderstorm: ThunderRain,
      },
    };
    const timeOfDay = isDay ? 'Day' : 'Night';

    return weatherImages[timeOfDay][condition] || (isDay ? Day : Night);
  };

  return {currentWeather, weatherForecast, getWeatherImage};
};

export default useWeather;
