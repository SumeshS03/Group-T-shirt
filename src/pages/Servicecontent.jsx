import { useState, useEffect } from "react";
import HomeHeader from "../Layout/HomeHeader";
import "./Servicecontent.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import qualityshirt from "../images/Premium-Quality.png";
import outstandquality from "../images/Outstanding-Quality1.png";
import secpayment from "../images/Secure-payment1.png";
import cussizestyle from "../images/Custom-SIze-STyle.png";
import menstshirt from "../images/menst-shirt.jpg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import bluef from "../images/blue-f.png"
import serviceimage from "../images/serviceimage.png"

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

import { SiAirbnb } from "react-icons/si";

import tshirt from "../images/yourstyle.png";
import yourprintone from "../images/yourprint.png";
import quantity from "../images/yourquantity.jpg";
import payment from "../images/payment.jpg";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaCircleArrowLeft } from "react-icons/fa6";

import { FaCircleArrowRight } from "react-icons/fa6";

import aboutus from "../images/about-us1.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import servicepagepick from "../images/Service-page2.png"
import servicepageartwork from "../images/Service-page3.png"
import servicepageship from "../images/Service-page4.png"
import glow from "../images/Service-page-8.png"
import leaf from "../images/service-page9.png"
import fastshipping from "../images/fastshipping.png"
import customerhappy from "../images/customerhappy.png"
import videoimage from "../images/service-page1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // for arrows and pagination

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const items = [
  { id: 1, image: menstshirt, title: "Printing Service" },
  { id: 2, image: menstshirt, title: "Design Service" },
  { id: 3, image: menstshirt, title: "Digital Scanning" },
  { id: 4, image: menstshirt, title: "Copying Services" },
  { id: 5, image: menstshirt, title: "Custom Shirts" },
  { id: 6, image: aboutus, title: "Printing Service" },
  { id: 7, image: aboutus, title: "Printing Service" },
  { id: 8, image: aboutus, title: "Printing Service" },
  { id: 9, image: aboutus, title: "Printing Service" },
  { id: 10, image: aboutus, title: "Printing Service" },
];


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 992, min: 760 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

const Servicecontent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);// Number of items to show at a time


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setItemsPerPage(1); // Small screen (below 768px) - Show 2 items
      }
      else if(window.innerWidth < 1025){
        setItemsPerPage(4);
      }
      
       else {
        setItemsPerPage(5); // Large screen - Show 5 items
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    
    <>
      <div>
        <HomeHeader />
      </div>
      <div className="about-box d-flex  h-50 flex-column align-items-center">
        <div className="first-background p-5 bg-primary mb-4 d-flex text-white ">
          <h1 className="mt-4 aboutustext">SERVICE</h1>
        </div>
        <p
          className=" w-50  home-contactustext "
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - Service
        </p>
        <img src={serviceimage} className="imagetopthree"></img>
      </div>
      <p style={{ marginBottom: "0", color: "#949494", marginTop: "70px" }}>
        ALL THE FEATURES YOU NEED{" "}
      </p>
      <h2
        className="heading-text"
        style={{ textAlign: "center", marginTop: "0" }}
      >
        Fast and <span style={{ color: "blue" }}>Quality service</span>
      </h2>
      <p style={{ color: "#949494" }}>
        T-Shirt Printing for Everyone. Get a head start wiyh free design
        templates you can customize in a few clicks
      </p>

      <div className="quality-box">
              <div className="servicesbox">

              
                <div className=" custom-row row justify-content-between gx-0 gy-4">
                  <div className="box col-lg-3 col-12  ">
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
                  <div className="box col-lg-3 col-12  ">
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
                  <div className="box col-lg-3 col-12 ">
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
                
                
              </div>
              
              
            </div>
      {/* <div className="browse-all p-lg-5 mt-5 d-flex justify-content-center flex-column position-relative">
        <div className="row w-100">
          <div className="col-12 text-center ">
            <div className="d-flex  col-12 custom-gap ">
              <h2 className="photoboxheader"
                style={{ margin: "0px", fontFamily: "bevan", color: "#eeae0c" }}
              >
                <span>T-shirt printing </span>
                <span style={{ margin: "0px", color: "blue" }}>
                  {" "}
                  made easy.
                </span>
              </h2>
              <button className="btn rounded-pill browse-btn lg-mt-3 mt-md-0 px-3">
                Browse all
              </button>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 text-center d-flex">
            <div
              className="d-flex  col-12 custom-gap  "
              style={{ color: "white" }}
            >
              <p>Let us show you how your product come to life</p>
            </div>
          </div>
        </div>
        <div className="row w-100  digitalscanpagenation justify-content-center mt-4">
        
          <div className="col-12 gap-3 text-center d-flex profilesimagepad  ">
          
            <button
              className="btn"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <FaCircleArrowLeft className="pagination-button" size={40} />
            </button>
            

            
          
            
      {visibleItems.map((item) => (
        <div key={item.id} className="d-flex flex-column align-items-center profileimagesizing" style={{ color: "white" }}>
          <div className="w-100 border border-2 border-secondary rounded-4 overflow-hidden">
            <img
              className="bg-white w-100"
              style={{ height: "200px" }}
              src={item.image}
              alt="Quality Shirt"
            />
            <p
              className="text-center bg-dark text-blue py-3 m-0 bg-white d-flex align-items-center justify-content-center gap-2"
              style={{ color: "blue", fontSize: "20px" }}
            >
              {item.title}{" "}
              <FaRegArrowAltCircleRight size={20} style={{ color: "gray" }} />
            </p>
          </div>
        </div>
      ))}
   

            
            <button
              className="btn"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <FaCircleArrowRight className="pagination-button" size={40} />
            </button>
          </div>
        </div>
      </div> */}

<div className="browse-all p-lg-5 mt-5 d-flex justify-content-center flex-column">
        <div className="row w-100">
          <div className="col-12 text-center ">
            <div className="d-flex  col-12 custom-gap ">
              <h2 className="photoboxheader"
                style={{ margin: "0px", fontFamily: "bevan", color: "#eeae0c" }}
              >
                <span>T-shirt printing </span>
                <span style={{ margin: "0px", color: "blue" }}>
                  {" "}
                  made easy.
                </span>
              </h2>
              <button className="btn rounded-pill browse-btn lg-mt-3 mt-md-0 px-3">
                Browse all
              </button>
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 text-center d-flex">
            <div
              className="d-flex  col-12 custom-gap  "
              style={{ color: "white" }}
            >
              <p>Let us show you how your product come to life</p>
            </div>
          </div>
        </div>
        <div className="row w-100  digitalscanpagenation justify-content-center mt-4">
        
          {/* <div className="col-12 gap-3 text-center d-flex profilesimagepad  "> */}
            {/* Left Arrow */}
            <button
              className="btn col-1"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <FaCircleArrowLeft className="pagination-button" size={40} />
            </button>
            

            {/* Items */}
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="d-flex col-4 col-lg-2 flex-column align-items-center profileimagesizing"
                style={{ color: "white" }}
              >
                <div className="w-100 border border-2 border-secondary rounded-4 overflow-hidden">
                  <img
                    className="bg-white w-100"
                    style={{ height: "200px" }}
                    src={item.image}
                    alt="Quality Shirt"
                  />
                  <p
                    className="text-center bg-dark text-blue py-3 m-0 bg-white d-flex align-items-center justify-content-center gap-2"
                    style={{ color: "blue", fontSize: "18px" }}
                  >
                    {item.title}{" "}
                    <FaRegArrowAltCircleRight
                      size={20}
                      style={{ color: "gray" }}
                    />
                  </p>
                </div>
              </div>
            ))}

            {/* Right Arrow */}
            <button
              className="btn col-1"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <FaCircleArrowRight className="pagination-button" size={40} />
            </button>
          {/* </div> */}
        </div>
      </div>
      

{/* <div className="browse-all p-lg-5 mt-5 d-flex justify-content-center flex-column position-relative">
  <div className="row w-100">
    <div className="col-12 text-center">
      <div className="d-flex col-12 custom-gap">
        <h2 className="photoboxheader" style={{ margin: "0px", fontFamily: "bevan", color: "#eeae0c" }}>
          <span>T-shirt printing </span>
          <span style={{ margin: "0px", color: "blue" }}> made easy.</span>
        </h2>
        <button className="btn rounded-pill browse-btn lg-mt-3 mt-md-0 px-3">Browse all</button>
      </div>
    </div>
  </div>
  <div className="row w-100">
    <div className="col-12 text-center d-flex">
      <div className="d-flex col-12 custom-gap" style={{ color: "white" }}>
        <p>Let us show you how your product come to life</p>
      </div>
    </div>
  </div>
  <div className="row w-100 digitalscanpagenation justify-content-center mt-4">
    <div className="col-12 gap-3 text-center d-flex profilesimagepad">
      <button
        className="btn pagination-button left"
        onClick={prevPage}
        disabled={currentPage === 0}
      >
        <FaCircleArrowLeft size={40} />
      </button>

      {visibleItems.map((item) => (
        <div key={item.id} className="d-flex flex-column align-items-center profileimagesizing" style={{ color: "white" }}>
          <div className="w-100 border border-2 border-secondary rounded-4 overflow-hidden">
            <img className="bg-white w-100" src={item.image} alt="Quality Shirt" />
            <p className="text-center bg-dark text-blue py-3 m-0 bg-white d-flex align-items-center justify-content-center gap-2" style={{ color: "blue", fontSize: "20px" }}>
              {item.title} <FaRegArrowAltCircleRight size={20} style={{ color: "gray" }} />
            </p>
          </div>
        </div>
      ))}

      <button
        className="btn pagination-button right"
        onClick={nextPage}
        disabled={currentPage === totalPages - 1}
      >
        <FaCircleArrowRight size={40} />
      </button>
    </div>
  </div>
</div> */}


      <div className="container  graphic-design">
      <div className=" row verifyimageboxone ">
        <div className="col-lg-6 text-center position-relative">
        <div className="verify-photo-box  ">
                <img
                  src={require("../images/Girl-image.png")}
                  alt="logo"
                  className=" verify-photo-img position-absolute"
                />
              </div>
            </div>
        <div className="verify-photo-textone col-lg-6 ">
          <div>
            <h2 className="heading-textprint ms-3 ">
              We create your prints and
            </h2>
            <h2 className="heading-textprint ms-3" style={{ color: "#015dc0" }}>
              get them where they have to go
            </h2>
          </div>

          <div className="accordion mt-4" id="accordionExample">
            {/* Accordion Item #1 */}
            <div className="accordion-item mb-2 ">
              <h1 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button custom-accordion-button rounded-pill"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{ fontSize: "1.4rem" }}
                >
                  Graphic Design Service
                </button>
              </h1>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy
                </div>
              </div>
            </div>

            {/* Accordion Item #2 */}
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed custom-accordion-button rounded-pill"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{ fontSize: "1.4rem" }}
                >
                  Premium Branding Options
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy
                </div>
              </div>
            </div>

            {/* Accordion Item #3 */}
            <div className="accordion-item mb-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed custom-accordion-button rounded-pill"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ fontSize: "1.4rem" }}
                >
                  Printing Services
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy
                </div>
              </div>
            </div>

            {/* Accordion Item #4 */}
            <div className="accordion-item mb-2 ">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed custom-accordion-button rounded-pill"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  style={{ fontSize: "1.4rem" }}
                >
                  POD For Online Stores
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-5 mb-5">
      <h2
        className="mt-5"
        style={{ margin: "0px", fontFamily: "bevan", color: "#eeae0c" }}
      >
        <span>How </span>
        <span style={{ margin: "0px", color: "blue" }}> It Work</span>
      </h2>
      <p className="my-0">
        Lorem ipsum dhitecto dolor nihilliquam saepe facere neque odit! Delectus
        provident necessitatibus molestiae eius nihil earum minima dolorem.
      </p>
      <p className="mb-5">
        Lorem ipsum dhitecto dolor nihilliqram minima dolorem.
      </p>
      </div>

      <div className=" bg-white  d-flex justify-content-center align-items-center">
        
        <div className="row justify-content-center custom-artwork mt-5 rounded-fill ">
          <div className="col-12 rounded-fill custom-artworkone d-flex flex-column justify-content-center align-items-center position-relative ">
          <div className="row justify-content-center w-100">
          <div className="col-auto">
      <div className="w-20 start-50 video-box ">
              <img className="videoimage rounded-4" src={videoimage}></img>
            </div>
            </div>
            </div>
            <div className="container py-5">
            <div className=" d-flex row  justify-center  shipit-you profilecustomart items-center">
              {/* Profile 1 */}
              <div className=" p-3  text-center flex-1  item-center col-lg-4 col-md-12">
              <div className="d-flex justify-content-center align-items-center w-100">
              <div className=" bg-white outterimage-border d-flex justify-content-center align-items-center ">
                  <img
                    className="rounded-full designerprofile "
                    src={servicepagepick}
                    alt="Profile 1"
                  />
                </div>
                </div>
                <div className="w-55">
                <h2 className=" font-semibold pickproductheadtext" >PICK A PRODUCT</h2>
                <p className="  my-0 pickproducttext " >PRINTED ON 100% QUALITY COTTON FOR A </p>
                <p className="pickproducttext">VIBRANT FINISH AND ALL - DAY COMFORT</p>
                </div>
              </div>

              {/* Profile 2 */}
              <div className=" p-3  text-center flex-1 item-center col-lg-4 col-md-12">
              <div className="d-flex justify-content-center align-items-center w-100">
              <div className=" bg-white outterimage-border d-flex justify-content-center align-items-center ">
                  <img
                    className="rounded-full designerprofile "
                    src={servicepageartwork}
                    alt="Profile 1"
                  />
                </div>
                </div>
                <div className="w-55">
                <h2 className="text-xl font-semibold pickproductheadtext ">CUSTOM ARTWORK</h2>
                <p className=" my-0 pickproducttext " style={{color:"#6b6b6b"}}>PRINTED ON 100% QUALITY COTTON FOR A </p>
                <p className="pickproducttext">VIBRANT FINISH AND ALL - DAY COMFORT</p>
                </div>
              </div>

              {/* Profile 3 */}
              <div className=" p-3  text-center flex-1 item-center col-lg-4 col-md-12">
                <div className="d-flex justify-content-center align-items-center w-100">
              <div className=" bg-white outterimage-border d-flex justify-content-center align-items-center ">
                  <img
                    className="rounded-full designerprofile "
                    src={servicepageship}
                    alt="Profile 1"
                  />
                </div>
                </div>
                <div className="w-55">
                <h2 className="text-xl font-semibold pickproductheadtext">SHIP IT FOR YOU</h2>
                <p className="my-0 pickproducttext" style={{color:"#6b6b6b"}}>PRINTED ON 100% QUALITY COTTON FOR A </p>
                <p className="pickproducttext">VIBRANT FINISH AND ALL - DAY COMFORT</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="enjoyup p-5 ">
              <div className="row">
                <div className="col-12 enjoyup-text " style={{ paddingBottom:"6%",paddingTop:"6%"}}>
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

      <div className="toolsbox container-fluid mt-3 ">
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
      <div className="footer2 py-2">
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

export default Servicecontent;
