import React from "react";
import "./Contactus.css";
import HomeHeader from "../Layout/HomeHeader";
import aboutus from "../images/about-us1.png";
import SimpleMap from "./SimpleMap";

import glow from "../images/Service-page-8.png"
import leaf from "../images/service-page9.png"
import fastshipping from "../images/fastshipping.png"
import customerhappy from "../images/customerhappy.png"

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
          <h1 className="mt-4">CONTACT US</h1>
        </div>
        <p
          className=" w-50 home-contactustext "
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - Contact Us
        </p>
        <img src={aboutus} className="imagetop"></img>
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
        <div className="row gap-3 w-100 justify-content-center addressboxrow">
          <div className="col-3 call-box text-center p-4 " style={{backgroundColor:"#eaa606"}}>
            <div className="w-100 d-flex align-item-center justify-content-center">
            <div className="locationround" style={{backgroundColor:"#eaa606"}}>
            <div className="locationinnerround d-flex justify-content-center align-items-center">

            <BsFillTelephoneFill className="telephonesizing" style={{color:"white"}} />
            </div>
            </div>
            </div>
            <h2 className="mt-2 mb-2" style={{fontSize:"22px",color:"white"}}>CALL US AT</h2>
            <p className="addressboxpara">+91 96000 52220</p>
            <p className="addressboxpara mb-4">+91 98843 52220</p>
          </div>
          <div className="col-3 call-box text-center p-4" style={{backgroundColor:"#0060c7"}}>
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
          <div className="col-3 call-box text-center p-4" style={{backgroundColor:"#eaa606"}}>
          <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="locationround" style={{backgroundColor:"#eaa606"}}>
            <div className="locationinnerround d-flex justify-content-center align-items-center">

            <MdEmail className="telephonesizing" style={{color:"white"}}/>
            </div>
            </div>
            </div>
          <h2 className="mt-2 mb-2" style={{fontSize:"22px",color:"white"}}>MAIL US AT</h2>
          <p className="addressboxpara">info@soinggroupofcompanies.com</p>
          <p className="addressboxpara">hr@soinggroupofcompanies.com</p>
          </div>

          

        </div>
        <div className="row d-flex flex-column align-item-cemter justify-content-center mt-5 address-textbox">
          <p style={{color:"white"}}>FULL ENQUIRY</p>
          <h1 className="heading-text" style={{ margin: "0px" }}>
            Any Questions?
          </h1>
          <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. , oribus inventori doloremque alias ipsam aliquid quisquam, nostrum incidunt debitis error nemo, animi corrupti reprehenderit optio doloribus minima accusantium! Quos voluptas qui aspernatur!</p>
          <form>
                  {/* First Row: First Name & Last Name */}
                  <div className="row mb-4  ">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  {/* Second Row: Email or Phone */}
                  <div className="row mb-4">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control rounded-pill"
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
                      className="btn btn-light rounded-pill py-2 px-5 mb-3"
                      style={{ backgroundColor: "#034e9f",color:"white" }}
                    >
                      
                      SEND
                    </button>
                  </div>
                </form>
        </div>
      </div>
      </div>

      <div className="enjoyup p-5 ">
              <div className="row">
                <div className="col-6 " style={{ marginLeft: "15rem",paddingBottom:"6%"}}>
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
                        className=" btn rounded-pill shopnow-btn px-4 py-2 "
                        style={{ textAlign: "none" }}
                      >
                        GET STARTED TODAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="toolsbox">
              <div className="easycustomize">
                <img src={glow} alt="profile" style={{width:"45px",marginBottom:"20px"}}></img>
                <div className="d-flex flex-column text-start item-center">
                  <p className="easytext"
                    
                  >
                    Easy to create and
                  </p>
                  <p className="easytexttwo" > customize</p>
                </div>
              </div>
              <div className="easycustomize">
              <img src={leaf} alt="profile" style={{width:"45px",marginBottom:"20px"}}></img>
                <div className="d-flex flex-column text-start">
                  <p
                    className="easytext"
                  >
                    Eco-conscious, high-
                  </p>
                  <p className="easytexttwo">
                    quality prints
                  </p>
                </div>
              </div>
              <div className="easycustomize">
              <img src={fastshipping} alt="profile" style={{width:"41px",marginBottom:"20px"}}></img>
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
              <div className="easycustomize">
              <img src={customerhappy} alt="profile" style={{width:"41px",marginBottom:"20px"}}></img>
                <div className="d-flex flex-column text-start">
                  <p
                    className="easytext"
                  >
                    Customer happiness
                  </p>
                  <p className="easytexttwo">guarantee</p>
                </div>
              </div>
            </div>
            <div className="bg-primary p-5 d-flex justify-content-between align-item-center">
              <div className="" style={{ marginLeft: "80px" }}>
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
              <div>
                <button
                  className="bt  mt-5 p-2 rounded-2 "
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
            <div className="social">
              <div className="sociladivider">
                <div className="socialone">
                  <h1 style={{ margin: "0", color: "white", fontSize: "25px" }}>f</h1>
                </div>
                <div className="socialone">
                  <text style={{ color: "white" }}>Twitter</text>
                </div>
                <div className="socialone">
                  <text style={{ color: "white" }}>Instagram</text>
                </div>
                <div className="socialone">
                  <text style={{ color: "white" }}>Youtube</text>
                </div>
                <div className="socialone">
                  <text style={{ color: "white" }}>Pinterest</text>
                </div>
              </div>
            </div>
            <div className="footerone">
              <div className="footerdetails">
                <div className="getintouch">
                  <h4 style={{ color: "white" }}>Get in Touch</h4>
                  <div className="phonedetail">
                    <div style={{ color: "green", fontSize: "24px" }}>
                      <FiPhoneCall />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "10px",
                      }}
                    >
                      <span style={{ color: "white", fontSize: "15px" }}>
                        Hotline
                      </span>
                      <span style={{ color: "#8a8a8a" }}>19008188</span>
                    </div>
                  </div>
                  <div className="phonedetail">
                    <div style={{ color: "green", fontSize: "24px" }}>
                      <HiOutlineMailOpen />
                    </div>
                    <div
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
                    <div className="address-fix">
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
                <div className="getintouch">
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
                <div className="getintouch">
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
                <div className="getintouch">
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
              <div className="footersocial">
                <div
                  className="footersocial1"
                  style={{ display: "flex", gap: "20px", color: "#8a8a8a" }}
                >
                  <span style={{ marginTop: "6px" }}>Follow us on </span>
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
      
                <div
                  className="footersocial1"
                  style={{ display: "flex", gap: "10px" }}
                >
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
            <div className="footer2">
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
