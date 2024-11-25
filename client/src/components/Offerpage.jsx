import React from 'react';

import '../css/Offerpage.css';

import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Swal from 'sweetalert2';

const Offerpage = () => {

  


  const handleCopy = () => {
    navigator.clipboard.writeText("RIDERS10").then(() => {
      Swal.fire({        title: "COUPON CODE",
text:"Copied to clipboard: RIDERS10",         showConfirmButton: false,         background: 'var(--background-color)',
color:"var(--text-color)"
});   }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <>         

    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration: 0.1}}} >

      <section className="Offer" id="featured">
        {/*<Lottie animationData={offer} style={{ zIndex: "1", height: "1000px", width: "1000px", marginLeft: "100px" }} autoplay={true} loop={false} />
       */} <div className="banner-container" style={{ }}>
          <div className="banner">
            <img src='advBanner.jpg' alt="Grab a Bike" />
            <div className="banner-content">
              <h2>Grab a Bike!</h2>
              <p>Life is short, rent the motorcycle, have a ride, live your dreams.</p>
            </div>

            <div className="Offers">
            <div className="Offerpage">          

               <div onClick={handleCopy}>
               <Link to={"/RoyalEnfield"}> <img src='enfield.jpg' alt="Offer 1" className="offer-dp" /></Link>
              </div>

              <Link to={"/FeatureBikes"}>
                <img src='independent.jpg' alt="Offer 2" className="offer-dp" />
              </Link>

              <div onClick={handleCopy}>
                <img src='monsoon.jpg' alt="Offer 3" className="offer-dp" />
              </div>

              <Link to="/EV">
                <img src='ev.jpg' alt="Offer 4" className="offer-dp" />
              </Link> 
            </div>
          </div>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default Offerpage;
