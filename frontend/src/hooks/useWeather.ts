import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "@/types/weather";

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const res = await fetch(
    `http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  return res.json();
};

export const useWeather = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    enabled: city.length > 0,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};
