import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { hotels } from "../../Mockdata/hotelData";

const Hotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hotels.length]);

  const currentHotel = hotels[currentIndex];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left side: Hotel details */}
      <div className="lg:w-1/2 w-full p-6 md:p-8 bg-gray-100 flex flex-col">
        <div className="text-left leading-tight font-roboto">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[50px] font-bold text-gray-900">
            Top 10
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[30px] text-yellow-500">
            Destinations
          </h3>
          <hr className="w-32 sm:w-40 md:w-52 lg:w-[120px] border-t-4 border-[#E3B505]" />
        </div>

        {/* Hotel details section */}
        <div className="mt-4 md:mt-4 p-4 sm:p-6 w-full font-roboto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4 text-yellow-500">
            {currentHotel.name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-900 mb-2">
            <strong>Location:</strong> {currentHotel.location}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-800 mb-2">
            <strong>Rating:</strong> {currentHotel.rating}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-800">
            <strong>Description:</strong> {currentHotel.description}
          </p>
        </div>

        {/* Social media icons aligned */}
        <div className="pl-4 md:pl-8 mt-4 flex justify-start">
          <div className="p-3 sm:p-4 bg-gray-200 rounded-md flex items-center gap-3 sm:gap-5">
            <a href="#" aria-label="Facebook" className="text-xl sm:text-2xl text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="text-xl sm:text-2xl text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-xl sm:text-2xl text-pink-600 hover:text-pink-800 transition duration-300 ease-in-out transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-xl sm:text-2xl text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="YouTube" className="text-xl sm:text-2xl text-red-600 hover:text-red-800 transition duration-300 ease-in-out transform hover:scale-110">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Pinterest" className="text-xl sm:text-2xl text-red-600 hover:text-red-800 transition duration-300 ease-in-out transform hover:scale-110">
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Booking buttons */}
        <div className="p-2 md:pl-8 max-w-lg mt-2">
          <div className="flex flex-col gap-4 lg:space-y-2">
            {[
              { name: "Our Website", color: "bg-yellow-500 hover:bg-yellow-400", link: "https://example.com/our-website" },
              { name: "TripAdvisor.com", color: "bg-blue-500 hover:bg-blue-400", link: "https://www.tripadvisor.com/" },
              { name: "Booking.com", color: "bg-green-500 hover:bg-green-400", link: "https://www.booking.com/" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <h3 className="text-sm sm:text-lg md:text-2xl lg:text-lg text-gray-600">{item.name}</h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`py-1 px-4 ${item.color} text-white text-sm sm:text-base md:text-lg font-semibold rounded-md transition duration-300`}>
                  Book Now
                </a>
              </div>
            ))}
          </div>
         
        </div>
      </div>

      {/* Right side: Full-size image */}
      <div className="relative lg:w-1/2 w-full h-[300px] md:h-[400px] lg:h-full">
        <img src={currentHotel.imageUrl} alt={currentHotel.name} className="w-full h-full object-cover" />

        {/* Navigation Dots */}
        <div className="absolute bottom-2 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {hotels.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? "bg-yellow-500" : "bg-gray-300"} cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
