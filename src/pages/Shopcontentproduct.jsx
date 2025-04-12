import React, { useRef, useState } from "react";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import "./Shopcontentproduct.css";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

import tshirt from "../images/yourstyle.png";
import yourprintone from "../images/yourprint.png";
import quantity from "../images/yourquantity.jpg";
import payment from "../images/payment.jpg";

import qualityshirt from "../images/Premium-Quality.png";
import outstandquality from "../images/Outstanding-Quality1.png";
import secpayment from "../images/Secure-payment1.png";
import cussizestyle from "../images/Custom-SIze-STyle.png";

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
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const Shopcontentproduct = () => {
  const [activeTab, setActiveTab] = useState("product");
  const [showColors, setShowColors] = useState(false);
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ff0000');
  const [selectedNumber, setSelectedNumber] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState('XXL');
  const [selectedQuality, setSelectedQuality] = useState("Premium");
  const [selectedType, setSelectedType] = useState("Print");
  const [clicked, setClicked] = useState(false);
  const sliderRef = useRef(null);
  const cardWidth = 270; // Must match actual width of one card

  const handleScroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };



  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];


  const numbers = Array.from({ length: 2000 }, (_, i) => i + 10);

  const [colors] = useState([
    '#ff0000', '#00ff00', '#0000ff', '#ffff00',
    '#ff00ff', '#00ffff', '#ffffff', '#000000'
  ]);
  const handleSelect = (num) => {
    setSelectedNumber(num);
    setShowDropdown(false);
  };

  const productNames = [{
    src: qualityshirt,
    name: "Cap"
  },
  {
    src: qualityshirt,
    name: "t-shirt"
  },
{
  src: qualityshirt,
    name: "hoodies"
},
{
  src: qualityshirt,
    name: "hoodies"
},{
  src: qualityshirt,
    name: "hoodies"
},{
  src: qualityshirt,
    name: "hoodies"
},
{
  src: qualityshirt,
    name: "hoodies"
},
{
  src: qualityshirt,
    name: "hoodies"
},
{
  src: qualityshirt,
    name: "hoodies"
},
];

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
          <div className="row w-75 gap-2">
            {/* <div className="products-type "> */}
              <div
                className={`col-lg-3 col-12 product-page ${
                  activeTab === "product" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("product")}
              >
                <h2 className="h4 heading-text-product">Product Page</h2>
              </div>
              <div
                className={`col-lg-3 col-12 new-design-page ${
                  activeTab === "new" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("new")}
              >
                <h2 className="h4 heading-text-product">New Design Page</h2>
              </div>
              <div
                className={`col-lg-3 col-12 stock-page ${
                  activeTab === "stock" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("stock")}
              >
                <h2 className="h4 heading-text-product">Stock Page</h2>
              </div>
            {/* </div> */}
          </div>

          <h1 className="heading-text mt-3 mb-3">
            Choose
            <span style={{ color: "#015dc0" }}> Category</span>
          </h1>
          <div className=" p-2 t-shirtsrowbox ">
            <div className=" custom-tshirts row justify-content-between align-items-center gx-0 gy-4">
              <div className="verityproduct-box col-12 col-md-12 col-lg-3  ">
                <div className="box-innersize">
                  <img
                    src={qualityshirt}
                    alt="Premium Quality"
                    className=" img-fluid t-shirt-image"
                    style={{}}
                  />
                  <h2 className="h5 bortexthead">T-Shirts</h2>
                  <p className="tshirtstext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, quo! Deserunt
                  </p>
                </div>
              </div>
              <div className="verityproduct-box col-12 col-md-12 col-lg-3  ">
                <div className="box-innersize">
                  <img
                    src={qualityshirt}
                    alt="Premium Quality"
                    className="t-shirt-image img-fluid "
                    style={{}}
                  />
                  <h2 className="h5 bortexthead">Long Sleeves</h2>
                  <p className="tshirtstext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, quo! Deserunt
                  </p>
                </div>
              </div>
              <div className="verityproduct-box col-12 col-md-12 col-lg-3 ">
                <div className="box-innersize">
                  <img
                    src={qualityshirt}
                    alt="Premium Quality"
                    className="t-shirt-image"
                    style={{}}
                  />
                  <h2 className="h5 bortexthead">Sweater</h2>
                  <p className="tshirtstext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, quo! Deserunt
                  </p>
                </div>
              </div>
              <div className="verityproduct-box col-12 col-md-12 col-lg-3">
                <div className="box-innersize">
                  <img
                    src={qualityshirt}
                    alt="Premium Quality"
                    className="t-shirt-image"
                    style={{}}
                  />
                  <h2 className="h5 bortexthead">Hoodies</h2>
                  <p className="tshirtstext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, quo! Deserunt
                  </p>
                </div>
              </div>
              <div className="verityproduct-box col-12 col-md-12 col-lg-3 ">
                <div className="box-innersize">
                  <img
                    src={qualityshirt}
                    alt="Premium Quality"
                    className="t-shirt-image"
                    style={{}}
                  />
                  <h2 className="h5 bortexthead">Cups</h2>
                  <p className="tshirtstext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, quo! Deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-3">
      <div className="btn bg-primary"  ><FaCircleChevronLeft className="leftarrw-btn" /></div>
        <div className=" p-3 tshirtstyles  row justify-content-between gap-3 gap-md-3 gap-lg-0  "
         >
          
          <div className="tshirtstylebox col-12 col-md-12 col-lg-3 ">
            <div className="box-innersize">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="t-shirtstyle-image"
                style={{}}
              />
              <h2 className="h5 bortexthead">Cups</h2>
            </div>
          </div>
          <div className="tshirtstylebox col-lg-3 col-12  ">
            <div className="box-innersize">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="t-shirtstyle-image"
                style={{}}
              />
              <h2 className="h5 bortexthead">Cups</h2>
            </div>
          </div>
          <div className="tshirtstylebox col-lg-3 col-12 ">
            <div className="box-innersize">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="t-shirtstyle-image"
                style={{}}
              />
              <h2 className="h5 bortexthead">Cups</h2>
            </div>
          </div>
          <div className="tshirtstylebox col-lg-3 col-12 ">
            <div className="box-innersize">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="t-shirtstyle-image"
                style={{}}
              />
              <h2 className="h5 bortexthead">Cups</h2>
            </div>
          </div>
        </div>
        <div className="btn bg-primary" ><FaCircleChevronRight className="rightarrw-btn" /></div>
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-3  ">
        <div className="row ">
        <div className="d-flex gap-4 enter-quatity-box">
          <div className="d-flex align-items-center col-lg-6 col-12">
            <label className="me-2 mb-0">Enter Quantity:</label>
            <input type="text" className="rounded-5 py-1 px-1 w-50" />
          </div>
          <div className="d-flex align-items-center col-lg-6 col-12">
            <label className="me-2 mb-0">Number of logos:</label>
            <input type="text" className="rounded-5 py-1 px-1 w-25" />
          </div>
        </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-3 mb-0">
        <div className="image-uplode-box text-white bg-dark p-3 rounded-5 text-center justify-content-between d-flex ">
          <label className="d-block mb-2 uplode-text">Upload Logo</label>
          <label htmlFor="upload-logo" style={{ cursor: "pointer" }}>
            <MdAddPhotoAlternate size={40} />
          </label>
          <input
            type="file"
            id="upload-logo"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("Selected file:", file);
              // you can preview or handle file upload here
            }}
          />
        </div>
      </div>
      <p className="mt-0">Png,Svg Format</p>
      <div className="container d-flex justify-content-center align-items-center  logoaddedtshirt-box-con ">
        <div className="logoaddedtshirt-box text-center justify-content-center align-items-center ">
          <div className="logoaddedtshirt col-12 col-md-12 col-lg-3 ">
            <div className="box-inner">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="t-shirtstyle-logo"
                style={{}}
              />
            </div>
          </div>

          <div className="logoaddedtshirt col-12 col-md-12 col-lg-3 ">
            <div className="box-inner">
              <img
                src={qualityshirt}
                alt="Premium Quality"
                className="t-shirtstyle-logo"
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container w-75 d-flex justify-content-center align-items-center  position-relative styling-box"
        style={{ minHeight: "150px" }}
      >
        <div className="quality-type text-center">
          <div>Price Format:</div>
          <div className="row justify-content-center align-items-center">
            <div className=" justify-content-center align-items-center quality-types-box">
            {["Premium", "VFM", "Budget"].map((type) => (
        <button
          key={type}
          className={`btn rounded-5 quality-btn ${
            selectedQuality === type ? "active" : ""
          }`}
          onClick={() => setSelectedQuality(type)}
        >
          {type}
        </button>
      ))}
            </div>
          </div>
        </div>
       
          <div className="row w-100 mt-5">
          {/* <div className="d-flex justify-content-center align-items-center "> */}
            <div className="col-lg-3 col-12 p-2 d-flex flex-column choose-colour-box justify-content-center align-items-center">
            
             <label>Choose Colour:</label>
             
             <div className="colour-choose-box d-flex ">
             <div className="color-circle" style={{ backgroundColor: selectedColor }}
             ></div> 
             <div className="color-select-icon d-flex  align-items-center gap-2 position-relative" style={{ backgroundColor: "white" }}
             >
             <IoIosArrowDown size={20} color="#555" onClick={() => setShowColorList(!showColorList)} />
             </div>

             {showColorList && (
          <div 
            className="color-list position-absolute bg-white p-2 rounded shadow"
            style={{ 
              top: '100%', 
              left: 0, 
              zIndex: 1000,
              minWidth: '150px'
            }}
          >
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option d-inline-block m-1"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: color,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setSelectedColor(color);
                  setShowColorList(false);
                }}
              ></div>
            ))}
          </div>
        )}
             
             <div>
             <FaPlusCircle />
             </div>
             
             </div>

            </div>
            
            <div className="col-lg-2 col-12 p-2 d-flex flex-column choose-colour-box align-items-center  ">
            <label>Logo Quatity:</label>
            <div className="pieces-box d-flex   "
            onClick={() => setShowDropdown(!showDropdown)}
            >
            <span>{selectedNumber}</span>
            <div>
             <IoIosArrowDown size={20} color="#555"  />
             </div>
             
            </div>
            </div>
            {showDropdown && (
        <div
          className="dropdown-list position-absolute mt-1"
          style={{
            top: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#fff",
            zIndex: 100,
          }}
        >
          {numbers.map((num) => (
            <div
              key={num}
              onClick={() => handleSelect(num)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {num}
            </div>
          ))}
        </div>
      )}
            <div className="col-lg-4 col-12 p-2 d-flex flex-column choose-colour-box">
            <label>Logo Quatity:</label>
            <div className="d-flex justify-content-center align-items-center quality-type-select">
              <div  className={`btn print-btn ${selectedType === "Print" ? "active" : ""}`}
        onClick={() => setSelectedType("Print")}>Print</div>
              <div  className={`btn emposed-btn ${selectedType === "Emposed" ? "active" : ""}`}
        onClick={() => setSelectedType("Emposed")}>Emposed</div>
            </div>
            </div>
            <div className="col-lg-3 col-12 d-flex flex-column align-items-center justify-content-center mb-md-2 ">
              {/* <div className=" d-flex justify-content-center align-items-center "> */}
              
              
            <label>Size Chart:</label>
            
            <div className="size-select-box d-flex position-relative   "
            style={{ cursor: 'pointer' }}
            
            >
              <div className="d-flex justify-content-center align-items-center ">
            <span>{selectedSize}</span>
            <div>
             <IoIosArrowDown size={20} color="#555" onClick={() => setShowSizes(!showSizes)}  />
             </div>
             {showSizes && (
            <div className="position-absolute bg-white rounded shadow mt-1"
                 style={{
                   top: '100%',
                   left: 0,
                   zIndex: 1000,
                   maxHeight: '200px',
                   overflowY: 'auto',
                   minWidth: '100px'
                 }}>
              {sizes.map((size) => (
                <div key={size}
                     className="px-3 py-2 hover-bg-gray"
                     style={{
                       cursor: 'pointer',
                       backgroundColor: size === selectedSize ? '#f0f0f0' : 'transparent'
                     }}
                     onClick={() => {
                       setSelectedSize(size);
                       setShowSizes(false);
                     }}>
                  {size}
                </div>
              ))}
            </div>
          )}
            </div>
            </div>
            {/* </div> */}
          {/* </div> */}
        </div>
        </div>
      </div>
      <div className="container w-50 d-flex flex-column justify-content-center align-items-center ">
        <p className="tshirtchangetext">Tshirt any change in add design</p>
        <textarea className="design-change-box"></textarea>
        <div className={`sent-text-btn mt-3 ${clicked ? "active" : ""}`}
      onClick={() => setClicked(!clicked)}>Send</div>
      </div>
      <div className="container price-cal-box ">
        <div className="row price-calculate display-flex justify-content-center align-items-center ">
          <div className="d-flex flex-column col-lg-2 col-12 ">
            <label>Amount:</label>
            <div className="amount-box mt-3">

            </div>
          </div>
          <div className="d-flex flex-column col-lg-2 col-12 ">
            <label>GST Detailes:</label>
            <div className="gst-box mt-3">

            </div>
          </div>
          <div className="d-flex flex-column col-lg-2 col-12 justify-content-center align-items-center">
            <label>Discount:<strong> 50%</strong></label>
           
            <div className="discount-box mt-3">
             50%
            </div>
          </div>
          <div className="col-1">=</div>
          <div className="d-flex flex-column col-lg-2 col-12 ">
            <label>Total-Amount:</label>
            <div className="total-amount-box mt-3">
             
            </div>
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

export default Shopcontentproduct;
