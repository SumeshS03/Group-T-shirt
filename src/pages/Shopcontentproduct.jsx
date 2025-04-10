import React, { useRef, useState } from "react";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import "./Shopcontentproduct.css";


import tshirt from "../images/yourstyle.png";
import yourprintone from "../images/yourprint.png";
import quantity from "../images/yourquantity.jpg";
import payment from "../images/payment.jpg";

import qualityshirt from "../images/Premium-Quality.png";
import outstandquality from "../images/Outstanding-Quality1.png";
import secpayment from "../images/Secure-payment1.png";
import cussizestyle from "../images/Custom-SIze-STyle.png";

const Shopcontentproduct = () => {
  const [activeTab, setActiveTab] = useState("product");

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
          className=" w-50 home-contactustext "
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - About Us
        </p>
        <img src={shopimage} className="imagetopone"></img>
      </div>

      <div className="choose-category  ">
        <div className="container-fluid">
          <div className="row">
            <div className="products-type d-flex">
              <div
                className={`col-3 product-page ${
                  activeTab === "product" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("product")}
              >
                <h2 className="h4 heading-text">Product Page</h2>
              </div>
              <div
                className={`col-3 new-design-page ${
                  activeTab === "new" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("new")}
              >
                <h2 className="h4 heading-text">New Design Page</h2>
              </div>
              <div
                className={`col-3 stock-page ${
                  activeTab === "stock" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("stock")}
              >
                <h2 className="h4 heading-text">Stock Page</h2>
              </div>
            </div>
          </div>

          <h1 className="heading-text m-0">
            Choose
            <span style={{ color: "#015dc0" }}> Category</span>
          </h1>
          <div className="w-90 p-2 t-shirtsrowbox ">
           <div className=" custom-tshirts row justify-content-between gx-0 gy-4">
                             <div className="box col-lg-3 col-12  ">
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
                             <div className="box col-lg-3 col-12  ">
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
                             <div className="box col-lg-3 col-12 ">
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
                             <div className="box col-lg-3 col-12">
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
                             <div className="box col-lg-3 col-12 ">
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
      <div className=" p-2 tshirtstyles  row justify-content-between  ">
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
      </div>
    </>
  );
};

export default Shopcontentproduct;
