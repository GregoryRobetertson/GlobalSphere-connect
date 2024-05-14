"use client";

import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(e) {
    e.preventDefault(); // Add () to call the function
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
      );
      setWeather(response.data);
      console.log(response.data);
      setLoading(true);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setCity("");
    setLoading(false);
  }

  return (
    <>
    <h1 className="text-3xl font-semibold text-center mb-10 pt-4">
          Search Weather By City
        </h1>
      <div className="relative flex justify-between items-center max-w-[500px] w-full mx-auto pt-4 text-gray-900 z-10">
        
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full mx-auto p-3 bg-gradient-to-r from-blue-500 to-blue-700 border border-gray-300 text-white rounded-2xl shadow-lg"
        >
          <div className="flex-1 mr-4">
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-lg sm:text-xl focus:outline-none text-white placeholder-white"
              type="text"
              placeholder="Search city"
            />
          </div>
          <button
            type="submit"
            className="text-lg sm:text-xl flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      <div>
        {loading && (
          <p className="text-gray-800 text-lg font-semibold">Loading...</p>
        )}
        {error && <p className="text-red-500 text-lg font-semibold">{error}</p>}
        {weather && weather.weather && weather.weather.length > 0 && (
        <div className="mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-50 relative p-8 rounded-md mb-16">
        <p className="text-2xl text-center pb-6 text-white">Weather in {weather.name}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-100">
              {Math.round(weather.main.feels_like - 273.15)}&#176;
            </p>
            <p className="text-xl text-gray-200">Feels Like</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-100">
              {weather.main.humidity}%
            </p>
            <p className="text-xl text-gray-200">Humidity</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-100">
              {weather.wind.speed.toFixed(0)} m/s
            </p>
            <p className="text-xl text-gray-200">Wind Speed</p>
          </div>
          <div className="text-center">
            {weather.weather.map((condition, index) => (
              <div key={index}>
                {condition.main === "Rain" && (
                  <p className="text-2xl text-gray-100">Rainy</p>
                )}
                {condition.main === "Clouds" && (
                  <p className="text-2xl text-gray-100">Cloudy</p>
                )}
                {/* Add more conditions as needed */}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-100">
              {weather.main.temp_min.toFixed(0)}&#176;
            </p>
            <p className="text-xl text-gray-200">Min Temperature</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-100">
              {weather.main.temp_max.toFixed(0)}&#176;
            </p>
            <p className="text-xl text-gray-200">Max Temperature</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl text-gray-100">
              {weather.visibility} m
            </p>
            <p className="text-xl text-gray-200">Visibility</p>
          </div>
        </div>
      </div>
      

        )}
      </div>
    </>
  );
}
