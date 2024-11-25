import React from 'react';
import '../css/MSpinner.css';
//import '../css/OSpinner.css';  // Create this file next
import ol from "../ol.json"
import Lottie from "lottie-react";



const OSpinner = () => {


  return (
    <div className="Mspinner"><Lottie animationData={ol}/></div>
  );
};

export default OSpinner;
