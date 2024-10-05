"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherstack.org/data/2.5/weather?q=London&appid=c30af8f7ee6eeb24d515aab9498d8a18`
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
  if (!weather) return <div>No weather data available</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <h1 className="text-4xl font-bold">Weather in {weather.name}</h1>
      <p className="text-lg">
        Temperature: {Math.round(weather.main.temp - 273.15)}°C
      </p>
      <p className="text-lg">Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;
