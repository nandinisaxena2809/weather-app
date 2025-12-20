import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog, Wind } from "lucide-react";

interface WeatherIconProps {
  condition: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const sizeMap = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const colorMap: Record<string, string> = {
  Clear: "text-weather-sunny",
  Clouds: "text-weather-cloudy",
  Rain: "text-weather-rainy",
  Drizzle: "text-weather-rainy",
  Snow: "text-weather-snowy",
  Thunderstorm: "text-weather-stormy",
  Mist: "text-muted-foreground",
  Fog: "text-muted-foreground",
  Haze: "text-muted-foreground",
};

const WeatherIcon = ({ condition, size = "md", animated = true }: WeatherIconProps) => {
  const sizeClass = sizeMap[size];
  const colorClass = colorMap[condition] || "text-foreground";

  const getIcon = () => {
    switch (condition) {
      case "Clear":
        return <Sun className={sizeClass} />;
      case "Clouds":
        return <Cloud className={sizeClass} />;
      case "Rain":
      case "Drizzle":
        return <CloudRain className={sizeClass} />;
      case "Snow":
        return <CloudSnow className={sizeClass} />;
      case "Thunderstorm":
        return <CloudLightning className={sizeClass} />;
      case "Mist":
      case "Fog":
      case "Haze":
        return <CloudFog className={sizeClass} />;
      default:
        return <Wind className={sizeClass} />;
    }
  };

  if (!animated) {
    return <span className={colorClass}>{getIcon()}</span>;
  }

  return (
    <motion.span
      className={colorClass}
      animate={condition === "Clear" ? { rotate: 360 } : { y: [0, -5, 0] }}
      transition={{
        duration: condition === "Clear" ? 20 : 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {getIcon()}
    </motion.span>
  );
};

export default WeatherIcon;