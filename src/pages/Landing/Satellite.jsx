import React, { useState } from 'react';
import home_bg2 from '../../assets/home_bg2.png';
import Space from '../../assets/Space.svg';
import Space1 from '../../assets/Space(1).svg';
import Space2 from '../../assets/Space(2).svg';
import Space3 from '../../assets/Space(3).svg';




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
                className="md:h-[150vh] bg-blue-50/60 rounded h-screen flex flex-col w-full h-full text-white"
            >
                <div className='w-full h-full'
                    style={{
                        backgroundImage: `url(${Space})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
            </div>

        </div>
    );
};

export default Satellite;
