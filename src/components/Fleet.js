import React from "react";
import premium from '../images/premium-white.png';
import luxury from '../images/luxury-white.png';
import economy from '../images/economy-white.png';
import bus from '../images/bus-2.png';

const Fleet = () => {
  return (
    <div className="py-5 md:py-20 px-6 md:px-20 lg:px-40">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-10 text-yellow-500">
        The Fleets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Premium */}
        <div className="bg-gradient-to-b from-gray-100 to-white py-5 rounded-3xl text-center shadow-md" data-aos="zoom-in">
          <h1 className="text-xl md:text-3xl pb-0 font-semibold">Premium</h1>
          <img alt="premium" src={premium} className="h-20 md:h-48 mx-auto" />
        </div>

        {/* Luxury */}
        <div className="bg-gradient-to-b from-gray-100 to-white py-5 rounded-3xl text-center shadow-md" data-aos="zoom-in">
          <h1 className="text-xl md:text-3xl pb-4 font-semibold">Luxury</h1>
          <img alt="luxury" src={luxury} className="h-20 md:h-48 mx-auto" />
        </div>

        {/* Economy */}
        <div className="bg-gradient-to-b from-gray-100 to-white py-5 rounded-3xl text-center shadow-md" data-aos="zoom-in">
          <h1 className="text-xl md:text-3xl pb-8 font-semibold">Economy</h1>
          <img alt="economy" src={economy} className="h-20 md:h-36 mx-auto" />
        </div>

        {/* Buses */}
        <div className="bg-gradient-to-b from-gray-100 to-white py-5 rounded-3xl text-center shadow-md" data-aos="zoom-in">
          <h1 className="text-xl md:text-3xl pb-6 font-semibold">Buses & Coaches</h1>
          <img alt="bus" src={bus} className="h-20 md:h-36 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Fleet;
