import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
//import "../css/OMainbar.css";
import "../css/HMainbar.css";
import Swal from 'sweetalert2';
import DarkMode from "./DarkMode";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
const OMainbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const location = () => {
        Swal.fire({
            position: "center",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/028/899/912/original/motorcycle-cartoon-ai-generative-png.png",
            imageWidth: "200px",
            imageHeight: "200px",
            title: "Riders",
            text: "Our services are only available in Kolkata.",
            timer: 2000,
            background: 'var(--background-color)',
            showConfirmButton: false,
            color: "black",
            width: "400px",
        });
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);  

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  
    };
    return (
        <>
        
            <div className="htop-bar">
                <div className="hback" ><br/>
                </div>  
                <div className="hmenu">
                   
                  
                             <nav >
                             <img src='logo.png' alt="logo" className="logoimg"/>
                                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} >
                                   
                                    <li><NavLink to={'/Home'} className={'nav'}>Home</NavLink></li>
                                    <li><NavLink to={'/Privacy'} className={'nav'}>Privacy policy</NavLink></li>
                                    <li><NavLink to={'/Feedback'} className={'nav'}>Feedback</NavLink></li>
                                                              
                                </ul>                              
                               
                                <div className="hoptions">
                                <button className="hbotam" onClick={location}>
                                    <MdLocationPin  />Kolkata
                            </button>
                            <img style={{height:"20px",width:"20px"}} src="phone.png" alt="logo"/>
                            <span style={{paddingLeft:"5px",color:"black"}}>Mobile:123456789</span>

                            <NavLink to={'/Login'}>
                              
                            
                                    <button className="log-btn">
                                        <RiAdminFill />
                                    </button>
                                </NavLink>
                        </div>  
                        <div className="bars-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBarsStaggered />}  
                        </div>             
                            </nav>

                               {/*}
                                <DarkMode/>
                               */}
                               
                            
                </div>
            </div>
        </>
    );
}

export default OMainbar;
