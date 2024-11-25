import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import BookingForm from './BookingForm';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
//import '../css/KTM.css'; // Make sure to create this CSS file
import '../css/Honda.css';
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons

const bikes = [
  { name: 'Duke125', mileage: 35, price: 600, img: '125dukeimage.png' },
  { name: 'Duke200', mileage: 30, price: 800, img: '200dukeimage.png' },
  { name: 'Duke250', mileage: 30, price: 1000, img: '250dukeimage.png' },
  { name: 'Duke390', mileage: 20, price: 1500, img: '390dukeimage.png' },
  { name: 'RC125', mileage: 35, price: 600, img: 'rc125image.png' },
  { name: 'RC200', mileage: 30, price: 800, img: 'rc200image.png' },
  { name: 'RC390', mileage: 15, price: 1500, img: '390dukeimage.png' },
  { name: 'Adventure390', mileage: 20, price: 1500, img: '390adventureimage.png' },
];

const KTM = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('ktmFavourites')) || [];
      setFavourites(savedFavourites);
    } catch (error) {
      console.error("Error loading favourites from localStorage:", error);
    }
  }, []);

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    if (favourites.length > 0) {
      localStorage.setItem('ktmFavourites', JSON.stringify(favourites));
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
            <source src="ktm.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2>Welcome to KTM</h2>

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
                    <AiFillHeart className="heart" style={{ color: 'red', fontSize: '24px' }} /> 
                  ) : (
                    <AiOutlineHeart className="heart" style={{ color: 'grey', fontSize: '24px' }} />
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

export default KTM;
