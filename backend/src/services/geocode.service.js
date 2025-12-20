import axios from "axios";

const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const geocodeCity = async (city) => {
  const res = await axios.get(GEO_URL, {
    params: {
      q: city,
      limit: 1,
      appid: API_KEY,
    },
  });

  if (!res.data || res.data.length === 0) {
    throw new Error("City not found");
  }

  const { lat, lon } = res.data[0];
  return { lat, lon };
};
