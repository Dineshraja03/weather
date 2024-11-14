const API_KEY = '63778697c93450cd309c70c7d98cc4bd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  async getWeather(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch weather data');
      }
      
      const data = await response.json();
      
      // Validate the essential data
      if (!data || !data.main || !data.weather) {
        throw new Error('Invalid weather data received');
      }
      
      return data;
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        throw new Error('Network error. Please check your connection.');
      }
      throw error;
    }
  }
};