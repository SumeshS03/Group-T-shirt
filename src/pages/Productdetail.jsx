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

  const sizes = [
    { label: 'XS', chest: 34 },
    { label: 'S', chest: 36 },
    { label: 'M', chest: 38 },
    { label: 'L', chest: 40 },
    { label: 'XL', chest: 42 },
    { label: '2XL', chest: 44 },
    { label: '3XL', chest: 46 },
    { label: '4XL', chest: 48 },
    { label: '5XL', chest: 50 },
  ];

  const [halfSleeve, setHalfSleeve] = useState({});
  const [fullSleeve, setFullSleeve] = useState({});

  const handleInputChange = (type, sizeLabel, value) => {
    const setter = type === 'half' ? setHalfSleeve : setFullSleeve;
    setter(prev => ({
      ...prev,
      [sizeLabel]: parseInt(value, 10) || 0,
    }));
  };

  const totalHalf = Object.values(halfSleeve).reduce((sum, qty) => sum + qty, 0);
  const totalFull = Object.values(fullSleeve).reduce((sum, qty) => sum + qty, 0);
  const grandTotal = totalHalf + totalFull;
  
    

    

    const products = [
                { id: 1, image: qualityshirt,imageone:qualityshirt,imagetwo:shopimage, label: "Sleeve", price: 299,sizes: {XS:2,S: 5,M: 4,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 2, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "Full Sleeve", price: 349,sizes: {XS:2,S: 5,M: 3,L: 1,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 3, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "Round Neck", price: 279,sizes: {XS:2,S: 2,M: 3,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 4, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 3,L: 1,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 5, image: shopimage,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 15,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
                { id: 6, image: shopimage,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 3,L: 4,X: 41,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
              ];
    const [quantity, setQuantity] = useState('');
    

    // const totalAvailable = products.reduce((total, product) => {
    //             return total + Object.values(product.sizes).reduce((sum, qty) => sum + qty, 0);
                
    //           }, 0);
    // console.log("Available stock:", totalAvailable);
  // You can fetch the product by ID or use local data
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.image);
  
  const totalAvailable = product
  ? Object.values(product.sizes).reduce((sum, qty) => sum + qty, 0)
  : 0;

  const sizeWiseStock = product.sizes;
  


  if (!product) return <h2>Product not found</h2>;

  const handleInputChangeone = (type, size, value) => {
  const intVal = parseInt(value, 10);

  if (isNaN(intVal) || intVal < 0) return;

  const maxQty = product.sizes[size] || 0;
  const safeValue = Math.min(intVal, maxQty);

  if (type === 'half') {
    setHalfSleeve((prev) => ({ ...prev, [size]: safeValue }));
  } else {
    setFullSleeve((prev) => ({ ...prev, [size]: safeValue }));
  }
};




const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
  
};


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
        <img src={selectedImage} alt={product.label} className="img-fluid" />

     

      </div>
      {/* <Carousel className="mt-4" responsive={responsive}> */}
      <div className="d-flex mt-4 gap-4 w-100 align-items-start">
      <div className="productdetail-image" onClick={() => setSelectedImage(product.image)}
         style={{
          border: selectedImage === product.image ? '2px solid blue' : '2px solid transparent',
          borderRadius: '8px',
          padding: '4px'
        }}>
     <img src={product.image} alt={product.label} className="img-fluid" style={{ cursor: "pointer" }}
      />
     </div>

     <div className="productdetail-image" onClick={() => setSelectedImage(product.imageone)}
      style={{
        border: selectedImage === product.imageone ? '2px solid blue' : '2px solid transparent',
        borderRadius: '8px',
        padding: '4px'
      }}>
     <img src={product.imageone} alt={product.label} className="img-fluid" style={{ cursor: "pointer" }} />
     </div>
  {/* <div className="productdetail-image" onClick={() => setSelectedImage(product.imagetwo)}
    style={{
      border: selectedImage === product.imagetwo ? '2px solid blue' : '2px solid transparent',
      borderRadius: '8px',
      padding: '4px'
    }}>
  <img src={product.imagetwo} alt={product.label} className="img-fluid" style={{ cursor: "pointer" }}></img>
  </div> */}
  {/* <div className="productdetail-image" onClick={() => setSelectedImage(product.imageone)}>
  <img src={product.imageone} alt={product.label} className="img-fluid" style={{ cursor: "pointer" }}></img>
    </div> */}
    </div>
 
{/* </Carousel>; */}
      
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
   




          <div>
            <span className="fw-semibold">
              Available: {product.sizes[selectedSize]}
            </span>
          </div>



     
</div>
        <div className="d-flex">
          
        </div>
        {/* <div className="d-flex cart-box mt-5">
            <button  className={`btn col-lg-3 buynow-btn ${
          activeButton === "buy" ? "active-btn" : ""
        }`}
        onClick={() => setActiveButton("buy")}>Buy Now</button>
            <button className={`btn col-lg-5 addtocart-btn ${
          activeButton === "cart" ? "active-btn" : ""
        }`}
        onClick={handleCartClick}>Add to Cart</button>
        </div> */}
      </div>

      
      </div>  
      
      
    </div>
    <div className="container mt-5">
      <div className="row ">
        <label className="fs-5 col-3 text-start">Enter Quantity required:</label>
        <div className="col-2">
          <input 
          type="number"
          
          className="form-control"
          placeholder="Enter quantity"
          min="1"
          value={quantity}
          max={totalAvailable}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val)) {
              if (val <= totalAvailable) {
                setQuantity(val);
              } else {
                // Optional: set to max if they type more
                setQuantity(totalAvailable);
              }
            } else {
              setQuantity('');
            }
          }}

          
          
          
          ></input>
        </div>
        <label className="fs-5 col-3">How many Logos to add:</label>
        <div className="col-2">
          <input 
          type="number"
          // min='0'
          className="form-control"
          placeholder="Enter quantity"
          ></input>
        </div>
      </div>
      
      <div className="row mt-2 ">
        <label className="fs-5 col-3 text-start">Pocket Required:</label>
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
      <div className="row mt-2 pt-2 pb-2 chooseoption-box   ">
        
        <label className="fs-5 col-3 text-start">Choose Your Option:</label>
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
        <label className="fs-5 col-3 text-start">Delivery Date:</label>
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
        <label className="fs-5 col-3 text-start">Choose Colour:</label>
        <div className="col-3">
          <input type="text"
          className="form-control"
          placeholder="Enter Colour"></input>
          {/* <input 
          type="date"
          // min='0'
          className="form-control"
          placeholder="Enter quantity"
          ></input> */}
        </div>
      </div>
      <div className="row mt-2 pt-2 pb-2 chooseoption-box ">
        <label className="fs-5 col-3 text-start">Logo:</label>
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
    
    <label className="fs-5 col-3 text-start">Logo:</label>
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

    <div className="container mt-5 d-flex justify-content-center align-items-center ">
    <table className="table table-bordered text-center w-50">
      <thead>
        <tr>
          <th>Size</th>
          <th>Chest</th>
          <th colSpan="2">Qty</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <th>Half Sleeve</th>
          <th>Full Sleeve</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map(({ label, chest }) => (
          <tr key={label}>
            <td className="fw-bold">{label}</td>
            <td>{chest}</td>
            <td>
            <input
  type="number"
  className="form-control"
  min="0"
  max={product.sizes[label] || 0}
  value={halfSleeve[label] || ''}
  onChange={(e) =>
    handleInputChangeone('half', label, e.target.value)
  }
/>
            </td>
            <td>
            <input
  type="number"
  className="form-control"
  min="0"
  max={product.sizes[label] || 0}
  value={fullSleeve[label] || ''}
  onChange={(e) =>
    handleInputChangeone('full', label, e.target.value)
  }
/>
            </td>
          </tr>
        ))}

        <tr>
          <td></td>
          <td className="fw-bold">Total</td>
          <td>
            <input
              type="text"
              className="form-control"
              value={totalHalf}
              readOnly
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              value={totalFull}
              readOnly
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td className="fw-bold">Grand Total</td>
          <td colSpan="2">
            <input
              type="text"
              className="form-control"
              value={grandTotal}
              readOnly
            />
          </td>
        </tr>
      </tbody>
    </table>

    </div>
    <textarea className="w-50" placeholder="Remark"></textarea>

    <div className="container w-50 mt-5">
      <div className="row">
      <div className="col-2">
      <label className="fw-bold">Amount:</label>
    </div>
    <div className="col-3">
      <input type="text" className="form-control" readOnly />
    </div>
      </div>
      <div className="row mt-2">
      <div className="col-2">
      <label className="fw-bold">Total:</label>
    </div>
    <div className="col-3">
      <input type="text" className="form-control" readOnly />
    </div>
      </div>


      
    </div>
    <div className="container w-50">

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
    
    
    </>
  )
}

export default Productdetail