import axios from "axios";

const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";

export const getCitySuggestions = async (query) => {
  const { data } = await axios.get(GEO_URL, {
    params: {
      q: query,
      limit: 5,
      appid: process.env.OPENWEATHER_API_KEY,
    },
  });

  return data.map((city) => ({
    name: city.name,
    state: city.state || "",
    country: city.country,
    lat: city.lat,
    lon: city.lon,
  }));
};
