import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
//import '../css/BMW.css';
import '../css/Honda.css';
import { motion } from "framer-motion";

const bikes = [
  { name: 'BMW G310 RR', mileage: 20, price: 1000, img: 'bmw310rr.png' },
  { name: 'BMW C 400 GT', mileage: 18, price: 1000, img: 'bmwc400gt.png' },
  { name: 'BMW G 310 GS', mileage: 19, price: 1500, img: 'bmwg310gs.png' },
  { name: 'BMW G 310 R', mileage: 20, price: 1000, img: 'bmwg310r.png' },
  { name: 'BMW F850 GS', mileage: 10, price: 2000, img: 'bmwf850gs.png' },
  { name: 'M 1000 RR', mileage: 5, price: 7000, img: 'bmwm1000rr.png' },
  { name: 'BMW S 1000 RR', mileage: 5, price: 2500, img: 'bmws1000rr.png' },
  { name: 'BMW R 1250 GS', mileage: 4, price: 4000, img: 'bmwr1250gs.png' },
  { name: 'BMW R 1250 GS Adventure', mileage: 4, price: 6000, img: 'bmwr1250gsadv.png' },
  { name: 'BMW R 1300 GS', mileage: 5, price: 2500, img: 'bmwr1300gs.png' },
];

const BMW = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
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
            <source src="bmw.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2> Welcome to BMW</h2>

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

export default BMW;
