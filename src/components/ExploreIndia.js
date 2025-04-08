import React from "react";
import nagpur from '../images/nagpur.jpg';
import kolkata from '../images/kolkata.jpeg';
import mumbai from '../images/mumbai.png';
import ludhiana from '../images/ludhiana.jpg';
import delhi from '../images/delhi.jpg';

const ExploreIndia = () => {
  const cities = [
    { name: 'NAGPUR', image: nagpur },
    { name: 'KOLKATA', image: kolkata },
    { name: 'MUMBAI', image: mumbai },
    { name: 'LUDHIANA', image: ludhiana },
    { name: 'NEW DELHI', image: delhi },
  ];

  return (
    <div className="p-6 sm:p-10 md:p-20">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-8 text-yellow-500">
        Explore The Best Destinations Of India
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="relative h-48 sm:h-56 md:h-72 rounded-3xl bg-cover bg-center transition-opacity duration-300 hover:opacity-80 font-bold text-xl md:text-2xl hover:md:text-3xl"
            style={{ backgroundImage: `url(${city.image})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
              <p className="text-white text-center">{city.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreIndia;
