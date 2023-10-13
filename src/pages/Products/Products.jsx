import React from 'react';
import product1_vector from '../../assets/product1_vector.svg';
import product1 from '../../assets/product1.png';
import product2_vector from '../../assets/product2_vector.svg';
import product2 from '../../assets/product2.png';
import product3_vector from '../../assets/product3_vector.svg';
import product3 from '../../assets/product3.png';

const Products = () => {
  const vectorImage1 = {
    backgroundImage: `url(${product1_vector})`,
    backgroundSize: 'cover',
    width: '85vh',
    height: '100vh',
    position: 'absolute',
    left: '0',
    top: '10vh',
  };
  const vectorImage2 = {
    backgroundImage: `url(${product2_vector})`,
    backgroundSize: 'cover',
    width: '40vh',
    height: '120vh',
    position: 'absolute',
    right: '0',
    top: '110vh',
  };
  const vectorImage3 = {
    backgroundImage: `url(${product3_vector})`,
    backgroundSize: 'cover',
    width: '98vh',
    height: '50vh',
    position: 'absolute',
    left: '0',
    top: '220vh',
  };

  return (
    <div className="relative">
      {/* Mobile screens */}
      <div className="p-5 py-10">
        {/* Product 1 */}
        <div className="lg:hidden">
          <div className="text-left">
            <p className="text-4xl mb-4">Product no. 1</p>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="bg-purple-500 text-black px-4 py-2">Product Details</button>
          </div>
          <div className="flex flex-row justify-center">
            <img src={product1} alt="product1" className="w-64 mt-8" />
          </div>
        </div>

        {/* Product 2 */}
        <div className="lg:hidden py-10">
          <div className="text-left">
            <p className="text-4xl mb-4">Product no. 2</p>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="bg-purple-500 text-black px-4 py-2">Product Details</button>
          </div>
          <div className="flex flex-row justify-center">
            <img src={product2} alt="product2" className="w-64 mt-8" />
          </div>
        </div>

        {/* Product 3 */}
        <div className="lg:hidden py-10">
          <div className="text-left">
            <p className="text-4xl mb-4">Product no. 3</p>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="bg-purple-500 text-black px-4 py-2">Product Details</button>
          </div>
          <div className="flex flex-row justify-center">
            <img src={product3} alt="product3" className="w-64 mt-8" />
          </div>
        </div>
      </div>

      {/* Large screens */}
      <div className="hidden flex lg:block h-screen">
        <div className="absolute" style={vectorImage1}></div>
        <div className="relative top-[120px] left-20 xl:left-28 w-96 text-left">
          <p className="text-8xl mb-4 py-4">Product no. 1</p>
          <p className="text-3xl mb-4 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className="bg-purple-500 text-black px-8 py-4">Product Details</button>
        </div>
        <div className="flex flex-row justify-center">
          <img src={product1} alt="product1" className="relative bottom-[400px] left-[300px] xl:left-[400px] 2xl:left-[500px] w-1/3" />
        </div>
      </div>

      <div className="hidden lg:block h-screen">
        <div className="absolute" style={vectorImage2}></div>
        <div className="relative top-[100px] left-20 xl:left-44 w-96 2xl:w-2/5 text-left">
          <p className="text-8xl mb-4 py-4">Product no. 2</p>
          <p className="text-3xl mb-4 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className="bg-purple-500 text-black px-8 py-4">Product Details</button>
        </div>
        <div className="flex flex-row justify-center">
        <img src={product2} alt="product2" className="relative bottom-[400px] left-[300px] xl:left-[400px] 2xl:left-[500px] w-1/3" />
        </div>
      </div>

      <div className="hidden lg:block h-screen">
        <div className="absolute" style={vectorImage3}></div>
        <div className="relative top-[100px] left-[500px] lg:left-[600px] xl:left-[750px] 2xl:left-[900px] w-96 2xl:w-2/5 text-left">
          <p className="text-8xl mb-4 py-4">Product no. 3</p>
          <p className="text-3xl mb-4 py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className="bg-purple-500 text-black px-8 py-4">Product Details</button>
        </div>
        <div className="flex flex-row justify-center">
        <img src={product3} alt="product3" className="relative bottom-[400px] -left-[200px] xl:-left-[300px] 2xl:-left-[500px] w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Products;
