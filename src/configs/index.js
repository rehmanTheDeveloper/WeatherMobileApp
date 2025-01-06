import { constants } from "../constants";
import app from "./app";

const configs = {
    CurrentWeatherAPI: `https://api.weatherapi.com/v1/current.json?key=${constants.apiKey}`,
    ForecastAPI: `https://api.weatherapi.com/v1/current.json?key=${constants.apiKey}`,
    SearchAPI: `https://api.weatherapi.com/v1/search.json?key=${constants.apiKey}`,
    AlertsAPI: `https://api.weatherapi.com/v1/alert.json?key=${constants.apiKey}`,
};

export {
    app,
    configs
}