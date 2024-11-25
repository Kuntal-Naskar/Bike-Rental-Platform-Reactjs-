import React from 'react';
//import '../css/MSpinner.css';  // Create this file next
import l2 from "../l2.json"
import Lottie from "lottie-react";

import '../css/MSpinner.css';
//import '../css/OSpinner.css';  // Create this file next
//import ol from "../ol.json"



const LSpinner = () => {


  return (
    <div className="MSpinner"><Lottie animationData={l2}/></div>
  );
};

export default LSpinner;
