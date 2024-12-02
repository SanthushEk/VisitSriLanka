import React, { useEffect, useState } from 'react';
import image1 from "../../assets/Image01.jpg";
import image2 from "../../assets/Image02.jpg";
import image3 from "../../assets/Image03.jpg";
import { FaHotel, FaCar } from 'react-icons/fa'; // Importing hotel and car icons

const Hero = () => {
  const images = [image1, image2, image3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageIntervalID = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageIntervalID);
  }, [images.length]);

  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-start bg-cover bg-center relative transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title section with responsive styles */}
      <div className="absolute font-ScopeOne bottom-10 left-10 text-left text-white px-4 sm:bottom-10 sm:left-10 sm:text-left sm:ml-2 sm:mb-2 md:text-left md:text-white">
        {/* Responsive title sizes */}
        <h1 className="text-[60px] sm:text-[120px] leading-[30px]">
          EXPLORE
        </h1>
        <h1 className="text-[80px] sm:text-[150px] font-bold">
          Sri Lanka
        </h1>
      </div>      
      <div className="absolute bottom-8 left-10 right-10">
        <hr className="border-t-4 border-yellow-500 w-auto opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
