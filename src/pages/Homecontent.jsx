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
import qualityshirt from "../images/Premium-Quality.png"
import secpayment from "../images/Secure-payment1.png"
import cussizestyle from "../images/Custom-SIze-STyle.png"
import shipworldwide from "../images/Shipping-worldwide.png"
import noordermin from "../images/No-order-minimum.png"
import highspeed from "../images/High-Speed-Service.png"
import freetemplate from "../images/Free-Templates.png"
import outstandquality from "../images/Outstanding-Quality1.png"
import tshirtmen from "../images/tshirtimage.png"
import tshirtmen1 from "../images/tshiirtimage1.png"

import tshirt from "../images/yourstyle.png";
import yourprintone from "../images/yourprint.png";
import quantity from "../images/yourquantity.jpg";
import payment from "../images/payment.jpg";
import profileicon from "../images/profile1.png";

import { MdOutlineStarPurple500 } from "react-icons/md";
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
    slidesToShow: 6,
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
          <span style={{ color: "blue" }}>Creating Your </span>
          <ReactTyped
              strings={["Unique Style"]}
              style={{color:"yellow"}}
              typeSpeed={100} // Speed of typing
              backSpeed={50}  // Speed of deleting
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
                <img src={logo} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={logo} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={logo} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={logo} className="logo-imgone"></img>
              </div>
            </div>
            <div>
              <div className="inner-box">
                <img src={logo} className="logo-imgone"></img>
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
            fontSize: "40px",
            color: "#a2a2a2",
          }}
        >
          OFFSET PRINTING <span style={{ color: "blue" }}>*</span> WELCOME TO
          GROUPTSHIRT <span style={{ color: "blue" }}>*</span> DESIGN YOUR OWN
        </marquee>
      </div>

      <div className="design-box">
        <div className="design-text">
          <text style={{ color: "#a2a2a2", marginLeft: "6px" }}>
            Who are we
          </text>
          <h1
            style={{
              margin: "0",
              color: "yellow",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Create Stunning Print
          </h1>

          <h1 style={{ margin: "0" }}>
            <span
              style={{ color: "yellow", fontSize: "3rem", fontWeight: "bold" }}
            >
              for
            </span>
            <span
              style={{ color: "blue", fontSize: "3rem", fontWeight: "bold" }}
            >
              {" "}
              Your Business
            </span>
          </h1>
          <text style={{ color: "#a2a2a2", marginTop: "23px" }}>
            T-Shirt Printing for Everyone. Get a head start wiyh
          </text>
          <text style={{ color: "#a2a2a2" }}>
            free design templates you can customize in a few clicks
          </text>
          <text style={{ color: "#a2a2a2", marginTop: "23px" }}>
            <WiDirectionUpRight /> Top quality prints using the latest
            technology
          </text>
          <text style={{ color: "#a2a2a2" }}>
            <WiDirectionUpRight /> Mix and match colors,sizes,and designs
          </text>
          <button className="start-btd-1" style={{ marginTop: "40px" }}>
            GET STARTED
          </button>
        </div>
        <div className="design-text-2">
          <img src={logo} alt="Image 1" className="image-1" />
        </div>
      </div>
      <div className="offer-box">
        <div className="shopnow">
          <div>
            <h1 style={{ margin: "0", color: "#fefffe" }}>10% off your</h1>
            <h1 style={{ margin: "0", color: "#fefffe" }}>first order</h1>
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
            <img
              src={logo}
              alt="logo"
              style={{ height: "200px", width: "200px" }}
            ></img>
          </div>
        </div>
        <div className="explore">
          <div>
            <img
              src={logo}
              alt="logo"
              style={{ height: "200px", width: "200px" }}
            ></img>
          </div>
          <div>
            <h1 style={{ margin: "0", color: "#fefffe" }}>Create your</h1>
            <h1 style={{ margin: "0", color: "#fefffe" }}>unique style</h1>
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
      <div style={{ marginTop: "80px" }}>
        <text style={{ color: "#a2a2a2" }}>All the features you need</text>
        <h1
          style={{
            margin: "0",
            color: "yellow",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          What Makes{" "}
          <span style={{ color: "blue", fontSize: "3rem", fontWeight: "bold" }}>
            GroupTshirt
          </span>
        </h1>
        <h1 style={{ margin: "0" }}>
          <span
            style={{ color: "yellow", fontSize: "3rem", fontWeight: "bold" }}
          >
            Custom T-Shirts Different
          </span>
        </h1>
        <text style={{ color: "#a2a2a2" }}>
          T-Shirt Printing for Everyone. Get a head start wiyh free design
          templates you can customize in a few clicks.
        </text>
      </div>
      <div className="quality-box">
        <div className="container">
          <div className="row">
            <div className="box">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="box-image"
                style={{}}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                Premium quality shirts
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
            <div className="box">
              <img
                src={outstandquality}
                alt="Premium Quality"
                className="box-image"
                style={{ }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                Outstanding quality
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
            <div className="box">
              <img
                src={secpayment}
                alt="Premium Quality"
                className="box-image"
                style={{ }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                Secure payment
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
            <div className="box">
              <img
                src={cussizestyle }
                alt="Premium Quality"
                className="box-image"
                style={{ }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                Custom size & style
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <img
                src={shipworldwide}
                alt="Premium Quality"
                className="box-image"
                style={{ }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                Shipping Worldwide
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
            <div className="box">
              <img
                src={noordermin}
                alt="Premium Quality"
                className="box-image"
                style={{  }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                No order minimums
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
            <div className="box">
              <img
                src={highspeed}
                alt="Premium Quality"
                className="box-image"
                style={{ }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                High Speed Services
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
            <div className="box">
              <img
                src={freetemplate}
                alt="Premium Quality"
                className="box-image"
                style={{ }}
              />
              <h2 style={{ margin: "0", color: "blue", textAlign: "left" }}>
                Free templates
              </h2>
              <text style={{ textAlign: "left", color: "#a2a2a2" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quo! Deserunt
              </text>
            </div>
          </div>
        </div>
        <div className="verify-photo">
          <div className="verify-photo-box">
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", height: "200px" }}
            ></img>
          </div>
          <div className="verify-photo-text">
            <div>
              <h2
                style={{
                  textAlign: "left",
                  margin: "0",
                  color: "yellow",
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                Ok, Let's See <span style={{ color: "blue" }}>GroupTshirt</span>
              </h2>
              <h2
                style={{
                  textAlign: "left",
                  margin: "0",
                  color: "yellow",
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                In Numbers
              </h2>
              <text
                style={{
                  textAlign: "left",
                  color: "#a2a2a2",
                  marginTop: "10px",
                }}
              >
                {" "}
                creates a scrolling text or image effect within a webpage. It
                allows content to move horizontally or vertically across the
                screen, providing a simple way to add dynamic movement to
                elements. Although this tag is deprecated
              </text>
            </div>
            <div className="m-box" style={{ marginTop: "20px" }}>
              <div
                className="first-box"
                style={{
                  backgroundColor: "#ffd401",
                  // padding: "10px",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "blue", margin: "0" }}>$ 50M</h4>
                <text style={{ color: "black", fontSize: "14px" }}>
                  printing <br></br>sumesh
                </text>
              </div>

              <div
                className="first-box"
                style={{
                  backgroundColor: "#0163c6",
                  padding: "10px",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "#fffffe", margin: "0" }}>32M +</h4>
                <text style={{ color: "#fffffe", fontSize: "14px" }}>
                  Items trusted<br></br>to deliver
                </text>
              </div>

              <div
                className="first-box"
                style={{
                  backgroundColor: "#ffd401",
                  padding: "10px",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "blue", margin: "0" }}>70M +</h4>
                <text style={{ color: "black", fontSize: "14px" }}>
                  sold by customers <br></br>through grouptshirt
                </text>
              </div>
            </div>
          </div>
        </div>
        <div className="we-work-box">
          <h1
            style={{
              margin: "0",
              color: "yellow",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            How we
            <span
              style={{ color: "blue", fontWeight: "bold", fontSize: "3rem" }}
            >
              {" "}
              work{" "}
            </span>
          </h1>
          <text
            style={{ textAlign: "left", color: "#a2a2a2", fontWeight: "500" }}
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
                    width: "100px",
                    height: "100px",
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
                    width: "100px",
                    height: "100px",
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
                    width: "100px",
                    height: "100px",
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
                    width: "100px",
                    height: "100px",
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
        <h1
          style={{ marginTop: "78px", marginBottom: "0px", fontSize: "2rem" }}
        >
          <span
            style={{ color: "yellow", fontWeight: "bold", fontSize: "3rem" }}
          >
            What{" "}
          </span>
          <span style={{ color: "blue", fontWeight: "bold", fontSize: "3rem" }}>
            Pepole Are Saying
          </span>
        </h1>
        <p style={{ fontSize: "0.8rem" }}>
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
              <text>
                "Best services ever-Flags,programs for exceptional
                capacities,birthday,and are largely still mainstream on paper
                occasion welcom."
              </text>
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
              <text>
                "Best services ever-Flags,programs for exceptional
                capacities,birthday,and are largely still mainstream on paper
                occasion welcom."
              </text>
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
              <text>
                "Best services ever-Flags,programs for exceptional
                capacities,birthday,and are largely still mainstream on paper
                occasion welcom."
              </text>
            </div>
          </div>
        </div>
      </div>
      <div className="mailbox">
        <div className="mailbox-divider">
          <div className="text-divider">
            <h1
              style={{ marginTop: "0", marginBottom: "0px", fontSize: "2rem" }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  marginLeft: "-30px",
                }}
              >
                Don't Miss Out
              </span>
            </h1>
            <h1
              style={{ marginTop: "0", marginBottom: "0px", fontSize: "2rem" }}
            >
              <span
                style={{ color: "white", fontWeight: "bold", fontSize: "3rem" }}
              >
                On{" "}
              </span>
              <span
                style={{ color: "blue", fontWeight: "bold", fontSize: "3rem" }}
              >
                Special Offer
              </span>
            </h1>
            <text style={{ margin: "7px", marginLeft: "48px" }}>
              "We've got custom T-shirts in a range of fits and sizes,so"
            </text>
            <div
              style={{
                display: "flex",
                gap: "15px",
                margin: "7px",
                marginLeft: "200px",
              }}
            >
              <div className="combos">01</div>
              <text style={{ margin: "7px" }}>Savings combos</text>
            </div>
            <div
              style={{
                display: "flex",
                gap: "15px",
                margin: "7px",
                marginLeft: "200px",
              }}
            >
              <div className="combos">02</div>
              <text style={{ margin: "7px" }}>Savings combos</text>
            </div>
            <div
              style={{
                display: "flex",
                gap: "15px",
                margin: "7px",
                marginLeft: "200px",
              }}
            >
              <div className="combos">03</div>
              <text style={{ margin: "7px" }}>Savings combos</text>
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  margin: "10px",
                  width: "390px",
                  border: "none",
                  marginLeft: "33px",
                  height: "47px",
                  borderRadius: "15px",
                  marginBottom: "40px",
                }}
              />
              <FaCircleArrowRight
                style={{
                  marginLeft: "-45px",
                  width: "30px",
                  height: "30px",
                  marginBottom: "-9px",
                  color: "#0151c5",
                }}
              />
            </div>
          </div>
          <div className="img-container">
          <img src={tshirtmen1} alt="Offer"></img>
          </div>
        </div>
        <p
          style={{ marginTop: "60px", marginBottom: "0px", fontWeight: "bold" }}
        >
          "We've got custom T-shirts in a range of fits and sizes, so"
        </p>
        <span style={{ fontWeight: "bold" }}>
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
            <TbBrandElastic /> <span style={{ fontWeight: "bold", fontSize: "20px" }}> airbnb</span>
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
            <SiAirbnb /> <span style={{ fontWeight: "bold", fontSize: "20px" }}> airbnb</span>
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
            <SiAirbnb /> <span style={{ fontWeight: "bold", fontSize: "20px" }}> airbnb</span>
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
            <SiAirbnb /> <span style={{ fontWeight: "bold", fontSize: "20px" }}> airbnb</span>
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
            <SiAirbnb /> <span style={{ fontWeight: "bold", fontSize: "20px" }}> airbnb</span>
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
            <SiAirbnb /> <span style={{ fontWeight: "bold", fontSize: "20px" }}> airbnb</span>
          </div>
        </div>
      </div>
      <div className="shipping">
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            gap: "85px",
          }}
        >
          <div className="shippingdivider">
            <TbWorld
              style={{
                width: "100%",
                height: "80%",
                color: "green",
                marginTop: "20px",
              }}
            />

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
            <TbWorld
              style={{
                width: "100%",
                height: "80%",
                color: "green",
                marginTop: "20px",
              }}
            />
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
            <TbWorld
              style={{
                width: "100%",
                height: "80%",
                color: "green",
                marginTop: "20px",
              }}
            />

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
            <TbWorld
              style={{
                width: "100%",
                height: "80%",
                color: "green",
                marginTop: "20px",
              }}
            />
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
            <h1 style={{ margin: "0", color: "white" }}>f</h1>
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
            <h3 style={{ color: "white" }}>Get in Touch</h3>
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
                <span style={{ color: "white", fontWeight: "bold" }}>
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
                <span style={{ color: "white", fontWeight: "bold" }}>
                  EMAIL
                </span>
                <span style={{ color: "#8a8a8a" }}>hello@teespace.io</span>
              </div>
            </div>
            <div className="phonedetail">
              <div style={{ color: "green", fontSize: "24px" }}>
                <IoLocationOutline />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "10px",
                }}
              >
                <span style={{ color: "white", fontWeight: "bold" }}>
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
            <h3 style={{ color: "white", marginBottom: "0px" }}>Company</h3>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>About Us</p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>Our blog</p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>
              Start a Return
            </p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>Contact Us</p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>
              Shipping FAQs
            </p>
          </div>
          <div className="getintouch">
            <h3 style={{ color: "white" }}>Useful Links</h3>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>My Account</p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>Shipping</p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>
              Contact & Support
            </p>
            <p style={{ color: "#8a8a8a", marginBottom: "0px" }}>
              All Products
            </p>
          </div>
          <div className="getintouch">
            <h3 style={{ color: "white" }}>Newsletter</h3>
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
            Follow us on{" "}
            <span>
              <FaTwitter style={{ color: "white", marginTop: "6px" }} />
            </span>
            <span>
              <FaFacebookF style={{ color: "white", marginTop: "6px" }} />
            </span>
            <span>
              <FaInstagram style={{ color: "white", marginTop: "6px" }} />
            </span>
            <span>
              <FiYoutube style={{ color: "white", marginTop: "6px" }} />
            </span>
          </div>
          
          <div className="footersocial1" style={{display:"flex",gap:"10px"}}>
           <LiaCcAmex style={{ color: "white", fontSize: "24px" }} />
           <LiaCcAmex style={{ color: "white", fontSize: "24px" }} />
           <LiaCcAmex style={{ color: "white", fontSize: "24px" }} />
           <LiaCcAmex style={{ color: "white", fontSize: "24px" }} />
           <LiaCcAmex style={{ color: "white", fontSize: "24px" }} />

            </div>
          
        </div>
      </div>
      <div className="footer2">
        <p style={{ color: "#000000", fontSize: "16px" }}>
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
