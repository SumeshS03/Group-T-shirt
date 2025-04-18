import React, { useRef, useState,useEffect } from "react";

import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import "./Shopcontentproduct.css";
import "./Stockpage.css"

import { useLocation,useNavigate } from "react-router-dom";



import qualityshirt from "../images/Premium-Quality.png";


import amex from "../images/amex.png";
import applepay from "../images/apple.jpg";
import gpay from "../images/gpay1.jpg";
import visa from "../images/Visa1.jpg";
import mastercard1 from "../images/Master1.jpg";
import phonepay from "../images/Phonepe.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import bluef from "../images/blue-f.png"
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Shopcontentproduct = () => {
  const [activeTab, setActiveTab] = useState("product");
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
      // Set activeTab based on current path
      if (location.pathname === "/product") setActiveTab("product");
      else if (location.pathname === "/newdesign") setActiveTab("new");
      else if (location.pathname === "/stock") setActiveTab("stock");
    }, [location.pathname]);

const products = [
            { id: 1, image: qualityshirt, label: "Sleeve", price: 299,sizes: {S: 5,M: 4,L: 4,X: 2,XL: 1} },
            { id: 2, image: qualityshirt, label: "Full Sleeve", price: 349,sizes: {S: 5,M: 3,L: 1,X: 2,XL: 1} },
            { id: 3, image: qualityshirt, label: "Round Neck", price: 279,sizes: {S: 2,M: 3,L: 4,X: 2,XL: 1} },
            { id: 4, image: qualityshirt, label: "V Neck", price: 319,sizes: {S: 5,M: 3,L: 1,X: 2,XL: 1} },
            { id: 5, image: shopimage, label: "V Neck", price: 319,sizes: {S: 5,M: 15,L: 4,X: 2,XL: 1} },
            { id: 6, image: shopimage, label: "V Neck", price: 319,sizes: {S: 5,M: 3,L: 4,X: 41,XL: 1} },
 ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

 
  return (
    <>
      <div>
        <HomeHeader />
      </div>
      <div
        className="about-box d-flex  h-50 flex-column align-items-center "
        //
      >
        <div className="first-background p-5  mb-4 d-flex text-white ">
          <h1 className="mt-4 aboutustext">ABOUT US</h1>
        </div>
        <p
          className=" w-50 home-contactustext "
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - About Us
        </p>
        <img src={shopimage} className="imagetopone"></img>
      </div>

      <div className="choose-category  ">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
          <div className="row w-75 gap-2 pb-5">
            {/* <div className="products-type "> */}
              <div
                 className={`col-lg-3 col-12 product-page 



                  ${
                  activeTab === "product" ? "active-tab" : ""
                }`
              
              }
              onClick={() => navigate("/product")}
              >
                <h2 className="h4 heading-text-product">Product Page</h2>
              </div>
              <div
                className={`col-lg-3 col-12 new-design-page ${
                  activeTab === "new" ? "active-tab" : ""
                }`}
                onClick={() => navigate("/newdesign")}
              >
                <h2 className="h4 heading-text-product">New Design Page</h2>
              </div>
              <div
                className={`col-lg-3 col-12 stock-page ${
                  activeTab === "stock" ? "active-tab" : ""
                }`}
                onClick={() => navigate("/stock")}
              >
                <h2 className="h4 heading-text-product">Stock Page</h2>
              </div>
            {/* </div> */}
          </div>

          
          
        </div>
      </div>

      <div className="container mt-5">
    <h1 className="h4 text-start">T-shirts</h1>
    <div className="product-slider-container">
      <Carousel responsive={responsive} infinite={false} arrows={true}>
        {products.map((item, index) => (
          <div key={index} className="product-card text-center p-2">
            <div className="product-image">
              <img src={item.image} alt={`product-img-${index}`} />
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <h6 className="mt-2 text-start">{item.label}</h6>
                <p className="text-start fw-semibold price-tag">₹ {item.price}</p>
              </div>
              <div>
                <h6 className="mt-2 text-start">Quantity Available</h6>
                <input
                  type="text"
                  value={Object.values(item.sizes).reduce((sum, qty) => sum + qty, 0)}
                  readOnly
                  className="form-control quantity-input"
                />
              </div>
            </div>

            <button
              className="rounded-5 showdetail-btn mt-2"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              Show Detail
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  </div>


  <div className="container mt-5">
    <h1 className="h4 text-start">Jackets</h1>
    <div className="product-slider-container">
      <Carousel responsive={responsive} infinite={false} arrows={true}>
        {products.map((item, index) => (
          <div key={index} className="product-card text-center p-2">
            <div className="product-image">
              <img src={item.image} alt={`product-img-${index}`} />
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <h6 className="mt-2 text-start">{item.label}</h6>
                <p className="text-start fw-semibold price-tag">₹ {item.price}</p>
              </div>
              <div>
                <h6 className="mt-2 text-start">Quantity Available</h6>
                <input
                  type="text"
                  value={Object.values(item.sizes).reduce((sum, qty) => sum + qty, 0)}
                  readOnly
                  className="form-control quantity-input"
                />
              </div>
            </div>

            <button
              className="rounded-5 showdetail-btn mt-2"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              Show Detail
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
      
      
      
      
      
      
      
      
      <div className="social container-fluid  ">
              <div class="row justify-content-center">
                <div className="sociladivider   d-flex justify-content-around text-white">
                  <div className="d-flex align-items-center justify-content-center socialone col-2 ">
                    <h1
                      className="socilaheader"
                      style={{ margin: "0", color: "white", fontSize: "25px" }}
                    >
                      f
                    </h1>
                  </div>
                  <div className="d-flex align-items-center justify-content-center socialone col-2">
                    <text className="socialtexts" style={{ color: "white" }}>
                      Twitter
                    </text>
                  </div>
                  <div className="d-flex align-items-center justify-content-center socialone col-2">
                    <text className="socialtexts" style={{ color: "white" }}>
                      Instagram
                    </text>
                  </div>
                  <div className="d-flex align-items-center justify-content-center socialone col-2">
                    <text className="socialtexts" style={{ color: "white" }}>
                      Youtube
                    </text>
                  </div>
                  <div className="d-flex align-items-center justify-content-center socialone col-2">
                    <text className="socialtexts" style={{ color: "white" }}>
                      Pinterest
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerone container-fluid py-5">
        <div className="row align-items-center justify-content-center">
          <div className=" col-5 d-flex flex-column align-items-center justify-content-center text-white">
            <img className="img img-fluid footer-img" alt="logo" src={bluef} ></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae itaque veniam doloremque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ipsa architecto nulla reprehenderit odio aspernatur aperiam esse nam qui expedita.</p>
          </div>
        </div>
        <div className="footerdetails row justify-content-center text-white">
          <div className="getintouch col-md-3 mb-4">
            <h4 style={{ color: "white" }}>Get in Touch</h4>
            <div className="phonedetail d-flex align-items-center mb-3">
              <div style={{ color: "green", fontSize: "24px" }}>
                <FiPhoneCall className="text-success fs-4" />
              </div>
              <div
                className="ms-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "10px",
                }}
              >
                <span
                  className="d-block fw-bold"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Hotline
                </span>
                <span  style={{ color: "#8a8a8a" }}>
                  19008188
                </span>
              </div>
            </div>
            <div className="phonedetail d-flex align-items-center mb-3">
              <div style={{ color: "green", fontSize: "24px" }}>
                <HiOutlineMailOpen />
              </div>
              <div
                className="ms-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "10px",
                }}
              >
                <span style={{ color: "white", fontSize: "15px" }}>EMAIL</span>
                <span style={{ color: "#8a8a8a" }}>hello@teespace.io</span>
              </div>
            </div>
            <div className="phonedetail">
              <div style={{ color: "green", fontSize: "24px" }}>
                <IoLocationOutline />
              </div>
              <div className="address-fix d-flex align-items-start">
                <div className="ms-3 d-flex flex-column text-start">
                  <span style={{ color: "white", fontSize: "15px" }}>
                    ADDRESS
                  </span>
                  <span style={{ color: "#8a8a8a" }}>
                    3245 Abbot Kinney BLVD-PH
                  </span>
                  <span style={{ color: "#8a8a8a" }}>Venice,CA124</span>
                </div>
              </div>
            </div>
          </div>
          <div className="getintouch col-md-2 mb-4 text-start">
            <h4 style={{ color: "white", marginBottom: "7px" }}>Company</h4>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>About Us</p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>Our blog</p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>
              Start a Return
            </p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>Contact Us</p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>
              Shipping FAQs
            </p>
          </div>
          <div className="getintouch col-md-2 mb-4 text-start">
            <h4 style={{ color: "white" }}>Useful Links</h4>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>My Account</p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>Shipping</p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>
              Contact & Support
            </p>
            <p style={{ color: "#8a8a8a", marginBottom: "7px" }}>
              All Products
            </p>
          </div>
          <div className="getintouch col-md-3 mb-4 text-start">
            <h4 style={{ color: "white" }}>Newsletter</h4>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>
              Follow our newsletter to stay updated about us
            </p>
            
    
            <div className="email-input-container relative inline-block">
  <input
    type="email"
    placeholder="Your email address"
    className="emailbox pr-10"  // Add right padding for the arrow
  />
  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
    <FaArrowRight />
  </span>
</div>
            
          </div>
        </div>
        <div className="footersocial row justify-content-between align-items-center  mt-5 px-4">
          <div
            className="footersocial1 col-md-6 d-flex align-items-center gap-3"
            style={{ display: "flex", gap: "20px", color: "#8a8a8a" }}
          >
            <span className="followuson" style={{ marginTop: "6px" }}>Follow us on </span>
            <span>
              <FaTwitter style={{ color: "#8a8a8a", marginTop: "6px" }} />
            </span>
            <span>
              <FaFacebookF style={{ color: "#8a8a8a", marginTop: "6px" }} />
            </span>
            <span>
              <FaInstagram style={{ color: "#8a8a8a", marginTop: "6px" }} />
            </span>
            <span>
              <FiYoutube style={{ color: "#8a8a8a", marginTop: "6px" }} />
            </span>
          </div>

          <div className="footersocial1 col-md-6 d-flex justify-content-start gap-2 ">
            <img src={amex} style={{ width: "33px", height: "37px" }}></img>
            <img
              src={applepay}
              style={{
                width: "33px",
                height: "20px",
                backgroundColor: "white",
              }}
            ></img>
            <img
              src={gpay}
              style={{
                width: "33px",
                height: "20px",
                backgroundColor: "white",
              }}
            ></img>
            <img src={visa} style={{ width: "33px", height: "20px" }}></img>
            <img
              src={mastercard1}
              style={{ width: "33px", height: "20px" }}
            ></img>
            <img src={phonepay} style={{ width: "33px", height: "20px" }}></img>
          </div>
        </div>
      </div>
            <div className="footer2 py-3">
              <p style={{ color: "#000000", fontSize: "16px", margin: "0px" }}>
                © All Copyright 2025 by Website Design and Build -
                <span style={{ fontWeight: "bold", color: "#000000" }}>
                  www.Tabsquareinfotech.com
                </span>
              </p>
            </div>
           
    </>
  );
};

export default Shopcontentproduct;
