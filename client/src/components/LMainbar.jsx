import React from "react";
import "../css/LMainbar.css";
import Swal from 'sweetalert2';
import DarkMode from "./DarkMode";



const LMainbar = () =>{
    const location=()=>{
        Swal.fire({
            position: "center",
            imageUrl:"https://static.vecteezy.com/system/resources/previews/028/899/912/original/motorcycle-cartoon-ai-generative-png.png",
            imageWidth:"200px",
            imageHeight:"200px",
            title: "Riders",
            text: "Our services are only available in Kolkata.",
            timer: 2000,
            background:' var(--background-color)',
            showConfirmButton: false,
            color:"black",
            width:"400px",
          });
           }
    return(
        <>   
        <div className="ltop-bar">
                <div className="lback" ><br/>
                </div>
                <div className="lmenu">
                <img src='logo.png' style={{}} className="riders-logo"/>
                </div> 
                
        </div>                 
           {/*} <div className="Lmenu">
                <nav >
                    <img src='logo.png' style={{}} className="riders-logo"/>
                        <div style={{marginLeft:"50px",marginTop:"-80px"}}><DarkMode /> </div> 

                </nav> 
            </div>*/}
        </>
    )
}


export default LMainbar