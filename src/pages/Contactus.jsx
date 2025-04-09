import React from "react";
import "./Contactus.css";
import HomeHeader from "../Layout/HomeHeader";
import aboutus from "../images/about-us1.png";
import SimpleMap from "./SimpleMap";

import glow from "../images/Service-page-8.png"
import leaf from "../images/service-page9.png"
import fastshipping from "../images/fastshipping.png"
import customerhappy from "../images/customerhappy.png"
import bluef from "../images/blue-f.png"
import contactusimage from "../images/contactusimage.png"
import contactusimageone from "../images/contactusimageone.png"

import applepay from "../images/apple.jpg";
import gpay from "../images/gpay1.jpg";
import visa from "../images/Visa1.jpg";
import mastercard1 from "../images/Master1.jpg";
import phonepay from "../images/Phonepe.jpg";
import amex from "../images/amex.png";

import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
  return (
    <>
      <div>
        <HomeHeader />
      </div>
      <div
        className="about-box d-flex  h-50 flex-column align-items-center "
        style={{ position: "relative" }}
      >
        <div className="first-background p-5  mb-4 d-flex text-white ">
          <h1 className="mt-4 aboutustext">CONTACT US</h1>
        </div>
        <p
          className=" w-50 home-contactustext "
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - Contact Us
        </p>
        <img src={contactusimageone} className="imagetoptwo"></img>
      </div>
      <h2
        className="heading-text"
        style={{ textAlign: "center", marginTop: "70px" }}
      >
        Keep in touch <span style={{ color: "blue" }}>with us</span>
      </h2>
      <p style={{ color: "#000000",marginBottom:"0px", fontSize: "20px" }}>
        We're talking about clean beauty gift sets, of course - and we've got a bouquet of
      </p>
      <p style={{ color: "#000000", fontSize: "20px" }}>
        beauties for yourself or someone you love
      </p>
      <div style={{marginTop:"60px",marginBottom:"60px"}}>
      <SimpleMap />
      </div>
      <div className="contactus-box w-100  bg-white p-5 d-flex justify-content-center align-items-center">
      <div className="address-box d-flex flex-center justify-content-center align-items-center flex-column">
        <div className="row gap-3 w-100 justify-content-center addressboxrow p-5">
          <div className="col-lg-3 col-12 call-box text-center p-4 mt-5 " style={{backgroundColor:"#eaa606"}}>
            <div className="w-100 d-flex align-item-center justify-content-center">
            <div className="locationround" style={{backgroundColor:"#eaa606"}}>
            <div className="locationinnerround d-flex justify-content-center align-items-center">

            <BsFillTelephoneFill className="telephonesizing" style={{color:"white"}} />
            </div>
            </div>
            </div>
            <h2 className="mt-2 mb-2 contactuscalltext" >CALL US AT</h2>
            <p className="addressboxpara">+91 96000 52220</p>
            <p className="addressboxpara mb-4">+91 98843 52220</p>
          </div>
          <div className="col-lg-3 col-12 call-box text-center p-4 mt-5" style={{backgroundColor:"#0060c7"}}>
          <div className="w-100 d-flex align-item-center justify-content-center">
          <div className="locationround" style={{backgroundColor:"#0060c7"}}>
            <div className="locationinnerround d-flex justify-content-center align-items-center" style={{backgroundColor:"white"}}>

            <FaLocationDot className="telephonesizing" />
            </div>
            </div>
            </div>
          <h2 className="mt-2 mb-2" style={{fontSize:"22px",color:"#eaa606"}}>VISIT US AT</h2>
          <p className="addressboxpara">14/15 || Floor,Gandhi Nagar, Karambayam, Porur, Chennai-600166</p>
          </div>
          <div className="col-lg-3 col-12 call-box text-center p-4 mt-5 " style={{backgroundColor:"#eaa606"}}>
          <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="locationround" style={{backgroundColor:"#eaa606"}}>
            <div className="locationinnerround d-flex justify-content-center align-items-center">

            <MdEmail className="telephonesizing" style={{color:"white"}}/>
            </div>
            </div>
            </div>
          <h2 className="mt-2 mb-2" style={{fontSize:"22px",color:"white"}}>MAIL US AT</h2>
          <p className="addressboxpara text-break">info@soinggroupofcompanies.com</p>
          <p className="addressboxpara text-break">hr@soinggroupofcompanies.com</p>
          </div>

          

        </div>
        <div className="row d-flex flex-column align-item-cemter justify-content-center mt-3 address-textbox">
          <p style={{color:"white"}}>FULL ENQUIRY</p>
          <h1 className="contactustext" style={{ margin: "0px" }}>
            Any Questions?
          </h1>
          <p className="contactusparatext" style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. , oribus inventori doloremque alias ipsam aliquid quisquam, nostrum incidunt debitis error nemo, animi corrupti reprehenderit optio doloribus minima accusantium! Quos voluptas qui aspernatur!</p>
          <form>
                  {/* First Row: First Name & Last Name */}
                  <div className="row mb-4  ">
                    <div className="col-md-6 p-2 ">
                      <input
                        type="text"
                        className="form-control rounded-pill enquiry-box"
                        placeholder="Name"
                        
                      />
                    </div>
                    <div className="col-md-6 p-2 ">
                      <input
                        type="text"
                        className="form-control rounded-pill enquiry-box"
                        placeholder="Email Address"
                        
                      />
                    </div>
                  </div>

                  {/* Second Row: Email or Phone */}
                  <div className="row mb-4">
                    <div className="col-md-6 p-2">
                      <input
                        type="text"
                        className="form-control rounded-pill enquiry-box"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-md-6 p-2">
                      <input
                        type="text"
                        className="form-control rounded-pill enquiry-box"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>

                  {/* Third Row: Message Box */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <textarea
                        className="form-control rounded-4"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      className="btn btn-light rounded-pill py-2 px-5 mb-3 send-btn"
                      style={{ backgroundColor: "#034e9f",color:"white" }}
                    >
                      
                      SEND
                    </button>
                  </div>
                </form>
        </div>
      </div>
      </div>

      <div className="enjoyupcontact p-5 ">
              <div className="row">
                <div className="col-12 enjoyup-text " style={{paddingBottom:"6%",paddingTop:"6%"}} >
                  <h2
                    className="heading-text"
                    style={{ textAlign: "left", marginTop: "0" }}
                  >
                    Bring your ideas to
                  </h2>
                  <h2
                    className="heading-text"
                    style={{ textAlign: "left", marginTop: "0" }}
                  >
                    life in minute!
                  </h2>
                  <p style={{ color: "white", textAlign: "left", marginTop: "25px" }}>
                    T-shirts that keep you moving
                  </p>
                  <div className="row d-flex mt-4 ">
                    <div className="col" style={{ textAlign: "left" }}>
                      <button
                        className=" btn rounded-pill shopnow-btn px-4 py-2 get-started-today "
                        style={{ textAlign: "none" }}
                      >
                        GET STARTED TODAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="toolsbox container-fluid mt-3">
                    <div className="row w-100">
                    <div className="easycustomize col-lg-3 col-12 ">
                      <img src={glow} alt="profile" className="toolsicons" style={{width:"45px"}}></img>
                      <div className="d-flex flex-column text-start item-center">
                        <p className="easytext"
                        >
                          {" "}
                          Easy to create and
                        </p>
                        <p className="easytexttwo"> customize</p>
                      </div>
                    </div>
                   
                    <div className="easycustomize col-lg-3 col-12 ">
                    <img src={leaf} alt="profile" className="toolsicons" style={{width:"45px"}}></img>
                      <div className="d-flex flex-column text-start">
                        <p
                          className="easytext"
                        >
                          {" "}
                          Eco-conscious, high-
                        </p>
                        <p className="easytexttwo" >
                          quality prints
                        </p>
                      </div>
                    </div>
                    <div className="easycustomize col-lg-3 col-12 ">
                    <img src={fastshipping} alt="profile" className="toolsicons" style={{width:"45px"}}></img>
                      <div className="d-flex flex-column text-start">
                        <p
                          className="easytext"
                        >
                          {" "}
                          Fast and free standard
                        </p>
                        <p className="easytexttwo">shipping</p>
                      </div>
                    </div>
                    <div className="easycustomize col-lg-3 col-12 ">
                    <img src={customerhappy} alt="profile" className="toolsicons" style={{width:"45px"}}></img>
                      <div className="d-flex flex-column text-start">
                        <p
                          className="easytext"
                        >
                          {" "}
                          Customer happiness
                        </p>
                        <p className="easytexttwo">guarantee</p>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="bg-primary p-5 d-flex justify-content-between align-item-center row">
              <div className="col-lg-8 enjoyup-text" >
                <h2
                  className="text-xl font-semibold  mb-3 text-white text-start"
                  style={{ font: "bold", fontWeight: "700" }}
                >
                  Get Free T-shirt Printing?
                </h2>
                <p className="mb-0 text-start text-white" style={{}}>
                  like readable English. Many desktop publishing packages and web page
                  editors
                </p>
                <p className="mb-0 text-start text-white" style={{}}>
                  guarantee Many desktop publishing packages and web page editors{" "}
                </p>
              </div>
              <div className="col-lg-4">
                <button
                  className="bt  mt-5 p-2 rounded-2 contact-now-btn "
                  style={{
                    marginRight: "110px",
                    fontWeight: "500",
                    borderBlockStyle: "none",
                  }}
                >
                  Contact Now
                </button>
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
                              <div className="emailbox">
                                Your email address
                                <span>
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

export default Contactus;
