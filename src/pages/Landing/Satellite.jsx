import React, { useState } from 'react';
import home_bg2 from '../../assets/home_bg2.png';
import satellite from '../../assets/satellite.png';
import PurplePlanet from '../../assets/PurplePlanet.svg';
import circle from '../../assets/circle.png';




const Satellite = () => {


    return (
        <div className='p-4 w-full'
            style={{
                backgroundImage: `url(${home_bg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-color 0.3s', // Background color transition
            }}>

            {/* Planet */}
            <div
                className="md:h-screen bg-blue-50/60 rounded h-screen flex flex-col w-full h-full text-white items-center justify-center"
            >
                <div className='w-full h-full border rounded-full items-center justify-center flex'>
                    <img src={satellite} alt="satellite" className='w-16 h-16' />
                    <div className='w-96 h-96 border rounded-full items-center justify-center flex'>
                        <div className='w-80 h-80 border rounded-full'>
                            <div className='relative w-full h-full'
                                style={{
                                    backgroundImage: `url(${PurplePlanet})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Satellite;
