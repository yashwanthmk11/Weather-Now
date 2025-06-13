import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';

const API_KEY = 'da8bfa658c6c733cc6da1d65678dde56'; // Replace with real key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert('City not found');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <div className="search-box glass-card">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
