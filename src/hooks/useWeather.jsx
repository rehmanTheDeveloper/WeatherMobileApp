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
          const image = getWeatherImage(
            weatherCondition.condition.text,
            weatherCondition.is_day,
          );
          weatherCondition.weatherImage = image;
          setCurrentWeather(weatherCondition);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const weatherForecast = async (cityLon, cityLat, setForecasts) => {
    try {
      await axios
        .get(`${configs.ForecastAPI}&q=${cityLat},${cityLon}&days=2`)
        .then(response => {
          const weatherForecast = response.data.forecast;
          const forecasts = [];
          weatherForecast.forecastday[0].hour.map((singleForcast) => {
            const image = getWeatherImage(singleForcast.condition.text, singleForcast.is_day);
            // console.log(`Time: ${singleForcast.time}`);
            forecasts.push({
              time: singleForcast.time,
              image: image,
              temperature: singleForcast.temp_c
            })
          })
          setForecasts(forecasts)
        });
    } catch (error) {
      console.log(error.message);
    }
  };
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

    return weatherImages[timeOfDay][condition.replace(/\s+/g, '')] || (isDay ? Day : Night);
  };

  const getWindStatus = windKph => {
    if (windKph < 10) return 'Calm';
    if (windKph >= 10 && windKph < 30) return 'Breezy';
    return 'Windy';
  };
  const getPrecipitationStatus = (precipMm, weatherType) => {
    if (precipMm > 0) {
      return weatherType.toLowerCase().includes('snow') ? 'Snow' : 'Rain';
    }
    return 'None';
  };

  return {
    currentWeather,
    weatherForecast,
    getWeatherImage,
    getWindStatus,
    getPrecipitationStatus,
  };
};

export default useWeather;
