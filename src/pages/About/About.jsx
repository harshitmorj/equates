import React from 'react';

import logo from '../../assets/logo.jpg';
import james from '../../assets/james.jpg';
import suman from '../../assets/suman.jpg';
import naren from '../../assets/naren.jpg';

const AboutUs = () => {
  return (
    <div className="bg-black justify-center items-center">
      <div className="lg:h-screen flex justify-center items-center">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="lg:hidden flex justify-center items-center max-h-96">
        <img src={logo} alt="logo" className="w-full" />
      </div>

      <div className="">
        {/* About Us Card */}
        <div className="lg:ml-40 flex flex-col items-center lg:items-start">
          <div className="bg-zinc-900 p-4 m-4 w-5/6 lg:w-3/5 md:flex justify-center text-center items-center shadow-2xl shadow-purple-700 mt-4 mb-0 relative z-20 hover:scale-110 transform transition duration-500 ease-in-out hover:z-30">
            <div className='flex flex-col justify-center items-center'>
              <img src={logo} alt="About Us" className="lg:p-10 p-4 max-h-[1000px]" />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-semibold mt-4">About Us</h3>
              <p className="text-gray-300 mt-4">
                We are onto a mission to create a closed economy using space and ground lasers. olee.space currently with 4 Space Payloads leads the Indian Optical Communication Market from the front. This is step 1.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Card */}
        <div className="lg:mr-40 mt-20 lg:-mt-10 flex flex-col items-center lg:items-end">
          <div className="bg-zinc-900 p-4 m-4 w-5/6 lg:w-3/5 md:flex justify-center text-center items-center shadow-2xl shadow-purple-700 my-0 relative right-0 z-10 lg:pt-20 hover:scale-110 transform transition duration-500 ease-in-out hover:z-30">
            <h3 className="text-3xl font-semibold mt-4">Our Team</h3>
            <div className='flex flex-col md:flex-row justify-center items-center mt-4'>
              <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 m-2 w-full lg:w-2/5 h-96'>
                <img src={james} alt="About Us" className="h-60 w-full p-4 lg:h-96 lg:p-4 rounded-full border-4 border-purple-700" />
                <p className="text-gray-300 mt-4">James S (IIT-B)</p>
              </div>
              <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 m-2 w-full lg:w-2/5 h-96'>
                <img src={suman} alt="About Us" className="h-60 w-full p-4 lg:h-96 lg:p-4 rounded-full border-4 border-purple-700" />
                <p className="text-gray-300 mt-4">Suman H (KLE)</p>
              </div>
              <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 m-2 w-full lg:w-2/5 h-96'>
                <img src={naren} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-4 rounded-full border-4 border-purple-700" />
                <p className="text-gray-300 mt-4">Dr. Naren Shikarkhane (Laser Scientist, 45Yrs Ex)</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Card */}
        <div className="lg:ml-40 mt-20 lg:-mt-10 h-screen flex flex-col items-center lg:items-start">
          <div className="bg-zinc-900 p-4 m-4 w-5/6 lg:w-3/5 md:flex justify-center text-center items-center shadow-2xl shadow-purple-700 mt-0 mb-8 relative lg:pt-20 hover:scale-110 transform transition duration-500 ease-in-out hover:z-30">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-semibold mt-4">Experience Future with Us</h3>
              <p className="text-gray-300 mt-4">
                A geographically locked communication protocol using Lasers. Powerful Lasers indeed. Imagine a world so contained in a city with just our Highly Efficient Lasers. Then that city into a country. 3*10^8 m/s
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src={logo} alt="About Us" className="lg:p-10 p-4 max-h-[1000px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
