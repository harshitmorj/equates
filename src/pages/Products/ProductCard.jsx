import React, { useState } from 'react';

const ProductCard = ({ title, image, details, position }) => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div>
      {/* Small Screens */}
      <div className="lg:hidden">
        <div className="justify-center items-center text-center py-10 px-2">
          <p className="text-4xl mb-4">{title}</p>
          <div className="flex flex-row justify-center">
            <img src={image} alt={title} className="w-64 mt-8 mb-8" />
          </div>
          <p className="text-xl">{details}</p>
        </div>

      </div >

      {/* Large Screens */}
      <div className="hidden lg:flex z-30">
        {/* // Large Screens - Position: left */}
        {position === 'left' && (
          <div className="hidden flex lg:block h-screen">
            <div className="relative top-[170px] left-20 xl:left-28 text-left w-1/2">
            <p className="text-5xl xl:text-8xl mb-4 py-4">{title}</p>
              <p className="text-xl">{details}</p>
            </div>
            <div className="flex flex-row justify-center w-1/3 xl:w-1/2">
              <img
                src={image}
                alt={title}
                className="relative bottom-[200px] left-[600px] xl:left-[700px] 2xl:left-[900px] w-[50vh] h-[50vh] hover:scale-110 transform transition duration-500 ease-in-out"
              />
            </div>
          </div>
        )}

        {/* // Large Screens - Position: right */}
        {position === 'right' && (
          <div className="hidden flex lg:block h-screen">
            <div className="flex">
              <div className="flex flex-row justify-center h-full w-1/3">
                <img
                  src={image}
                  alt={title}
                  className="relative top-[170px] left-[50px] xl:left-[100px] 2xl:left-[200px] w-[50vh] h-[50vh] hover:scale-110 transform transition duration-500 ease-in-out"
                />
              </div>
              <div className="relative text-left top-[170px] left-[200px] xl:left-[200px] 2xl:left-[300px] w-1/2">
                <p className="text-5xl xl:text-8xl mb-4 py-4">{title}</p>
                <p className="text-xl">{details}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductCard;
