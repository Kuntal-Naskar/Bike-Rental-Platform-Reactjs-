import React,{useState} from 'react';
import '../css/MSpinner.css';  // Create this file next
import floader from "../floader.json"
import Lottie from "lottie-react";



const FSpinner = () => {


  return (
    <div className="Mspinner"><Lottie animationData={floader}/></div>
  );
};

export default FSpinner;
