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


import { FaBars } from 'react-icons/fa';

const HomeHeader = () => {
  const location = useLocation(); // Get current URL
  const [activeLink, setActiveLink] = useState("");
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname.replace("/", ""));
  }, [location]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 

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
          <div className='address hide-on-770 '>
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
              
          <nav className='home-text navbar '>
          
            
          {/* <div className="hamburger-menu" onClick={toggleSidebar}>
          
          
              
        <FaBars />
      </div>  */}
          
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
               <div className='pofile-box'>
                <MdPerson className='profileicons'  />
               </div>
               <div className='st-line'>

              </div>
              <div className='pofile-box'><FaCartShopping className='profileicons' /></div>
              </div>


              <div className='hamburger-menu search-boxhead '>
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

              <div className="hamburger-menu" onClick={toggleSidebar}>
          
          
              
        <FaBars />
      </div> 

      

              
          </nav>

          {/* added */}
          <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar} style={{color:'blue'}}>×</div>
        <Link to="/home" onClick={toggleSidebar} className="no-underline-1" style={{ color: activeLink === "home" ? "#cf9601" : "blue" }}>HOME</Link>
        <Link to="/aboutus" onClick={toggleSidebar} className="no-underline-2"  style={{ color: activeLink === "aboutus" ? "#cf9601" : "blue" }}>ABOUTUS</Link>
        <Link to="/shop" onClick={toggleSidebar} class="no-underline-2" style={{ color: activeLink === "shop" ? "#cf9601" : "blue" }}>SHOP</Link>
        <Link to="/service" onClick={toggleSidebar} className="no-underline-2"  style={{ color: activeLink === "service" ? "#cf9601" : "blue" }}>SERVICE</Link>
        <Link to="/contactus" onClick={toggleSidebar} className="no-underline-2"  style={{ color: activeLink === "contactus" ? "#cf9601" : "blue" }}>CONTACT US</Link>
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
          


        </div>
      
        
       
    </header>
    
    </div>

    
  )
}

export default HomeHeader