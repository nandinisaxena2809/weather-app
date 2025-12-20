import { getCitySuggestions } from "../services/city.service.js";

export const searchCities = async (req, res) => {
  const { q } = req.query;

  if (!q || q.length < 2) {
    return res.json([]);
  }

  try {
    const cities = await getCitySuggestions(q);
    res.json(cities);
  } catch (error) {
    console.error("City search error:", error.message);
    res.status(500).json({ error: "Failed to fetch city suggestions" });
  }
};
