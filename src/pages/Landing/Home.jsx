import React from 'react';

import home_bg from '../../assets/home_bg.svg';
import home1 from '../../assets/home1.svg';
import home2 from '../../assets/home2.svg';

const Home = () => {
  const vectorImage1 = {
    backgroundImage: `url(${home1})`,
    backgroundSize: 'cover',
    width: '30vh',
    height: '40vh',
    position: 'absolute',
    left: '20vh',
    top: '50vh',
  };
  const vectorImage2 = {
    backgroundImage: `url(${home2})`,
    backgroundSize: 'cover',
    width: '54vh',
    height: '50vh',
    position: 'absolute',
    left: '6vh',
    top: '42vh',
  };


  return (
    <div className='text-white text-center items-center h-screen flex flex-col p-10 md:p-40 w-full'>
      <div
        className="block absolute top-0 w-full h-screen z-0"
        style={{
          backgroundImage: `url(${home_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={vectorImage1} className='hidden md:block'></div>
        <div style={vectorImage2} className='hidden md:block'></div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-4 pt-40 md:p-20 z-10">Lorem ipsum dolor sit amet <br></br> consectetur adipisicing elit. </h1>
      <button className="bg-purple-700 hover:bg-blue-500 hover:scale-105 transition duration-200 text-white md:w-1/5 font-bold py-2 px-4 rounded z-10"> Read More </button>
    </div>
  );
};

export default Home;

