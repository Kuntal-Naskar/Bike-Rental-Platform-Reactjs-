import React,{useState,useEffect} from 'react';
//import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import '../css/FeatureBikes.css';
//import RMainbar from './RMainbar';




const Brands = () => {

  
  const honda =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to HONDA');
  window.speechSynthesis.speak(useEffect);
    
}

  const hero =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to HEERO');
  window.speechSynthesis.speak(useEffect); 
  }
  const bajaj =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to baajaj');
  window.speechSynthesis.speak(useEffect); 
  }
  const re =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to Royal Enfield');
  window.speechSynthesis.speak(useEffect); 
  }

  const tvs =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to TVS');
  window.speechSynthesis.speak(useEffect); 
  }

  const suzuki =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to SUZUKI');
  window.speechSynthesis.speak(useEffect); 
  }

  const kawasaki =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to KAWASAKI');
  window.speechSynthesis.speak(useEffect); 
  }

  const yamaha =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to YAAMAHA');
  window.speechSynthesis.speak(useEffect); 
  }

  const bmw =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to BMW');
  window.speechSynthesis.speak(useEffect);
  }
  const ev =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to EV');
  window.speechSynthesis.speak(useEffect); 
  }

  const ktm =()=>{
    const useEffect = new SpeechSynthesisUtterance('welcome to KTM');
  window.speechSynthesis.speak(useEffect); 
 }
  return (
    <>   

       
    <section className="Brands" id="featured">
     <video  autoPlay playsInline className="video-content">
        <source src="v4.mp4" type="video/mp4" />
      </video>
    
      <div className="brand-text">
      <h2 >Brands</h2>
      </div>
   
    <div className="Bike">
        <div className="Bike-Brand">
        <Link to="/Honda">
          <img src={"Honda.png"} onClick={honda}  alt="Honda" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Hero">
          <img src={"Hero.png"} onClick={hero} alt="Hero" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Tvs">
          <img src={"Tvs.png"}  onClick={tvs} alt="Tvs" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Bajaj">
          <img src={"Bajaj.png"} onClick={bajaj} alt="Bajaj" />
          
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Yamaha">

          <img src={"Yamaha.png"} onClick={yamaha} alt="Yamaha" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Suzuki">

          <img src={"Suzuki.png"}    onClick={suzuki} alt="Suzuki" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/RoyalEnfield">

          <img src={"Royal_Enfield.png"} onClick={re} alt="Royal Enfield" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Kawasaki">
          <img src={"Kawasaki.png"} onClick={kawasaki } alt="Kawasaki" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/BMW">

          <img src={"BMW.png"} onClick={bmw} alt="BMW" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Ktm">

          <img src={"Ktm2.png"} onClick={ktm} alt="Ktm2" />
          </Link>
        </div>
        <div className="Bike-Brand">
        <Link to="/Ev">

          <img src={"Ev.png"}onClick={ev} alt="EV" />
          </Link>
        </div>
      </div>
    </section>



    </>
  );
};

export default Brands;
