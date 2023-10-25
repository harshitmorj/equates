import React, { useState } from 'react';

import home_bg from '../../assets/home_bg.jpg';
import home1 from '../../assets/home1.svg';
import home2 from '../../assets/home2.svg';

const Home = () => {
  const vectorImage1 = {
    backgroundImage: `url(${home1})`,
    backgroundSize: 'cover',
    width: '30vh',
    height: '40vh',
    position: 'absolute',
    left: '20vh',
    top: '50vh',
  };
  const vectorImage2 = {
    backgroundImage: `url(${home2})`,
    backgroundSize: 'cover',
    width: '54vh',
    height: '50vh',
    position: 'absolute',
    left: '6vh',
    top: '42vh',
  };

  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="text-white text-center items-center h-screen flex flex-col p-10 md:p-40 w-full">
      <div
        className="block absolute top-0 w-full h-screen z-0"
        style={{
          backgroundImage: `url(${home_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={vectorImage1} className="hidden md:block"></div>
        <div style={vectorImage2} className="hidden md:block"></div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4 pt-40 md:p-20 z-10">
        Multi-Orbital Optical Communication Payloads in Space
      </h1>
      <button
        className="bg-blue-700/80 hover:bg-blue-500 hover:scale-105 transition duration-200 text-white text-5xl lg:text-9xl py-3 font-bold px-8 rounded z-10"
        onClick={toggleCard}
      >
        +
      </button>

      {isCardVisible && (
        <div>
          <div className='hidden md:block'>
            <div className="flex fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-30 p-2">
              <div className="flex p-8 rounded-lg bg-gray-900">
                <div className="flex flex-col justify-center items-center h-full p-20 m-0">
                  <p className="text-4xl mt-4 mb-4">Multilayer constellations involve deploying multiple layers or tiers of satellites in various orbits to provide global coverage and improved connectivity. These layers include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), and Geostationary Orbit (GEO) satellites. Each layer serves a specific purpose, with LEO satellites providing low latency and high-speed communication, MEO satellites covering broader regions, and GEO satellites offering wide-area coverage. The objective of the multilayer based satellite network operation scheme is to minimize the latency of transmitting telecommand (TC) messages while maintaining high levels of resilience and reliability. The combined use of LEO, MEO, and GEO constellations enhances resilience, taking advantage of GEO satellites’ fixed positions above the equator.</p>
                  <button className="bg-purple-500 text-black px-4 py-2 relative bottom-[10px] m-20"
                    onClick={toggleCard}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='md:hidden'>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-30 p-2">
              <div className="p-8 rounded-lg bg-gray-900">
              <p className=" mt-4 mb-4">Multilayer constellations involve deploying multiple layers or tiers of satellites in various orbits to provide global coverage and improved connectivity. These layers include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), and Geostationary Orbit (GEO) satellites. Each layer serves a specific purpose, with LEO satellites providing low latency and high-speed communication, MEO satellites covering broader regions, and GEO satellites offering wide-area coverage. The objective of the multilayer based satellite network operation scheme is to minimize the latency of transmitting telecommand (TC) messages while maintaining high levels of resilience and reliability. The combined use of LEO, MEO, and GEO constellations enhances resilience, taking advantage of GEO satellites’ fixed positions above the equator.</p>
                <button className="bg-purple-500 text-black px-4 py-2" onClick={toggleCard}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
