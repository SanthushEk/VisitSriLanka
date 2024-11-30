import React, { useState } from "react";
import Visa from "../../assets/visa.png";
import MasterCard from "../../assets/mastercard.png";
import AmericanExpress from "../../assets/Americanexpress.png";
import Bank1 from "../../assets/BOC.jpg";
import Bank2 from "../../assets/PeapleBank.png";
import Bank3 from "../../assets/SampthBank.png";
import Bank4 from "../../assets/ComercialBank.png";
import Bank5 from "../../assets/HNB.png";
import Car from "../../assets/vega.jpg";
import Bus from "../../assets/bus-image.jpg";
import Bike from "../../assets/bike.jpg";
import Tuktuk from "../../assets/tuktuk.jpg";
import Train from "../../assets/train1.jpg";
import Plane from "../../assets/plane.jpg";
import dish1 from "../../assets/dish01.jpg";
import dish2 from "../../assets/dish02.jpg";
import dish3 from "../../assets/dish3.jpg";
import dish4 from "../../assets/dish4.jpg";
import dish5 from "../../assets/dish5.jpg";
import dish6 from "../../assets/dish6.jpg";
import dish7 from "../../assets/dish7.jpg";
import dish8 from "../../assets/dish8.jpg";

const AboutUs = () => {
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center mt-28 p-6 font-roboto mb-10">
        {/* Left section with text */}
        <div className="md:w-1/2 text-left md:text-left p-6">
          <h2 className="text-xl font-semibold leading-[2px] mb-2">
            What We Need to Know About
          </h2>
          {/* Main Title */}
          <h1 className="text-[100px] font-bold mb-4 leading-tight text-yellow-400">
            Sri Lanka
          </h1>
          {/* Subtitle below the main title */}
          <p className="text-lg mb-4">
            Sri Lanka, the Pearl of the Indian Ocean, is a stunning island
            nation located in the South Asian region. Known for its rich
            cultural heritage and breathtaking landscapes, Sri Lanka offers a
            unique travel experience for adventurers and nature lovers alike.
          </p>
          <p className="text-lg mb-4">
            The island is home to lush rainforests, pristine beaches, and
            towering mountain ranges. Visitors can explore ancient temples,
            colonial architecture, and vibrant markets, all while being immersed
            in the warm hospitality of the Sri Lankan people.
          </p>
          <p className="text-lg mb-4">
            Sri Lanka is also famous for its tea plantations, diverse wildlife,
            and delicious cuisine, which combines aromatic spices and fresh
            ingredients. Whether you’re looking to relax on the beach, hike
            through the hills, or discover the country’s fascinating history,
            Sri Lanka has something to offer for everyone.
          </p>
        </div>

        {/* Right section with video */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="w-full h-[500px]">
            {/* Manually set the height of the video */}
            <iframe
              width="100%"
              height="100%" // Ensure iframe takes full height of the container
              src="https://www.youtube.com/embed/6tBgdw4cDPU"
              title="Sri Lanka Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-start p-6 font-roboto bg-yellow-500">
        {/* Left section with Currency and Payments */}
        <div className="md:w-1/2 text-left p-6">
          <h2 className="text-[30px] font-bold text-white mb-2">
            CURRENCY & PAYMENTS
          </h2>
          <hr className="my-4 border-t-2 border-gray-700" />
          <p className="text-lg mb-4">
            The local currency is Sri Lankan Rupee (LKR). Credit cards are
            accepted in major cities, but carry cash in rural areas. ATMs are
            widely available for cash withdrawals.
          </p>

          {/* Image Section for Visa, MasterCard, and American Express */}
          <div className="flex space-x-4 gap-5 mb-6">
            <img src={Visa} alt="Visa" className="w-20 h-auto" />
            <img src={MasterCard} alt="MasterCard" className="w-20 h-auto" />
            <img
              src={AmericanExpress}
              alt="American Express"
              className="w-20 h-auto"
            />
          </div>

          {/* Major Bank Section */}
          <h2 className="text-[15px] font-semibold leading-[2px] mt-5">
            Major Banks in Sri Lanka
          </h2>
          <div className="flex space-x-4 gap-5 mt-6">
            <a
              href="https://www.bank1website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={Bank1}
                alt="Bank 1"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full"></div>
              <h3 className="absolute text-white text-center w-full bottom-2 left-0 right-0 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                BOC
              </h3>
            </a>
            <a
              href="https://www.bank2website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={Bank2}
                alt="Bank 2"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full"></div>
              <h3 className="absolute text-white text-center w-full bottom-2 left-0 right-0 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Peoples
              </h3>
            </a>
            <a
              href="https://www.bank3website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={Bank3}
                alt="Bank 3"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full"></div>
              <h3 className="absolute text-white text-center w-full bottom-2 left-0 right-0 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Sampath
              </h3>
            </a>
            <a
              href="https://www.bank4website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={Bank4}
                alt="Bank 4"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full"></div>
              <h3 className="absolute text-white text-center w-full bottom-2 left-0 right-0 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Comercial
              </h3>
            </a>
            <a
              href="https://www.bank5website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={Bank5}
                alt="Bank 5"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full"></div>
              <h3 className="absolute text-white text-center w-full bottom-2 left-0 right-0 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                HNB
              </h3>
            </a>
          </div>
        </div>

        {/* Right section with Transportation */}
        <div className="md:w-1/2 mt-6 md:mt-0 p-6">
          <h2 className="text-[30px] font-bold text-white mb-2">
            TRANSPORTATION
          </h2>
          <hr className="my-4 border-t-2 border-gray-700" />
          <p className="text-lg mb-4">
            Public transport (buses, trains) is available but can be crowded.
            Tuk-tuks are a fun way to travel short distances always agree on a
            fare first! Car rentals require an International Driving Permit
            (IDP).
          </p>

          {/* Image Section 3x3 */}
          <div className="grid grid-cols-3 gap-6">
            {/* Car Image */}
            <div className="relative group">
              <img
                src={Car}
                alt="Car"
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <h3 className="text-yellow-400 text-xl border-yellow-400 p-2">
                  Car
                </h3>
              </div>
            </div>

            {/* Train Image */}
            <div className="relative group">
              <img
                src={Train}
                alt="Train"
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <h3 className="text-yellow-400 text-xl font-semibold p-2">
                  Train
                </h3>
              </div>
            </div>

            {/* Bus Image */}
            <div className="relative group">
              <img
                src={Bus}
                alt="Bus"
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <h3 className="text-yellow-400 text-xl font-semibold  p-2">
                  Bus
                </h3>
              </div>
            </div>

            {/* Bike Image */}
            <div className="relative group">
              <img
                src={Bike}
                alt="Bike"
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <h3 className="text-yellow-400 text-xl font-semibold p-2">
                  Bike
                </h3>
              </div>
            </div>

            {/* Tuktuk Image */}
            <div className="relative group">
              <img
                src={Tuktuk}
                alt="Tuktuk"
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <h3 className="text-yellow-400 text-xl font-semibold p-2">
                  Tuktuk
                </h3>
              </div>
            </div>

            {/* Plane Image */}
            <div className="relative group">
              <img
                src={Plane}
                alt="Plane"
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                <h3 className="text-yellow-400 text-xl font-semibold  p-2">
                  Plane
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cruising Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-6 font-roboto">
        {/* Left section with Cruising */}
        <div className="md:w-1/2 text-center p-6">
          <h2 className="text-[50px] font-bold">CURSING</h2>
          <hr className="my-4 border-t-2 border-gray-300 mx-auto" />
          <p className="text-lg mx-auto">
            Discover the beauty of Sri Lanka’s coastline with a relaxing cruise.
            Whether you’re looking for a romantic getaway or an adventurous
            exploration of the island's maritime heritage, there’s something for
            everyone.
          </p>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {/* Image 1 */}
          <div className="relative group">
            <img
              src={dish1}
              alt="Rise & Curry"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                Rise & Curry
              </h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <img
              src={dish2}
              alt="Kottu"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                Kottu
              </h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group">
            <img
              src={dish3}
              alt="Hoppers"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                Hoppers (Aappa)
              </h3>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group">
            <img
              src={dish4}
              alt="StringHoppers"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                StringHoppers (Idiyappa)
              </h3>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative group">
            <img
              src={dish5}
              alt="Lamprais"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                Lamprais
              </h3>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative group">
            <img
              src={dish6}
              alt=" Fish Ambul Thiyal"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                Fish Ambul Thiyal
              </h3>
            </div>
          </div>

          {/* Image 7 */}
          <div className="relative group">
            <img
              src={dish6}
              alt="SeaFood"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                SeaFood
              </h3>
            </div>
          </div>

          {/* Image 8 */}
          <div className="relative group">
            <img
              src={dish8}
              alt="Sri Lankan Sweets"
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-yellow-400 text-xl font-semibold p-2">
                Sri Lankan Sweets
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
