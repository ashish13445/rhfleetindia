// src/components/Footer.js
import React from 'react';
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className=''>
        <div className='bg-black px-5 md:px-20 py-10 text-white md:flex items-center justify-between'>
            <div className='md:w-1/2 flex flex-col items-center'>
            <img alt="logo" src={logo} className='h-20'/>
            <p className='py-5 text-md'>Unit No. 115-116, First Floor, Vikas Surya, Janak Plaza, Block C-68, Janakpuri, New Delhi-110058</p>
            <p className='text-sm'>we specialize in providing premium chauffeured car rentals (CCR) and employee transportation services (ETS) 
            tailored to meet the diverse needs of corporate clients, including Fortune 500 companies, as well as individuals,
            travel and tourism agencies, hotels, and government bodies across India. Our mission is to deliver reliable, comfortable,
            and safe transportation solutions that enhance the travel experience for our clients.</p>
            </div>
            <div className='md:w-1/4 p-10'>
                <p> +91 9871627668</p>
                <p> reservations@rhfleetindia.com</p>

            </div>
            
        </div>
    <footer className="bg-gray-900 text-white text-xl text-center p-5">
      <p>&copy; 2025 RH Fleet India Pvt. Ltd. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;