//import React, { useRef,useState,useEffect } from 'react';
//import '../css/Privacy.css';
import PMainbar from './PMainbar';

import PSpinner from './PSpinner';


import React,{useState,useEffect} from 'react';


import Praivacypage from './Praivacypage';

import '../css/Home.css';




const Privacy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);


    
  return (
    <div className={`home ${loading ? 'loading' : 'loaded'}`}>
    {loading ? (
      <PSpinner />
    ) : (
        <>
        <PMainbar/>
            <Praivacypage />
        </>
    )}
</div>
  );
};

export default Privacy;
