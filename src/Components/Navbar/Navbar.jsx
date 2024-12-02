import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link
import logo from "../../assets/Logo (2).png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To store the last scroll position
  const [visible, setVisible] = useState(true); // To track navbar visibility
  const location = useLocation(); // Get the current route

  // Determine the background color based on the current route
  const isHomePage = location.pathname === "/";
  const navBackground = isHomePage ? "bg-transparent" : "bg-[#002147]";

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll event listener to hide or show the navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    setLastScrollY(window.scrollY); // Update the last scroll position
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 ${navBackground} transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="Logo" />
        </Link>

        {/* Mobile Menu Button (Hamburger icon) */}
        <div className="flex items-center md:order-2 space-x-3">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <i className="fas fa-bars w-5 h-5"></i>
          </button>

          {/* Sign In Button */}
          <Link
            to="/signin"
            className="text-white bg-yellow-500 rounded-md py-2 px-4 md:block hover:bg-transparent font-ScopeOne text-lg font-extrabold"
          >
            Sign In
          </Link>
        </div>

        {/* Navbar Menu Items */}
        <div
          className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-ScopeOne tracking-wider text-[18px] font-extrabold p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "What We Offer", path: "/whatweoffer" },
              { name: "Destinations", path: "/destination" },
              { name: "Contact Us", path: "/contactus" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 ${
                    location.pathname === link.path
                      ? "text-yellow-500"
                      : "text-white"
                  } hover:text-yellow-500 transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
