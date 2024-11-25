import React,{useState,useEffect} from 'react';
import RSpinner from './RSpinner';
 
import BMainbar from './BMainbar';

import Reviewpage from "./Reviewpage"

import '../css/Home.css';

const Review = () => {
 
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 3000); // Simulate loading
    }, []);
      
       
            
  return (
    <>  
      <div className={`home ${loading ? 'loading' : 'loaded'}`}>
            {loading ? (
              <RSpinner />
            ) : (
                <>
                <BMainbar/>
                    <Reviewpage />
                </>
            )}
        </div>

     
    
    </>
  );
};

export default Review;
