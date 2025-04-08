import React, { useState } from "react";
import HomeHeader from "../Layout/HomeHeader";
import "./Aboutcontent.css";
import { LiaCheckCircle } from "react-icons/lia";
import designimage from "../images/designimage.png";
import qualityshirt from "../images/Premium-Quality.png";
import outstandquality from "../images/Outstanding-Quality1.png";
import secpayment from "../images/Secure-payment1.png";
import cussizestyle from "../images/Custom-SIze-STyle.png";
import shipworldwide from "../images/Shipping-worldwide.png";
import noordermin from "../images/No-order-minimum.png";
import highspeed from "../images/High-Speed-Service.png";
import freetemplate from "../images/Free-Templates.png";

import { TbBrandElastic } from "react-icons/tb";
import { SiAirbnb } from "react-icons/si";

import tshirt from "../images/yourstyle.png";
import yourprintone from "../images/yourprint.png";
import quantity from "../images/yourquantity.jpg";
import payment from "../images/payment.jpg";

import amex from "../images/amex.png";
import applepay from "../images/apple.jpg";
import gpay from "../images/gpay1.jpg";
import visa from "../images/Visa1.jpg";
import mastercard1 from "../images/Master1.jpg";
import phonepay from "../images/Phonepe.jpg";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import profilecommon from "../images/profilecommon.png";
import aboutus from "../images/about-us1.png";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";

import aboutustwo from "../images/Aboutus2.png";

const sliderSettingsicons = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Aboutcontent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
          <h1 className="mt-4 aboutustext">ABOUT US</h1>
        </div>
        <p
          className=" w-50 home-contactustext"
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - About Us
        </p>
        <img src={aboutus} className="imagetop"></img>
      </div>

      <div className="design-box container-fluid mt-5 ">
        <div className="row  ">
          <div className="  col-lg-6  col-md-12  design-text d-flex flex-column justify-content-between text-start">
            <p
              style={{ color: "#a2a2a2", marginLeft: "6px", fontSize: "20px" }}
            >
              Who are we
            </p>
            <h1 className="heading-text m-0">Create Stunning Print</h1>

            <h1 className="m-0 ">
              <span className="heading-text">for</span>
              <span className="heading-text-two" style={{ margin: "0px" }}>
                {" "}
                Your Business
              </span>
            </h1>
            <p
              className="text-secondary mt-3 "
              style={{ color: "#a2a2a2", marginTop: "23px" }}
            >
              T-Shirt Printing for Everyone. Get a head start wiyh
            </p>
            <p className="text-secondary  " style={{ color: "#a2a2a2" }}>
              free design templates you can customize in a few clicks
            </p>
            <p
              className="text-secondary mt-3 "
              style={{ color: "#a2a2a2", marginTop: "23px" }}
            >
              <LiaCheckCircle className="circle-check" /> Top quality prints
              using the latest technology
            </p>
            <p className="text-secondary mt-3 " style={{ color: "#a2a2a2" }}>
              <LiaCheckCircle className="circle-check" /> Mix and match
              colors,sizes,and designs
            </p>
            <button className="start-btd ">GET STARTED</button>
          </div>

          <div className=" col-lg-6 col-md-12  design-text-2  justify-content-end position-relative hide-on-768">
            <img src={designimage} alt="Image 1" className="image-1" />
            <img src={designimage} alt="Image 1" className="image-2" />
          </div>
        </div>
      </div>
      {/* </div> */}
      <div style={{ marginTop: "70px", marginBottom: "20px" }}>
        <text className="offerboxparatext" style={{ color: "#a2a2a2" }}>
          All the features you need
        </text>
        <h1
          className="heading-text"
          // style={{
          //   margin: "0",
          //   color: "#eeae0c",
          //   fontSize: "3rem",
          //   fontWeight: "bold",
          // }}
        >
          What Makes <span style={{ color: "blue" }}>GroupTshirt</span>
        </h1>
        <h1 className="heading-text" style={{ margin: "0" }}>
          <span style={{ color: "#eeae0c" }}>Custom T-Shirts Different</span>
        </h1>
        <text className="offerboxparatext" style={{ color: "#a2a2a2" }}>
          T-Shirt Printing for Everyone. Get a head start wiyh free design
          templates you can customize in a few clicks.
        </text>
      </div>
      <div className="quality-box">
        <div className="servicesbox">
          <div className="row g-2 d-flex flex-row ">
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={qualityshirt}
                  alt="Premium Quality"
                  className=" img-fluid box-image"
                  style={{}}
                />
                <h2 className="bortexthead">Premium quality shirts</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={outstandquality}
                  alt="Premium Quality"
                  className="box-image img-fluid "
                  style={{}}
                />
                <h2 className="bortexthead">Outstanding quality</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={secpayment}
                  alt="Premium Quality"
                  className="box-image"
                  style={{}}
                />
                <h2 className="bortexthead">Secure payment</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={cussizestyle}
                  alt="Premium Quality"
                  className="box-image"
                  style={{}}
                />
                <h2 className="bortexthead">Custom size & style</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
          </div>
          <div className="row g-2 d-flex flex-row ">
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={shipworldwide}
                  alt="Premium Quality"
                  className="box-image"
                  style={{}}
                />
                <h2 className="bortexthead">Shipping Worldwide</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={noordermin}
                  alt="Premium Quality"
                  className="box-image"
                  style={{}}
                />
                <h2 className="bortexthead">No order minimums</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={highspeed}
                  alt="Premium Quality"
                  className="box-image"
                  style={{}}
                />
                <h2 className="bortexthead">High Speed Services</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
            <div className="box col-lg-3 col-12">
              <div className="box-innersize">
                <img
                  src={freetemplate}
                  alt="Premium Quality"
                  className="box-image"
                  style={{}}
                />
                <h2 className="bortexthead">Free templates</h2>
                <p className="bortextone">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, quo! Deserunt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-0 my-5">
          <div className="row verifyimagebox ">
            {/* Image Section */}
            <div className="col-lg-6 text-center position-relative">
              <div className="verify-photo-box  ">
                <img
                  src={require("../images/Girl-image.png")}
                  alt="logo"
                  className=" verify-photo-img position-absolute"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-lg-6 ">
              <div className="verify-photo-text w-100">
                <h2 className="heading-text text-start">
                  Ok, Let's See{" "}
                  <span style={{ color: "blue" }}>GroupTshirt</span>
                </h2>
                <h2 className="heading-text text-start">In Numbers</h2>
                <p
                  className="text-left text-start mt-2"
                  style={{ fontSize: "17px" }}
                >
                  Creates a scrolling text or image effect within a webpage. It
                  allows content to move horizontally or vertically across the
                  screen, providing a simple way to add dynamic movement to
                  elements. Although this tag is deprecated.
                </p>
                <div className="row mt-4">
                  <div className="col-lg-4 col-12 d-flex flex-column align-items-center mt-2">
                    <div className="first-box bg-warning rounded p-3">
                      <h4
                        className="text-primary fw-bold designboxhead text-center"
                        style={{ fontSize: "38px" }}
                      >
                        $ 50M
                      </h4>
                      <div className="text-center">
                        <span
                          className="text-dark designboxpara "
                          style={{ fontSize: "18px" }}
                        >
                          printing <br /> sumesh
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex flex-column align-items-center mt-2">
                    <div className="first-box bg-primary text-white rounded p-3">
                      <h4
                        className="fw-bold designboxhead text-center"
                        style={{ fontSize: "38px" }}
                      >
                        32M +
                      </h4>
                      <div className="text-center">
                        <span
                          className="designboxpara"
                          style={{ fontSize: "18px" }}
                        >
                          Items trusted
                          <br />
                          to deliver
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 d-flex flex-column align-items-center mt-2">
                    <div className="first-box bg-warning rounded p-3">
                      <h4
                        className="text-primary fw-bold designboxhead text-center"
                        style={{ fontSize: "38px" }}
                      >
                        70M +
                      </h4>
                      <div className="text-center">
                        <span
                          className="text-dark designboxpara"
                          style={{ fontSize: "18px" }}
                        >
                          sold by customers <br /> through grouptshirt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="we-work-box">
          <h1 className="heading-textone">
            How we
            <span style={{ color: "blue" }}> work </span>
          </h1>
          <text
            style={{ textAlign: "left", color: "#a2a2a2", fontSize: "17px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quo!
            Deserunt it is still useful to understand its functionality
          </text>
          <div className="container-fluid d-flex flex-column align-items-center mt-4">
            <div className="your-style row d-flex flex-wrap justify-content-center align-items-center bg-light mt-4 rounded">
              <div className="your-print col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center mb-3 ">
                <div className="your-tshirt">
                  <img
                    src={tshirt}
                    alt="tshirt"
                    style={{
                      width: "111px",
                      height: "111px",
                      borderRadius: "50%",
                      border: "2px solid black",
                    }}
                  ></img>
                </div>
                <h3 className="yourstyle-box">Your Style</h3>
              </div>
              <div className="your-print col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center mb-3 your-printtwo">
                <div className="your-tshirt">
                  <img
                    src={yourprintone}
                    alt="tshirt"
                    style={{
                      width: "111px",
                      height: "111px",
                      borderRadius: "50%",
                      border: "2px solid black",
                    }}
                  ></img>
                </div>
                <h3
                  className="yourstyle-box"
                  style={{ backgroundColor: "#ffd401", color: "blue" }}
                >
                  Your Print
                </h3>
              </div>
              <div className="your-print col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center mb-3 your-printone">
                <div className="your-tshirt">
                  <img
                    src={quantity}
                    alt="tshirt"
                    style={{
                      width: "111px",
                      height: "111px",
                      borderRadius: "50%",
                      border: "2px solid black",
                    }}
                  ></img>
                </div>
                <h3
                  className="yourstyle-box"
                  style={{ backgroundColor: "#ffd401", color: "blue" }}
                >
                  Quantity
                </h3>
              </div>
              <div className="your-print col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center mb-3 your-printone">
                <div className="your-tshirt">
                  <img
                    src={payment}
                    alt="tshirt"
                    style={{
                      width: "111px",
                      height: "111px",
                      borderRadius: "50%",
                      border: "2px solid black",
                    }}
                  ></img>
                </div>
                <h3
                  className="yourstyle-box"
                  style={{ backgroundColor: "#ffd401", color: "blue" }}
                >
                  Payment
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="wegottext"
        // style={{
        //   marginTop: "35px",
        //   marginBottom: "0px",
        //   fontSize: "20px",
        //   fontWeight: "bold",
        // }}
      >
        "We've got custom T-shirts in a range of fits and sizes, so"
      </p>
      <span className="wegottext" style={{ marginTop: "0px" }}>
        everyon can wear your brand or message"
      </span>
      <div className="toolsbox container-fluid mt-5">
        <Slider {...sliderSettingsicons}>
          {[
            { icon: <TbBrandElastic />, label: "Elastic" },
            { icon: <SiAirbnb />, label: "Airbnb" },
            { icon: <SiAirbnb />, label: "Airtable" },
            { icon: <SiAirbnb />, label: "Framer" },
            { icon: <SiAirbnb />, label: "Freshworks" },
            { icon: <SiAirbnb />, label: "Gitlab" },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center bg-white p-2"
            >
              {item.icon}
              <span className="ms-2 elastix-text">{item.label}</span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="letstalk-box mb-5 container-fluid ">
        <div className="row  lettalk">
        {/* d-flex flex-column flex-md-row align-items-md-start */}
          <div className="col-12 col-lg-6 ps-lg-3 p-2">
            <div className=" d-flex flex-column justify-content-center">
              <h5
                className="heading-text"
                style={{ textAlign: "center", color: "#034e9f" }}
              >
                Let's talk
              </h5>
              <p style={{ textAlign: "center" }}>
                Printed and shipped on demand!{" "}
              </p>
              <form>
                {/* First Row: First Name & Last Name */}
                <div className="row mb-2">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Second Row: Email or Phone */}
                <div className="row mb-2">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Email or Phone Number"
                    />
                  </div>
                </div>

                {/* Third Row: Message Box */}
                <div className="row mb-2">
                  <div className="col-12">
                    <textarea
                      className="form-control rounded-4"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    className="btn btn-light rounded-pill py-2 px-4"
                    style={{ backgroundColor: "#034e9f" }}
                  >
                    {" "}
                    SUBMIT{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 lettalkimagecont position-relative ">
            <div className="  ">
              {/* d-flex justify-content-center align-items-end mt-3 mt-md-0 image-bottomfix */}
              <img src={aboutustwo} alt="About Us" className="letstalkimage position-absolute " />
            </div>
          </div>
        </div>
      </div>
      <p style={{ marginBottom: "0", color: "#949494" }}>Our Team</p>
      <h2
        className="heading-text"
        style={{ textAlign: "center", marginTop: "0" }}
      >
        Meet the <span style={{ color: "blue" }}>GroupTshirt</span> team
      </h2>
      <p style={{ color: "#949494" }}>
        T-Shirt Printing for Everyone. Get a head start wiyh free design
        templates you can customize in a few clicks
      </p>
      <div className="jionour-team d-flex flex-column align-items-center mt-5 mb-5 ">
        {/* First Row */}
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-4 pt-5">
          {[
            { name: "John Doe", role: "Designer", img: profilecommon },
            { name: "Jane Smith", role: "Developer", img: profilecommon },
            { name: "Michael Lee", role: "Marketing", img: profilecommon },
            { name: "Sarah Brown", role: "Manager", img: profilecommon },
            { name: "Chris Wilson", role: "HR", img: profilecommon },
            { name: "Emma Taylor", role: "UI/UX", img: profilecommon },
            { name: "Daniel Martinez", role: "Finance", img: profilecommon },
            { name: "Olivia Anderson", role: "Support", img: profilecommon },
            { name: "William Thomas", role: "SEO", img: profilecommon },
            { name: "Sophia Harris", role: "Sales", img: profilecommon },
          ].map((member, index) => (
            <div
              key={index}
              className="profile-box text-center d-flex flex-column align-items-center justify-content-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={member.img} alt={member.name} className="profile-img" />
              {hoveredIndex === index ? (
                <div className="social-icons d-flex gap-4">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                </div>
              ) : (
                <div className="info">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="btn rounded-pill join-our-team pb-2">
          JOIN OUR TEAM
        </button>
      </div>

      <div className="enjoyup p-5 " style={{ marginTop: "100px" }}>
        <div className="row ">
          <div className="col-12 col-md-12 ms-7 enjoyup-text  ">
            <h2
              className="heading-textenjoyup"
              style={{ textAlign: "left", marginTop: "0" }}
            >
              Enjoy up your vacations in
            </h2>
            <h2
              className="heading-textenjoyup"
              style={{ textAlign: "left", marginTop: "0" }}
            >
              the <span style={{ color: "white" }}>best T-shirts</span>
            </h2>
            <p style={{ color: "white", textAlign: "left", marginTop: "25px" }}>
              T-shirts that keep you moving
              <div className="row d-flex mt-4                   gap-2 gap-md-3">
                <div className="col-auto ">
                  <button className=" btn rounded-pill shopnow-btn responsive-btn">
                    SHOP NOW
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn rounded-pill contactus-btn responsive-btn ">
                    CONTACT US
                  </button>
                </div>
              </div>
            </p>
          </div>
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

export default Aboutcontent;
