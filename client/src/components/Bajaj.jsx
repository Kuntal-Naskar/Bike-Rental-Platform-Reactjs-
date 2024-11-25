import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import '../css/Honda.css';
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const bikes = [
  { name: 'Avenger', mileage: 45, price: 800, img: 'Avenger.png' },
  { name: 'CT-100', mileage: 65, price: 300, img: 'Ct-100.png' },
  { name: 'Discover-125', mileage: 60, price: 300, img: 'Discover-125.png' },
  { name: 'RS-200', mileage: 35, price: 800, img: 'Rs-200.png' },
  { name: 'Freedom', mileage: 40, price: 400, img: 'Freedom.png' },
  { name: 'NS-150', mileage: 40, price: 600, img: 'Ns-150.png' },
  { name: 'NS-125', mileage: 45, price: 400, img: 'Ns125.png' },
  { name: 'Pulsar-125', mileage: 50, price: 400, img: 'Palsure-125.png' },
  { name: 'Pulsar-200', mileage: 40, price: 600, img: 'Palsure200.png' },
  { name: 'Platina-110', mileage: 55, price: 300, img: 'Platina.png' },
  { name: 'Pulsar-150', mileage: 40, price: 500, img: 'pulsar150.png' },
  { name: 'Pulsar-220', mileage: 40, price: 600, img: 'Pulsar220.png' },
  { name: 'Dominor-400', mileage: 30, price: 1200, img: 'Dominor.png' },
];

const Bajaj = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');

  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
      console.log("Loaded favourites from localStorage:", savedFavourites);
      setFavourites(savedFavourites);
    } catch (error) {
      console.error("Error loading favourites from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (favourites.length > 0) {
      console.log("Saving favourites to localStorage:", favourites);
      localStorage.setItem('favourites', JSON.stringify(favourites));
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
            <source src="bajaj.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2>Welcome to Bajaj</h2>

          <div className="Bikes">
            {bikes.map((bike) => (
              <div className="Bike-Brands" key={bike.name}>
                <img src={bike.img} alt={bike.name} />
                <h3>{bike.name}</h3>
                <h6>Avg Mileage - {bike.mileage} KM</h6>
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
                    <AiFillHeart className="heart" style={{ color: 'red' }} />  // Filled heart when favorite
                  ) : (
                    <AiOutlineHeart className="heart" style={{ color: 'grey'  }} /> // Outline heart when not favorite
                  )}
                </motion.button>
              </div>
            ))}
          </div>

          {/* Display wishlist message if it exists */}
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

export default Bajaj;
