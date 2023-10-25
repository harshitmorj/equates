import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import airplane1 from '../../assets/airplane1.png';
import airplane2 from '../../assets/airplane2.png';
import tech_bg2 from '../../assets/tech_bg2.jpg';

const Aeroplane = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    // Get the scroll position
    const scrollY = window.scrollY;

    // Update the scroll position state
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const airplaneStyles = {
    transform: `scale(${1 + (scrollPosition-2500) * 0.02})`,
    opacity: 1 - (scrollPosition - 2600) * 0.002,
  };

  return (
    <ParallaxProvider>
      <div className="h-screen bg-blue-400 items-center flex flex-col justify-center overflow-hidden bg-blue-400"
        style={{    
            backgroundImage: `url(${tech_bg2})`,
            height: '100vh',
            width: '100vw',
            backgroundBlendMode: 'multiply',
        }}
        >

        <div className=" flex justify-center items-center text-white">
          <Parallax y={[-20, 20]}>
            <div className="w-16 h-16 mr-[900px]" style={airplaneStyles}>
              <img src={airplane1} alt="Airplane 1" />
            </div>
            <div className="w-16 h-16 ml-[900px]" style={airplaneStyles}>
              <img src={airplane2} alt="Airplane 2" />
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Aeroplane;
