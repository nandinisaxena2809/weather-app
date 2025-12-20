export const transformWeatherData = (current, forecast) => {
  const dailyMap = {};

  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!dailyMap[date]) {
      dailyMap[date] = {
        min: item.main.temp_min,
        max: item.main.temp_max,
        condition: item.weather[0],
        dayName: new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
        }),
      };
    } else {
      dailyMap[date].min = Math.min(dailyMap[date].min, item.main.temp_min);
      dailyMap[date].max = Math.max(dailyMap[date].max, item.main.temp_max);
    }
  });

  return {
    current: {
      city: current.name,
      country: current.sys.country,
      temperature: current.main.temp,
      feelsLike: current.main.feels_like,
      humidity: current.main.humidity,
      windSpeed: current.wind.speed,
      pressure: current.main.pressure,
      visibility: current.visibility,
      condition: current.weather[0],
      sunrise: current.sys.sunrise,
      sunset: current.sys.sunset,
      timezone: current.timezone,
    },
    forecast: Object.entries(dailyMap)
      .slice(1, 6) // next 5 days
      .map(([date, data]) => ({
        date,
        dayName: data.dayName,
        temperature: {
          min: Math.round(data.min),
          max: Math.round(data.max),
        },
        condition: data.condition,
      })),
  };
};
