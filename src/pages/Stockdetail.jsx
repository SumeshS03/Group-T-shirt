import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import qualityshirt from "../images/Premium-Quality.png";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./Productdetail.css";
import { useCart } from "./CartContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import "./Stockdetail.css";
import axios from "axios";
import { FaShoppingCart } from 'react-icons/fa';

const Stockdetail = () => {
  const { id } = useParams();
  const [productdetail, setProductdetail] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
   const [selectedSize, setSelectedSize] = useState("");
  const [availableQty, setAvailableQty] = useState(0);
  const [enteredQty, setEnteredQty] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
  const fetchProduct = async () => {
    console.log("Current ID:", id);
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.get(
        "https://gts.tsitcloud.com/api/stocks/grouped-by-category",
        { headers: { Authorization: `Bearer ${token}` } }
      );


      const allStocks = response.data.flatMap((cat) => 
        cat.stocks.map((stock) => stock)
      );
      console.log("response data",response.data)
      console.log("allProducts" , allStocks);
      
      setProductsData(allStocks);
      
      // Correct comparison using _id as string
      const foundStock = allStocks.find((p) => p._id === id);
      console.log("foundproductid",foundStock)

      if (foundStock) {
        setProductdetail(foundStock);
        
        // Safely set selected image
        if (foundStock.product.images && foundStock.product.images.length > 0) {
          setSelectedImage(`https://gts.tsitcloud.com/${foundStock.product.images[0]}`);
        }
        // Store category ID if needed
        const categoryId = foundStock?.category?._id;
        if (categoryId) localStorage.setItem("categoryId", categoryId);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch product:", error);
      setIsLoading(false);
    }
  };

  fetchProduct();
}, [id]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

 

  // Handle size change
const handleSizeChange = (e) => {
  const size = e.target.value;
  setSelectedSize(size);

  // Changed from productdetail.stocks[0].quantityBySize to productdetail.quantityBySize
  const quantityMap = productdetail?.quantityBySize || {};
  const qty = quantityMap[size] || 0;
  setAvailableQty(qty);
  setEnteredQty(qty > 0 ? 1 : "");
};

  const handleQtyChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= availableQty)) {
      setEnteredQty(value);
    }

const foundProduct = productsData.find((p) => p._id === id);
if (!foundProduct) return <h2>Product not found</h2>;

  


 
}


const handleSubmit = async (e) => {
  e.preventDefault(); // Prevents form refresh

  const cusid = localStorage.getItem("customerId");
  const payload = {
    customerId: cusid,
    stockId: productdetail._id,
    quantity: enteredQty,
    size: selectedSize,
    sleeveType: productdetail.sleeveType,
    price: productdetail.priceFromMaterial,
  };

  try {
    const response = await fetch("https://gts.tsitcloud.com/api/stockCart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Order submitted successfully:", result);
      alert("Added to Ready stock cart");
    } else {
      console.error("Failed to submit order:", result);
    }
  } catch (error) {
    console.error("Error while submitting order:", error);
  }
};



  return (
    <>
      <div>
        <HomeHeader />
      </div>

      <div className="about-box d-flex  h-50 flex-column align-items-center ">
        <div className="first-background p-5  mb-4 d-flex text-white ">
          <h1 className="mt-4 aboutustext">ABOUT US</h1>
        </div>
        <p
          className=" w-50 home-contactustext "
          style={{ textAlign: "start", marginLeft: "-23%" }}
        >
          Home - About Us
        </p>
        <img src={shopimage} className="imagetopone" alt="Shop" />
      </div>

      <div className="choose-category  ">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
          <div className="row w-75 gap-2 pb-5">
            <div
              className={`col-lg-3 col-12 product-page ${
                activeTab === "product" ? "active-tab" : ""
              }`}
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
                activeTab === "stock" || "/foundProduct/:id" ? "active-tab" : ""
              }`}
              onClick={() => navigate("/stock")}
            >
              <h2 className="h4 heading-text-product">Stock Page</h2>
            </div>
          </div>
        </div>
      </div>

      
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
              <div className="row">
              <div className="col-lg-5 col-12">
              {productdetail && (
  <>
    <div className="product-imagefultwo">
      <img
        src={
          hoveredImage ||
          selectedImage ||
          `https://gts.tsitcloud.com/${productdetail.product?.images?.[0] || ''}`
        }
        alt={productdetail.product?.name}
        className="img-fluid"
      />
    </div>

    <div className="d-flex mt-4 gap-4 w-100 align-items-start">
      <div
        className="productdetail-image"
        onMouseEnter={() =>
          setHoveredImage(
            `https://gts.tsitcloud.com/${productdetail.product?.images?.[1] || ''}`
          )
        }
        onMouseLeave={() => setHoveredImage(null)}
        style={{
          border: selectedImage === `https://gts.tsitcloud.com/${productdetail.product?.images?.[1] || ''}`
            ? "2px solid blue"
            : "2px solid transparent",
        }}
      >
        <img
          src={`https://gts.tsitcloud.com/${productdetail.product?.images?.[1] || ''}`}
          alt="Second"
          className="img-fluid"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  </>
)}
            </div>
            <div className="col-lg-5 col-12 mt-5">
  {productdetail && (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Category:</div>
        <div>{productdetail.product.name}</div>
      </div>
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Sleeve Type:</div>
        <div>{productdetail.sleeveType
}</div>
      </div>
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Material:</div>
        <div>{productdetail.product.material}</div>
      </div>
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Material Price:</div>
        <div>₹{productdetail.priceFromMaterial}</div>
      </div>
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Brand:</div>
        <div>{productdetail.product.brand}</div>
      </div>
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Description:</div>
        <div>{productdetail.product.description}</div>
      </div>
      <div className="d-flex mb-2">
        <div className="fw-bold me-2" style={{ minWidth: "140px" }}>Weight:</div>
        <div>{productdetail.product.weight}</div>
      </div>
      <div className="d-flex align-items-center mb-2">
        <label htmlFor="sizeSelect" className="me-2 fw-bold" style={{ minWidth: "140px" }}>Size:</label>
        <select
          id="sizeSelect"
          className="form-select w-auto"
          value={selectedSize}
          onChange={handleSizeChange}
          required
        >
          <option value="">Select</option>
          {productdetail.product?.size?.map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>
      </div>

      <div className="d-flex align-items-center mb-2">
        <label htmlFor="qtyAvailable" className="me-2 fw-bold" style={{ minWidth: "140px" }}>Quantity:</label>
        <input
          id="qtyAvailable"
          className="form-control w-25"
          type="number"
          value={enteredQty}
          onChange={handleQtyChange}
          max={availableQty}
         min={1}
  placeholder={availableQty === 0 ? "Out of stock" : "1"}
  disabled={!selectedSize || availableQty === 0}
        />
      </div>

    </div>
    
  )}
</div>
<div className="col-lg-2 col-12 mt-5 d-flex flex-column gap-2 justify-content-center align-items-center ">
 <button type="button" class="btn btn-success btn-lg px-4 py-2 w-100">Buy Now</button>
  <button  className="btn-primary btn-lg w-100 btn" type="submit"
             >
             <FaShoppingCart className="me-2" /> Add to cart
             </button>
</div>


            </div>
            
          </div>
        </form>
      
    </>
  );
};

export default Stockdetail;