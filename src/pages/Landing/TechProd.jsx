import React, { useState } from 'react';
import home_bg from '../../assets/home_bg.svg';
import home_bg2 from '../../assets/home_bg2.png';
import homeprod1 from '../../assets/homeprod1.svg';
import homeprod2 from '../../assets/homeprod2.svg';
import homeprod3 from '../../assets/homeprod3.svg';
import homeprod4 from '../../assets/homeprod4.svg';


const TechProd = () => {
    const [bgColor, setBgColor] = useState('transparent');
    const [selectedProduct, setSelectedProduct] = useState('product1');
    const [whiteBarStyle, setWhiteBarStyle] = useState({
        left: 0,
        width: 0,
    });
    const [hoveredRegion, setHoveredRegion] = useState(null);

    const regionInfo = {
        red: {
            title: 'Red Region',
            description: 'This is the description for the Red Region.',
        },
        blue: {
            title: 'Blue Region',
            description: 'This is the description for the Blue Region.',
        },
        green: {
            title: 'Green Region',
            description: 'This is the description for the Green Region.',
        },
    };

    const handleRegionHover = (color) => {
        setBgColor(color);
        setHoveredRegion(color);
    };

    const productImages = {
        product1: homeprod1,
        product2: homeprod2,
        product3: homeprod3,
        product4: homeprod4,
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);

        const buttonElement = document.getElementById(`button-${product}`);
        if (buttonElement) {
            const { left, width } = buttonElement.getBoundingClientRect();
            setWhiteBarStyle({ left, width });
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${home_bg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-color 0.3s', // Background color transition
            }}>
            {/* Our Technology
            <div
                className="h-screen flex flex-col justify-center items-center text-white pb-80 p-2 md:pb-40 md:pt-40"
            >
                <h1 className="text-5xl md:text-7xl font-bold z-10">
                    Our Technology
                </h1>
                <div className="relative top-[40%] w-full md:h-2/5 md:flex z-0 md:border hover:border-0">
                    <button className="md:w-1/3 w-full bg-red-500 rounded-none p-2 md:p-0">
                        <div
                            className="text-white justify-center text-center items-center p-5"
                            style={{
                                transition: 'background-color 0.3s', // Background color transition
                            }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {regionInfo.red.title}
                            </h2>
                        </div>
                    </button>
                    <button className="md:w-1/3 w-full bg-blue-500 rounded-none p-2 md:p-0">
                        <div
                            className="text-white justify-center text-center items-center p-5"
                            style={{
                                transition: 'background-color 0.3s', // Background color transition
                            }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {regionInfo.blue.title}
                            </h2>
                        </div>
                    </button>
                    <button className="md:w-1/3 w-full bg-green-500 rounded-none p-2 md:p-0">
                        <div
                            className="text-white justify-center text-center items-center p-5"
                            style={{
                                transition: 'background-color 0.3s', // Background color transition
                            }}
                        >
                            <h2 className="text-2xl md:text-4xl font-bold">
                                {regionInfo.green.title}
                            </h2>
                        </div>
                    </button>
                </div>

                <div
                    className="relative w-full h-2/5 md:flex z-10 hidden md:block"
                    style={{
                        backgroundColor: bgColor,
                        transition: 'background-color 0.3s', // Background color transition
                    }}
                >
                    <button
                        className="w-1/3 border rounded-none border-white hover:border hover:border-white hover:border-r-0"
                        style={{
                            backgroundColor: bgColor === 'red' ? 'red' : 'transparent',
                            transition: 'background-color 0.3s', // Background color transition
                        }}
                        onMouseEnter={() => handleRegionHover('red')}
                        onMouseLeave={() => handleRegionHover('transparent')}
                    >
                        {hoveredRegion === 'red' && (
                            <div
                                className="text-white justify-center text-center items-center p-5"
                                style={{
                                    transition: 'background-color 0.3s', // Background color transition
                                }}
                            >
                                <h2 className="text-2xl md:text-4xl font-bold">
                                    {regionInfo.red.title}
                                </h2>
                                <p className="text-sm md:text-lg mt-6">
                                    {regionInfo.red.description}
                                </p>
                            </div>
                        )}
                    </button>
                    <button
                        className="w-1/3 border rounded-none border-white hover:border hover:border-white hover:border-r-0 hover:border-l-0"
                        style={{
                            backgroundColor: bgColor === 'blue' ? 'blue' : 'transparent',
                            transition: 'background-color 0.3s', // Background color transition
                        }}
                        onMouseEnter={() => handleRegionHover('blue')}
                        onMouseLeave={() => handleRegionHover('transparent')}
                    >
                        {hoveredRegion === 'blue' && (
                            <div
                                className="text-white justify-center text-center items-center p-5"
                                style={{
                                    transition: 'background-color 0.3s', // Background color transition
                                }}
                            >
                                <h2 className="text-2xl md:text-4xl font-bold">
                                    {regionInfo.blue.title}
                                </h2>
                                <p className="text-sm md:text-lg mt-6">
                                    {regionInfo.blue.description}
                                </p>
                            </div>
                        )}
                    </button>
                    <button
                        className="w-1/3 border rounded-none border-white hover:border hover:border-white hover:border-l-0"
                        style={{
                            backgroundColor: bgColor === 'green' ? 'green' : 'transparent',
                            transition: 'background-color 0.3s', // Background color transition
                        }}
                        onMouseEnter={() => handleRegionHover('green')}
                        onMouseLeave={() => handleRegionHover('transparent')}
                    >
                        {hoveredRegion === 'green' && (
                            <div
                                className="text-white justify-center text-center items-center p-5"
                                style={{
                                    transition: 'background-color 0.3s', // Background color transition
                                }}
                            >
                                <h2 className="text-2xl md:text-4xl font-bold">
                                    {regionInfo.green.title}
                                </h2>
                                <p className="text-sm md:text-lg mt-6">
                                    {regionInfo.green.description}
                                </p>
                            </div>
                        )}
                    </button>
                </div>
            </div> */}

            {/* Planet */}
            <div
                className="md:h-[150vh] h-screen flex flex-col w-full h-full text-white"
            >
                <div className='w-full h-full'
                    style={{
                        backgroundImage: `url(${home_bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
            </div>

            {/* Our Products */}
            <div
                className="md:h-screen md:flex justify-center items-center text-white p-2"
            >
                <div
                    className="container mx-auto p-4 px-10 md:w-1/2 md:h-2/3 rounded-xl items-center justify-center"
                    style={{
                        backgroundColor: 'rgba(155, 155, 155, 0.7)',
                        transition: 'background-color 0.3s', // Background color transition
                    }}
                >
                    <h2 className="text-6xl font-bold mb-6 mt-10">Products</h2>
                    <p className="text-2xl mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui blanditiis earum dolorum in fugiat, quo voluptates eum numquam alias sequi cumque? Totam delectus incidunt assumenda repudiandae libero dolorum voluptatem!
                    </p>
                    <div className="flex mt-20">
                        <button
                            id="button-product1"
                            onClick={() => handleProductClick('product1')}
                            className={`text-2xl p-2 hover:border-0 border-0 ${selectedProduct === 'product1' ? '' : ''
                                }`}
                        >
                            <img src={homeprod1} alt="product1" className="" />
                        </button>
                        <button
                            id="button-product2"
                            onClick={() => handleProductClick('product2')}
                            className={`text-2xl p-2 hover:border-0 border-0 ${selectedProduct === 'product2' ? '' : ''
                                }`}
                        >
                            <img src={homeprod2} alt="product2" className="" />
                        </button>
                        <button
                            id="button-product3"
                            onClick={() => handleProductClick('product3')}
                            className={`text-2xl p-2 hover:border-0 border-0 ${selectedProduct === 'product3' ? '' : ''
                                }`}
                        >
                            <img src={homeprod3} alt="product3" className="" />
                        </button>
                        <button
                            id="button-product4"
                            onClick={() => handleProductClick('product4')}
                            className={`text-2xl p-2 hover:border-0 border-0 ${selectedProduct === 'product4' ? '' : ''
                                }`}
                        >
                            <img src={homeprod4} alt="product4" className="" />
                        </button>
                    </div>
                    <hr
                        className="white-bar absolute rounded"
                        style={{
                            left: whiteBarStyle.left + 0.25 * whiteBarStyle.width,
                            width: 0.5 * whiteBarStyle.width,
                            height: '5px',
                            background: 'white',
                            transition: 'left 0.3s, width 0.3s',
                        }}
                    />
                </div>
                <div className="md:w-2/5 md:rounded-lg md:overflow-hidden">
                    {selectedProduct && (
                        <img src={productImages[selectedProduct]} alt={`${selectedProduct}`} className="w-full h-96 md:h-full" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TechProd;
