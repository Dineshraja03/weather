import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import './Background.css';

function Background({ animationUrl }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationUrl);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading animation:', error);
      }
    };

    if (animationUrl) {
      fetchAnimation();
    }
  }, [animationUrl]);

  if (!animationData) {
    return null;
  }

  return (
    <div className="background-animation">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}

export default Background;