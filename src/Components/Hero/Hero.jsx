import React, { useEffect, useState } from 'react';
import image1 from "../../assets/Image01.jpg";
import image2 from "../../assets/Image02.jpg";
import image3 from "../../assets/Image03.jpg";

const Hero = () => {
  const images = [image1, image2, image3];
  const messages = [
    "සාදරයෙන් පිළිගනිමු..!", 
    "வரவேற்கிறோம்..!",   
    "Welcome..!",             
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const imageIntervalID = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageIntervalID);
  }, [images.length]);

  useEffect(() => {
    const messageIntervalID = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(messageIntervalID);
  }, [messages.length]);

  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-start bg-cover bg-center relative transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title section with conditional responsive styles */}
      <div className="absolute bottom-10 left-10 text-left text-white font-sans px-4 sm:bottom-10 sm:left-10 sm:text-left sm:ml-2 sm:mb-2 md:text-left md:text-white">
        {/* Horizontal line with responsive width */}
        <hr className="w-[160px] sm:w-[460px] mb-2 border-t-4 border-[#E3B505]" />

        {/* Responsive welcome message */}
        <h1 className="text-2xl sm:text-5xl mb-5 ml-2 font-sans">
          {messages[currentMessageIndex]}
        </h1>

        <hr className="w-[160px] sm:w-[460px] mb-12 border-t-4 border-[#E3B505]" />

        {/* Responsive title sizes */}
        <h1 className="text-[60px] sm:text-[120px] leading-[30px]">
          EXPLORE
        </h1>
        <h1 className="text-[80px] sm:text-[150px] font-bold">
          Sri Lanka
        </h1>
      </div>
    </section>
  );
};

export default Hero;
