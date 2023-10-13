import React from 'react';

import logo from '../../assets/logo.jpg';

const AboutUs = () => {
  return (
    <div className="bg-black">
      <div className="lg:h-screen flex justify-center items-center">
        <img src={logo} alt="logo" className="w-full" />
      </div>

      <div className="mx-auto flex flex-col items-center">
        {/* About Us Card */}
        <div className="bg-zinc-900 p-4 lg:w-3/5 flex rounded items-center shadow-2xl shadow-purple-700 my-4">
          <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10" />
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-semibold mt-4">About Us</h3>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, unde modi? Quae dolore, distinctio alias, sint illum inventore expedita eaque aspernatur asperiores id magni officia perspiciatis doloribus consequuntur temporibus beatae.
            </p>
          </div>
        </div>

        {/* Our Team Card */}
        <div className="bg-zinc-900 p-4 lg:w-3/5 md:flex text-center rounded items-center shadow-2xl shadow-purple-700 my-4">
          <h3 className="text-3xl font-semibold mt-4">Our Team</h3>
          <div className='flex flex-row justify-center items-center mt-4'>
            <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 mx-2'>
              <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10 rounded-full border-4 border-purple-700" />
              <p className="text-gray-300 mt-4">Player 1</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 mx-2'>
              <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10 rounded-full border-4 border-purple-700" />
              <p className="text-gray-300 mt-4">Player 2</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 mx-2'>
              <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10 rounded-full border-4 border-purple-700" />
              <p className="text-gray-300 mt-4">Player 3</p>
            </div>
          </div>
        </div>

        {/* What We Do Card */}
        <div className="bg-zinc-900 p-4 lg:w-3/5 flex rounded items-center shadow-2xl shadow-purple-700 my-4">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-semibold mt-4">What We Do</h3>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, unde modi? Quae dolore, distinctio alias, sint illum inventore expedita eaque aspernatur asperiores id magni officia perspiciatis doloribus consequuntur temporibus beatae.
            </p>
          </div>
          <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10" />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
