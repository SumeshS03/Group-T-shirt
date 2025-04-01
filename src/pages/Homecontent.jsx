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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
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
                // style={{
                //   color: "#eeae0c",
                //   fontFamily: "'Libre Baskerville', serif",
                //   fontWeight: 700,
                //   fontSize: "67px",
                // }}
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
        <div className="photo-box">
          <Slider {...settings}>
            <div>
              <div className="inner-box">
                <img src={grouptshirtone} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={grouptshirttwo} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={grouptshirtthree} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={grouptshirtfour} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={grouptshirtfive} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={logo} className="logo-imgone"></img>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="offset-text">
        <marquee
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "45px",
            color: "#a2a2a2",
          }}
        >
          OFFSET PRINTING <span style={{ color: "blue" }}>*</span> WELCOME TO
          GROUPTSHIRT <span style={{ color: "blue" }}>*</span> DESIGN YOUR OWN
        </marquee>
      </div>

      <div className="design-box">
        <div className="design-text">
          <text
            style={{ color: "#a2a2a2", marginLeft: "6px", fontSize: "20px" }}
          >
            Who are we
          </text>
          <h1 className="heading-text" style={{ margin: "0px" }}>
            Create Stunning Print
          </h1>

          <h1 style={{ margin: "0px" }}>
            <span className="heading-text">for</span>
            <span className="heading-text-two" style={{ margin: "0px" }}>
              {" "}
              Your Business
            </span>
          </h1>
          <text
            style={{ color: "#a2a2a2", marginTop: "23px", fontSize: "20px" }}
          >
            T-Shirt Printing for Everyone. Get a head start wiyh
          </text>
          <text style={{ color: "#a2a2a2", fontSize: "20px" }}>
            free design templates you can customize in a few clicks
          </text>
          <text
            style={{ color: "#a2a2a2", marginTop: "23px", fontSize: "20px" }}
          >
            <LiaCheckCircle className="circle-check"/> Top quality prints using the latest
            technology
          </text>
          <text style={{ color: "#a2a2a2", fontSize: "20px" }}>
            <LiaCheckCircle className="circle-check"/> Mix and match colors,sizes,and designs
          </text>
          <button className="start-btd-1" style={{ marginTop: "40px" }}>
            GET STARTED
          </button>
        </div>
        <div className="design-text-2">
          <img src={designimage} alt="Image 1" className="image-1" />
          <img src={designimage} alt="Image 1" className="image-2" />
        </div>
      </div>
      <div className="offer-box">
        <div className="shopnow">
          <div className="shopnow-one">
            <h1 style={{ margin: "0", color: "#fefffe", fontWeight: "800"}}>10% off your</h1>
            <h1 style={{ margin: "0", color: "#fefffe", fontWeight: "800" }}>first order</h1>
            <text style={{ color: "#fefffe" }}>Free and easy way to bring</text>
            <p style={{ color: "#fefffe" }}>your ideas to life</p>
            <button
              className="start-btd-1"
              style={{
                backgroundColor: "yellow",
                color: "#0066cb",
                padding: "0",
                margin: "0",
              }}
            >
              SHOP NOW
            </button>
          </div>
          <div>
            <img className="shopnow-image"
              src={tshirtmen1}
              alt="logo"
              
            ></img>
          </div>
        </div>
        <div className="explore">
          <div>
            <img className="explore-image"
              src={tshirtmen1}
              alt="logo"
            ></img>
          </div>
          <div className="explore-gapfix">
            <h1 style={{ margin: "0", color: "#fefffe", fontWeight: "800" }}>Create your</h1>
            <h1 style={{ margin: "0", color: "#fefffe", fontWeight: "800" }}>unique style</h1>
            <text style={{ color: "#fefffe" }}>Free and easy way to bring</text>
            <p style={{ color: "#fefffe" }}>your ideas to life</p>
            <button
              className="start-btd-1"
              style={{
                backgroundColor: "yellow",
                color: "#0066cb",
                padding: "0",
                margin: "0",
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px", marginBottom: "20px" }}>
        <text style={{ color: "#a2a2a2", fontSize: "20px" }}>
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
        <text style={{ color: "#a2a2a2", fontSize: "20px" }}>
          T-Shirt Printing for Everyone. Get a head start wiyh free design
          templates you can customize in a few clicks.
        </text>
      </div>
      <div className="quality-box">
        <div className="servicesbox">
          <div className="rowone">
            <div className="box">
              <div className="box-innersize">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">Premium quality shirts</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
              </div>
            </div>
            <div className="box">
            <div className="box-innersize">
              
              <img
                src={outstandquality}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">Outstanding quality</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
            <div className="box">
            <div className="box-innersize">
              <img
                src={secpayment}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">Secure payment</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
            <div className="box">
            <div className="box-innersize">
              <img
                src={cussizestyle}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">Custom size & style</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
          </div>
          <div className="rowone">
            <div className="box">
            <div className="box-innersize">
              <img
                src={shipworldwide}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">Shipping Worldwide</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
            <div className="box">
            <div className="box-innersize">
              <img
                src={noordermin}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">No order minimums</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
            <div className="box">
            <div className="box-innersize">
              <img
                src={highspeed}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">High Speed Services</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
            <div className="box">
            <div className="box-innersize">
              <img
                src={freetemplate}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 className="bortexthead">Free templates</h2>
              <p className="bortextone">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="verify-photo">
          <div className="verify-photo-box">
            <img className="verify-photo-image"
              src={require("../images/Girl-image.png")}
              alt="logo"
              
            ></img>
          </div>
          <div className="verify-photo-text">
            <div>
              <h2 className="heading-text" style={{ textAlign: "left" }}>
                Ok, Let's See <span style={{ color: "blue" }}>GroupTshirt</span>
              </h2>
              <h2 className="heading-text" style={{ textAlign: "left" }}>
                In Numbers
              </h2>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  marginTop: "10px",
                  fontSize: "17px",
                }}
              >
                creates a scrolling text or image effect within a webpage. It
                allows content to move horizontally or vertically across the
                screen, providing a simple way to add dynamic movement to
                elements. Although this tag is deprecated
              </p>
            </div>
            <div className="m-box" style={{ marginTop: "20px" }}>
              <div
                className="first-box"
                style={{
                  backgroundColor: "#ffd401",
                  // padding: "10px",
                  borderRadius: "30px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "blue", margin: "0", fontWeight: "700",fontSize:"38px" }}>$ 50M</h4>
                <span style={{ color: "black", fontSize: "18px" }}>
                  printing <br></br>sumesh
                </span>
              </div>

              <div
                className="first-box"
                style={{
                  backgroundColor: "#0163c6",
                  padding: "10px",
                  borderRadius: "30px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "#fffffe", margin: "0", fontWeight: "700",fontSize:"38px" }}>32M +</h4>
                <span style={{ color: "#fffffe", fontSize: "18px" }}>
                  Items trusted<br></br>to deliver
                </span>
              </div>

              <div
                className="first-box"
                style={{
                  backgroundColor: "#ffd401",
                  padding: "10px",
                  borderRadius: "30px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "blue", margin: "0", fontWeight: "700",fontSize:"38px" }}>70M +</h4>
                <span style={{ color: "black", fontSize: "18px" }}>
                  sold by customers <br></br>through grouptshirt
                </span>
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
          <div className="your-style">
            <div className="your-print">
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
            <div className="your-print">
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
            <div className="your-print">
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
            <div className="your-print">
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
      <div className="rating">
        <h1 className="heading-textone" style={{ marginTop: "180px" }}>
          <span>What {}</span>
          <span style={{ color: "blue" }}>Pepole Are Saying</span>
        </h1>
        <p style={{ fontSize: "17px" }}>
          We provide support for more than 15K+ Businesses.
        </p>
        <div className="comment-box">
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
                ></img>
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
                  Cristian L. <span>Manager</span>
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
              <p>
                "Best services ever-Flags,programs for exceptional
                capacities,birthday,and are largely still mainstream on paper
                occasion welcom."
              </p>
            </div>
          </div>
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
                ></img>
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
                  Cristian L. <span>Manager</span>
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
              <p>
                "Best services ever-Flags,programs for exceptional
                capacities,birthday,and are largely still mainstream on paper
                occasion welcom."
              </p>
            </div>
          </div>
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
                ></img>
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
                  Cristian L. <span>Manager</span>
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
              <p>
                "Best services ever-Flags,programs for exceptional
                capacities,birthday,and are largely still mainstream on paper
                occasion welcom."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mailbox">
        <div className="mailbox-divider container-fluid ">
          <div className="row w-100">
            <div className="text-divider col-6">
              <h1
                className="heading-text"
                style={{
                  marginTop: "0",
                  marginBottom: "0px",
                  fontSize: "3rem",
                  marginTop:"36px"
                }}
              >
                <span
                  style={{
                    color: "white",

                    marginLeft: "-30px",
                  }}
                >
                  Don't Miss Out
                </span>
              </h1>
              <h1
                className="heading-text"
                style={{
                  marginTop: "0",
                  marginBottom: "0px",
                  fontSize: "2rem",
                }}
              >
                <span style={{ color: "white", fontSize: "3rem" }}>On </span>
                <span style={{ color: "blue", fontSize: "3rem" }}>
                  Special Offer
                </span>
              </h1>
              <p className="register-text"
               
              >
                Register to receive news about the latest, savings combos,
                discount codes...
              </p>
              <div className="combos-divider"
                
              >
                <div className="combos">01</div>
                <text style={{ margin: "7px", marginTop: "12px" }}>
                  Savings combos
                </text>
              </div>
              <div
                className="combos-divider"
              >
                <div className="combos">02</div>
                <text style={{ margin: "7px", marginTop: "12px" }}>
                  Savings combos
                </text>
              </div>
              <div
                className="combos-divider"
              >
                <div className="combos">03</div>
                <text style={{ margin: "7px", marginTop: "12px" }}>
                  Savings combos
                </text>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    margin: "10px",
                    width: "390px",
                    border: "none",
                    marginLeft: "-51px",
                    height: "47px",
                    borderRadius: "24px",
                    marginBottom: "40px",
                  }}
                />
                <FaCircleArrowRight
                  style={{
                    marginLeft: "-45px",
                    width: "30px",
                    height: "30px",
                    marginBottom: "2px",
                    color: "#0151c5",
                  }}
                />
              </div>
            </div>

            <div className="img-container col-6 ">
              <img className="mailbox-main-image"
                src={tshirtmen1}
                alt="logo"
                
              ></img>
            </div>
          </div>
        </div>
        <p
          style={{
            marginTop: "35px",
            marginBottom: "0px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          "We've got custom T-shirts in a range of fits and sizes, so"
        </p>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          everyon can wear your brand or message"
        </span>
        <div className="toolsbox">
          <div
            style={{
              width: "30%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TbBrandElastic />{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              elastic
            </span>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SiAirbnb />{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              airbnb
            </span>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SiAirbnb />{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              Airtable
            </span>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SiAirbnb />{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              Framer
            </span>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SiAirbnb />{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              freshworks
            </span>
          </div>
          <div
            style={{
              width: "30%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SiAirbnb />{" "}
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              Gitlab
            </span>
          </div>
        </div>
      </div>
      <div className="shipping">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "68px",
            marginTop:"10px"
          }}
        >
          <div className="shippingdivider">
            <img
              src={worldwideshipping}
              style={{
                width: "31%",
                height: "41%",
                color: "green",
                marginTop: "20px",
              }}
            ></img>

            <text
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Worldwide shipping
            </text>
            <text>Get free shipping over $65.</text>
          </div>
          <div className="shippingdivider">
            <img
              src={returnicon}
              style={{
                width: "31%",
                height: "41%",
                color: "green",
                marginTop: "20px",
              }}
            ></img>
            <text
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Returns
            </text>
            <text>Within 30 days for an exchange</text>
          </div>
          <div className="shippingdivider">
            <img
              src={onlinesupport}
              style={{
                width: "31%",
                height: "41%",
                color: "green",
                marginTop: "20px",
              }}
            ></img>

            <text
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Online Support
            </text>
            <text>Top notch customer service.</text>
          </div>
          <div className="shippingdivider">
            <img
              src={flexiblepayment}
              style={{
                width: "31%",
                height: "41%",
                color: "green",
                marginTop: "20px",
              }}
            ></img>
            <text
              style={{
                marginTop: "15px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Flexible Payment
            </text>
            <text>Pay with Multiple Credit Cards </text>
          </div>
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
              <div className="address-fix"
                
              >
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
            <span style={{marginTop: "6px" }}>Follow us on{" "}</span>
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

export default Homecontent;
