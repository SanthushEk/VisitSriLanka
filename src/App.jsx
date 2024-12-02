import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ImageSlider from "./Components/Image_Slider/Image_slider";
import Hotels from "./Components/Hotels/Hotels";
import Transportation from "./Components/Transpotation/Transpotation";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/About us/Aboutus";
import WhatWeOffer from "./Components/WhatWeOffer/whatweoffer";
import Destination from "./Components/Destination/Destination";
import DistrictPage from "./Components/Destination/DistrictPage"; // Import the DistrictPage component
import WhatOffer from "./Components/WhatOffer/WhatOffer";
import Feedback from "./Components/Feedback/Feedback";

// Scroll-to-Top Button Component
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-10 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-black hover:text-yellow-500 transition-all"
  >
    ↑
  </button>
  
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhatOffer />
              <ImageSlider />
              <Transportation />
              <Hotels />
              <Feedback />
            </>
          }
        />
        {/* Other Pages */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/destination" element={<Destination />} />

        {/* Dynamic Route for District Page */}
        <Route path="/destination/:name" element={<DistrictPage />} />

        {/* 404 Page Not Found */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Footer />
      <ScrollToTopButton /> {/* Add Scroll to Top Button */}
    </Router>
  );
}

export default App;
