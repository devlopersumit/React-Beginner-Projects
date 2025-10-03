import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    if (!city) return alert("Please enter a city name");

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e31c42ddc537c5300380ecd5bc655095&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching weather:", err.response?.data || err.message);
      alert("Failed to fetch weather. Please check the city name or API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Weather App
        </h1>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition"
        />

        <button
          onClick={fetchWeather}
          className="w-full p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-blue-700 transition"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>

        {weather && (
          <div className="mt-6 bg-blue-50 rounded-lg p-4 shadow-inner">
            <h2 className="text-xl font-semibold text-blue-800">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-lg mt-2">
              🌡 Temperature: <span className="font-bold">{weather.main.temp}°C</span>
            </p>
            <p className="text-lg">
              🌥 Weather: <span className="capitalize">{weather.weather[0].description}</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
