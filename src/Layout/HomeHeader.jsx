import React from 'react'
import  './HomeHeader.css'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import bluef from "../images/blue-f.png"
import { FaPhoneVolume } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HomeHeader = () => {
  const location = useLocation(); // Get current URL
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Extract pathname and set active link
    setActiveLink(location.pathname.replace("/", ""));
  }, [location]);
  
  return (
    <div >
        <header className='header'  >
         
          <nav className='logo d-flex'>
            <img src={bluef} className='logo-img'></img>
          </nav>
          
          <div className='divider'>
          <div className='address-divider'>
          <div className='address'>
            <nav className='d-flex justify-content-between w-100'> 
            <div>
              <ul className='address-gapfix list-inline d-flex '>
                <li className='list-inline-item'><FaLocationDot className="location-icon" /></li>
                <li className='list-inline-item' ><div className='dotted'></div></li>
                <li className='list-inline-item'><a href="" class="no-underline">
                   No.05-Kodambak, Kam High Road Nungambakkam, Chennai - 34.
                </a></li>
                <li className='telephone-icon list-inline-item'><FaPhoneVolume className='telephone-icon'/></li> 
                <li className='dotted list-inline-item' ></li>
                <li className='list-inline-item'>+91 9600056884</li>
              
              </ul> 
              </div>
              <div  className="header-insta-icon" >
              <div className='icon-diver'>
              <div className='insta-box'>
              <FaSquareInstagram style={{ color: "white",width:"100%",height:"100%" }} />

              </div>
              <div className='insta-box'>
              <FaFacebookSquare  style={{ color: "white",width:"100%",height:"100%"}}/>
              </div>
              <div className='insta-box'>
              <FaTwitterSquare style={{ color: "white",width:"100%",height:"100%" }}/>
              </div>
              <div className='insta-box'>
              <FaWhatsappSquare style={{ color: "white",width:"100%",height:"100%" }}/>
              </div>
              <div className='insta-box'>
              <FaYoutubeSquare style={{ color: "white",width:"100%",height:"100%" }}/>
              </div>
              </div>
              </div>
              
              </nav>
              </div>
              
              </div>
          
          <div className='home-text'>
            <div className='home-divider'>
               <Link to="/home" className="no-underline-1" style={{ color: activeLink === "home" ? "#cf9601" : "blue" }}>
       
                 HOME 
               </Link>
              
              
              
               <Link to="/aboutus" className="no-underline-2"  style={{ color: activeLink === "aboutus" ? "#cf9601" : "blue" }}>
     
                    ABOUTUS 
               </Link>
               
               <Link to="/shop" class="no-underline-2"  style={{ color: activeLink === "shop" ? "#cf9601" : "blue" }}>
       
                 SHOP 
               </Link>
               <Link to="/service" className="no-underline-2"  style={{ color: activeLink === "service" ? "#cf9601" : "blue" }}>
       
                 SERVICE 
               </Link>
               <Link to="/contactus" className="no-underline-2"  style={{ color: activeLink === "contactus" ? "#cf9601" : "blue" }}>  
                    
                 CONTACT US 
               </Link>
               </div>
               <div className='home-divider1'>
               <div className="search-container">
               <input type="text" className="search-box" placeholder="Search..." />
               <FaSearch className="search-icon" />
               </div>
               <div className='pofile-box'><MdPerson style={{ color: "blue", fontSize: "20px"  }} />
               </div>
               <div className='st-line'>

              </div>
              <div className='pofile-box'><FaCartShopping /></div>
              </div>
          </div>
          


        </div>
      
        
       
    </header>
    
    </div>

    
  )
}

export default HomeHeader