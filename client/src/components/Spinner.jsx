import React from 'react';
import '../css/MSpinner.css';
//import '../css/Spinner.css';  // Create this file next
import loading from "../loading.json"
import Lottie from "lottie-react";



const Spinner = () => {


  return (
    <div className="Mspinner"><Lottie animationData={loading}/></div>
  );
};

export default Spinner;
