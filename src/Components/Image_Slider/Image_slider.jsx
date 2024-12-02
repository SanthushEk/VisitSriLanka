import React, { useState, useEffect } from 'react';
import Sigiriya from "../../assets/Sigiriya.jpg";
import Kandy from "../../assets/Kandy.jpg";
import Ella from "../../assets/Ella.jpg";
import Colombo from "../../assets/colombo.jpg";
import Galle from "../../assets/Galle.jpg";
import Nuwaraeliya from "../../assets/NuwaraEliya.jpg";
import Mirissa from "../../assets/Mirissa.jpg";
import Anuradhapura from "../../assets/Anuradhapura.jpg";
import Yala from "../../assets/Yala.jpg";
import Trincomalee from "../../assets/Trincomalee.jpg";

const ImageSlider = () => {
  const [items, setItems] = useState([
    { image: Sigiriya, name: 'Sigiriya', description: 'A UNESCO World Heritage site, famous for the Sigiriya Rock Fortress and stunning panoramic views' },
    { image: Kandy, name: 'Kandy', description: 'Known for the Temple of the Tooth, a significant religious site, and the beautiful Kandy Lake.' },
    { image: Ella, name: 'Ella', description: 'A charming hill town known for its picturesque views, waterfalls like Ravana Falls, and hiking trails such as Ella Rock' },
    { image: Colombo, name: 'Colombo', description: 'The bustling capital city, offering historical landmarks, beaches, shopping, and vibrant street markets.' },
    { image: Galle, name: 'Galle', description: 'A coastal city with a historic Dutch Fort, stunning beaches, and a mix of colonial architecture' },
    { image: Nuwaraeliya, name: 'Nuwara Eliya', description: 'A cool climate town, known for its tea plantations, Gregory Lake, and the picturesque Horton Plains National Park' },
    { image: Mirissa, name: 'Mirissa', description: 'A popular beach destination offering whale watching, surfing, and relaxing on golden sandy beaches' },
    { image: Anuradhapura, name: 'Anuradhapura', description: 'An ancient city with historical temples, stupas, and ruins dating back over 2,000 years' },
    { image: Yala, name: 'Yala', description: 'A famous wildlife park where you can see leopards, elephants, and various bird species.' },
    { image: Trincomalee, name: 'Trincomalee', description: 'Known for its stunning beaches like Uppuveli and Nilaveli, and the historical Koneswaram Temple' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    // Set an interval to change the slide every 5 seconds (5000ms)
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
    items[(currentIndex + 3) % items.length],
  ];

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[900px] flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${visibleItems[0].image})` }}>
      {/* Shaded overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="flex sm:space-x-5 sm:flex-row flex-col relative z-10 overflow-hidden">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? 'w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] shadow-lg relative rounded-lg overflow-hidden bg-transparent'
                : 'hidden sm:block sm:w-[200px] lg:w-[300px] sm:h-[350px] lg:h-[350px] rounded-lg overflow-hidden'
            }`}
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {index === 0 && (
              <div className="absolute inset-0 bg-black font-ScopeOne bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-5 sm:p-10 lg:p-20">
                <h2 className="text-[25px] sm:text-[40px] lg:text-[50px] font-bold mb-5 text-yellow-500">{item.name}</h2>
                <p className="text-[15px] sm:text-[20px] lg:text-[25px] font-extrabold mb-4">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-12 flex space-x-2 z-10">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-gray-400 transition"
          onClick={prevSlide}
        >
          <i className="fa-solid fa-arrow-left text-black"></i>
        </button>
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-300 rounded hover:bg-gray-400 transition"
          onClick={nextSlide}
        >
          <i className="fa-solid fa-arrow-right text-black"></i>
        </button>
      </div>

      {/* "Top 10 Destinations" Text */}
      <div className="absolute bottom-20 right-20 z-10 text-white text-right leading-tight font-ScopeOne">
        <h2 className="text-[50px] sm:text-[100px] lg:text-[150px] font-bold">Top 10</h2>
        <h3 className="sm:text-[50px] lg:text-[70px] text-yellow-500">Destinations</h3>
      </div>
      <div className="absolute top-8 left-10 right-10">
        <hr className="border-t-4 border-yellow-500 w-auto opacity-50" />
      </div>
      <div className="absolute bottom-5 left-10 right-10">
        <hr className="border-t-4 border-yellow-500 w-auto opacity-50" />
      </div>
    </div>
  );
};

export default ImageSlider;
