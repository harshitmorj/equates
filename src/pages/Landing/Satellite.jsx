import React, { useState } from 'react';
import home_bg2 from '../../assets/home_bg2.png';
import satellite from '../../assets/satellite.png';
import PurplePlanet from '../../assets/PurplePlanet.svg';

const Satellite = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [rotationDegree, setRotationDegree] = useState(0);

  const satellites = [
    {
      name: 'Satellite 1',
      info: 'Information for Satellite 1.',
      position: {
        x: '50%',
        y: '20%',
      },
    },
    {
      name: 'Satellite 2',
      info: 'Information for Satellite 2.',
      position: {
        x: '80%',
        y: '50%',
      },
    },
    {
      name: 'Satellite 3',
      info: 'Information for Satellite 3.',
      position: {
        x: '50%',
        y: '80%',
      },
    },
    {
      name: 'Satellite 4',
      info: 'Information for Satellite 4.',
      position: {
        x: '20%',
        y: '50%',
      },
    },
  ];

  const fixedPlanets = [
    {
      name: 'Fixed Planet 1',
      info: 'Information for Fixed Planet 1.',
      position: {
        x: '70%',
        y: '35%',
      },
    },
    {
      name: 'Fixed Planet 2',
      info: 'Information for Fixed Planet 2.',
      position: {
        x: '35%',
        y: '70%',
      },
    },
    {
      name: 'Fixed Planet 3',
      info: 'Information for Fixed Planet 3.',
      position: {
        x: '40%',
        y: '10%',
      },
    },
    {
      name: 'Fixed Planet 4',
      info: 'Information for Fixed Planet 4.',
      position: {
        x: '90%',
        y: '70%',
      },
    }
  ];

  const handleSiteClick = (index) => {
    setSelectedSite(satellites[index]);
    // Calculate the rotation degree to move the selected satellite on top
    const rotation = ((4 - index) * 90) % 360;
    setRotationDegree(rotation);
  };

  return (
    <div
      className="p-4 w-full -z-30"
      style={{
        backgroundImage: `url(${home_bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-color 1s', // Background color transition,
      }}
    >
      {/* Planet */}
      <div
        className="md:h-screen bg-blue-50/60 rounded h-screen flex flex-col w-full h-full text-white items-center justify-center z-10"
      >
        <div className="w-[90vw] h-[90vw] lg:w-[100vh] lg:h-full border rounded-full items-center justify-center flex z-20"
          style={{
            transform: `rotate(${rotationDegree}deg)`,
            transformOrigin: 'center center',
            transition: 'transform 0.5s ease-in-out', // Smooth transition
          }}>
          {satellites.map((site, index) => (
            <div
              key={index}
              className="w-16 h-16 absolute z-10"
              style={{
                top: site.position.y,
                left: site.position.x,
                cursor: 'pointer',
                transform: `rotate(${-rotationDegree}deg)`,
                transformOrigin: 'center center',
                transition: 'transform 0.5s ease-in-out', // Smooth transition
              }}
              onClick={() => handleSiteClick(index)}
            >
              <img src={satellite} alt="satellite" className="w-16 h-16" />
            </div>
          ))}

          {fixedPlanets.map((planet, index) => (
            <div
              key={index}
              className="w-16 h-16 absolute"
              style={{
                top: planet.position.y,
                left: planet.position.x,
                cursor: 'pointer',
                transform: `rotate(${rotationDegree}deg)`, // Apply the same rotation
                transformOrigin: 'center center',
                transition: 'transform 0.5s ease-in-out', // Smooth transition
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${PurplePlanet})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className='hidden lg:block h-0'>
        <div className="relative bottom-[90vh] left-[30vw] w-[80vh] h-[80vh] border rounded-full items-center justify-center flex z-0">
          <div className="w-[60vh] h-[60vh] border rounded-full items-center justify-center flex">
            <div className="w-[40vh] h-[40vh] border rounded-full items-center justify-center flex">
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${PurplePlanet})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        <div className="relative bottom-[150vw] left-[5vw] w-[80vw] h-[80vw] border rounded-full items-center justify-center flex z-0">
          <div className="w-[60vw] h-[60vw] border rounded-full items-center justify-center flex">
            <div className="w-[40vw] h-[40vw] border rounded-full items-center justify-center flex">
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${PurplePlanet})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div> 


      {/* Display selected Satellite info */}
      {selectedSite && (
        <div className="absolute top-1/3 left-1/4 lg:left-1/2 py-20">
          <div className="bg-gray-700 p-2 lg:p-6 rounded shadow">
            <h2>{selectedSite.name}</h2>
            <p>{selectedSite.info}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Satellite;
