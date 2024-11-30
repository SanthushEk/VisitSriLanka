import React from "react";

const CategoryCard = ({ title, img, description, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="h-full w-full object-cover transition duration-200 group-hover:scale-110 group-hover:opacity-50"
      />

      {/* Icon at Bottom Center with Black Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 transition duration-300 group-hover:opacity-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-60 p-6 rounded-full">
          <i className={`${icon} text-yellow-400 text-6xl`}></i>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 transition duration-200 group-hover:opacity-100 flex items-center justify-center">
        <div className="text-center text-white px-4 font-roboto">
          <h3 className="mb-5 text-lg font-bold text-yellow-400">{title}</h3>
          <p className="text-base ml-5 mr-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
