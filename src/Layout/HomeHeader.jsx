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

const HomeHeader = () => {
  return (
    <div>
        <div className='header'>
          <div className='logo'>
            <img src={bluef} className='logo-img'></img>
          </div>
          <div className='divider'>
          <div className='address-divider'>
          <div className='address'>
              <FaLocationDot className="location-icon" />
              <div className='dotted'>

              </div>
              <a href="" class="no-underline">
                   No.05-Kodambak, Kam High Road Nungambakkam, Chennai - 34.
              </a>
              <FaPhoneVolume className='telephone-icon' />
              <div className='dotted'>

              </div>
              <a href="" class="no-underline">
                  +91 9600056884
              </a>
              </div>
              <div className='icon-diver'>
              <div className='insta-box'>
              <FaSquareInstagram style={{ color: "white" }} />

              </div>
              <div className='insta-box'>
              <FaFacebookSquare  style={{ color: "white" }}/>
              </div>
              <div className='insta-box'>
              <FaTwitterSquare style={{ color: "white" }}/>
              </div>
              <div className='insta-box'>
              <FaWhatsappSquare style={{ color: "white" }}/>
              </div>
              <div className='insta-box'>
              <FaYoutubeSquare style={{ color: "white" }}/>
              </div>
              </div>
              </div>
          
          <div className='home-text'>
            <div className='home-divider'>
               <a href="" class="no-underline-1">
                 HOME 
               </a>
               <div className='solid'>

              </div>
               <a href="" class="no-underline">
                 ABOUTUS 
               </a>
               <a href="" class="no-underline">
                 SHOP 
               </a>
               <a href="" class="no-underline">
                 SERVICE 
               </a>
               <a href="" class="no-underline">
                 CONTACT US 
               </a>
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
    </div>
    
    </div>

    
  )
}

export default HomeHeader