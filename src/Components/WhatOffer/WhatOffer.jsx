import React from 'react';
import { FaHeadset, FaMapMarkedAlt, FaHotel, FaCar, FaInfoCircle } from 'react-icons/fa'; // Importing icons

const WhatOffer = () => {
  return (
    <div className="w-full py-10 bg-gray-100 font-ScopeOne">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">What Our Site Offers</h2>
        <hr className="w-20 mx-auto mt-4 border-t-4 border-yellow-500" />
      </div>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center gap-16">
        {/* 24/7 Customer Service */}
        <div className="flex flex-col items-center text-center group">
          <div className="p-6 rounded-full bg-yellow-500 text-white group-hover:bg-black group-hover:text-yellow-500 transition-all duration-300">
            <FaHeadset className="text-6xl group-hover:text-yellow-500" />
          </div>
          <p className="mt-4 font-semibold">24/7 Customer Service</p>
        </div>

        {/* Destinations */}
        <div className="flex flex-col items-center text-center group">
          <div className="p-6 rounded-full bg-yellow-500 text-white group-hover:bg-black group-hover:text-yellow-500 transition-all duration-300">
            <FaMapMarkedAlt className="text-6xl group-hover:text-yellow-500" />
          </div>
          <p className="mt-4 font-semibold">Destinations</p>
        </div>

        {/* Hotel Booking */}
        <div className="flex flex-col items-center text-center group">
          <div className="p-6 rounded-full bg-yellow-500 text-white group-hover:bg-black group-hover:text-yellow-500 transition-all duration-300">
            <FaHotel className="text-6xl group-hover:text-yellow-500" />
          </div>
          <p className="mt-4 font-semibold">Hotel Booking</p>
        </div>

        {/* Rent Vehicle */}
        <div className="flex flex-col items-center text-center group">
          <div className="p-6 rounded-full bg-yellow-500 text-white group-hover:bg-black group-hover:text-yellow-500 transition-all duration-300">
            <FaCar className="text-6xl group-hover:text-yellow-500" />
          </div>
          <p className="mt-4 font-semibold">Rent Vehicle</p>
        </div>

        {/* About Sri Lanka */}
        <div className="flex flex-col items-center text-center group">
          <div className="p-6 rounded-full bg-yellow-500 text-white group-hover:bg-black group-hover:text-yellow-500 transition-all duration-300">
            <FaInfoCircle className="text-6xl group-hover:text-yellow-500" />
          </div>
          <p className="mt-4 font-semibold">About Sri Lanka</p>
        </div>
      </div>
    </div>
  );
};

export default WhatOffer;
