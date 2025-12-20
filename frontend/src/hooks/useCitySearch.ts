import { useQuery } from "@tanstack/react-query";

export interface CitySuggestion {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

export const useCitySearch = (query: string) => {
  return useQuery<CitySuggestion[]>({
    queryKey: ["city-search", query],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/cities?q=${encodeURIComponent(query)}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch cities");
      }

      return res.json();
    },
    enabled: query.length >= 2, // IMPORTANT
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

