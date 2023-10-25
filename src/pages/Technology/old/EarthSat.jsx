import React from 'react';
import BluePlanet from '../../assets/BluePlanet.svg';
import satellite from '../../assets/satellite.png';
import tech_bg1 from '../../assets/tech_bg1.jpg';

const getRandomValue = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2) + 's';
};

const EarthSat = () => {
    const satellites = [...Array(6)].map((_, index) => {
        const angle = (index / 6) * 2 * Math.PI; // Equally spaced angles
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
        <div className="h-screen items-center flex flex-col justify-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${tech_bg1})`,
                height: '100vh',
                width: '100vw',
                backgroundBlendMode: 'multiply',
            }}
        >
            <div
                className='h-screen items-center flex flex-col justify-center relative'
                style={{
                    backgroundImage: `url(${BluePlanet})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '100vh',
                    width: '100vh',
                }}
            >
                {satellites}
            </div>
            <style>
                {[...Array(6)].map((_, index) => (
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
        </div>
    );
};

export default EarthSat;
