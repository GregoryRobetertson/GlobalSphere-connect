'use client';

import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  async function fetchWeather(e) {
    e.preventDefault(); // Add () to call the function
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db42535f278c6419ed2c7d8df4df21f1`);
      setWeather(response.data);
      console.log(response.data);
      setLoading(true);
    } catch (error) {
      console.error('Error fetching data', error);
    }
    setCity('');
    setLoading(false);
  }

  

  return (

    <>
    <div className="relative flex justify-between items-center max-w-[500px] w-full mx-auto pt-4 text-gray-900 z-10">
  <form onSubmit={fetchWeather} className="flex justify-between items-center w-full mx-auto p-3 bg-gradient-to-r from-blue-500 to-blue-700 border border-gray-300 text-white rounded-2xl shadow-lg">
    <div className="flex-1 mr-4">
      <input onChange={(e) => setCity(e.target.value)} className="bg-transparent border-none text-lg sm:text-xl focus:outline-none text-white placeholder-white" type="text" placeholder="Search city" />
    </div>
    <button type="submit" className="text-lg sm:text-xl flex items-center justify-center rounded-full bg-white text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
      </svg>
    </button>
  </form>
</div>

<div>
  {loading && <p className="text-gray-800 text-lg font-semibold">Loading...</p>}
  {error && <p className="text-red-500 text-lg font-semibold">{error}</p>}
  {weather && weather.weather && weather.weather.length > 0 && (
    <div className="mt-6 bg-gray-300 rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold text-gray-800">{weather.name}</h2>
      <p className="text-lg text-gray-600">{weather.weather[0].description}</p>
      <div className="flex items-center mt-4">
        <p className="text-5xl font-bold text-blue-500">{Math.round(weather.main.temp - 273.15)}°C</p>
      </div>
      <div className="mt-4">
        <p className="text-lg text-gray-700">Humidity: {weather.main.humidity}%</p>
        <p className="text-lg text-gray-700">Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  )}
</div>



</>

  )
}

