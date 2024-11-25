import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import "../css/HMainbar.css";
import Swal from 'sweetalert2';
import DarkMode from "./DarkMode";
//import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
//import { MdLocationPin } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import "../css/HMainbar.css";
//import Swal from 'sweetalert2';
//import DarkMode from "./DarkMode";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const BMainbar = () =>{
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);  

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  
    };
    const location=()=>{
        Swal.fire({
            position: "center",
            imageUrl:"https://static.vecteezy.com/system/resources/previews/028/899/912/original/motorcycle-cartoon-ai-generative-png.png",
            imageWidth:"200px",
            imageHeight:"200px",
            title: "Riders",
            text: "Our services are only available in Kolkata.",
            timer: 2000,
            background:'var(--background-color)',
            showConfirmButton: false,
            color:"black",
            width:"400px",
          });
           }
    return(
        <>
          <div className="htop-bar">
                <div className="hback" ><br/>
                </div>  
                <div className="hmenu">
                   
                    {/*<div style={{marginTop:"-50px"}}>*/}
                             <nav >
                             <img src='logo.png' alt="logo" className="logoimg"/>
                                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} >
                                <li><NavLink to={'/Home'} className={'nav'}>Home</NavLink></li>
                                    <li><NavLink to={'/Offer'} className={'nav'}>Offers</NavLink></li>
                                    <li><NavLink to={'/Privacy'} className={'nav'}>Privacy policy</NavLink></li>
                                    <li><NavLink to={'/Feedback'} className={'nav'}>Feedback</NavLink></li>
                                    <li><a href="#contact" className={'nav'}>Contact </a></li>                            
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
        {/*<div className="htop-bar">
        <div className="hback" ><br/>gbfgnfhg
        </div>
            
            <div className="menu">
            <img src='logo.png' style={{height:"80px", width:"90px", marginTop:"-17px",marginLeft:"15px"}}></img>
            <div style={{marginTop:"-50px"}}>                        <button className="botam" onClick={location}><MdLocationPin  style={{marginLeft:"-20px",marginTop:"-3px"}}/>Kolkata</button>
                        <img src="phone.png" style={{height:"20px",width:"20px",marginLeft:"30px",marginTop:"-5px"}}></img><span style={{paddingLeft:"5px",color:"black"}} >Mobile:123456789</span>
                       </div> <nav >
                            <ul style={{marginTop:"-45px", marginLeft:"30px"}}>
                            <li><NavLink to={'/Home'} className={'nav'}>Home</NavLink></li>
                            <li><NavLink to={'/Offer'} className={'nav'}>Offers</NavLink></li>
                                <li><NavLink to={'/Privacy'} className={'nav'}>Privacy policy</NavLink></li>
                                <li><NavLink to={'/Feedback'} className={'nav'}>Feedback</NavLink></li>
                                <li
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                            className="dropdown"
                        >
                            <NavLink to={'/FeatureBikes'} className={'nav'}>Find Bike</NavLink>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                <NavLink to={'/Bajaj'} className={'dropdown-item'}>
          <img style={{height:"40px",width:"55px"}} src={"Bajaj.png"} alt="Bajaj" /><b style={{marginLeft:"15px"}}>Bajaj</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Hero'} className={'dropdown-item'}>
          <img style={{height:"65px",width:"80px",marginLeft:"-15px"}} src={"Hero.png"} alt="Hero" /><b>Hero</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Honda'} className={'dropdown-item'}>
          <img style={{height:"40px",width:"40px",marginLeft:"7px"}} src={"Honda.png"} alt="Honda" /><b style={{marginLeft:"20px"}}>Honda</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Tvs'} className={'dropdown-item'}>
          <img style={{height:"75px",width:"65px"}} src={"Tvs.png"} alt="Tvs" /><b style={{marginLeft:"10px"}}>Tvs</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Suzuki'} className={'dropdown-item'}>
          <img style={{height:"75px",width:"65px",marginLeft:"-5px"}} src={"Suzuki.png"} alt="Suzuki" /><b style={{marginLeft:"15px"}}>Suzuki</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Yamaha'} className={'dropdown-item'}>
          <img style={{height:"30px",width:"55px"}} src={"Yamaha.png"} alt="Yamaha" /><b style={{marginLeft:"15px"}}>Yamaha</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/RoyalEnfield'} className={'dropdown-item'}>
          <img style={{height:"35px",width:"55px"}} src={"Royal_Enfield.png"} alt="Royal_Enfield" /><b style={{marginLeft:"15px"}}>Royal Enfield</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Kawasaki'} className={'dropdown-item'}>
          <img style={{height:"45px",width:"65px",marginLeft:"-5px"}} src={"Kawasaki.png"} alt="Kawasaki" /><b style={{marginLeft:"10px"}}> Kawasaki</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/BMW'} className={'dropdown-item'}>
          <img style={{height:"60px",width:"75px",marginLeft:"-10px"}} src={"BMW.png"} alt="BMW" /><b style={{marginLeft:"10px"}}>BMW</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Ktm'} className={'dropdown-item'}>
          <img style={{height:"45px",width:"45px",marginLeft:"5px"}} src={"Ktm2.png"} alt="Ktm2" /><b style={{marginLeft:"25px"}}>KTM</b>
          </NavLink>
          <hr style={{background:"gray",width:"180px",height:"0.02px"}}></hr>
          <NavLink to={'/Ev'} className={'dropdown-item'}>
          <img style={{height:"45px",width:"55px",marginLeft:"5px"}} src={"Ev.png"} alt="Ev" /><b style={{marginLeft:"15px"}}>EV</b>
          </NavLink>
          
                                  
                                </div>
                            )}
                        </li>

                                </ul>
                                <div style={{marginLeft:"60px"}}><DarkMode /> </div> 

                            
                            
                           </nav> </div></div>*/}
                                    </>
    )
}


export default BMainbar