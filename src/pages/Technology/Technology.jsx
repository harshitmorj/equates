import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import BluePlanet from '../../assets/BluePlanet.svg';
import logo from '../../assets/logo.jpg';

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
      <div className="items-center flex flex-col justify-center overflow-hidden">
        <div className=''
        style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '15vh',
            width: '30vw',
            position: '',
            top: 0,
            
        }}>
        </div>
        <div className=" flex flex-col justify-center items-center bg-black text-white text-center m-10">
          <h2
            className="text-7xl md:text-5xl font-bold mb-4"
            style={{ fontSize: `${scrollPosition}rem` }}
          >
            TECHNOLOGY
          </h2>

        </div>
        <div className=" flex flex-col justify-center items-center bg-black text-white">
          <Parallax y={[-20, 20]}>
            <img
              src={BluePlanet}
              alt="Blue Planet"
              className="w-full"
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
