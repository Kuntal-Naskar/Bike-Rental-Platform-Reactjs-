import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom';
import Home from './Home';
import Privacy from './Privacy';
import Offer from './Offer';
import Feedback from './Feedback';


/*
import ContactUS from './ContactUS';*/
import Admin from "./Admin";
import Login from "./Login";
import Review from "./Review";
import FeatureBikes from "./FeatureBikes";
import BookingForm from "./BookingForm";
import Honda from './Honda';
import Tvs from "./Tvs";
import RoyalEnfield from "./RoyalEnfield";
//import BookingForm from "./BookingForm";
import Hero from "./Hero";
import Suzuki from "./Suzuki";
import KTM from "./KTM";
import Bajaj from "./Bajaj";
import Yamaha from "./Yamaha";
import EV from "./Ev";
import Kawasaki from "./Kawasaki";
import BMW from "./BMW";
import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/Home' element={<Home />}></Route>
           <Route exact path='/Offer' element={<Offer />}></Route>
            <Route exact path='/Privacy' element={<Privacy />}></Route>
             <Route exact path='/Feedback' element={<Feedback />}></Route>
            <Route exact path='/Admin' element={<Admin />}></Route>            
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/Review' element={<Review />}></Route>
            <Route exact path='/FeatureBikes' element={<FeatureBikes />}></Route>
            <Route exact path='/REBookingForm' element={<BookingForm />}></Route>
            <Route exact path='/Honda' element={<Honda />}></Route>
            
             
            <Route exact path='/Tvs' element={<Tvs />}></Route>
            <Route exact path='/RoyalEnfield' element={<RoyalEnfield />}></Route>
    
            <Route exact path='/Hero' element={<Hero />}></Route>
            <Route exact path='/Suzuki' element={<Suzuki />}></Route>
            <Route exact path='/KTM' element={<KTM />}></Route>
            <Route exact path='/Bajaj' element={<Bajaj />}></Route>
            <Route exact path='/Yamaha' element={<Yamaha />}></Route>
            <Route exact path='/EV' element={<EV />}></Route>
            <Route exact path='/Kawasaki' element={<Kawasaki />}></Route>
            <Route exact path='/BMW' element={<BMW />}></Route>
</Routes> </AnimatePresence> )
}

export default AnimatedRoutes