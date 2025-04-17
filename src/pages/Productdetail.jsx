import React, { useRef, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import qualityshirt from "../images/Premium-Quality.png";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import { useLocation,useNavigate } from "react-router-dom";
import "./Productdetail.css"

const Productdetail = () => {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("product");
      const location = useLocation();

    const { id } = useParams();


    useEffect(() => {
          // Set activeTab based on current path
          if (location.pathname === "/product") setActiveTab("product");
          else if (location.pathname === "/newdesign") setActiveTab("new");
          else if (location.pathname === "/stock") setActiveTab("stock");
        }, [location.pathname]);

    

    const products = [
        { id: 1, image: qualityshirt, label: "Sleeve", price: 299, quantity: 12 },
        { id: 2, image: qualityshirt, label: "Full Sleeve", price: 349, quantity: 8 },
        { id: 3, image: qualityshirt, label: "Round Neck", price: 279, quantity: 15 },
        { id: 4, image: qualityshirt, label: "V Neck", price: 319, quantity: 5 },
        { id: 5, image: shopimage, label: "V Neck", price: 319, quantity: 6 },
        { id: 6, image: shopimage, label: "V Neck", price: 319, quantity: 7 },
      ];

  // You can fetch the product by ID or use local data
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

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





    <div className="container mt-5">
      <div className="d-flex productpage-box row ">
        <div className="col-lg-5 col-12">
        <div className="product-imageful">
      <img src={product.image} alt={product.label} className="img-fluid" />
      </div>
      
       </div>
       <div className="col-lg-5 col-12 ">
        <h2 className="text-start">{product.label}</h2>
        <p className="text-start">Price: ₹{product.price}</p>
        <p className="text-start">Quantity Available: {product.quantity}</p>
        <div className="d-flex">
          
        </div>
        <div className="d-flex cart-box">
            <button className="btn col-lg-3 buynow-btn">Buy Now</button>
            <button className="btn col-lg-5 addtocart-btn">Add to Cart</button>
        </div>
      </div>

      
      </div>  
      
      
    </div>
    </>
  )
}

export default Productdetail