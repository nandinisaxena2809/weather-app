import { motion } from "framer-motion";
import { Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from "lucide-react";
import type { CurrentWeather } from "@/types/weather";

interface WeatherDetailsProps {
  weather: CurrentWeather;
}

const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const details = [
    { icon: Droplets, label: "Humidity", value: `${weather.humidity}%` },
    { icon: Wind, label: "Wind", value: `${weather.windSpeed} km/h` },
    { icon: Eye, label: "Visibility", value: `${(weather.visibility / 1000).toFixed(1)} km` },
    { icon: Gauge, label: "Pressure", value: `${weather.pressure} hPa` },
    { icon: Sunrise, label: "Sunrise", value: formatTime(weather.sunrise) },
    { icon: Sunset, label: "Sunset", value: formatTime(weather.sunset) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card p-6"
    >
      <h2 className="text-lg font-display font-semibold mb-4 text-foreground">
        Weather Details
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {details.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30"
          >
            <detail.icon className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">{detail.label}</p>
              <p className="text-sm font-medium text-foreground">{detail.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WeatherDetails;