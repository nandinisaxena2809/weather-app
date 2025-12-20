import express from "express";
import cors from "cors";


import weatherRoutes from "./src/routes/weather.route.js";
import cityRoutes from "./src/routes/city.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use("/api/cities", cityRoutes);

const PORT = process.env.PORT || 5000;

if (!process.env.OPENWEATHER_API_KEY) {
  console.error("❌ OPENWEATHER_API_KEY is missing");
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
}).on('error', (err) => {
  console.error('❌ Server failed to start:', err);
});

// Add this to catch if something is calling process.exit() elsewhere
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
