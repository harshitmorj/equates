import React, { useState } from 'react';
import home_bg2 from '../../assets/home_bg2.png';
import satellite from '../../assets/satellite.png';
import PurplePlanet from '../../assets/PurplePlanet.svg';

const Satellite = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [rotationDegree, setRotationDegree] = useState(0);

  const sites = [
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

  const handleSiteClick = (index) => {
    setSelectedSite(sites[index]);
    // Calculate the rotation degree to move the selected satellite on top
    const rotation = ((4 - index) * 90) % 360;
    setRotationDegree(rotation);
  };

  return (
    <div
      className="p-4 w-full"
      style={{
        backgroundImage: `url(${home_bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-color 0.3s', // Background color transition
      }}
    >
      {/* Planet */}
      <div
        className="md:h-screen bg-blue-50/60 rounded h-screen flex flex-col w-full h-full text-white items-center justify-center z-10"
      >
        <div className="w-[100vh] h-full border rounded-full items-center justify-center flex"
          style={{
            transform: `rotate(${rotationDegree}deg)`,
            transformOrigin: 'center center',
            transition: 'transform 0.5s ease-in-out', // Smooth transition
          }}>
          {sites.map((site, index) => (
            <div
              key={index}
              className="w-16 h-16 absolute"
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
          

          <div className="w-[80vh] h-[80vh] border rounded-full items-center justify-center flex">
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
      </div>

      {/* Display selected Satellite info */}
      {selectedSite && (
        <div className="absolute top-1/2 left-1/2 ">
          <div className="bg-gray-700 p-4 rounded shadow">
            <h2>{selectedSite.name}</h2>
            <p>{selectedSite.info}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Satellite;
