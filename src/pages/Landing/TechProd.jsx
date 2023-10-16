import React, { useState } from 'react';
import home_bg from '../../assets/home_bg.svg';
import homeprod1 from '../../assets/homeprod1.svg';
import homeprod2 from '../../assets/homeprod2.svg';
import homeprod3 from '../../assets/homeprod3.svg';
import homeprod4 from '../../assets/homeprod4.svg';

const TechProd = () => {
    const [bgColor, setBgColor] = useState('transparent');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleRegionHover = (color) => {
        setBgColor(color);
    };

    const productImages = {
        product1: homeprod1,
        product2: homeprod2,
        product3: homeprod3,
        product4: homeprod4,
    };


    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            {/* Our Technology */}
            <div
                className="h-screen flex flex-col justify-center items-center bg-black text-white"
                style={{ transition: 'background-color 0.3s', backgroundColor: bgColor }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 p-20 z-10">Our Technology</h1>
                <div className="w-full h-1/3 md:flex">
                    <div
                        className="w-1/3 bg-red-500"
                        onMouseEnter={() => handleRegionHover('red')}
                        onMouseLeave={() => handleRegionHover('transparent')}
                    ></div>
                    <div
                        className="w-1/3 bg-blue-500"
                        onMouseEnter={() => handleRegionHover('blue')}
                        onMouseLeave={() => handleRegionHover('transparent')}
                    ></div>
                    <div
                        className="w-1/3 bg-green-500"
                        onMouseEnter={() => handleRegionHover('green')}
                        onMouseLeave={() => handleRegionHover('transparent')}
                    ></div>
                </div>
            </div>

            {/* Our Products */}
            <div
                className="h-screen md:flex justify-center items-center bg-black text-white"
                style={{
                    backgroundImage: `url(${home_bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto p-4 px-10 md:w-3/5 md:h-2/3 rounded-xl items-center justify-center" style={{ backgroundColor: 'rgba(155, 155, 155, 0.7)' }}>
                    <h2 className="text-6xl font-bold mb-6 mt-10">Products</h2>
                    <p className="text-2xl mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui blanditiis earum dolorum in fugiat, quo voluptates eum numquam alias sequi cumque? Totam delectus incidunt assumenda repudiandae libero dolorum voluptatem!
                    </p>
                    <div className="flex mt-20">
                        <button
                            onClick={() => handleProductClick('product1')}
                            className={`text-2xl p-2 ${selectedProduct === 'product1' ? 'shadow shadow-purple-700' : ''}`}
                        >
                            <img src={homeprod1} alt="product1" className="" />
                        </button>
                        <button
                            onClick={() => handleProductClick('product2')}
                            className={`text-2xl p-2 ${selectedProduct === 'product2' ? 'shadow shadow-purple-700' : ''}`}
                        >
                            <img src={homeprod2} alt="product2" className="" />
                        </button>
                        <button
                            onClick={() => handleProductClick('product3')}
                            className={`text-2xl p-2 ${selectedProduct === 'product3' ? 'shadow shadow-purple-700' : ''}`}
                        >
                            <img src={homeprod3} alt="product3" className="" />
                        </button>
                        <button
                            onClick={() => handleProductClick('product4')}
                            className={`text-2xl p-2 ${selectedProduct === 'product4' ? 'shadow shadow-purple-700' : ''}`}
                        >
                            <img src={homeprod4} alt="product4" className="" />
                        </button>

                    </div>
                </div>
                <div className='md:w-1/3 md:rounded-lg md:overflow-hidden'>
                    {selectedProduct && (
                        <img src={productImages[selectedProduct]} alt={`${selectedProduct}`} className="w-full" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TechProd;
