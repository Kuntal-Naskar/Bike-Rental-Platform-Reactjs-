import React, { useState, useEffect } from 'react';
import LSpinner from './LSpinner';

import "../css/Login.css";

import LMainbar from './LMainbar';

import '../css/Home.css';
import Loginpage from './Loginpage';
const Login = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading
  }, []);

  return (
   
       <div className={`home ${loading ? 'loading' : 'loaded'}`}>
            {loading ? (
              <LSpinner />
            ) : (
                <>
                <LMainbar/>
                    <Loginpage />
                </>
            )}
        </div>

      );
};

export default Login;
