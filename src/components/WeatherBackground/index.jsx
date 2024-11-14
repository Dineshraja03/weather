import React from 'react';
import Lottie from 'lottie-react';
import clearDay from '../../assets/animations/clear-day.json';
import clearNight from '../../assets/animations/clear-night.json';
import cloudy from '../../assets/animations/cloudy.json';
import rainy from '../../assets/animations/rainy.json';
import snowy from '../../assets/animations/snowy.json';
import mist from '../../assets/animations/mist.json';

function WeatherBackground({ weatherCode }) {
  const getAnimation = (code) => {
    if (!code) return clearDay;
    if (code.includes('01d')) return clearDay;
    if (code.includes('01n')) return clearNight;
    if (code.includes('02') || code.includes('03') || code.includes('04')) return cloudy;
    if (code.includes('09') || code.includes('10')) return rainy;
    if (code.includes('13')) return snowy;
    if (code.includes('50')) return mist;
    return clearDay;
  };

  return (
    <div className="weather-background">
      <Lottie
        animationData={getAnimation(weatherCode)}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}

export default WeatherBackground; 