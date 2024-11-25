import React,{useState,useEffect} from 'react';
//import RSpinner from './RSpinner';
import '../css/Review.css'; // Make sure to create this CSS file
//import BMainbar from './BMainbar';
import Lottie from "lottie-react";
import review from "../review.json"
import { motion } from "framer-motion"


const Reviewpage = () => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
          setTimeout(() => setLoading(false), 3000); // Simulate loading
        }, []);
      
        const bikesreview = [
          { name: '-Kuntal Naskar', 
            comment: "I had an amazing experience with BikeRentals! The booking process was seamless, and the bike was in excellent condition. The staff was friendly and helpful, providing a detailed map of the best cycling routes in the area. Highly recommend!",  
            image: 'image1.png' 
          },
          { name: '-Subhayan Chatterjee', 
            comment: "I enjoyed my ride, but the bike I initially reserved wasn't available, and I had to wait 30 minutes for another one. The staff was apologetic and offered a discount for the inconvenience. The bike itself was great once I got it.",
            image: 'images2.png' 
          },
          { name: '-Sujan Naskar', 
            comment: "I rented a bike for a weekend trip, and it was fantastic! The rates were very reasonable, and the bike performed perfectly on both city roads and trails. I will definitely use BikeRentals again.",  
            image: 'images3.png' 
          },
          { name: '-Rohan Mondal',
            comment:"Best bike rental service I've ever used. The customer service was top-notch, and the bike was ready to go as soon as I arrived. They even provided a helmet and lock at no extra cost. Great experience overall!", 
            image: 'images4.png' 
          },
          { name: '-MD Akram', 
            comment:"This service is noted for its affordability and quality. The service is recommended for its reliable and well-serviced bikes, making it a popular choice for both locals and tourists.",
            image: 'images5.png' 
          },
          { name: '-Subha Dey', 
            comment:"Rented a bike for a weekend trip, and it was fantastic! The bike was practically brand new and very comfortable. The rental shop was conveniently located, and the whole process was quick and easy. Highly recommend!",
            image: 'images6.png' 
          },
          { name: '-Jeet Gayen', 
            comment:"I rented a bike for a weekend trip, and it was fantastic! The rates were very reasonable, and the bike performed perfectly on both city roads and trails. I will definitely use BikeRentals again.",
            image: 'images7.png' 
          },
          { name: '-Kaustav Chakrabarty', 
            comment:"This bike rental service is a game changer. The bikes are top quality, and the app made it so easy to find and unlock bikes around the city. The staff even gave me tips on the best scenic routes. Five stars all the way!",
             image: 'images8.png' 
          },
          { name: '-Saheb Paik', 
            comment:"Couldn't have asked for a better bike rental experience. The bike was like new, and the rental process was a breeze. The staff was knowledgeable and provided excellent service. I'll be recommending BikeRentals to all my friends.",
            image: 'images9.png' 
          },
          { name: '-Saheli Gayen', 
            comment:"It was amazing! The scooty was in great condition and super easy to ride. The staff was very friendly and gave me a quick tutorial since it was my first time riding one. Highly recommend for any ladies looking for a convenient way to get around.",
             image: 'images10.png' 
          },
          { name: '-Sohini Patra', 
            comment:"They helped me get comfortable with the scooty, and it turned out to be so much fun! The scooty was easy to ride and very reliable. Great experience for any woman looking for a fun and convenient way to get around.",
             image: 'images11.jpg' 
          },
          { name: '-Sohom Banerjee',
            comment:"I had an excellent experience renting a bike from this website! The booking process was smooth and straightforward, with a great selection of bikes to choose from. The bikes were well-maintained and perfect for exploring the city.", 
            image: 'images12.png' 
          },
        ];
      
      
        const BikeCardreviews = ({ reviews}) => (
          <div className="col-lg-3 col-md-4 col-sm-12">
           
            <div className="rcard">
                <img src={reviews.image}
                alt={reviews.image} className="img-fluid" /><br />
                <h5>{reviews.name}</h5>
                  <p>{reviews.comment}</p>
                  </div>
                
          </div>
        );
            
  return (
    <>   
        <motion.div
            initial={{width:0}}
            animate={{width:"100%"}}
            exit={{x:window.innerWidth,transition:{duration: 0.1}}} >
             <section style={{}} className="Review-box">
            <div className='heading-bar'> 
              <Lottie animationData={review} className='review-icon' style={{}}/>
                <h1 style={{}}>                     
                  Our Customer's Reviews
                </h1>
            </div>
            <video class="bg-video" autoPlay
              loop
              muted
              playsInline>
                  <source src="v3.mp4" type="video/mp4"/>                   
                </video>
                  
                <div className="Customers" style={{}}>
                
                  <div className="row">
                  {bikesreview.map(reviews => (
                    <BikeCardreviews  key={reviews.name} reviews={reviews}  />
                    ))}
                  
                </div>
                </div>
       
    </section>
    </motion.div>
    
    </>
  );
};

export default Reviewpage;
