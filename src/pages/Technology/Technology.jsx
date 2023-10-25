import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import BluePlanet from '../../assets/BluePlanet.svg';
import logo from '../../assets/logo_nobg.png';
import tech_bg1 from '../../assets/tech_bg1.jpg';

const Technology = () => {
  const [scrollPosition, setScrollPosition] = useState(8);

  const handleScroll = () => {
    // Get the scroll position
    const scrollY = window.scrollY;
    // Calculate the new font size based on the scroll position
    const fontSize = 8 + 2 * scrollY / 100;

    // Update the font size and rotation state
    setScrollPosition(fontSize);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="h-[80vh] items-center flex flex-col justify-center overflow-hidden"
        style={{
            backgroundImage: `url(${tech_bg1})`,
            height: '80vh',
            width: '100vw',
            backgroundBlendMode: 'multiply',
        }}
        >
        <div className=''
        style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '15vh',
            width: '30vw',
            position: 'absolute',
            top: '0',
            zIndex: '20',
            
        }}>
        </div>
        <div className=" flex flex-col justify-center items-center text-white text-center m-10">
          <h2
            className="text-7xl md:text-5xl font-bold mb-4 z-10 mb-40"
            style={{ fontSize: `${scrollPosition}rem` }}
          >
            TECHNOLOGY
          </h2>

        </div>
        <div className="absolute flex flex-col justify-center items-center text-white overflow-hidden">
          <Parallax y={[-20, 20]}>
            <img
              src={BluePlanet}
              alt="Blue Planet"
              className="w-full h-full object-cover"
              style={{
                transform: `scale(${scrollPosition * 0.1}) rotate(${scrollPosition * 4}deg)`,
                opacity: 1 - scrollPosition * 0.5 / 10,
              }}
            />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Technology;
