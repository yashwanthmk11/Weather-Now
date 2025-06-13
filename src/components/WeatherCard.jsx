import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weather }) {
  const { name, main, weather: details, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;

  return (
    <div className="glass-card weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={details[0].description} />
      <p>{details[0].main}</p>
      <h3>{main.temp}°C</h3>
      <p>Feels like: {main.feels_like}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind: {wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
