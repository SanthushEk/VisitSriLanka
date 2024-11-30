// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Video_section from "./Components/Video_section/Video_section";
import ImageSlider from "./Components/Image_Slider/Image_slider";
import Contact_us from "./Components/Contact_us/Contact_us";
import Hotels from "./Components/Hotels/Hotels";
import Transportation from "./Components/Transpotation/Transpotation";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/About us/Aboutus";
import WhatWeOffer from "./Components/WhatWeOffer/whatweoffer";
import Destination from "./Components/Destination/Destination";
import DistrictPage from "./Components/Destination/DistrictPage"; // Import the DistrictPage component

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
              <ImageSlider />
              <Hotels />
              <Transportation />
              <Contact_us />
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
    </Router>
  );
}

export default App;
