import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/Logo (2).png";
import WhatWeOffer from "../WhatWeOffer/whatweoffer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Determine the background color based on the current route
  const isAboutUsPage = location.pathname === "/aboutus";
  const isWhatWeOffer = location.pathname === "/whatweoffer";


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav                        
      className={`absolute top-0 left-0 right-0 z-20 ${
        isAboutUsPage ? "bg-[#002147]" : "bg-transparent",
        WhatWeOffer ? "bg-[#002147]" : "bg-transparent"
      }`} // Change background color dynamically
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10" alt="Logo" />
        </a>

        {/* Mobile Menu Button (Hamburger icon) */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <i className="fas fa-bars w-5 h-5"></i>
          </button>

          {/* Sign In Button */}
          <a
            href="#"
            className="text-white bg-[#003135] rounded-md py-2 px-4 md:block hover:bg-transparent font-roboto text-lg"
          >
            Sign In
          </a>
        </div>

        {/* Navbar Menu Items */}
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-roboto text-[15px] p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white md:bg-transparent md:text-[#D6AD60] md:p-0 hover:text-[#003135]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#003135] hover:text-white md:hover:bg-transparent md:hover:text-[#003135] md:p-0 dark:text-white md:dark:hover:text-[#003135] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/whatweoffer"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#003135] hover:text-white md:hover:bg-transparent md:hover:text-[#003135] md:p-0 dark:text-white md:dark:hover:text-[#003135] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                What We Offer
              </a>
            </li>
            <li>
              <a
                href="/Destination"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#003135] hover:text-white md:hover:bg-transparent md:hover:text-[#003135] md:p-0 dark:text-white md:dark:hover:text-[#003135] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#003135] hover:text-white md:hover:bg-transparent md:hover:text-[#003135] md:p-0 dark:text-white md:dark:hover:text-[#003135] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
