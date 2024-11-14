export const getWeatherTheme = (weatherCode) => {
  const themes = {
    // Clear sky
    '01d': {
      animation: 'https://lottie.host/embed/d7294ce8-656d-486b-8d52-9e28de024b3b/WPnx6tR8Fy.json',
      colors: {
        primary: '#FF8C00',
        secondary: '#FFA500',
        background: 'linear-gradient(to bottom, #87CEEB, #4682B4)',
        text: '#333333'
      }
    },
    // Night clear
    '01n': {
      animation: 'https://lottie.host/embed/2a0e5789-b5e7-48f7-9e0f-381aa9c7dea8/odWs5J3oYF.json',
      colors: {
        primary: '#4B0082',
        secondary: '#483D8B',
        background: 'linear-gradient(to bottom, #191970, #000033)',
        text: '#FFFFFF'
      }
    },
    // Clouds
    '02d': {
      animation: 'https://lottie.host/embed/fd6b1e9e-3c5e-4d3b-b8c4-6f5c9a86b694/AkcZTvBfXj.json',
      colors: {
        primary: '#708090',
        secondary: '#778899',
        background: 'linear-gradient(to bottom, #B0C4DE, #808080)',
        text: '#333333'
      }
    },
    // Rain
    '09d': {
      animation: 'https://lottie.host/embed/a7bf1626-9d63-4f0e-a5f1-f1c322b02d9e/e9QDHhYZJe.json',
      colors: {
        primary: '#4682B4',
        secondary: '#5F9EA0',
        background: 'linear-gradient(to bottom, #696969, #2F4F4F)',
        text: '#FFFFFF'
      }
    },
    // Snow
    '13d': {
      animation: 'https://lottie.host/embed/b4e08dc4-6b6f-45b4-9389-e4fe14869c3c/yPXEtO3YVS.json',
      colors: {
        primary: '#B0E0E6',
        secondary: '#87CEEB',
        background: 'linear-gradient(to bottom, #F0F8FF, #B0E0E6)',
        text: '#333333'
      }
    }
  };

  // Add fallback animations for other weather codes
  ['02n', '03d', '03n', '04d', '04n'].forEach(code => {
    themes[code] = themes['02d']; // Use cloudy animation
  });

  ['09n', '10d', '10n'].forEach(code => {
    themes[code] = themes['09d']; // Use rain animation
  });

  ['11d', '11n'].forEach(code => {
    themes[code] = {
      ...themes['09d'],
      colors: {
        primary: '#483D8B',
        secondary: '#4B0082',
        background: 'linear-gradient(to bottom, #2F4F4F, #000000)',
        text: '#FFFFFF'
      }
    };
  });

  ['13n'].forEach(code => {
    themes[code] = themes['13d']; // Use snow animation
  });

  ['50d', '50n'].forEach(code => {
    themes[code] = {
      animation: 'https://lottie.host/embed/3c847722-6be8-47e7-b6ad-d09f1d59e906/0GiVH4W7Ld.json',
      colors: {
        primary: '#808080',
        secondary: '#A9A9A9',
        background: 'linear-gradient(to bottom, #D3D3D3, #808080)',
        text: '#333333'
      }
    };
  });

  // Default theme
  const defaultTheme = {
    animation: themes['01d'].animation,
    colors: {
      primary: '#3498db',
      secondary: '#2980b9',
      background: 'linear-gradient(to bottom, #87CEEB, #4682B4)',
      text: '#333333'
    }
  };

  return themes[weatherCode] || defaultTheme;
};