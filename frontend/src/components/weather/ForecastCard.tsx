import { motion } from "framer-motion";
import WeatherIcon from "./WeatherIcon";
import type { ForecastDay } from "@/types/weather";

interface ForecastCardProps {
  forecast: ForecastDay[];
}

const ForecastCard = ({ forecast }: ForecastCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card p-6"
    >
      <h2 className="text-lg font-display font-semibold mb-4 text-foreground">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-5 gap-2 md:gap-4">
        {forecast.map((day, index) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex flex-col items-center p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <span className="text-xs font-medium text-muted-foreground mb-2">
              {day.dayName}
            </span>
            <WeatherIcon condition={day.condition.main} size="sm" animated={false} />
            <div className="mt-2 text-center">
              <span className="text-sm font-semibold text-foreground">
                {Math.round(day.temperature.max)}°
              </span>
              <span className="text-xs text-muted-foreground ml-1">
                {Math.round(day.temperature.min)}°
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ForecastCard;