import React from 'react';
import Hero from './Hero';
import Services from './Services';
import WhyUs from './WhyUs';
import ExploreIndia from './ExploreIndia';
import Fleet from './Fleet';
import GetInTouch from './GetInTouch';

const Home = () => {
  return (
    <div className="home">
        <div className='hero  w-full'>
        <Hero/> 
        </div>
        <div className='services  bg-black border-t-2 border-gray-800'>
        <Services/> 
        </div>
        <div className='fleet h-content'>
        <Fleet/> 
        </div>
       
        <div className='explore h-content bg-black'>
        <ExploreIndia/> 
        </div>
        <div className='whyUs  bg-black border-t-2 border-gray-800'>
        <WhyUs/> 
        </div>
        <div className='contact'>
        <GetInTouch/> 
        </div>
    </div>
  );
};

export default Home;