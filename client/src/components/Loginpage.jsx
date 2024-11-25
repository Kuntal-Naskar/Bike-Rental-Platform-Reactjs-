import React, { useState, useEffect } from 'react';
import LSpinner from './LSpinner';
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { HiHome } from "react-icons/hi";
import lock from "../lock.json";
import ll from "../ll.json";
import Lottie from "lottie-react";
import wrong from "../wrong.json";
import LMainbar from './LMainbar';
import { motion } from "framer-motion";
import Swal from 'sweetalert2';

const Login = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState('');
  const [isHomeClicked, setIsHomeClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const disableCopyPaste = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (username === 'sohom' && password === 'admin') {
      setAuthenticated(true);
      setUsername('');
      setPassword('');
      setTimeout(() => {
        const useEffect = new SpeechSynthesisUtterance("Welcome to admin panel.");
        window.speechSynthesis.speak(useEffect);
        window.location.href = 'http://localhost:3000/Admin';
      }, 4000);
    } else if (username === '' || password === '') {
      const useEffect = new SpeechSynthesisUtterance("All fields are must be filled!!");
      window.speechSynthesis.speak(useEffect);
      Swal.fire({ text:"'All fields must be filled!!'",         showConfirmButton: true,         background: 'var(--background-color)',
        color:"var(--text-color)",width:"300px",marginLeft:"30px",confirmButtonColor:"var(--text-color)"
        }); 
    } else {
      setAuthenticated('wrong');
      setSubmitted(true);
      setTimeout(() => {
        if (username !== 'sohom' && password === 'admin') {
          const useEffect = new SpeechSynthesisUtterance("Invalid username!!...Try Again..");
          window.speechSynthesis.speak(useEffect);
        } else if (username === 'sohom' && password !== 'admin') {
          const useEffect = new SpeechSynthesisUtterance("Invalid password!!...Try Again..");
          window.speechSynthesis.speak(useEffect);
        } else {
          const useEffect = new SpeechSynthesisUtterance("Invalid credentials!!...Try Again..");
          window.speechSynthesis.speak(useEffect);
        }
      }, 0);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleHomeClick = () => {
    setIsHomeClicked(true);
    setTimeout(() => {
      navigate('/Home');
    }, 2000); // Adjust this timing based on the animation duration
  };

  return (
    <>
     
  
      <div className="larea">
        <div className="lcard">
        <h1>Log in</h1>
        <motion.button
                          type='submit'
                          className="log"
                          onClick={handleHomeClick}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                        >
                          <HiHome />
                        </motion.button>
                        <div className='admin-area'>
                        <div className='admin-box'>
                        <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          onKeyPress={handleKeyPress}
                          onCopy={disableCopyPaste}
                          onCut={disableCopyPaste}
                          onPaste={disableCopyPaste}
                        />
                         <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onKeyPress={handleKeyPress}
                          onCopy={disableCopyPaste}
                          onCut={disableCopyPaste}
                          onPaste={disableCopyPaste}
                        />
                        <button className='lgbtn'
                        onClick={handleLogin}>
                        Login</button>

                        {authenticated === true && (
                  <Lottie animationData={lock} style={{
                    marginTop: "-300px", marginLeft: "80px", height: "500px",
                    width: "500px"
                  }} />
                )}

                {authenticated === 'wrong' && submitted && (
                  <Lottie animationData={wrong}
                    loop={false}
                    onComplete={() => setSubmitted(false)}
                    style={{
                      position: "absolute", top: "100px", left: "0", right: "0",
                      marginLeft: "auto", marginRight: "auto", width: "300px",
                      height: "300px"
                    }} />
                )}

                {isHomeClicked && (
                  <Lottie 
                    style={{
                      marginTop: "-320px", marginLeft: "120px", height: "400px", width: "400px"
                    }}  
                    transition={{ duration: 1 }} 
                    loop={false} 
                    animationData={ll}
                  />
                )}
                        </div>
                        </div>
                        
                       
        </div>
      </div>
  


     
    </>
  );
}

export default Login;
