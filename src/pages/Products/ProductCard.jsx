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
          <button className="bg-purple-500 text-black px-4 py-2" onClick={toggleCard}>
            Product Details
          </button>
        </div>
        {
          showCard && (
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-30 p-2">
              <div className="p-8 rounded-lg bg-gray-900">
                <img src={image} alt={title} className="w-64" />
                <p className="text-4xl mt-4 mb-4">{title}</p>
                <p className="text-xl">{details}</p>
                <button className="bg-purple-500 text-black px-4 py-2" onClick={toggleCard}>
                  Close
                </button>
              </div>
            </div>
          )
        }
      </div >

      {/* Large Screens */}
      <div className="hidden lg:flex z-30">
        {/* // Large Screens - Position: left */}
        {position === 'left' && (
          <div className="hidden flex lg:block h-screen">
            <div className="relative top-[170px] left-20 xl:left-28 text-left">
              <p className="text-8xl mb-4 py-4">{title}</p>
              <button className="bg-purple-500 text-black px-8 py-4" onClick={toggleCard}>
                Product Details
              </button>
            </div>
            <div className="flex flex-row justify-center">
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
              <div className="flex flex-row justify-center h-full">
                <img
                  src={image}
                  alt={title}
                  className="relative top-[170px] left-[50px] xl:left-[100px] 2xl:left-[200px] w-[50vh] h-[50vh] hover:scale-110 transform transition duration-500 ease-in-out"
                  />
              </div>
              <div className="relative text-left top-[170px] left-[200px] xl:left-[500px] 2xl:left-[800px]">
                <p className="text-8xl mb-4 py-4">{title}</p>
                <button className="bg-purple-500 text-black px-8 py-4" onClick={toggleCard}>
                  Product Details
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
      {
        showCard && (
          <div className="flex fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-30 p-2">
            <div className="flex p-8 rounded-lg bg-gray-900 w-3/4">
              <img src={image} alt={title} className="w-1/3" />
              <div className="flex flex-col justify-center items-center h-full p-20 m-0">
                <p className="text-4xl mt-4 mb-4">{title}</p>
                <p className="text-xl">{details}</p>
                <button className="bg-purple-500 text-black px-4 py-2 relative bottom-[10px] m-20"
                  onClick={toggleCard}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ProductCard;
