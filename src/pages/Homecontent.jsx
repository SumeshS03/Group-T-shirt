import React from "react";
import HomeHeader from "../Layout/HomeHeader";
import "./Homecontent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiTickOutline } from "react-icons/ti";
import { FaCircleArrowRight } from "react-icons/fa6";
import { LiaCcAmex } from "react-icons/lia";
import { SiAirbnb } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { TbBrandElastic } from "react-icons/tb";
import logo from "../images/gts.png";
import qualityshirt from "../images/Premium-Quality.png";
import secpayment from "../images/Secure-payment1.png";
import cussizestyle from "../images/Custom-SIze-STyle.png";
import shipworldwide from "../images/Shipping-worldwide.png";
import noordermin from "../images/No-order-minimum.png";
import highspeed from "../images/High-Speed-Service.png";
import freetemplate from "../images/Free-Templates.png";
import outstandquality from "../images/Outstanding-Quality1.png";
import grouptshirtone from "../images/grouptshirtone.png";
import grouptshirttwo from "../images/grouptshirttwo.png";
import grouptshirtthree from "../images/grouptshirtthree.png";
import grouptshirtfour from "../images//grouptshirtfour.png";
import grouptshirtfive from "../images/grouptshirtfive.png";
import designimage from "../images/designimage.png";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import worldwideshipping from "../images/worldwide shipping.png";
import returnicon from "../images/return icon.png";
import onlinesupport from "../images/3.png";
import flexiblepayment from "../images/flexible payment.png";
import amex from "../images/amex.png";
import applepay from "../images/apple.jpg";
import gpay from "../images/gpay1.jpg";
import visa from "../images/Visa1.jpg";
import mastercard1 from "../images/Master1.jpg";
import phonepay from "../images/Phonepe.jpg";
import { LiaCheckCircleSolid } from "react-icons/lia";

import { BsTelephoneOutbound } from "react-icons/bs";
import aboutustwo from "../images/Aboutus2.png";

import tshirtmen1 from "../images/tshiirtimage1.png";

import tshirt from "../images/yourstyle.png";
import yourprintone from "../images/yourprint.png";
import quantity from "../images/yourquantity.jpg";
import payment from "../images/payment.jpg";
import profileicon from "../images/profile1.png";

import { MdOutlineStarPurple500 } from "react-icons/md";
import { LiaCheckCircle } from "react-icons/lia";
import { WiDirectionUpRight } from "react-icons/wi";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const Homecontent = () => {
  // {
  //   const [colorIndex, setColorIndex] = useState(0);
  //   const colors = ["#eeae0c", "red", "green", "purple", "#ff5733"]; // Add more colors

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  //     }, 1000); // Change color every second

  //     return () => clearInterval(interval); // Cleanup function
  //   }, []);
  const profiles = [
    {
      name: "Cristian L.",
      position: "Manager",
      review:
        "Best services ever-Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome.",
    },
    {
      name: "Samantha J.",
      position: "Designer",
      review:
        "Amazing creativity and timely delivery. Our go-to company for events!",
    },
    {
      name: "David M.",
      position: "Team Lead",
      review:
        "Professional team and high-quality services. Really impressed.",
    },
    {
      name: "Emma W.",
      position: "Sales",
      review:
        "Their team exceeded expectations. Great customer support!",
    },
    {
      name: "Lucas G.",
      position: "HR",
      review:
        "Helpful, responsive and creative solutions always.",
    },
    {
      name: "Olivia P.",
      position: "Developer",
      review:
        "Their work helped boost our engagement by 40%. Superb service.",
    },
  ];
  const profilesettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Change to 2 or 3 based on screen size
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };







  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller
        settings: {
          slidesToShow: 5, // Show 3 slides on tablets
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 3, // Show 3 slides on mobile as well
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };



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
  return (
    <>
      <div>
        <HomeHeader />
      </div>

      <div className="home-feed">
        <div className="createstyleflex">
          <div className="get-started">
            <h1 className="unique-style">
              <span
                className="heading-text"
                
              >
                Creating Your{" "}
              </span>
              <ReactTyped
                className="heading-text"
                strings={["Unique Style"]}
                style={{
                  color: "blue",
                }}
                typeSpeed={100} // Speed of typing
                backSpeed={50} // Speed of deleting
                loop
              />
            </h1>

            <p className="print-shirt">
              Print shirts for yourself or your online business
            </p>
            <button className="start-btd ">GET STARTED</button>
          </div>
          <div></div>
        </div>

        {/* Multi-item Carousel */}
        <div className="photo-box d-flex justify-content-center row">
          <Slider {...settings}>
            <div>
              <div className="inner-box ">
                <img
                  src={grouptshirtone}
                  className="logo-imgone col-12 h-100 "
                ></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img
                  src={grouptshirttwo}
                  className="logo-imgone col-12 h-100 "
                ></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img
                  src={grouptshirtthree}
                  className="logo-imgone col-12 h-100 "
                ></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img
                  src={grouptshirtfour}
                  className="logo-imgone col-12 h-100 "
                ></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img
                  src={grouptshirtfive}
                  className="logo-imgone col-12 h-100 "
                ></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={logo} className="logo-imgone col-12 h-100 "></img>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="offset-text">
        <marquee className="marqueetext"
          // style={{
          //   width: "100%",
          //   textAlign: "center",
          //   fontSize: "45px",
          //   color: "#a2a2a2",
          // }}
        >
          OFFSET PRINTING <span style={{ color: "blue" }}>*</span> WELCOME TO
          GROUPTSHIRT <span style={{ color: "blue" }}>*</span> DESIGN YOUR OWN
        </marquee>
      </div>

      <div className="design-box container-fluid ">
        <div className="row  ">
          <div className="  col-lg-6  col-md-12  design-text d-flex flex-column justify-content-between text-start">
            <p
              style={{ color: "#a2a2a2", marginLeft: "6px", fontSize: "20px" }}
            >
              Who are we
            </p>
            <h1 className="heading-text m-0">Create Stunning Print</h1>

            <h1 className="m-0 text-start">
              <span className="heading-text">for</span>
              <span className="heading-text-two" style={{ margin: "0px" }}>
              
                Your Business
              </span>
            </h1>
            <p
              className="text-secondary mt-3 "
              style={{ color: "#a2a2a2", marginTop: "23px" }}
            >
              T-Shirt Printing for Everyone. Get a head start wiyh
            </p>
            <p
              className="text-secondary  "
              style={{ color: "#a2a2a2" }}
            >
              free design templates you can customize in a few clicks
            </p>
            <p
              className="text-secondary mt-3 "
              style={{ color: "#a2a2a2", marginTop: "23px" }}
            >
              <LiaCheckCircle className="circle-check" /> Top quality prints
              using the latest technology
            </p>
            <p
              className="text-secondary mt-3 "
              style={{ color: "#a2a2a2" }}
            >
              <LiaCheckCircle className="circle-check" /> Mix and match
              colors,sizes,and designs
            </p>
            <button className="start-btd ">GET STARTED</button>
          </div>

          <div className=" col-lg-6 col-md-12  design-text-2  justify-content-end position-relative hide-on-768 ">
            <img src={designimage} alt="Image 1" className="image-1" />
            <img src={designimage} alt="Image 1" className="image-2" />
          </div>
        </div>
      </div>
      <div className="offer-box  d-flex row  py-5 px-0 justify-content-center ">
        <div className="col-lg-6">
          <div className="shopnow d-flex flex-row  align-items-center justify-content-center position-relative  ">
            <div className="shopnow-one  text-md-start text-center ms-5">
              <h1 className="text-white fw-bold m-0 shopnowpercentage">10% off your</h1>
              <h1 className="text-white fw-bold m-0 shopnowpercentage">first order</h1>
              <p className="text-white m-0 shopnowparatext">Free and easy way to bring</p>
              <p className="text-white m-0 shopnowparatext">your ideas to life</p>
              <button className="start-btd-1 btn btn-warning mt-4 mb-2 ">
                SHOP NOW
              </button>
            </div>
            <div>
              <img className="shopnow-image" src={tshirtmen1} alt="logo"></img>
            </div>
          </div>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-lg-6">
          <div className="explore d-flex flex-row align-items-center justify-content-center position-relative   ">
            <div>
              <img className="explore-image" src={tshirtmen1} alt="logo"></img>
            </div>
            <div className="explore-gapfix  text-md-start text-center">
              <h1 className="text-white fw-bold m-0 shopnowpercentage">Create your</h1>
              <h1 className="text-white fw-bold m-0 shopnowpercentage">unique style</h1>
              <p className="text-white m-0 shopnowparatext">Free and easy way to bring</p>
              <p className="text-white m-0 shopnowparatext">your ideas to life</p>
              <button className="start-btd-1 btn btn-warning mt-4 mb-2">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px", marginBottom: "20px" }}>
        <text  className="offerboxparatext" style={{ color: "#a2a2a2" }}>
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
        <text className="offerboxparatext" style={{ color: "#a2a2a2"}}>
          T-Shirt Printing for Everyone. Get a head start wiyh free design
          templates you can customize in a few clicks.
        </text>
      </div>
      <div className="quality-box">
        <div className="servicesbox">
          <div className="row  d-flex flex-row px-4 ">
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
          <div className="row g-2 d-flex flex-row px-4 ">
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
          <div className="w-80">
          <h1 className="heading-textone">
            How we
            <span style={{ color: "blue" }}> work </span>
          </h1>
         

          <text className="howweworktext"
            
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
                <h3 className="yourstyle-box  ">Your Style</h3>
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
      </div>
      <div className="rating">
        <h1 className="heading-textone" style={{ marginTop: "180px" }}>
          <span>What {}</span>
          <span style={{ color: "blue" }}>Pepole Are Saying</span>
        </h1>
        <p style={{ fontSize: "17px" }}>
          We provide support for more than 15K+ Businesses.
        </p>

        <div className="comment-box container mt-4">
      <Slider {...profilesettings}>
        {profiles.map((profile, index) => (
          <div className="col-lg-4 px-2" key={index}>
            <div className="comment-lines">
              <div className="profile-name">
                <div className="profile-icon">
                  <img
                    src={profileicon}
                    alt="profile"
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                      border: "1px solid black",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: 15,
                  }}
                >
                  <p style={{ margin: 0 }}>
                    {profile.name} <span>{profile.position}</span>
                  </p>
                  <span style={{ display: "flex", color: "#f4b92d" }}>
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </span>
                </div>
              </div>
              <div className="profile-about">
                <p>{profile.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
      <div className="mailbox  mt-4">
        <div className="mailbox-divider container-fluid ">
          <div className="row w-100 ms-5 ps-4">

          {/* d-flex flex-column flex-md-row align-items-md-start px-5 */}
            <div className="text-divider col-lg-5 d-flex flex-column align-items-start justify-content-center p-5">
              <h1
                className="heading-text mt-4 text-white"
                // style={{
                //   fontSize: "3rem",
                // }}
              >
                Don't Miss Out
              </h1>
              <h1
                className="heading-text"
                style={{
                  marginTop: "0",
                  marginBottom: "0px",
                  
                }}
              >
                <span style={{ color: "white"}}>On </span>
                <span style={{ color: "blue"}}>
                  Special Offer
                </span>
              </h1>
              <p className="register-text align-items-start">
                Register to receive news about the latest, savings combos,
                discount codes...
              </p>
              <div className="combos-divider">
                <div className="combos">01</div>
                <text  className="savingscombostext">
                  Savings combos
                </text>
              </div>
              <div className="combos-divider">
                <div className="combos">02</div>
                <text  className="savingscombostext">
                  Savings combos
                </text>
              </div>
              <div className="combos-divider">
                <div className="combos">03</div>
                <text  className="savingscombostext">
                  Savings combos
                </text>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="mailbox-mailinput"
                  
                />
                <FaCircleArrowRight
                className="mailbox-arrow"
                  // style={{
                  //   marginLeft: "-45px",
                  //   width: "30px",
                  //   height: "30px",
                  //   marginBottom: "2px",
                  //   color: "#0151c5",
                  // }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-6 position-relative">
                          <div className=" d-flex justify-content-center align-items-end mt-3  image-bottomfix ">
                            <img
                              src={aboutustwo}
                              
                              alt="About Us"
                              className="letstalkimageone position-absolute"
                            />
                          </div>
                          </div>
          </div>
        </div>

        <p className="wegottext"
          // style={{
          //   marginTop: "35px",
          //   marginBottom: "0px",
          //   fontSize: "20px",
          //   fontWeight: "bold",
          // }}
        >
          "We've got custom T-shirts in a range of fits and sizes, so"
        </p>
        <span className="wegottext" style={{marginTop:"0px"}} >
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
          <div key={index} className="d-flex justify-content-center align-items-center bg-white p-2">
            {item.icon}
            <span className="ms-2 elastix-text">{item.label}</span>
          </div>
        ))}
      </Slider>
    </div>
      </div>
      <div className="shipping container-fluid mt-3">
        <div class="row shipping  py-4 justify-content-center text-center">
          {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "68px",
            marginTop:"10px"
          }}
        > */}
          <div className="shippingdivider col-md-3 d-flex flex-column align-items-center">
            <img
            className="shippingimagefix"
              src={worldwideshipping}
              // style={{
              //   width: "31%",
              //   height: "41%",
              //   color: "green",
              //   marginTop: "20px",
              // }}
            ></img>

            <text 
            className="shippingtextfix"
              // style={{
              //   marginTop: "15px",
              //   fontWeight: "bold",
              //   marginBottom: "10px",
              // }}
            >
              Worldwide shipping
            </text>
            <text className="shippingtextfixone">Get free shipping over $65.</text>
          </div>
          <div className="shippingdivider col-md-3 d-flex flex-column align-items-center">
            <img
              src={returnicon}
              className="shippingimagefix"
            ></img>
            <text
              className="shippingtextfix"
            >
              Returns
            </text>
            <text className="shippingtextfixone">Within 30 days for an exchange</text>
          </div>
          <div className="shippingdivider col-md-3 d-flex flex-column align-items-center">
            <img
              src={onlinesupport}
              className="shippingimagefix"
            ></img>

            <text
             className="shippingtextfix"
            >
              Online Support
            </text>
            <text className="shippingtextfixone">Top notch customer service.</text>
          </div>
          <div className="shippingdivider col-md-3 d-flex flex-column align-items-center">
            <img
              src={flexiblepayment}
              className="shippingimagefix"
            ></img>
            <text
              className="shippingtextfix"
            >
              Flexible Payment
            </text>
            <text className="shippingtextfixone">Pay with Multiple Credit Cards </text>
          </div>
        </div>
        {/* </div> */}
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

export default Homecontent;
