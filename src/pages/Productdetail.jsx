import React, { useRef, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import qualityshirt from "../images/Premium-Quality.png";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import { useLocation,useNavigate } from "react-router-dom";
import "./Productdetail.css"
import { useCart } from "./CartContext";
// import { useCart } from "../context/CartContext";

const Productdetail = () => {

   const [selectedSize, setSelectedSize] = useState("");
   

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

   const [activeButton, setActiveButton] = useState("");

  //  const { addToCart } = useCart();

   const handleCartClick = () => {

    // if (!selectedSize) {
    //   alert("Please select a size before adding to cart.");
    //   return;
    // }

    // addToCart(product, selectedSize);
    // setActiveButton("cart");


    
    setActiveButton("cart");
    navigate(`/cart/${product.id}`);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };


  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsone, setShowOptionsone] = useState(false);
  const [showOptionsthree, setShowOptionsthree] = useState(false);
  const [secondlogo, setsecondlogo]=useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const polytoggle = () => {
    setShowOptionsone(!showOptionsone)
  };
  const polycottoggle = () => {
    setShowOptionsthree(!showOptionsthree)
  };

  const [uploadedImage, setUploadedImage] = useState('');

  const handleImageUpload = (e) =>{
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("Selected image URL:", imageUrl);
  
      // You can also store it in state to display it:
      setUploadedImage(imageUrl);
    }
  }

  const [uploadedImagetwo, setUploadedImagetwo] = useState('');
  const handleImageUploadtwo = (e) =>{
    const file = e.target.files[0];
    if (file) {
      const imageUrltwo = URL.createObjectURL(file);
      console.log("Selected image URL:", imageUrltwo);
  
      // You can also store it in state to display it:
      setUploadedImagetwo(imageUrltwo);
    }
  }

  const showsecondlogoadd = () =>{
      setsecondlogo(!secondlogo)
  }
    

    

    const products = [
                { id: 1, image: qualityshirt, label: "Sleeve", price: 299,sizes: {S: 5,M: 4,L: 4,X: 2,XL: 1} },
                { id: 2, image: qualityshirt, label: "Full Sleeve", price: 349,sizes: {S: 5,M: 3,L: 1,X: 2,XL: 1} },
                { id: 3, image: qualityshirt, label: "Round Neck", price: 279,sizes: {S: 2,M: 3,L: 4,X: 2,XL: 1} },
                { id: 4, image: qualityshirt, label: "V Neck", price: 319,sizes: {S: 5,M: 3,L: 1,X: 2,XL: 1} },
                { id: 5, image: shopimage, label: "V Neck", price: 319,sizes: {S: 5,M: 15,L: 4,X: 2,XL: 1} },
                { id: 6, image: shopimage, label: "V Neck", price: 319,sizes: {S: 5,M: 3,L: 4,X: 41,XL: 1} },
              ];

  // You can fetch the product by ID or use local data
  const product = products.find((p) => p.id === parseInt(id));

  // if (!product) return <h2>Product not found</h2>;

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
        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque quasi alias eveniet consequuntur dolor.</p>
        <p className="text-start">Price: ₹{product.price}</p>
        <div>
                <h6 className="mt-2 text-start">Quantity Available</h6>
                <input
                  type="text"
                  value={Object.values(product.sizes).reduce((sum, qty) => sum + qty, 0)}
                  readOnly
                  className="form-control quantity-input"
                />
              </div>
        <div className="d-flex align-items-center gap-3 mt-3">
  <div className="fw-bold">Size</div>
  <select className="form-select w-auto" onChange={handleSizeChange}>
    <option value="">Select</option>
    {Object.keys(product.sizes).map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
  </select>

   {/* Show size-wise quantity when selected */}
   {selectedSize && (
          <div>
            <span className="fw-semibold">
              Available: {product.sizes[selectedSize]}
            </span>
          </div>
        )}
</div>
        <div className="d-flex">
          
        </div>
        <div className="d-flex cart-box mt-5">
            <button  className={`btn col-lg-3 buynow-btn ${
          activeButton === "buy" ? "active-btn" : ""
        }`}
        onClick={() => setActiveButton("buy")}>Buy Now</button>
            <button className={`btn col-lg-5 addtocart-btn ${
          activeButton === "cart" ? "active-btn" : ""
        }`}
        onClick={handleCartClick}>Add to Cart</button>
        </div>
      </div>

      
      </div>  
      
      
    </div>
    <div className="container mt-5">
      <div className="row ">
        <label className="fs-5 col-4">Enter Quantity required:</label>
        <div className="col-3">
          <input 
          type="number"
          // min='0'
          className="form-control"
          placeholder="Enter quantity"
          ></input>
        </div>
      </div>
      <div className="row mt-2 ">
        <label className="fs-5 col-4">How many Logos to add:</label>
        <div className="col-3">
          <input 
          type="number"
          // min='0'
          className="form-control"
          placeholder="Enter quantity"
          ></input>
        </div>
      </div>
      <div className="row mt-2 ">
        <label className="fs-5 col-4 ">Pocket Required:</label>
        <div className="col-1 d-flex justify-content-center align-items-center gap-3">
         
          <div>
         <input type="radio" id="yes1" name="option" />
         <label htmlFor="yes1">Yes</label>
         </div>
         <div>
         <input type="radio" id="yes1" name="option" />
         <label htmlFor="yes1">No</label>
         </div>
        </div>
      </div>
      <div className="row mt-2 ">
        <label className="fs-5 col-4">Choose Your Option:</label>
        <div className="col-2 ">
          <div className="cotton-dropdown">
          <label onClick={polycottoggle} className="dropdown-label">Cotton</label>
          <select className="form-select mt-2">
        <option value="">option </option>
        <option value="printed">option 1</option>
        <option value="embroidered">option 2</option>
        <option value="embroidered">option 3</option>
        <option value="embroidered">option 4</option>
        <option value="embroidered">option 5</option>
        <option value="embroidered">option 6</option>
        <option value="embroidered">option 7</option>
  </select>
          </div>
          <div>
            
          </div>
        </div>
        <div className="col-2">
          <div className="cotton-dropdown">
          <label onClick={polytoggle} className="dropdown-label">Polyester</label>
          <select className="form-select mt-2">
        <option value="">option </option>
        <option value="printed">option 1</option>
        <option value="embroidered">option 2</option>
        <option value="embroidered">option 3</option>
        <option value="embroidered">option 4</option>
        <option value="embroidered">option 5</option>
        <option value="embroidered">option 6</option>
        <option value="embroidered">option 7</option>
  </select>
          </div>
          <div>
            
          </div>
        </div>
        <div className="col-2">
          <div className="cotton-dropdown">
          <label onClick={toggleOptions} className="dropdown-label">Poly Cotton</label>
          <select className="form-select mt-2">
        <option value="">option 1</option>
        <option value="printed">option 2</option>
        <option value="embroidered">option 3</option>
        <option value="embroidered">option 4</option>
        <option value="embroidered">option 5</option>
        <option value="embroidered">option 6</option>
        <option value="embroidered">option 7</option>
        <option value="embroidered">option 8</option>
  </select>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <label className="fs-5 col-4">Delivery Date:</label>
        <div className="col-3">
          <input 
          type="date"
          // min='0'
          className="form-control"
          placeholder="Enter quantity"
          ></input>
        </div>
      </div>
      <div className="row mt-2">
        <label className="fs-5 col-4">Choose Colour:</label>
        <div className="col-3">
          {/* <input 
          type="date"
          // min='0'
          className="form-control"
          placeholder="Enter quantity"
          ></input> */}
        </div>
      </div>
      <div className="row mt-2">
        <label className="fs-5 col-4">Logo:</label>
        <div className="col-2">
        <label className="form-label">Logo Type</label>
        <select className="form-select">
        <option value="">Select Type</option>
        <option value="printed">Printed</option>
        <option value="embroidered">Emposed</option>
  </select>
        </div>
        <div className="col-2">
        <label className="form-label">Logo Position</label>
        <select className="form-select">
        <option value="">left Chest</option>
        <option value="printed">Right Chest</option>
        <option value="embroidered">Left Sleeve</option>
        <option value="embroidered">Right Sleeve</option>
        <option value="embroidered">Front Center</option>
        <option value="embroidered">Back Top</option>
        <option value="embroidered">Back Center</option>
        <option value="embroidered">On Pocket</option>
  </select>
        </div>
        <div className="col-2">
          <input 
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageUpload}
          />
          
        </div>
        {uploadedImage && (
          <>
          <img src={uploadedImage} alt="Uploaded preview" className="uploded-img p-2  col-2" 
   />
   <button className="btn btn-primary col-1  text-center add-logo-btn" onClick={showsecondlogoadd}>Add Logo</button>
   <div className="col-1">
    
   </div>
   </>
  
  
   
)}

 {secondlogo && (
  <div className="'row mt-2 d-flex ">
    
    <label className="fs-5 col-4">Logo:</label>
    <div className="col-2">
        <label className="form-label">Logo Type</label>
        <select className="form-select">
        <option value="">Select Type</option>
        <option value="printed">Printed</option>
        <option value="embroidered">Embroidered</option>
  </select>
        </div>

        <div className="col-2">
        <label className="form-label">Logo Position</label>
        <select className="form-select">
        <option value="">left Chest</option>
        <option value="printed">Right Chest</option>
        <option value="embroidered">Left Sleeve</option>
        <option value="embroidered">Right Sleeve</option>
        <option value="embroidered">Front Center</option>
        <option value="embroidered">Back Top</option>
        <option value="embroidered">Back Center</option>
        <option value="embroidered">On Pocket</option>
  </select>
        </div>
    <div className="col-2 ms-3">
          <input 
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageUploadtwo}
          />
          
        </div>
        {uploadedImagetwo && (
          <>
          <img src={uploadedImagetwo} alt="Uploaded preview" className="uploded-img p-2  col-2" 
   />
   {/* <button className="btn btn-primary col-1  text-center " onClick={showsecondlogoadd}>Add Logo</button> */}
   </>
  
  
   
)}
  </div>
   )}

      </div>
      
    </div>
    
    
    </>
  )
}

export default Productdetail