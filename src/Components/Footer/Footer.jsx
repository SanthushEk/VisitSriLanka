import React from "react";
import logo from "../../assets/Logo (2).png";
const Footer = () => {
  return (
    <footer className="bg-blue-100/80 dark:bg-gray-900 font-roboto">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex justify-right mb-6">
              <img
                src={logo}
                alt="Logo"
                className="w-200 h-20" // Adjust the size of the logo as needed
              />
            </div>
            <h1 className="max-w-lg text-sm font-roboto text-gray-800 xl:text-[16px] dark:text-white">
              "Sri Lanka: A paradise of lush greens, golden shores, and culture."
            </h1>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Home
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                About Us
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Destinations
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Plan A Trip
              </p>
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                Contact Us
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">For inquiries:</p>
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-300">Phone: (123) 456-7890</p>
              <p className="text-gray-600 dark:text-gray-300">Email: info@visitsrilanka.com</p>
              <p className="text-gray-600 dark:text-gray-300">Address: 123 Sri Lanka Ave, Colombo, Sri Lanka</p>
              <div className="flex gap-4 hover:cursor-pointer mt-10">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="tw"
                />
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
                <img
                  src="https://www.svgrepo.com/show/94698/github.svg"
                  width="30"
                  height="30"
                  alt="gt"
                />
                <img
                  src="https://www.svgrepo.com/show/22037/path.svg"
                  width="30"
                  height="30"
                  alt="pn"
                />
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="in"
                />
                <img
                  src="https://www.svgrepo.com/show/22048/dribbble.svg"
                  width="30"
                  height="30"
                  alt="db"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <p className="p-10 text-start md:text-center md:text-lg md:p-4 font-roboto text-gray-500">
          © 2024 SanthushEK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
