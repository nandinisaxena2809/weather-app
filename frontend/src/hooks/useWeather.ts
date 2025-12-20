import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "@/types/weather";

const fetchWeather = async (input: string): Promise<WeatherData> => {
  let url = "http://localhost:5000/api/weather";

  // ✅ Detect coords vs city
  try {
    const parsed = JSON.parse(input);

    if (parsed.lat && parsed.lon) {
      url += `?lat=${parsed.lat}&lon=${parsed.lon}`;
    } else {
      url += `?city=${encodeURIComponent(input)}`;
    }
  } catch {
    // normal city search
    url += `?city=${encodeURIComponent(input)}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  return res.json();
};

export const useWeather = (input: string) => {
  return useQuery({
    queryKey: ["weather", input],
    queryFn: () => fetchWeather(input),
    enabled: input.length > 0,
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: 1, // 👈 retries are no longer needed
  });
};
