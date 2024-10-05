"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherstack.com/current?access_key=739a3247527e7e7e4f3bf33335ce145e&query=Addis Ababa`
        );

        setWeather(response.data); // Set weather data after fetching
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // If data is still being fetched, show a loading message
  if (loading) return <div>Loading...</div>;

  // Check if `weather` exists before accessing its properties
  if (!weather || !weather.current) return <div>No weather data available</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-400">
      <h1 className="text-4xl font-bold">Weather in {weather.location.name}</h1>
      <p className="text-lg">Temperature: {weather.current.temperature}°C</p>
      <p className="text-lg">
        Condition: {weather.current.weather_descriptions[0]}
      </p>
    </div>
  );
};

export default WeatherComponent;
