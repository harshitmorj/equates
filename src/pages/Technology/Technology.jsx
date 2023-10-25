import React, { useEffect, useState } from 'react';
import tech1 from '../../assets/tech1.png';
import tech2 from '../../assets/tech2.png';
import tech3 from '../../assets/tech3.png';
import tech4 from '../../assets/tech4.png';
import tech5 from '../../assets/tech5.png';
import tech6 from '../../assets/tech6.png';


const Technology = () => {

    return (
        <div className=''
            style={{
                // linear gradient from black to blue
                backgroundImage: 'linear-gradient(to bottom, #000000, #0000ff)',
            }}>
            <div className="h-screen"
                style={{
                    backgroundImage: `url(${tech1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
            </div>
            <div className="h-screen"
                style={{
                    backgroundImage: `url(${tech2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
            </div>
            <div className="h-screen"
                style={{
                    backgroundImage: `url(${tech3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
            </div>
            <div
                style={{
                    backgroundImage: `url(${tech4})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}>
                <div className="h-screen">
                </div>
                <div className="h-screen">
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${tech5})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}>
                <div className="h-screen">
                </div>
                <div className="h-screen">
                </div>
                <div className="h-screen">
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${tech6})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}>
                <div className="h-screen">
                </div>
                <div className="h-screen">
                </div>
                <div className="h-screen">
                </div>
            </div>
        </div>
    );
};

export default Technology;
