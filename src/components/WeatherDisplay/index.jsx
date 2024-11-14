import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ weather, theme }) {
  if (!weather) return null;

  return (
    <div className={`weather-display ${theme}`}>
      <div className="weather-circle"></div>
      <div className="weather-main">
        <h2>
          {weather.name}
          {weather.sys?.country ? `, ${weather.sys.country}` : ''}
        </h2>
        <div className="temperature">
          {Math.round(weather.main?.temp ?? 0)}°C
        </div>
        <div className="weather-description">
          {weather.weather?.[0] && (
            <>
              <img 
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description || 'weather icon'}
              />
              <span>{weather.weather[0].description}</span>
            </>
          )}
        </div>
      </div>
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">
            {Math.round(weather.main?.feels_like ?? 0)}°C
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">
            {weather.main?.humidity ?? 0}%
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">
            {weather.wind?.speed ?? 0} m/s
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">
            {weather.main?.pressure ?? 0} hPa
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;