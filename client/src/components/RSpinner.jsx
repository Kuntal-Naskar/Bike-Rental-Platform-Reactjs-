import React from 'react';
import '../css/MSpinner.css';  // Create this file next
import rloader from "../rloader.json"
import Lottie from "lottie-react";



const RSpinner = () => {


  return (
    <div className="Mspinner"><Lottie animationData={rloader}/></div>
  );
};

export default RSpinner;
