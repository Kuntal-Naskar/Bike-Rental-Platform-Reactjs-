import React from 'react';
import '../css/MSpinner.css';  // Create this file next
import speed from "../speed.json"
import Lottie from "lottie-react";



const MSpinner = () => {


  return (
    <div className="Mspinner"><Lottie animationData={speed}/></div>
  );
};

export default MSpinner;
