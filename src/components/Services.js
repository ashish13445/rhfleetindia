// src/components/Hero.js
import React from 'react';
import driving from '../images/driving.webp'
import shareKeys from '../images/guy_giving_key.png'
const services = () => {
  return (
    <section className='py-20 px-10 md:px-60' id="services">
 <ul className="text-md md:text-xl text-red-800 flex justify-between lg:w-1/2  ">
  <li className='bg-black  text-white w-40 m-2 '>Corporates</li>
  <li className='bg-black  text-white w-40 m-2'>Consulates</li>
  <li className='bg-black  text-white w-40 m-2 text-center'>Hotels</li>
  <li className='bg-black  text-white w-40 m-2 '>FITs</li>
</ul>
<h1 className="text-xl md:text-5xl font-bold mb-4 text-yellow-500">

Seamless Travel- Anytime , Anywhere
</h1>

<div className="flex">

  <div className="relative my-5 md:my-10  font-bold text-white bg-white rounded-l-3xl  overflow-hidden group w-1/2 mr-5 md:mr-10" >
      <span className=" absolute inset-0 w-full h-full transition-transform duration-[1000ms] ease-in-out transform translate-x-0 bg-black group-hover:translate-x-full"></span>
      <span className="relative   z-10 transition-colors ease-in duration-500 group-hover:text-black">
      <img src={shareKeys} alt="shareKeys" className="h-40 md:h-60 w-full object-cover rounded-tl-3xl border-b-8 border-yellow-500 "/>
    <div className='flex flex-col justify-center  p-1 md:p-5 '>
    <h1 className="mt-2 text-md md:text-3xl font-bold ">Luxury Chauffeured Car Rentals</h1>
    <p className='text-gray-600 text-sm md:text-lg font-light pb-3'>Experience seamless travel with our expert chauffeurs, available in pan india.</p>
    </div>
      </span>
    </div>
    <div className="relative my-5 md:my-10 font-bold text-white bg-white rounded-l-3xl  overflow-hidden group w-1/2">
      <span className=" absolute inset-0 w-full h-full transition-transform duration-[1000ms] ease-in-out transform translate-x-0 bg-black group-hover:translate-x-full"></span>
      <span className="relative   z-10 transition-colors ease-in duration-500 group-hover:text-black">
      <img src={driving} alt="driving" className="h-40 md:h-60 w-full object-cover rounded-tl-3xl border-b-8 border-yellow-500"/>
    <div className='flex flex-col justify-center p-1 md:p-5'>
    <h1 className="mt-2 text-md md:text-3xl font-bold ">Employee Transportation Solutions</h1>
    <p className='text-gray-600 text-sm md:text-lg font-light pb-3'>Through our 24*7 multi shift operations, we cater the employee transportation services (ETS) to our customers</p>
</div>
      </span>
    </div>
  </div>

    </section>
  );
};

export default services;