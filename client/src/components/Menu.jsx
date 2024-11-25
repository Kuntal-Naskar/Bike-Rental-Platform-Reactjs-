import React,{useState,useEffect} from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { FaSearchLocation } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { FaMotorcycle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../css/Menu.css";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
//import chaka from "../chaka.json"
import bike from "../bike.json"
import hbike from "../hbike.json"
import cart from "../cart.json"
import loc from "../loc.json"
import mloc from "../mloc.json"
import mail from "../mail.json"

import ScrollReveal from 'scrollreveal';

import Example from './TiltCard';
import BookingForm from './BookingForm';



const Menu = () =>{


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change to your desired loading time
  }, []);

const [selectedBike, setSelectedBike] = useState(null);

  const handleBook = (bike) => {
    setSelectedBike(bike);
  };

  const handleCloseForm = () => {
    setSelectedBike(null);
  };

  const bikes = [
    { name: 'Burgman Street', mileage: 35, price: 600, image: 'burgman.png' },
    { name: 'Jupiter', mileage: 45, price: 300, image: 'jupiter.png' },
    { name: 'Activa 125', mileage: 50, price: 400, image: 'activa.png' },
    { name: 'Discover 125', mileage: 60, price: 300, image: 'discover.png' },
    { name: 'Maestro Edge', mileage: 40, price: 400, image: 'maestro.png' },
    { name: 'Honda Sp 125', mileage: 55, price: 500, image: 'sp.png' },
    { name: 'Pulsar NS 125', mileage: 45, price: 400, image: 'ns.png' },
    { name: 'Hero Xtreme 125', mileage: 50, price: 500, image: 'xtreme.png' },
    { name: 'Hero Splendor Plus', mileage: 65, price: 300, image: 'splender.png' }
  ];


  const BikeCard = ({ bike, onBook }) => (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="bcard" >
        <img
          src={bike.image}
          alt={bike.image}
          className="img-fluid"
        />
        <h4>
          {bike.name} <br />
          <h6 >Avg. Mileage: {bike.mileage}KM</h6>
        </h4>
        <button className='pbtn' type="button"  onClick={() => onBook(bike)}>
          <b ><FaRupeeSign style={{ marginTop: "-5px" }} /> {bike.price}/Day</b>
        </button>
      </div>
    </div>
  );
  
    useEffect(() => {

      const utterance = new SpeechSynthesisUtterance("welcome to riders");      
      window.speechSynthesis.speak(utterance); 

      // Create a new SpeechSynthesisUtterance instance
      /*const utterance = new SpeechSynthesisUtterance("welcome to riders");
      
      window.speechSynthesis.speak(utterance);*/
      
      // Display the SweetAlert2 popup
      /*Swal.fire({
        //position: "right",
        imageUrl: "https://i0.wp.com/i.pinimg.com/originals/17/fc/9b/17fc9b962e3ac34c1b7c54bd95a13d20.jpg?fit=960%2C960&ssl=1",
        imageWidth: "200px",
        imageHeight: "200px",
        title: "Riders",
        text: "We provide all kind of motorcycles for city, cruising & off-roading also.",
        timer: 5000,
        background: 'var(--background-color)',
        showConfirmButton: false,
        color: "black",
        width: "300px",
      });*/
      const sr = ScrollReveal({
        origin: 'top',
        distance: '300px',
        duration: 2000,
        delay: 200,
        reset: false, 
      });
  
      sr.reveal('.image', { interval: 200 });
  
    
      return () => {
        sr.destroy();
      };
      
    }, []);
    

   

        

       
           const service=()=>{
            Swal.fire({
                position: "center",
                imageUrl:"https://i0.wp.com/i.pinimg.com/originals/17/fc/9b/17fc9b962e3ac34c1b7c54bd95a13d20.jpg?fit=960%2C960&ssl=1",
                imageWidth:"300px",
                imageHeight:"300px",
                title: "Riders",
                text: "We provide all kind of motorcycles for city, cruising & off-roading also.",
                timer: 10000,
                background:' var(--background-color)',
                showConfirmButton: false,
                color:"black",
                width:"400px",
              });
               }
               const [text] = useTypewriter({
                words:["bike!", "adventure!", "exploration!", "freedom!"],
                loop:{},
                typeSpeed:120,
                deleteSpeed:80,
                delaySpeed:1000,
                });
    return( 
      <>
       
      <div className="main">
       <div id="home" className='home'>
          <video autoPlay loop muted playsInline className="video-content1">
            <source src="v1.mp4" type="video/mp4" />
          </video>
         <div className="container-fluid1">
        
           
                  <div className="sub-cont1">
                      <h1 className="typing-text" >
                      Discover the city by{''}
                      <span style={{color:"var(--text-color)"}}> {text}</span>
                      <span style={{color:'var(--background-color)'}}><Cursor/></span>
                      </h1>
                   
                    <h1 className="glowing-text">Bike & Scooter Rental System</h1>
                    <img className="image" src="logo3.png"/>
                   
                    <h2 className="text-line">
                    RENT BIKES IN KOLKATA
                    </h2>
                    
                    <Link to={"/FeatureBikes"}>
                  <button className='botam2' type="submit">
                 <FaSearchLocation  />
                  Find Bike</button></Link>
                  </div>
          </div>
        </div>
      
       <div className="benifits">
      <div className="slide-in" >
          <Lottie className="icon" style={{}}animationData={bike}/>
                </div>                
                <div className="bar1" >
                  <h1>
                    Benefits of Choosing <b>Self Drive Bike </b> in Kolkata
                  </h1>
                </div>
                <div className='area'>
                <Example/>
                </div>
                
               

      </div>
    
      <div className="experience">
        <div className="bar">
          <h1 className="bar-title">
          
              <IoIosPeople  className="scale-text"/>
              <span> </span> CUSTOMER EXPERIENCES
            
          </h1>
        </div>

        <video autoPlay loop muted playsInline className="video-content1">
          <source src="v2.mp4" type="video/mp4" />
        </video>

        <div className="reviews-container">
          <div className="container-fluid2">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="ecard">
                  <h4 className="review-title">RenTrip Gonna be My First Choice Forever</h4>
                  <span className="review-text">
                
                  It has been an awesome experience for me when I got to roam places like Dipor Bil, Kamakhya Temple, 
                Umanadna temple and many more places on my way to Dispur. Before I started the journey I wasn't sure
                I would get chance to visit and these all beautiful places....yeah they truly are..... Coz i wasn't 
                acquainted there and I wasn't having the confidence to even think of visiting these many places. 
                It was so affordable and friendly that no one can even imagine unless gives a shot to RenTrip. 
                Once again I recommend to all my dear bike lovers to go for RenTrip.                                  
                <p className="review-author">- David</p>
                </span>
                
                  <img src="m3.jpeg" alt="David's experience" className="review-image" />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="ecard">
                  <h4 className="review-title">Rentrip to ASSAM and MEGHALAYA!</h4>
                  <span className="review-text">
                  We had booked two bikes (Pulsar 180 & 150) for my ASSAM and MEGHALAYA trip 
                from Rentrip Guwahati. The bikes were very well maintained and perfectly
                clean when they handed the key. So no trouble with the bike at any place...
                  Which made the whole trip tension free. Even the bike renting was so easy 
                  within 30 min all formalities were over All the staffs of Rentrip were very
                  cooperative. I'd be happy... to rent from them again & I would recommend
                    anybody who wants to feel the roads of ASSAM and MEGHALAYA by self-driving 
                    go for Rentrip.
                    <p className="review-author">- Michle</p>
                </span>
              
                
                  <img src="m2.jpeg" alt="Michle's experience" className="review-image" />
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="ecard">
                  <h4 className="review-title">Leading motorbike rental service providers!</h4>
                  <span className="review-text">
                  Road trips would not have been exciting if there were no Rentrip bike rental 
                company. One of the leading motorbike rental service providers in India, 
                Rentrip offers a diversified range of two-wheelers for short and long rides
                on an daily and monthly basis. You can rent bikes for road trips from Delhi 
                to Manali, Bangalore to Goa, Mumbai to Pune, Mumbai to Goa, Delhi to Udaipur,
                  Delhi to Rishikesh, Udaipur to Jaisalmer and likes.Rentrip makes it possible for bike enthusiasts to embark on memorable road trips across some of India's most scenic and popular routes. 
                
                  <p className="review-author">- Randeeep</p>
                </span>
            
                
                
                  <img src="m1.jpg" alt="Randeeep's experience" className="review-image" />
                </div>
              </div>

              <div className="check-all-reviews">
                <Link to={'/Review'}>
                  <button className="botam3" type="submit">
                    <b>Check all reviews <VscFeedback /></b>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bike-rental" >
              <div className="bar4" >
                <h1 className='bar-title'>
                  Popular Models in KOLKATA<span> </span> <FaMotorcycle />
                </h1>
              </div>
              <div  className="blbotam" >
                <button onClick={service}>
                know more<MdOutlineDataSaverOn />
                </button>
              </div>              
              <div className="container-fluid4" >
                <div className="row">
                    {bikes.slice(0, 3).map(bike => (
                    <BikeCard key={bike.name} bike={bike} onBook={handleBook} />
                    ))}
                </div>
                <br /><br />
                <div className="row">
                  {bikes.slice(3, 6).map(bike => (
                  <BikeCard key={bike.name} bike={bike} onBook={handleBook} />
                  ))}
                </div>
                <br /><br />
                <div className="row" >
                  {bikes.slice(6, 9).map(bike => (
                  <BikeCard key={bike.name} bike={bike} onBook={handleBook} />
                  ))}
                </div>
              </div>
              {selectedBike && (
          <BookingForm bike={selectedBike} onClose={() => setSelectedBike(null)} />
        )}
      </div>
  
    
              <div className="section5" >
                  <div className="bar2"  >
                    <h1  className='bar-title'>
                    How to Rent a Bike in Kolkata ?
                    </h1>
                  </div>
               
                  <div  className="container-fluid5 ">
                    <div className="row" >
                      <div  className="col-lg-3 col-md-4 col-sm-12" >
                        <div className="anicard" >
                          <Link to={"/FeatureBikes"}> 
                            <Lottie animationData={hbike} style={{height:"300px",width:"300px",marginTop:"-35px"}}/>
                          </Link> 
                          <h4><b>1. </b> Select Your Bike</h4>                           
                          <span>You can search & select bike from our wide range. </span>                           
                        </div>
                      </div>
                     <div  className="col-lg-3 col-md-4 col-sm-12" >
                        <div className="anicard" >                          
                            <Lottie  animationData={cart} style={{height:"240px",width:"240px"}}/>
                            <br/>
                            <h4><b>2. </b> Add to Cart </h4>                      
                            <span>Easily add multiple bike in your cart or direct book from "BookNow" button. </span>
                          </div>
                        </div>                        
                      <div  className="col-lg-3 col-md-4 col-sm-12" >
                        <div className="anicard" >                          
                            <Lottie  a animationData={loc} style={{height:"240px",width:"240px"}}/>
                            <br/>
                            <h4><b>3. </b> Pick Your Bike </h4>
                            <span>  Find the pickup location and pick a bike.</span>
                        </div>
                      </div> 
                      <div  className="col-lg-3 col-md-4 col-sm-12" >
                        <div className="anicard" >                          
                            <Lottie  a animationData={mloc} style={{height:"300px",width:"300px",marginTop:"-35px"}}/>
                            <h4><b>4. </b> Ride Anywhere</h4>                             
                            <span>We do not have kms limit.</span>
                        </div>
                      </div> 
                      <br/>
                      <div className='contact'>
                      <hr/> 
                       
                        <h1>Contact Us<hr/></h1>
                      </div>
                    </div> 
                  </div>  
              </div>    
     
          <div  className="bar3" id="contact" >    
          <div  className="email">
          <Lottie animationData={mail} className="mail" /> 
          <h2>Mail Us: riders777@gmail.com</h2>
          </div>    
             
            
          
            <div className='link-si'>
                <button  className ="sm" type="submit" >
                <a href="https://www.facebook.com/share/itW4tLgQAynZtVQ9/?mibextid=qi2Omg">
                  <FaFacebook  style={{marginLeft:"-1px",marginTop:"-3px"}}/>
                </a>
              </button>
              <button className ="sm" type="submit" >
                <a href="https://www.instagram.com/riders7772024?igsh=ZnNpdzEzZTAwcG56">
                  <FaInstagramSquare style={{ marginTop:"-3px",marginLeft:"-1px",color:"#FF5733"}}/>
                </a>
              </button>
              <button className ="sm" type="submit" >
                <a href="https://x.com/Cristiano">
                  <FaXTwitter style={{color:"black"}} />
                </a>
              </button>
             
              
            </div>
            <span >@Riders777</span>
          </div>
        </div>
            </>
        
    )
}




export default Menu
