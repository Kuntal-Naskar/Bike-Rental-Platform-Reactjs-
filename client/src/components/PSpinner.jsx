import React from 'react';
import '../css/MSpinner.css';
//import '../css/PSpinner.css';  // Create this file next
import pl from "../pl.json"
import Lottie from "lottie-react";



const PSpinner = () => {


  return (
    <div className="Mspinner"><Lottie animationData={pl}/></div>
  );
};

export default PSpinner;
