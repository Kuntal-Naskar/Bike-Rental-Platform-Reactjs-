import React, { useState, useEffect } from "react";
import FMainbar from './FMainbar';
import Feedbackpage from './Feedbackpage';
import '../css/ReviewForm.css';
import FSpinner from './FSpinner';
import '../css/Home.css';

const Feedback = () => {
    
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);
    return (
        <div className={`home ${loading ? 'loading' : 'loaded'}`}>
        {loading ? (
          <FSpinner />
        ) : (
            <>
            <FMainbar/>
                <Feedbackpage />
            </>
        )}
    </div>
    );
};

export default Feedback;