import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useWeather } from "@/hooks/useWeather";
import SearchBar from "@/components/weather/SearchBar";
import CurrentWeatherCard from "@/components/weather/CurrentWeatherCard";
import WeatherDetails from "@/components/weather/WeatherDetails";
import ForecastCard from "@/components/weather/ForecastCard";
import WeatherBackground from "@/components/weather/WeatherBackground";
import LoadingState from "@/components/weather/LoadingState";
import EmptyState from "@/components/weather/EmptyState";

const Index = () => {
  const [city, setCity] = useState("");
  const { data: weather, isLoading, isError } = useWeather(city);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
  };

  return (
    <>
      <WeatherBackground condition={weather?.current.condition.main} />
      
      <main className="min-h-screen px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
              Weather Forecast
            </h1>
            <p className="text-muted-foreground">
              Real-time weather updates for any city
            </p>
          </header>

          {/* Search */}
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />

          {/* Content */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingState key="loading" />
            ) : weather ? (
              <div key="weather" className="space-y-6">
                <CurrentWeatherCard weather={weather.current} />
                <WeatherDetails weather={weather.current} />
                <ForecastCard forecast={weather.forecast} />
              </div>
            ) : (
              <EmptyState key="empty" />
            )}
          </AnimatePresence>

          {isError && (
            <p className="text-center text-destructive">
              Failed to fetch weather data. Please try again.
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default Index;

