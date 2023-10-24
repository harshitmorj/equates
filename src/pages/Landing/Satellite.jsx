import React, { useState } from 'react';
import home_bg2 from '../../assets/home_bg2.png';
import satellite from '../../assets/satellite.png';
import PurplePlanet from '../../assets/PurplePlanet.svg';

const Satellite = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  const sites = [
    {
      name: 'Satellite 1',
      info: 'Information for Satellite 1.',
    },
    {
      name: 'Satellite 2',
      info: 'Information for Satellite 2.',
    },
    {
      name: 'Satellite 3',
      info: 'Information for Satellite 3.',
    },
    {
      name: 'Satellite 4',
      info: 'Information for Satellite 4.',
    },
  ];

  const handleSiteClick = (index) => {
    setSelectedSite(sites[index]);
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
      <div className="md:h-screen bg-blue-50/60 rounded h-screen flex flex-col w-full h-full text-white items-center justify-center">
        <div className="w-full h-full border rounded-full items-center justify-center flex">
          {sites.map((site, index) => (
            <div
              key={index}
              className="w-16 h-16 absolute"
              style={{
                top: '50%',
                left: `${50 + 20 * Math.cos((index / 4) * 2 * Math.PI)}%`,
                cursor: 'pointer',
              }}
              onClick={() => handleSiteClick(index)}
            >
              <img src={satellite} alt="satellite" className="w-16 h-16" />
            </div>
          ))}

          <div className="w-96 h-96 border rounded-full">
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

      {/* Display selected Satellite info */}
      {selectedSite && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
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
