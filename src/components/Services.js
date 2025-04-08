// src/components/Hero.js
import React from 'react';
import driving from '../images/driving.webp'
import shareKeys from '../images/guy_giving_key.png'
const services = () => {
  return (
    <section className='py-20 px-10 md:px-60' id="services">
 <ul className="text-md md:text-xl text-red-800 flex justify-between lg:w-1/2  ">
  <li className='bg-black py-2 pr-2 text-white w-40 m-2 text-center'>Corporates</li>
  <li className='bg-black p-2 text-white w-40 m-2 text-center'>Consulates</li>
  <li className='bg-black p-2 text-white w-40 m-2 text-center'>Hotels</li>
  <li className='bg-black p-2 text-white w-40 m-2 text-center'>FTIs</li>
</ul>
<h1 className="text-xl md:text-5xl font-bold mb-4 text-yellow-500">

Seamless Travel- Anytime , Anywhere
</h1>

<div className="">

  <div className="relative my-5 md:my-10 font-bold text-white bg-white rounded-l-3xl  overflow-hidden group">
      <span className=" absolute inset-0 w-full h-full transition-transform duration-[1000ms] ease-in-out transform translate-x-0 bg-black group-hover:translate-x-full"></span>
      <span className="relative flex  z-10 transition-colors ease-in duration-500 group-hover:text-black">
      <img src={shareKeys} alt="shareKeys" className="w-1/2 h-auto object-cover rounded-l-3xl border-r-8 border-yellow-500 "/>
    <div className='flex flex-col justify-center  p-5 '>
    <h1 className="mt-2 text-xl md:text-3xl font-bold py-5">Luxury Chauffeured Car Rentals</h1>
    <p className='text-gray-600 text-sm md:text-xl'>Experience seamless travel with our expert chauffeurs, available in pan india.</p>
    </div>
      </span>
    </div>
    <div className="relative my-10 font-bold text-white bg-white rounded-l-3xl  overflow-hidden group">
      <span className=" absolute inset-0 w-full h-full transition-transform duration-[1000ms] ease-in-out transform translate-x-0 bg-black group-hover:translate-x-full"></span>
      <span className="relative flex  z-10 transition-colors ease-in duration-500 group-hover:text-black">
      <img src={driving} alt="driving" className="w-1/2 h-auto object-cover rounded-l-3xl border-r-8 border-yellow-500"/>
    <div className='flex flex-col justify-center  p-5'>
    <h1 className="mt-2 text-xl md:text-3xl font-bold py-5">Employee Transportation Solutions</h1>
    <p className='text-gray-600 text-md md:text-xl'>Through our 24x7 multi-shift operations, we cater to the employee transportation requirements of our customers.</p>
</div>
      </span>
    </div>
  </div>

    </section>
  );
};

export default services;