import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { weatherService } from './services/weatherService';
import './styles/index.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getWeather(city);
      
      if (!data || !data.main || !data.weather) {
        throw new Error('Invalid weather data received');
      }
      
      setWeather(data);
      
      // Update search history
      const updatedHistory = [city, ...searchHistory.filter(item => item !== city)].slice(0, 5);
      setSearchHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      
      const theme = getWeatherTheme(data.weather[0].icon);
      document.body.className = theme;
    } catch (err) {
      setError(err.message || 'City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherTheme = (weatherCode) => {
    if (!weatherCode) return 'theme-clear-day';
    
    // Weather condition codes
    if (weatherCode.includes('01')) return 'theme-clear-day';
    if (weatherCode.includes('02') || weatherCode.includes('03') || weatherCode.includes('04')) return 'theme-cloudy';
    if (weatherCode.includes('09') || weatherCode.includes('10')) return 'theme-rainy';
    if (weatherCode.includes('13')) return 'theme-snowy';
    // Add specific check for mist/fog (50d/50n)
    if (weatherCode.includes('50')) return 'theme-mist';
    
    return 'theme-clear-day';
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} searchHistory={searchHistory} />
      {loading && <LoadingSpinner />}
      {error && <div className="error">{error}</div>}
      {weather && <WeatherDisplay weather={weather} theme={getWeatherTheme(weather.weather[0].icon)} />}
    </div>
  );
}

export default App;