import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import React Icons
import video from "../../assets/video.mp4";

const Video_section = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      {/* Left Vertical Line, hidden on mobile and shown on medium screens */}
      <div className="absolute left-0 top-0 h-3/4 border-[300px] border-yellow-400 hidden md:block"></div>

      {/* Upcoming Events Section with Title and Subtitle */}
      <div className="py-10 px-4 md:px-10 text-center">
        <h2 className="text-2xl font-bold font-roboto text-[40px] mb-4 text-blue-800">Explore WONDERS</h2>
      </div>

      {/* Video Section with Centering and Play/Pause Button */}
      <div className="flex justify-center items-center mb-10 relative">
        <div className="relative w-3/4 h-auto overflow-hidden rounded-lg">
          <video 
            ref={videoRef} 
            className="object-cover w-full h-full" 
            src={video}
            autoPlay 
            loop 
            muted 
            playsInline
          >
          </video>
        </div>

        {/* Play/Pause Button with React Icon Color Change */}
        <button
          onClick={handlePlayPause}
          className="absolute text-white text-4xl font-bold bg-black bg-opacity-50 p-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {isPlaying ? <FaPause color="red" /> : <FaPlay color="blue" />} {/* Change color with React Icons prop */}
        </button>
      </div>
    </div>
  );
}

export default Video_section;
