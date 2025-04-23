import React, { useRef, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import qualityshirt from "../images/Premium-Quality.png";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import { useLocation,useNavigate } from "react-router-dom";
import "./Productdetail.css"
import { useCart } from "./CartContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';



 const products = [
                { id: 1, image: qualityshirt,imageone:qualityshirt,imagetwo:shopimage, label: "Sleeve", price: 299,sizes: {XS:2,S: 5,M: 4,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 2, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "Full Sleeve", price: 349,sizes: {XS:2,S: 5,M: 3,L: 1,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 3, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "Round Neck", price: 279,sizes: {XS:2,S: 2,M: 3,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 4, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 3,L: 1,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 5, image: shopimage,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 15,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 6, image: shopimage,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 3,L: 4,X: 41,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
              ];

const Stockdetail = () => {

    const { id } = useParams();
    

    const stockdetail = products.find((p) => p.id === parseInt(id));
    const [activeTab, setActiveTab] = useState("product");
    const navigate = useNavigate();

    if (!stockdetail) return <h2>Product not found</h2>;

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

    

    
    </>
  )
}

export default Stockdetail