import React from 'react';
import ProductCard from './ProductCard';  // Import the ProductCard component
import product1_vector from '../../assets/product1_vector.svg';
import product1 from '../../assets/product1.png';
import product2_vector from '../../assets/product2_vector.svg';
import product2 from '../../assets/product2.png';
import product3_vector from '../../assets/product3_vector.svg';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';

const productData = [
  {
    title: 'Product 1: Ground to Space',
    image: product1,
    details: 'It’s a beautiful dual channel-based Ground to Space Communication Link that has bandwidth flexibilities ranging 1Gbps to as high as 10Gbps.',
    position: 'left'
  },
  {
    title: 'Product 2: Same Orbit Communication ',
    image: product2,
    details: 'A smart meshing capability induced Optical Payload for LEO – LEO Intersatellite communication but same orbit.',
    position: 'left'
  },
  {
    title: 'Product 3: Different Orbit Communication',
    image: product3,
    details: 'Big Brother to our earlier model. Induced Optical Payload for LEO – LEO Intersatellite communication but different orbit, Azimuthal.',
    position: 'right'
  },
  {
    title: 'Product 4: Multiple Higher Orbit Communication from ground to Space',
    image: product4,
    details: 'The GodFather. Can parcel your data 80000km away and back. More power, highly efficient.',
    position: 'right'
  },

];

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

const Products = () => {
  return (
    <div className="overflow-hidden">
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute" style={vectorImage1}></div>
          <div className="absolute" style={vectorImage2}></div>
          <div className="absolute" style={vectorImage3}></div>
        </div>
      </div>
      <div className="p-5 py-10">
        {productData.map((product, index) => (
          <div className="" key={index}>
            <ProductCard title={product.title} image={product.image} details={product.details} position={product.position} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
