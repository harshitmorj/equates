import React, { useEffect, useState } from 'react';
import tech_bg3 from '../../assets/tech_bg3.jpg';


const GroundSatellite = () => {
    return (
        <div className="h-screen items-center flex flex-col justify-center relative overflow-hidden"
        style={{
            backgroundImage: `url(${tech_bg3})`,
            height: '100vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
        }}>

        </div>
    );
};

export default GroundSatellite;
