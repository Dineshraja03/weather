import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ weather, theme }) {
  const detailStyle = {
    color: theme?.colors.text,
    borderColor: theme?.colors.primary
  };

  return (
    <div className="weather-details" style={detailStyle}>
      <div className="detail-item">
        <span className="detail-label">Feels Like</span>
        <span className="detail-value" style={{ color: theme?.colors.primary }}>
          {Math.round(weather.main.feels_like)}°C
        </span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Humidity</span>
        <span className="detail-value">{weather.main.humidity}%</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Wind Speed</span>
        <span className="detail-value">{weather.wind.speed} m/s</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Pressure</span>
        <span className="detail-value">{weather.main.pressure} hPa</span>
      </div>
    </div>
  );
}

export default WeatherDetails; 