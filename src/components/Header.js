import React, { useState } from 'react';
import Logo from '../images/logo-3.png';
import { Menu, X } from 'lucide-react'; // optional: use any icon lib
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen bg-white text-black z-50 shadow-md">
      <div className="flex items-center justify-between  px-5 md:px-20  py-1">
        <div className='flex items-center'>
        <img src={Logo} alt="RH FLEET INDIA PRIVATE LIMITED" className="h-16 sm:h-20 md:mr-10" />
        <div className='sm:text-end'>
        <h1 className='font-bold text-sm md:text-lg'>RH FLEET INDIA PRIVATE LIMITED</h1>
        <p className='text-xs text-gray-800 italic'>Delivering Quality Travel Experience</p>
        </div>

        </div>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <Link to="/contact" className="hover:text-yellow-500">Contact Us</Link>
          </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 bg-white space-y-2">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <Link to="/contact" className="hover:text-yellow-500">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
