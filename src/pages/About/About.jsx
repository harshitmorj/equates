import React from 'react';

import logo from '../../assets/logo.jpg';

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
          <div className="bg-zinc-900 p-4 m-4 w-5/6 lg:w-3/5 md:flex justify-center text-center items-center shadow-2xl shadow-purple-700 mt-4 mb-0 relative z-20">
            <div className='flex flex-col justify-center items-center'>
              <img src={logo} alt="About Us" className="lg:p-10 p-4 max-h-[1000px]" />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-semibold mt-4">About Us</h3>
              <p className="text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, unde modi? Quae dolore, distinctio alias, sint illum inventore expedita eaque aspernatur asperiores id magni officia perspiciatis doloribus consequuntur temporibus beatae.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Card */}
        <div className="lg:mr-40 mt-20 lg:-mt-10 flex flex-col items-center lg:items-end">
          <div className="bg-zinc-900 p-4 m-4 w-5/6 lg:w-3/5 md:flex justify-center text-center items-center shadow-2xl shadow-purple-700 my-0 relative right-0 z-10 lg:pt-20">
            <h3 className="text-3xl font-semibold mt-4">Our Team</h3>
            <div className='flex flex-col md:flex-row justify-center items-center mt-4'>
              <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 m-2'>
                <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10 rounded-full border-4 border-purple-700" />
                <p className="text-gray-300 mt-4">Player 1</p>
              </div>
              <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 m-2'>
                <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10 rounded-full border-4 border-purple-700" />
                <p className="text-gray-300 mt-4">Player 2</p>
              </div>
              <div className='flex flex-col justify-center items-center bg-black rounded-md p-4 m-2'>
                <img src={logo} alt="About Us" className="h-60 p-4 lg:h-96 lg:p-10 rounded-full border-4 border-purple-700" />
                <p className="text-gray-300 mt-4">Player 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Card */}
        <div className="lg:ml-40 mt-20 lg:-mt-10 h-screen flex flex-col items-center lg:items-start">
          <div className="bg-zinc-900 p-4 m-4 w-5/6 lg:w-3/5 md:flex justify-center text-center items-center shadow-2xl shadow-purple-700 mt-0 mb-8 relative lg:pt-20">
            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl font-semibold mt-4">What We Do</h3>
              <p className="text-gray-300 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, unde modi? Quae dolore, distinctio alias, sint illum inventore expedita eaque aspernatur asperiores id magni officia perspiciatis doloribus consequuntur temporibus beatae.
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
