import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import WeatherIcon from "./WeatherIcon";
import type { CurrentWeather } from "@/types/weather";

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
}

const CurrentWeatherCard = ({ weather }: CurrentWeatherCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-card p-8 text-center"
    >
      <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">
          {weather.city}, {weather.country}
        </span>
      </div>

      <div className="flex items-center justify-center my-6">
        <WeatherIcon condition={weather.condition.main} size="xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <h1 className="text-7xl md:text-8xl font-display font-bold tracking-tight">
          {Math.round(weather.temperature)}°
        </h1>
        <p className="text-xl text-muted-foreground capitalize">
          {weather.condition.description}
        </p>
        <p className="text-sm text-muted-foreground">
          Feels like {Math.round(weather.feelsLike)}°
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CurrentWeatherCard;