import React, { useState } from 'react';

const ProductCard = ({ title, image, details }) => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div>
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
  );
};

export default ProductCardM;
