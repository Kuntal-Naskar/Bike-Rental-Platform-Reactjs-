import React,{useState,useEffect} from 'react';
import OSpinner from './OSpinner';

import OMainbar from "./OMainbar";

import Offerpage from './Offerpage';

import '../css/Home.css';

const Offer = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);


  return (
    <div className={`home ${loading ? 'loading' : 'loaded'}`}>
    {loading ? (
      <OSpinner />
    ) : (
        <>
        <OMainbar/>
            <Offerpage />
        </>
    )}
</div>
  );
};

export default Offer;
