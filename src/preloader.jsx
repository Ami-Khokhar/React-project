// Preloader.js
import React, { useEffect } from "react";
import './preloader.css';  // Ensure this file exists and includes the necessary styles
import { preLoaderAnim } from "./index"; // Import GSAP animation function

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim(); // Trigger animation on component mount
  }, []);

  return (
    <div className="preloader">
      <img src="src/images/logo.png" alt="Loading" className="preloader-image" />
      <div className="loading-bar"></div> {/* Sliding loading bar */}
    </div>
  );
};

export default Preloader;

