export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  condition: WeatherCondition;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface ForecastDay {
  date: string;
  dayName: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: WeatherCondition;
}

export interface WeatherData {
  current: CurrentWeather;
  forecast: ForecastDay[];
}