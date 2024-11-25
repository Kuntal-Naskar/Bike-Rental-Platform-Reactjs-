import React, { useState, useEffect } from 'react';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../css/dark.css";
import dark from "../dark.json";
import light from "../light.json";
import Lottie from "lottie-react";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const [showAnimation, setShowAnimation] = useState(false);
    const [animationType, setAnimationType] = useState(null);
    const [animationClass, setAnimationClass] = useState('');

    // Apply the saved theme when the component mounts
    useEffect(() => {
        if (isDarkMode) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, []); // Empty dependency array ensures this effect runs only once, on mount

    useEffect(() => {
        if (showAnimation) {
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 1800); // Animation duration

            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [showAnimation]);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light');
    };

    const toggleTheme = (e) => {
        setIsDarkMode(e.target.checked);

        if (e.target.checked) {
            setDarkMode();  // Switch to dark mode
            setAnimationType('dark');
            setAnimationClass('slide-up');
        } else {
            setLightMode();  // Switch to light mode
            setAnimationType('light');
            setAnimationClass('slide-down');
        }

        setShowAnimation(true);
    };

    // Define styles for dark and light animations
    const darkAnimationStyle = {
        height: "98px",
        width: "98px",
        marginTop: "-73px",
        marginLeft: "1px",
        backgroundColor: "transparent",
    };

    const lightAnimationStyle = {
        height: "35px",
        width: "35px",
        marginTop: "20px",
        marginLeft: "0px",
        backgroundColor: "transparent",
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={isDarkMode}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>

            {/* Play the animation based on theme change */}
            {showAnimation && (
                <Lottie
                    animationData={animationType === 'dark' ? dark : light}
                    autoplay={true}
                    loop={false}
                    style={animationType === 'dark' ? darkAnimationStyle : lightAnimationStyle}
                    className={animationClass}
                />
            )}
        </div>
    );
};
export default DarkMode;
