import { geocodeCity } from "../services/geocode.service.js";
import { fetchWeatherRaw } from "../services/weather.service.js";
import { transformWeatherData } from "../utils/weather.transformer.js";

export const getWeather = async (req, res) => {
  try {
    let lat, lon;

    if (req.query.lat && req.query.lon) {
      lat = Number(req.query.lat);
      lon = Number(req.query.lon);
    } else if (req.query.city) {
      const coords = await geocodeCity(req.query.city);
      lat = coords.lat;
      lon = coords.lon;
    } else {
      return res.status(400).json({
        error: "Provide either city or lat/lon",
      });
    }

    const { current, forecast } = await fetchWeatherRaw(lat, lon);

    const transformed = transformWeatherData(current, forecast);

    res.json(transformed);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};
