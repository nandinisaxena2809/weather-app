import { motion } from "framer-motion";
import { CloudSun } from "lucide-react";

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <CloudSun className="w-20 h-20 text-primary/60" />
      </motion.div>
      <h2 className="mt-6 text-2xl font-display font-semibold text-foreground">
        Welcome to Weather App
      </h2>
      <p className="mt-2 text-muted-foreground max-w-sm">
        Search for a city to see the current weather conditions and 5-day forecast
      </p>
    </motion.div>
  );
};

export default EmptyState;