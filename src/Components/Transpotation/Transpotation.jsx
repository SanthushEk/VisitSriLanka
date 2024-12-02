import React from 'react';
import { useNavigate } from "react-router-dom";
import bus from "../../assets/bus-image.jpg";
import train from "../../assets/train.jpg"; 
import car from "../../assets/car.jpg"; 
import tuk_tuk from "../../assets/tuk tuk.jpg"; 
import bike from "../../assets/bike.jpg"; 
import van from "../../assets/van.jpg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faTrain, faCar, faBicycle, faTaxi, faVanShuttle } from '@fortawesome/free-solid-svg-icons';

const Transportation = () => {
  const handleCardClick = (destination) => {
    window.location.href = `/rent/${destination}`;
  };

  const transportationOptions = [
    { name: 'Bus', icon: <FontAwesomeIcon icon={faBus} />, link: 'bus', image: bus },
    { name: 'Train', icon: <FontAwesomeIcon icon={faTrain} />, link: 'train', image: train },
    { name: 'Car', icon: <FontAwesomeIcon icon={faCar} />, link: 'car', image: car },
    { name: 'Bike', icon: <FontAwesomeIcon icon={faBicycle} />, link: 'bike', image: bike },
    { name: 'Tuk Tuk', icon: <FontAwesomeIcon icon={faTaxi} />, link: 'tuktuk', image: tuk_tuk },
    { name: 'Van', icon: <FontAwesomeIcon icon={faVanShuttle} />, link: 'van', image: van },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-10 mb-20">
      {/* Title Section */}
      <div className="text-center font-ScopeOne mb-6 md:mb-8 mt-6 md:mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Rent Or Hire</h1>
        <div className="flex items-center justify-center mt-2">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-yellow-500">Choose your mode</h2>
        </div>
        <hr className="w-20 mx-auto mt-4 border-t-4 border-yellow-500" />

      </div>

      {/* Transportation Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10 justify-center max-w-screen-xl mx-auto">
        {transportationOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-48 md:w-56 h-48 sm:h-60 md:h-64 bg-cover bg-center text-white rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-opacity-70 transition-all relative overflow-hidden transform hover:scale-105 hover:shadow-xl group"
            style={{ backgroundImage: `url(${option.image})` }}
            onClick={() => handleCardClick(option.link)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity group-hover:opacity-75"></div>

            {/* Icon */}
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 z-10 transition-colors group-hover:text-yellow-500">
              {option.icon}
            </div>

            {/* Text */}
            <h3 className="mt-2 text-sm sm:text-base md:text-lg z-10 transition-colors group-hover:text-yellow-500">
              {option.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transportation;
