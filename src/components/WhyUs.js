// src/components/Hero.js
import React from 'react';
import flexibility from '../images/flexibility.png'
import management from '../images/management.png'
import support from '../images/customer-support.png'
import cars from '../images/cars.png'

const WhyUs = () => {
  return (
    <section className='p-5 md:p-20' >

<div className="flex">
  <div className='bg-white p-5 md:p-10  m-2 md:m-5 rounded-3xl'>
    <img  src={support} alt='customer support'/>
    <h2 className='text-xl md:text-3xl py-2 font-bold'>
    24/7 Dedicated Support
    </h2>
    <p className='text-md text-gray-600'>
    Count on our expert support team—available around the clock—to assist you with any queries or urgent requirements, anytime you need us.
</p>
  </div>

  <div className='bg-white p-5 md:p-10 m-2 md:m-5 rounded-3xl'>
    <img  src={flexibility} alt='flex'/>
    <h2 className='text-xl md:text-3xl py-2 font-bold'>
    Convenience & Flexibility
    </h2>
    <p className='text-md text-gray-600 '>
    Experience the ease and freedom of accessing a wide fleet of vehicles, tailored to your needs and comfort—whenever and wherever you need them.
    </p>
  </div>


  </div>
  <div className='md:flex w-full'>
  <div className='bg-white p-5 md:p-10 m-5 rounded-3xl'>
    <img  src={cars} alt='customer support'/>
    <h2 className='text-xl md:text-3xl py-2 font-bold'>
    Diverse Fleet Options

    </h2>
    <p className='text-md text-gray-600  pb-10'>
    Whether it's a budget-friendly ride or a premium executive vehicle, choose from our extensive fleet of vehicles to suit every occasion.
</p>
  </div>
  <div className='bg-white p-5 md:p-10 m-5 rounded-3xl'>
    <img  src={management} alt='customer support'/>
    <h2 className='text-xl md:text-3xl py-2 font-bold'>
    Streamlined Management

    </h2>
    <p className='text-md text-gray-600'>
    Effortlessly monitor bookings, control expenses, and analyze usage data through our integrated online booking platform—seamlessly connected with your organization’s travel desk.
</p>
  </div>
  </div>

    </section>
  );
};

export default WhyUs;