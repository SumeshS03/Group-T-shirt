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
import './Stockdetail.css'



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
    const [activeTab, setActiveTab] = useState("");
     const [selectedImage, setSelectedImage] = useState(stockdetail.image);
    const navigate = useNavigate();
    const location = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("M");
    const totalQuantity = Object.values(stockdetail.sizes).reduce(
      (sum, qty) => sum + qty,
      0
    );
    const maxQuantity = stockdetail?.sizes[size] || 0;
    const quantityOptions = Array.from({ length: maxQuantity }, (_, i) => i + 1);

    console.log("Total Quantity:", totalQuantity);

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
                  activeTab === "stock" || "/Stockdetail/:id" ? "active-tab" : ""
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
        <img src={selectedImage} alt={stockdetail.label} className="img-fluid" />

     

      </div>
     
      <div className="d-flex mt-4 gap-4 w-100 align-items-start">
      <div className="productdetail-image" onClick={() => setSelectedImage(stockdetail.image)}
         style={{
          border: selectedImage === stockdetail.image ? '2px solid blue' : '2px solid transparent',
          borderRadius: '8px',
          padding: '4px'
        }}>
     <img src={stockdetail.image} alt={stockdetail.label} className="img-fluid" style={{ cursor: "pointer" }}
      />
     </div>

     <div className="productdetail-image" onClick={() => setSelectedImage(stockdetail.imageone)}
      style={{
        border: selectedImage === stockdetail.imageone ? '2px solid blue' : '2px solid transparent',
        borderRadius: '8px',
        padding: '4px'
      }}>
     <img src={stockdetail.imageone} alt={stockdetail.label} className="img-fluid" style={{ cursor: "pointer" }} />
     </div>
  
    </div>
 

      
       </div>
       <div className="col-lg-5 col-12 ">
        <h2 className="text-start">{stockdetail.label}</h2>
        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque quasi alias eveniet consequuntur dolor.</p>
       
        <h2 className="text-xl font-bold mb-2 h5">About this item</h2>
        <li className="text-start"><strong>Type:</strong> Cotton Round Neck T-Shirt – Soft and breathable fabric</li>
        <li className="text-start"><strong>Fit:</strong> Regular Fit – Comfortable for daily wear</li>
        <li className="text-start"><strong>Fabric:</strong> 100% Pure Cotton – Durable and skin-friendly</li>
        <li className="text-start"><strong>Design:</strong> Printed Graphic – Stylish and trendy look</li>
        <div className="row mt-4">

        <div className="col-lg-3">
  <div className="d-flex flex-column">
    <label htmlFor="sizeSelect" className="text-start">Size</label>
    <select 
      id="sizeSelect"
      className="w-100 quantity-box"
      value={size}
      onChange={(e) => {
        const selectedSize = e.target.value;
        setSize(selectedSize);
        const availableQty = stockdetail?.sizes[selectedSize] || 0;
        setQuantity(availableQty > 0 ? 1 : ""); // Reset quantity when size changes
      }}
    >
      <option value={size} hidden>
      Size: {size}
    </option>
    {Object.keys(stockdetail?.sizes || {}).map(text => (
      <option key={text} value={text}>{text}</option>
    ))}
    </select>
  </div>
</div>
          <div className="col-lg-3 ">
          <div className="d-flex flex-column">
         <label htmlFor="sizeSelect" className="text-start">Quantity</label>
        <select 
        className="w-100 quantity-box"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        disabled={maxQuantity === 0}
      >
        {maxQuantity === 0 ? (
      <option value="">Out of Stock</option>
    ) : (
      <>
        <option value={quantity} hidden>Quantity: {quantity}</option>
        {quantityOptions.map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </>
    )}
         </select>
        
        </div>
        </div>
        
        </div>
        <div className="row mt-4">
          <div className="col-lg-3">
            <Button>Buy Now</Button>
          </div>
          <div className="col-lg-3">
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
      </div>  
      
      
    </div>
    
    

    

    
    </>
  )
}

export default Stockdetail