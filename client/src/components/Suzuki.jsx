import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import BookingForm from './BookingForm';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
//import '../css/Suzuki.css'; 
import '../css/Honda.css';
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons

const bikes = [
  { name: 'Acess 125', mileage: 50, price: 400, img: 'Acess125.png' },
  { name: 'Avenis 125', mileage: 40, price: 400, img: 'Avenis125.png' },
  { name: 'Burgman', mileage: 35, price: 600, img: 'Burgman.png' },
  { name: 'Gixxer', mileage: 40, price: 800, img: 'Gixxer.png' },
  { name: 'Gixxer SF 250', mileage: 30, price: 1100, img: 'GixxerSf250.png' },
  { name: 'VStrom 800', mileage: 15, price: 1500, img: 'Vstrom800.png' },
  { name: 'VStrom SX', mileage: 17, price: 2000, img: 'Vstromsx.png' },
  { name: 'GSX 8', mileage: 15, price: 3000, img: 'Gsx8.png' },
  { name: 'Hayabusha', mileage: 10, price: 6000, img: 'Hayabusha.png' },
];

const Suzuki = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');
  const [isBookingFormVisible, setBookingFormVisible] = useState(false);

  // Load favourites from localStorage
  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('suzukiFavourites')) || [];
      setFavourites(savedFavourites);
    } catch (error) {
      console.error("Error loading favourites from localStorage:", error);
    }
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    if (favourites.length > 0) {
      localStorage.setItem('suzukiFavourites', JSON.stringify(favourites));
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
            <source src="suzuki.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2>Welcome to Suzuki</h2>

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

export default Suzuki;
