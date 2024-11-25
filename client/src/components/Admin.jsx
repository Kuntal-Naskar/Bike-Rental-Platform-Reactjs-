import React, { useState, useEffect } from 'react';
import '../css/Admin.css';
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { GrLogout } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegComments } from "react-icons/fa6";
import profile from "../profile.json";
import date from "../date.json";
import time from "../time.json";
import dl from "../dl.json";  // Import the logout animation JSON file
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { motion } from "framer-motion";

const Admin = () => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const navigate = useNavigate();  // Initialize the navigate hook

    const handleLogout = () => {
        setIsLoggingOut(true);
        setTimeout(() => {
            navigate('/Home');  // Redirect to the home page after the animation
        }, 1800);  // Match this duration with the length of your animation
    };

    const today = new Date().toISOString().split('T')[0];
    var views = 1268;
    if (window.location.href === 'http://localhost:3000/Admin') {
        views += 1;
    }

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const formattedTime = date.toLocaleTimeString();
            setCurrentTime(formattedTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { duration: 0.1 } }} class="apanel"
            >
                <div class="anavigation">
                    <ul>
                        <li>
                            <Lottie animationData={profile} style={{ marginTop: "-10px", marginLeft: "20px", height: "200px", width: "200px" }} />
                        </li>
                        <li>
                            <a href="#">
                                <span class="aicon">
                                    <FaHome />
                                </span>
                                <span class="atitle">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#booking">
                                <span class="aicon">
                                    <IoPeople />
                                </span>
                                <span class="atitle">Booking Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="#feedback">
                                <span class="aicon">
                                    <VscFeedback />
                                </span>
                                <span class="atitle">Feedback</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={handleLogout}>
                                <span class="aicon">
                                    <GrLogout />
                                </span>
                                <span class="atitle">Log Out</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="awindow">
                    <div class="atopbar" style={{ height: "80px", backgroundColor: "var(--background-color)", width: "2000px", marginLeft: "-30px", marginTop: "-20px", position: "fixed", zIndex: "3" }}>
                        <h3 style={{ paddingTop: "10px", marginLeft: "400px", width: "350px", fontFamily: "Times-new-roman", color: "var(--text-color)", textShadow: "rgba(0, 0, 0, 0.2) 2px 3px 8px" }}>Admin Panel</h3>
                        <Lottie animationData={date} style={{ marginTop: "-46px", marginLeft: "970px", height: "35px", width: "35px" }} />
                        <p style={{ color: "black", marginLeft: "1010px", marginTop: "-30px" }}><b>{today}</b></p><br />
                        <Lottie animationData={time} style={{ marginTop: "-40px", marginLeft: "963px", height: "50px", width: "50px" }} />
                        <p style={{ color: "black", marginLeft: "1010px", marginTop: "-40px" }}><b>{currentTime}</b></p>
                        <img src='logo.png' style={{ height: "80px", width: "90px", marginTop: "-115px", marginLeft: "1115px" }}></img>
                    </div>

                    {/* Show the animation when logging out */}
                    {isLoggingOut && (
                        <div style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 9999,
                        }}>
                        <Lottie 
                    style={{
                      marginTop: "-200px", marginLeft: "70px", height: "400px", width: "400px"
                    }}  
                    transition={{ duration: 1 }} 
                    loop={false} 
                    animationData={dl}
                  />
                                       </div>
                    )}

                    <div class="acardBox">
                        <div class="acard">
                            <div>
                                <div class="anumbers">{views}</div>
                                <div class="acardName">Daily Views</div>
                            </div>
                            <div class="aiconBx">
                                <MdOutlineRemoveRedEye />
                            </div>
                        </div>

                        <div class="acard">
                            <div>
                                <div class="anumbers">284</div>
                                <div class="acardName">Comments</div>
                            </div>
                            <div class="aiconBx">
                                <FaRegComments />
                            </div>
                        </div>

                        <div class="acard">
                            <div>
                                <div class="anumbers">$7,842</div>
                                <div class="acardName">Earning</div>
                            </div>
                            <div class="aiconBx">
                                <HiOutlineCurrencyRupee />
                            </div>
                        </div>
                    </div>

                    <div class="adetails">
                        <div class="arecentOrders" id='booking'>
                            <div class="acardHeader">
                                <h2>Booking Details</h2>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Mobile</td>
                                        <td>Email</td>
                                        <td>Pick Date</td>
                                        <td>Drop Date</td>
                                        <td>Brand</td>
                                        <td>price</td>
                                        <td>Aadhar</td>
                                        <td>Licence</td>
                                        <td>Coupon Code</td>
                                        <td>Aadhar Image</td>
                                        <td>License Image</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Sohom Banerjee</td>
                                        <td>Mobile</td>
                                        <td>Email</td>
                                        <td>Pick Date</td>
                                        <td>Drop Date</td>
                                        <td>Classic 350</td>
                                        <td>price</td>
                                        <td>Aadhar</td>
                                        <td>Licence</td>
                                        <td>Coupon Code</td>
                                        <td>Aadhar Image</td>
                                        <td>License Image</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="afeedback" id='feedback'>
                            <div class="acardHeader">
                                <h2>Feedback</h2>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Mobile No.</td>
                                        <td>Review</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Admin;
