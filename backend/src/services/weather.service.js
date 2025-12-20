import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const fetchWeatherRaw = async (lat, lon) => {
  const [current, forecast] = await Promise.all([
    axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    }),
    axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    }),
  ]);

  return {
    current: current.data,
    forecast: forecast.data,
  };
};
