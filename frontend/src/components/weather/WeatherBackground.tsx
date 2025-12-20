import { motion } from "framer-motion";

interface WeatherBackgroundProps {
  condition?: string;
}

const WeatherBackground = ({ condition = "Clear" }: WeatherBackgroundProps) => {
  const getGradient = () => {
    switch (condition) {
      case "Clear":
        return "from-blue-900 via-indigo-900 to-slate-900";
      case "Clouds":
        return "from-slate-800 via-gray-800 to-slate-900";
      case "Rain":
      case "Drizzle":
        return "from-slate-900 via-blue-900 to-gray-900";
      case "Snow":
        return "from-slate-700 via-blue-800 to-slate-900";
      case "Thunderstorm":
        return "from-purple-900 via-slate-900 to-gray-900";
      default:
        return "from-blue-900 via-indigo-900 to-slate-900";
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getGradient()} transition-all duration-1000`} />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default WeatherBackground;