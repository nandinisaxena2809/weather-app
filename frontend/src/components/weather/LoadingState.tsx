import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const LoadingState = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-16 h-16 text-primary" />
      </motion.div>
      <p className="mt-4 text-muted-foreground">Loading weather data...</p>
    </motion.div>
  );
};

export default LoadingState;