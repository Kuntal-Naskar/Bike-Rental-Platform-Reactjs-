import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import BookingForm from './BookingForm';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
//import '../css/Yamaha.css'; 
import '../css/Honda.css';
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons

const bikes = [
  { name: 'RX 100', mileage: 50, price: 300, img: 'Rx100.png' },
  { name: 'Ray ZR', mileage: 45, price: 500, img: 'RayZr.png' },
  { name: 'Fascino', mileage: 40, price: 500, img: 'Fascino.png' },
  { name: 'Aerox 155', mileage: 45, price: 800, img: 'Aerox155.png' },
  { name: 'FZ-s', mileage: 35, price: 700, img: 'Fzs-S.png' },
  { name: 'FZ-X', mileage: 35, price: 900, img: 'Fz-X.png' },
  { name: 'MT 15', mileage: 35, price: 1100, img: 'Mt15.png' },
  { name: 'R15 S', mileage: 30, price: 1300, img: 'R15S.png' },
  { name: 'R15 v4', mileage: 30, price: 1500, img: 'R15v4.png' },
  { name: 'Tenere 700', mileage: 25, price: 2000, img: 'Tenere700.png' },
];

const Yamaha = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');
  const [isBookingFormVisible, setBookingFormVisible] = useState(false);

  // Load favourites from localStorage
  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('yamahaFavourites')) || [];
      setFavourites(savedFavourites);
    } catch (error) {
      console.error("Error loading favourites from localStorage:", error);
    }
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    if (favourites.length > 0) {
      localStorage.setItem('yamahaFavourites', JSON.stringify(favourites));
    }
  }, [favourites]);

  const handleBookClick = (bike) => {
    setSelectedBike(bike);
    setBookingFormVisible(true);
  };

  const handleCloseBookingForm = () => {
    setBookingFormVisible(false);
    setSelectedBike(null);
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
            <source src="yamaha.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2>Welcome to Yamaha</h2>

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

export default Yamaha;
