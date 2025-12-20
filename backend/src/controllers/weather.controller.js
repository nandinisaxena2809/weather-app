import { geocodeCity } from "../services/geocode.service.js";
import { fetchWeatherRaw } from "../services/weather.service.js";
import { transformWeatherData } from "../utils/weather.transformer.js";

export const getWeather = async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const { lat, lon } = await geocodeCity(city);
    const { current, forecast } = await fetchWeatherRaw(lat, lon);

    const transformed = transformWeatherData(current, forecast);

    res.json(transformed);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
