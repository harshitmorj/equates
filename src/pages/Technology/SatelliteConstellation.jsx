import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import satellite from '../../assets/satellite.png';
import tech_bg4 from '../../assets/tech_bg4.jpg';

const getRandomValue = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2) + 's';
};

const SatelliteConstellation = () => {
    const [satellites, setSatellites] = useState([]);

    const handleScroll = () => {
        // Get the scroll position
        const scrollY = window.scrollY;

        // Determine the number of visible satellites based on scroll position
        const visibleSatellites = Math.min(Math.floor((scrollY - 1000) / 50), 100);

        // Generate satellites
        const newSatellites = [...Array(100)].map((_, index) => {
            if (index < visibleSatellites) {
                const angle = (index / 100) * 2 * Math.PI; // Equally spaced angles
                const endpointX = 46 * Math.cos(angle); // Calculate x-coordinate
                const endpointY = 47 * Math.sin(angle); // Calculate y-coordinate
                const animationDuration = getRandomValue(5, 15); // Random duration between 8s and 12s

                return (
                    <div
                        key={index}
                        className="w-16 h-16 absolute"
                        style={{
                            backgroundImage: `url(${satellite})`,
                            backgroundSize: 'cover',
                            animation: `bounce ${animationDuration} linear infinite, satellitePath2${index} ${animationDuration} linear infinite`,
                            transform: `translate(${endpointX}vw, ${endpointY}vh)`,
                            zIndex: 10 + index, // Ensure proper layering
                        }}
                    ></div>
                );
            } else {
                return null; // Hide non-visible satellites
            }
        });

        setSatellites(newSatellites);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ParallaxProvider>
            <div className="h-screen items-center flex flex-col justify-center relative overflow-hidden"
                style={{
                    backgroundImage: `url(${tech_bg4})`,
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <div className='h-screen items-center flex flex-col justify-center relative'>
                    {satellites}
                </div>
                <style>
                    {[...Array(100)].map((_, index) => (
                        `
                    @keyframes satellitePath2${index} {
                        0% {
                            transform: translate(0, 0);
                        }
                        25% {
                            transform: translate(${46 * Math.cos((index * 8 / 100) * 2 * Math.PI)}vw, ${47 * Math.sin((index / 100) * 2 * Math.PI)}vh);
                        }
                        50% {
                            transform: translate(0, 0);
                        }
                        75% {
                            transform: translate(${-46 * Math.cos((index * 8 / 100) * 2 * Math.PI)}vw, ${-47 * Math.sin((index / 100) * 2 * Math.PI)}vh);
                        }
                        100% {
                            transform: translate(0, 0);
                        }
                    }
                    `
                    ))}
                </style>
            </div>
        </ParallaxProvider>
    );
};

export default SatelliteConstellation;
