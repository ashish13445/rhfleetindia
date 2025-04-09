import React from 'react';
import carIcon from '../images/yellow-car-icon.png';
import heroImage from '../images/black_car.png';
import locationIcon from '../images/yellow-map-icon.png';

const Hero = () => {
  return (
    <section
      className="relative h-content md:h-screen  w-full flex  items-center justify-center md:justify-start px-6 md:px-20 lg:px-40 bg-no-repeat bg-center md:bg-right pb-20"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(255, 255, 255, 0.05) 100%), url(${heroImage})`,
        backgroundBlendMode: 'soft-light',
        backgroundSize: 'contain',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full md:w-1/2 ">
        <h1 className="text-2xl md:text-5xl font-bold mt-40 mb-6 text-transparent bg-clip-text bg-[length:200%_100%] bg-gradient-to-r from-yellow-500 to-black animate-fillText">
          Tailored Rides for Corporates, Consulates & Global Travelers
        </h1>

        <p className="text-base sm:text-lg mb-8 px-2 sm:px-0">
        We specialize in providing tailored services to a diverse range of clients including corporate, consulates, hotels, and FITs (Foreign Independent Travelers)
        </p>

        {/* Icons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-white text-lg">
          {/* <div className="flex flex-col items-center border-b sm:border-b-0 sm:border-r-2 border-yellow-600 px-6">
            <img src={carIcon} alt="car icon" className="w-16 sm:w-20 p-2" />
            <span>100+ Vehicles</span>
          </div> */}
          <div className="flex flex-col items-center px-6">
            <img src={locationIcon} alt="location icon" className="w-16 sm:w-20 p-2" />
            <span>Pan India Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
