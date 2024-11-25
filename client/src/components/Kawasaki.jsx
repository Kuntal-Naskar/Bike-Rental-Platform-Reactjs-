import React, { useState, useEffect } from 'react';
import RMainbar from './RMainbar';
import BookingForm from './BookingForm'; // Import the BookingForm component
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../css/Honda.css';
//import '../css/Kawasaki.css'; // Make sure to create this CSS file
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons

const bikes = [
  { name: 'Ninja 300', img: 'ninja300image.png', mileage: '25 KM', price: 800 },
  { name: 'Ninja 500', img: 'ninja500image.png', mileage: '20 KM', price: 1500 },
  { name: 'Ninja 650', img: 'ninja650image.png', mileage: '15 KM', price: 2500 },
  { name: 'Ninja H2R', img: 'ninjah2rimage.png', mileage: '7 KM', price: 10000 },
  { name: 'Ninja H2 SX SE', img: 'ninjah2sxseimage.png', mileage: '5 KM', price: 8000 },
  { name: 'Ninja ZX-4R', img: 'ninjazx4rimage.png', mileage: '15 KM', price: 2000 },
  { name: 'Ninja ZX-4RR', img: 'ninjazx4rrimage.png', mileage: '15 KM', price: 2500 },
  { name: 'Ninja ZX-6R', img: 'ninjazx6rimage.png', mileage: '15 KM', price: 4000 },
  { name: 'Ninja ZX-10R', img: 'ninjazx10rimage.png', mileage: '12 KM', price: 6000 },
  { name: 'Z650', img: 'z650image.png', mileage: '15 KM', price: 2500 },
  { name: 'Z900', img: 'z900image.png', mileage: '10 KM', price: 5000 },
];

const Kawasaki = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [wishlistMessage, setWishlistMessage] = useState('');

  // Load favourites from localStorage when the component mounts
  useEffect(() => {
    try {
      const savedFavourites = JSON.parse(localStorage.getItem('kawasakiFavourites')) || [];
      setFavourites(savedFavourites);
    } catch (error) {
      console.error("Error loading favourites from localStorage:", error);
    }
  }, []);

  // Save favourites to localStorage whenever they change
  useEffect(() => {
    if (favourites.length > 0) {
      localStorage.setItem('kawasakiFavourites', JSON.stringify(favourites));
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
            <source src="kawa.mp4" type="video/mp4" />
          </video>

          <Link to="/FeatureBikes">
            <button className='back' type='button' style={{ }}>
              <IoArrowBackCircleSharp className='back-icon' style={{  }} />
            </button>
          </Link>

          <h2>Welcome to Kawasaki</h2>

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

export default Kawasaki;
