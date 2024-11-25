import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import '../css/Tiltcard.css';
//import '../css/Review.css';
const Example = () => {
  const cardData =[
    {
      imgSrc: "p1.png",
      title: "No Riding Limits",
      description: "Odometer Won't Scare You Anymore.",
    },
    
    {
      imgSrc: "p2.png",
      title: "Freebies",
      description: "Helmets Always, Sometimes More.",
    },
  
    {
      imgSrc: "p3.png",
      title: "Test Drive",
      description: "Feel free to ride with more comfort.",
    },
  
    {
      imgSrc: "accident.png",
      title: "Safety Policy",
      description: "We provide Insurance, as your safety is our first priority.",
    },
  {
      imgSrc: "p4.png",
      title: "No Bullshit",
      description: "A Day Rent is simply for 24 hrs, We mean it.",
    },
 
    {
      imgSrc: "p5.png",
      title: "Verified Dealers",
      description: "Every Single Dealer is Committed to Quality Service.",
    },
 
    {
      imgSrc: "p6.png",
      title: "100% Moneyback",
      description: "Not Happy With Service, Take Your Money Back.",
    },
  
    {
      imgSrc: "p3.png",
      title: "Secure Payments",
      description: "Our Payment Partners are Industry Leaders.",
    },
  ];
  

  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">      
          
          <div className="row">
 {cardData.map( cardbox  => (
            <TiltCard
              key={cardbox.name}
              imgSrc={ cardbox.imgSrc}
              title={ cardbox.title}
              description={ cardbox.description}
            />
          ))}   
         </div>
          
         
            
      </div>
   
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ imgSrc, title, description }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl  "
      >

       


       <div className="cardbx">
    <img src={imgSrc} alt={imgSrc} className="cardbx-img" />
    <h4 className="card-title text-center">{title}</h4>
    <span className="card-description text-center">{description}</span>
  </div>
                
  </div>   
    </motion.div>
  );
};

export default Example;
