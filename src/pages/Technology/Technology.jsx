import React, { useEffect, useState } from 'react';
import tech1 from '../../assets/tech1.png';
import tech2 from '../../assets/tech2.png';
import tech3 from '../../assets/tech3.png';
import tech4 from '../../assets/tech4.png';
import tech5 from '../../assets/tech5.png';
import tech6 from '../../assets/tech6.png';
import technology from '../../assets/technology.jpg';
import { ParallaxProvider } from 'react-scroll-parallax';
import satellite from '../../assets/satellite.png';

const getRandomValue = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2) + 's';
};

const Technology = () => {
    const satellites = [...Array(20)].map((_, index) => {
        const angle = (index / 20) * 2 * Math.PI; // Equally spaced angles
        const endpointX = 40 * Math.cos(angle); // Calculate x-coordinate
        const endpointY = 47 * Math.sin(angle); // Calculate y-coordinate
        const animationDuration = getRandomValue(8, 12); // Random duration between 8s and 12s

        return (
            <div
                key={index}
                className="w-16 h-16 absolute"
                style={{
                    backgroundImage: `url(${satellite})`,
                    backgroundSize: 'cover',
                    animation: `bounce ${animationDuration} linear infinite, satellitePath${index} ${animationDuration} linear infinite`,
                    transform: `translate(${endpointX}vw, ${endpointY}vh)`,
                    zIndex: 10 + index, // Ensure proper layering
                }}
            ></div>
        );
    });



    return (
        <div className=''
            style={{
                backgroundImage: `url(${technology})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
            }}
        >
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
                {/* {satellites} */}
            </div>
            <style>
                {[...Array(20)].map((_, index) => (
                    `
                    @keyframes satellitePath${index} {
                        0% {
                            transform: translate(0, 0);
                        }
                        25% {
                            transform: translate(${(Math.random() - 0.5) * 100}vw, ${(Math.random() - 0.5) * 100}vh);
                        }
                        50% {
                            transform: translate(${(Math.random() - 0.5) * 100}vw, ${(Math.random() - 0.5) * 100}vh);
                        }
                        75% {
                            transform: translate(${(Math.random() - 0.5) * 100}vw, ${(Math.random() - 0.5) * 100}vh);
                        }
                        100% {
                            transform: translate(0, 0);
                        }
                    }
                    `
                ))}
            </style>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
            </div>
        </div>
    );
};

export default Technology;
