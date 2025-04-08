import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { Menu, X } from 'lucide-react'; // optional: use any icon lib
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen bg-black text-white z-50 shadow-md">
      <div className="flex items-center justify-between md:justify-start px-6  py-3">
        <img src={Logo} alt="RH FLEET INDIA PRIVATE LIMITED" className="h-12 md:mr-20" />

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-white focus:outline-none"
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
        <div className="md:hidden flex flex-col items-start px-6 pb-4 bg-black space-y-2">
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="/contact" className="hover:text-yellow-500">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Header;
