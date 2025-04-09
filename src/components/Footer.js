// src/components/Footer.js
import React from 'react';
import logo from '../images/logo-2.png'

const Footer = () => {
  return (
    <div className=''>
        <div className='bg-black px-5 md:px-20 py-10 text-white md:flex items-center justify-between'>
            <div className='md:w-1/2 flex flex-col items-center'>
            <img alt="logo" src={logo} className='h-20 md:h-40'/>
            <p className='py-5 text-md'>Office Unit No. - 115-116, First Floor, Vikash Surya, Janak Plaza, Block C6B, Janakpuri,  New Delhi - 110058
            </p>
            <p className='text-sm'>We specialize in delivering premium Chauffeured Car Rental (CCR) and Employee Transportation Services (ETS), meticulously designed to cater to the diverse requirements of corporate entities, individual clients, travel and tourism operators, hospitality establishments, and event management across India. Our commitment is to provide reliable, comfortable, and secure transportation solutions that enhance the overall travel experience and operational efficiency of our clients.
            </p>
            </div>
            <div className='md:w-1/4 p-10'>
                <p> +91 1147038297</p>
                <p>+91 9211291627</p>
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