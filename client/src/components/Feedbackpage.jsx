import React, { useState, useEffect } from "react";
import FMainbar from './FMainbar';
import '../css/ReviewForm.css';
import FSpinner from './FSpinner';
import star from '../star.json';
//import { addUser } from "../service_sec/api.js";
import {addUserFormB } from '../service/api.js';
import Rating from "react-rating-stars-component"; 
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fthanks from "../fthanks.json";
import {useToast } from '@chakra-ui/react';
const Feedbackpage = () => {    
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        review: "",
    });
    //const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false); // State to control the success animation
    const [errors, setErrors] = useState({});
    const [rating, setRating] = useState(0);

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [review, setReview] = useState("");

    const handleNameChange = (e) => {
        const value = e.target.value.replace(/\d/g, ""); 
        setUser({ ...user, name: value });
        setName(value);
        if (errors.name) setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    };

    const handleMobileChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); 
        setUser({ ...user, mobile: value });
        setMobile(value);
        if (errors.mobile) 
            setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
    };

    const handleReviewChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, review: value });
        setReview(value);
        if (errors.review) 
            setErrors((prevErrors) => ({ ...prevErrors, review: "" }));
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        if (errors.rating) setErrors((prevErrors) => ({ ...prevErrors, rating: "" }));
    };

    
    const toast = useToast();
    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Name is required";
        }
        if (!mobile) {
            errors.mobile = "Contact number is required";
        } else if (mobile.length !== 10) {
            errors.mobile = "Phone number must be exactly 10 digits";
        }
        if (!review.trim()) {
            errors.review = "Review is required";
        }
        if (rating === 0) {
            errors.rating = "Please provide a rating";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitData = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const utterance = new SpeechSynthesisUtterance(`Thanks ${name} for your feedback.`);
            

            setSubmitted(true); 

            try {
                const response = await addUserFormB({ name, mobile, review, rating });
                if (response.status === 201) {
                    toast({
                        title: "Success!",
                        description: response.data.message,
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                    window.speechSynthesis.speak(utterance);
                    resetForm(); // Reset form after successful submission
                }
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Something went wrong. Please try again",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            }
        }
    };

    const resetForm = () => {
        setUser({ name: "", mobile: "", review: "" });
        setName("");
        setMobile("");
        setReview("");
        setRating(0);
        setErrors({});
        setSubmitted(false);
    };
    
    return (
      <>
          
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
                <video class="background-video" autoPlay
              loop
              muted
              playsInline>
                  <source src="v5.mp4" type="video/mp4"/>
                   
                </video>
                <div className="review" style={{ zIndex: '1' }}>  
                         <form style={{ }} onSubmit={submitData}>
                            <h2 style={{}}>Leave a Review</h2>                           
                                
                                    
                                <div className="form-group" isInvalid={!!errors.name}>
                                    <label htmlFor="name" style={{ color: 'white' }}>
                                      Name:
                                    </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter Your Name"
                                            value={name}
                                            onChange={handleNameChange}
                                            focusBorderColor="blue.400"
                                            required
                                        />
                                        {errors.name && (
                                          <div className="error">{errors.name}</div>
                                        )}
                                    </div>

                                   
                                    <div className="form-group" isInvalid={!!errors.mobile}>
                                        <label htmlFor="phone" style={{ color: 'white' }}>
                                        Phone Number:                                        
                                    </label>
                                        <input
                                            type="text"
                                            name="mobile"
                                            placeholder="Enter Your Mobile No."
                                            maxLength="10"
                                            value={mobile}
                                            onChange={handleMobileChange}
                                            focusBorderColor="blue.400"
                                            required
                                        />
                                        {errors.mobile && (
                                          <div className="error">{errors.mobile}</div>
                                        
                                           )}
                                    </div>

                                    
                                    <div className="form-group" isInvalid={!!errors.review}>
                                        <label htmlFor="review" style={{ color: 'white' }}>
                                        Review:                                
                                    </label>
                                        <input
                                            type="text"
                                            name="review"
                                            placeholder="Enter Your Feedback"
                                            value={review}
                                            onChange={handleReviewChange}
                                            focusBorderColor="blue.400"
                                            required
                                        />
                                        {errors.review && (
                                          <div className="error">{errors.review}</div>
                                        
                                           )}
                                    </div>

                                    
                                    <div className="form-group" isInvalid={!!errors.rating}>
                                        <label htmlFor="rating" style={{ color: 'white' }}>
                                        Rating
                                    </label>
                                        <Rating
                                            count={5}
                                            value={rating}
                                            onChange={handleRatingChange}
                                            size={30}
                                            activeColor="rgb(244, 204, 0)"
                                            edit={true}
                                            required
                                        />
                                        {errors.rating && (
                                            
                                          <div className="error">{errors.rating}</div>
                                          )}
                                    </div>
                                    <div className="btn-group">
                                    <button className="button reset" type="submit"  onClick={resetForm}>
                                    Reset
                              </button>
                              <button className="button submit" type="submit" onClick={submitData}>
                                Submit
                              </button>
                                   
                                    </div>
                                    
                                
                               
                                
                            </form>

                            {submitted}
                            <Lottie animationData={star} className="star" style={{ }} />
                         
              
                    </div>
                    
                </motion.div>
            
                
          
      </>
    );
};

export default Feedbackpage;