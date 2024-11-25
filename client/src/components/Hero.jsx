import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
//import '../css/Hero.css';
import '../css/Honda.css';
import { motion } from "framer-motion";

const bikes = [
  { name: 'Glamour', mileage: 60, price: 400, img: 'Glamour.png' },
  { name: 'Hero-Delux 110', mileage: 60, price: 300, img: 'Hero-Delux.png' },
  { name: 'Maestro-125', mileage: 40, price: 400, img: 'Maestro.png' },
  { name: 'Pleasure', mileage: 55, price: 300, img: 'pleasure.png' },
  { name: 'Splender Plus', mileage: 65, price: 300, img: 'Splender-pluse.png' },
  { name: 'Super Splender', mileage: 60, price: 400, img: 'Super-splender.png' },
  { name: 'Glamour Xtech', mileage: 60, price: 600, img: 'Xtech.png' },
  { name: 'Xterme 125', mileage: 50, price: 500, img: 'Xterm125.png' },
  { name: 'Xterme 160', mileage: 40, price: 700, img: 'Xtreme160.png' },
  { name: 'Xpulse 200', mileage: 30, price: 1000, img: 'Xpulse.png' },
  { name: 'XMR', mileage: 35, price: 1000, img: 'Xmr.png' },
  { name: 'XooM 160', mileage: 30, price: 800, img: 'Xoom-160.png' },
  { name: 'Karizma', mileage: 30, price: 1400, img: 'Karizma.png' },
  { name: 'Mavrick 440', mileage: 35, price: 1500, img: 'Mavrick.png' },
];

const Hero = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('heroFavourites')) || [];
      console.log("Loaded favourites from localStorage:", savedFavourites);
      setFavourites(savedFavourites);
    } catch (error) {
      console.error("Error loading favourites from localStorage:", error);
    }
  }, []);

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    if (favourites.length > 0) {
      console.log("Saving favourites to localStorage:", favourites);
      localStorage.setItem('heroFavourites', JSON.stringify(favourites));
    }
  }, [favourites]);

  const handleBookClick = (bike) => {
    setSelectedBike(bike);
  };

  const handleFavouriteClick = (bike) => {
    if (!favourites.includes(bike.name)) {
      const updatedFavourites = [...favourites, bike.name];
      setFavourites(updatedFavourites);
      setWishlistMessage(`${bike.name} added to wishlist`);
    } else {
      const updatedFavourites = favourites.filter(fav => fav !== bike.name);
      setFavourites(updatedFavourites);
      setWishlistMessage(`${bike.name} removed from wishlist`);
    }
  };

  // Clear wishlist message after 3 seconds
  useEffect(() => {
    if (wishlistMessage) {
      const timer = setTimeout(() => {
        setWishlistMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [wishlistMessage]);

  return (
    <>
      <RMainbar />
      <motion.div
      className='Honda'
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

        <section className="Honda-Bikes" id="featured">

          <video autoPlay loop muted playsInline style={{}} className="video-content">
            <source src="hero.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2>Welcome to Hero</h2>

          <div className="Bikes">
            {bikes.map((bike) => (
              <div className="Bike-Brands" key={bike.name}>
                <img src={bike.img} alt={bike.name} />
                <h4>{bike.name}</h4>
                <h6>Avg Mileage - {bike.mileage}</h6>
                <h5>Price: ₹{bike.price}/Day</h5>
                <button type="button" className="mbtn" onClick={() => handleBookClick(bike)}>
                  <p style={{ marginTop: "-7px" }}>Book</p>
                </button>
                <motion.button
                  type="button"
                  className="fav-btn"
                  onClick={() => handleFavouriteClick(bike)}
                  style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                  whileTap={{ scale: 0.9 }} // Add animation when clicked
                >
                  {favourites.includes(bike.name) ? (
                    <AiFillHeart className="heart" style={{ color: 'red', fontSize: '24px' }} />  // Filled heart when favorite
                  ) : (
                    <AiOutlineHeart className="heart" style={{ color: 'grey', fontSize: '24px' }} /> // Outline heart when not favorite
                  )}
                </motion.button>
              </div>
            ))}
          </div>

        
          {wishlistMessage && (
            <div className="wishlist-message">
              {wishlistMessage}
            </div>
          )}
        </section>
        {selectedBike && (
          <BookingForm bike={selectedBike} onClose={() => setSelectedBike(null)} />
        )}
      </motion.div>
    </>
  );
};

export default Hero;
