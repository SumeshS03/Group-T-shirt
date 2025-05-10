import React, { useRef, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import qualityshirt from "../images/Premium-Quality.png";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import { useLocation,useNavigate } from "react-router-dom";
import './Roundneck'
import "./Productdetail.css"
import { useCart } from "./CartContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button';
// import { useCart } from "../context/CartContext";
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
import Hoodiesone from "../images/Hoodie1.png"
import Hoodie from "../images/Hoodie.png"
import Hoodiethree from "../images/Hoodie3.png"
import tshirttwo from "../images/Tshirt2.png"
import tshirtthree from "../images/tshirt3.png"
import tshirtfour from "../images/tshirt4.png"
import fullsleeveone from "../images/Full-Sleeve1.png"
import fullsleevethree from "../images/Full-Sleve3.png"
import axios from 'axios';
import { Form, Row, Col, FloatingLabel} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Roundneck from "./Roundneck";
import Hoodies from "./Hoodies";
import Jackets from "./Jackets";
import Caps from "./Cups"
import Jerseys from "./Jerseys";


const Productdetail = () => {

   const [selectedSize, setSelectedSize] = useState("");
   const [color, setColor] = useState("#e6194b");
   const [collarcolor,setcollarcolor]=useState("#e6194b");
   const [enteredQty, setEnteredQty] = useState('');
   const [quantityError, setQuantityError] = useState('');
  
   

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

  //new fuction
  



  //end


 
  

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("Selected image URL:", imageUrl);
  
      setUploadedImage(imageUrl);
  
      // ✅ Clear the error for uploadedImage
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated.uploadedImage;
        return updated;
      });
    }
  };

  const [uploadedImagetwo, setUploadedImagetwo] = useState('');
  const handleImageUploadtwo = (e) =>{
    const file = e.target.files[0];
    if (file) {
      const imageUrltwo = URL.createObjectURL(file);
      console.log("Selected image URL:", imageUrltwo);
  
    
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
  const [amountWithGst, setAmountWithGst] = useState(0);
  const [total,settotal]=useState(0);

  const handleInputChange = (type, label, value) => {
    const val = parseInt(value, 10);
    const safeVal = isNaN(val) ? 0 : val;

    const GST_RATE = 0.18;
    const halfSleevePrice = Number(productdetail?.price.half_sleeve) || 0;
    const fullSleevePrice = Number(productdetail?.price.full_sleeve) || 0;


  
    if (type === "half") {
      setHalfSleeve((prev) => ({ ...prev, [label]: safeVal }));
      console.log("safeVal" , safeVal);
      var hfSle = safeVal ? safeVal  : 0;
    } else {
      setFullSleeve((prev) => ({ ...prev, [label]: safeVal }));
      var flSle = safeVal ? safeVal : 0;
    }

    const totalAmount =
    (Number(hfSle != undefined ? hfSle : 0) * halfSleevePrice) + (Number(flSle != undefined ? flSle : 0) * fullSleevePrice);

    console.log("totalAmount" , Number(hfSle != undefined ? hfSle : 0) * halfSleevePrice , Number(flSle != undefined ? flSle : 0) , flSle);
    
    settotal(totalAmount);
    const totalWithGst = +(totalAmount * 1.18);

    setAmountWithGst(totalWithGst);


    setFormErrors((prev) => ({ ...prev, quantityMatch: '' }))
  };

  console.log("amountWithGst" , amountWithGst);
  

  const totalHalf = Object.values(halfSleeve).reduce((sum, qty) => sum + qty, 0);
  const totalFull = Object.values(fullSleeve).reduce((sum, qty) => sum + qty, 0);
  const grandTotal = totalHalf + totalFull;

  const [quantities, setQuantities] = useState(
    sizes.map(() => ({ half: 0, full: 0 }))
  );

  const handleQuantityChange = (index, type, value) => {
    const updated = [...quantities];
    updated[index][type] = Number(value);
    setQuantities(updated);
  };





  
    

    

   
    const [logoCount, setLogoCount] = useState(1);
    // const [logos, setLogos] = useState([{ logotype: '', position: '' }]);

    const [visibleLogos, setVisibleLogos] = useState(1);
    const [uploadedImages, setUploadedImages] = useState({});
    const [remark, setRemark] = useState('');
    const [qtyError, setQtyError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [pocketRequired, setPocketRequired] = useState('no');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [selectedCotton, setSelectedCotton] = useState('');
    const [selectedPolyester, setSelectedPolyester] = useState('');
    const [selectedPolyCotton, setSelectedPolyCotton] = useState('');
    const [logoType, setLogoType] = useState('');
    const [logotypetwo, setLogoTypeTwo]=useState('');
    const [logoPosition, setLogoPosition] = useState('');
    const [logoPositionTwo, setLogoPositionTwo] = useState('')
    const [selectedoptions, setSelectedoptions] = useState('');
    const [colorTouched, setColorTouched] = useState(false);
    const [collarcolorTouched,setcollarcolorTouched]= useState(false);
     const [productsData, setProductsData] = useState([]);
     const [hasSubmitted, setHasSubmitted] = useState(false);
     const [showRequiredError, setShowRequiredError] = useState(false);
     const [showErrorMessage, setShowErrorMessage] = useState(false);
    
   const [logos, setLogos] = useState([
  { logotype: '', position: '', image: '' }
]);

    console.log("logos0 " , logos);
    

   
    

    const handleLogoCountChange = (e) => {
      const count = parseInt(e.target.value, 10);
      setLogoCount(count);
    
      const updatedLogos = Array.from({ length: count }, (_, index) => {
        return logos[index] || { type: '', position: '', image: null };
      });
    
      setLogos(updatedLogos);
    };
    
    

    // const handleLogoChange = (index, field, value) => {
    //   const updatedLogos = [...logos];
    //   updatedLogos[index][field] = value;
    //   setLogos(updatedLogos);
    
    //   // Clear individual error if corrected
    //   const updatedErrors = { ...formErrors };
    //   if (field === 'type' && value) {
    //     delete updatedErrors[`logoType_${index}`];
    //   }
    //   if (field === 'position' && value) {
    //     delete updatedErrors[`logoPosition_${index}`];
    //   }
    
    //   setFormErrors(updatedErrors);
    // };

    const handleLogoChange = (index, field, value) => {
    const updated = [...logos];
    updated[index][field] = value;
    setLogos(updated);
  };

 const handleLogoPhotoChange = (index, file) => {
  const updatedLogos = [...logos];
  updatedLogos[index].image = URL.createObjectURL(file); // for preview
  updatedLogos[index].file = file; // for backend upload
  setLogos(updatedLogos);
};


    
    

    const handleLogoImageUpload = (index, file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedLogos = [...logos];
        updatedLogos[index].image = reader.result;
        setLogos(updatedLogos);
    
        // Clear error if image uploaded
        const updatedErrors = { ...formErrors };
        if (file) {
          delete updatedErrors[`logoImage_${index}`];
        }
        setFormErrors(updatedErrors);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
    
    
    
    


    const sizesone = [
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
    
   

    const getMinDate =()=>{
      const today=new Date();
      today.setDate(today.getDate()+3);
      return today.toISOString().split('T')[0];
    };

   
const handleBlur = () => {
  const newErrors = {};

  if (!enteredQty) {
    newErrors.enteredQty = 'Quantity must be entered';
  } else if (isNaN(enteredQty)) {
    newErrors.enteredQty = 'Quantity must be a number';
  } else if (parseInt(enteredQty) < 15) {
    newErrors.enteredQty = 'Minimum quantity should be 15';
  }

  setFormErrors(newErrors);
};
const [showSuccess, setShowSuccess] = useState(false);



const handleLogoCountBlur = () => {
  const newErrors = { ...formErrors }; 

  if (!logoCount) {
    newErrors.logoCount = 'Logo count is required';
  } else if (isNaN(logoCount)) {
    newErrors.logoCount = 'Logo count must be a number';
  } else if (parseInt(logoCount) < 1 || parseInt(logoCount) > 4) {
    newErrors.logoCount = 'Logo count must be between 1 and 4';
  } else {
    
    delete newErrors.logoCount;
  }

  setFormErrors(newErrors);
};


    console.log("render")

  const [logoPhotos, setLogoPhotos] = useState([]);

  //    const handleLogoPhotoChange = (e) => {
  //   setLogoPhotos([...e.target.files]);
  // };
const handleLogoImageUploadone = (index, file) => {
  if (!file) return;

  const updatedLogos = [...logos];
  updatedLogos[index].imageFile = file; 
  updatedLogos[index].image = URL.createObjectURL(file); 
  setLogos(updatedLogos);


  const updatedErrors = { ...formErrors };
  delete updatedErrors[`logoImage_${index}`];
  setFormErrors(updatedErrors);
};

console.log("logos123" , logos);


    const validateForm = () => {
      const errors = {};
    
      if (!enteredQty) errors.enteredQty = 'Quantity must be entered';
      // if (!pocketRequired) errors.pocketRequired = 'Pocket selection is required';
      if (!deliveryDate) errors.deliveryDate = 'Delivery date is required';
      if (!colorTouched) errors.color = 'Choose color';
      if(!collarcolorTouched) errors.collarcolor='Choose collare color'
      if (!selectedCotton && !selectedPolyester && !selectedPolyCotton) {
        errors.selectedoptions = 'Please select at least one option.';
      }
      if (parseInt(enteredQty) !== grandTotal) {
        errors.quantityMatch = 'Total quantities must match entered quantity';
      }
      if (!remark || remark.trim() === '') {
      errors.remark = 'Remark is required';
      }
    
      logos.forEach((logo, index) => {
        if (!logo.logotype) errors[`logotype_${index}`] = `Select Logo Type for logo ${index + 1}`;
        if (!logo.position) errors[`logoPosition_${index}`] = `Select Logo Position for logo ${index + 1}`;
        if (!logo.image) errors[`logoImage_${index}`] = `Upload logo image for logo ${index + 1}`;
      });
    
      return errors;
    };
  
    

 
    const sizestwo = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl'];

    const quantitySizeWise = {};
    sizestwo.forEach(size => {
      const upperSize = size.toUpperCase(); // Convert "s" to "S"
      quantitySizeWise[size] = {
        half: Number(halfSleeve[upperSize]) || 0,
        full: Number(fullSleeve[upperSize]) || 0
      };
    });

  



const handleSubmit = async (e) => {
  e.preventDefault();
  const storedCustomerId = localStorage.getItem('customerId');
  const formattedDeliveryDate = new Date(deliveryDate).toLocaleDateString('en-CA'); 

  const newErrors = validateForm();
  const noErrors = Object.keys(newErrors).length === 0;

  setFormErrors(newErrors);
  setShowSuccess(noErrors);
  setHasSubmitted(true);

  if (!noErrors) {
    setShowErrorMessage(true);
    alert("Enter all fields to add!");
    setTimeout(() => setShowErrorMessage(false), 2000);
    return;
  }

  // Build logo metadata (no photos here)
 const logoMetadata = logos.map((logo) => ({
    logotype: logo.logotype,
    position: logo.position,

  }));
  

  const formDataObj = {
    customerId: storedCustomerId,
    quantityCount: Number(enteredQty),
    logoCount: Number(logoCount),
    pocketRequired: pocketRequired === "yes",
    deliveryDate: formattedDeliveryDate,
    color,
    cloth: selectedCotton || selectedPolyester || selectedPolyCotton,
    clothMaterial: productdetail?.material,
    logos: logoMetadata,
    quantitySizeWise,
    quantitySleeveWise: {
      half: totalHalf,
      full: totalFull,
    },
    totalCount: Number(grandTotal),
    remark,
    amount: total,
    totalAmount: amountWithGst,
    productId: productdetail?._id,
  };

  // Prepare FormData
  const payload = new FormData();
  payload.append('customerId', formDataObj.customerId);
  payload.append('quantityCount', formDataObj.quantityCount);
  payload.append('logoCount', formDataObj.logoCount);
  payload.append('pocketRequired', formDataObj.pocketRequired);
  payload.append('deliveryDate', formDataObj.deliveryDate);
  payload.append('color', formDataObj.color);
  payload.append('cloth', formDataObj.cloth);
  payload.append('clothMaterial', formDataObj.clothMaterial);
  payload.append('totalCount', formDataObj.totalCount);
  payload.append('remark', formDataObj.remark);
  payload.append('amount', formDataObj.amount);
  payload.append('totalAmount', formDataObj.totalAmount);
  payload.append('productId', formDataObj.productId);
  payload.append('logos', JSON.stringify(logoMetadata));
 logos.forEach((logo) => {
  if (logo.file) {
    payload.append('logoPhotos', logo.file);
  }
});

  // Append JSON strings
  payload.append('quantitySizeWise', JSON.stringify(formDataObj.quantitySizeWise));
  payload.append('quantitySleeveWise', JSON.stringify(formDataObj.quantitySleeveWise));
  // payload.append('logos', JSON.stringify(formDataObj.logos)); // Add metadata

    console.log("logos" , logos);


  // Append logo images under the exact key expected by backend
// logoPhotos.forEach(file => {
//       payload.append('logoPhotos', file);
//     });


  

  const token = localStorage.getItem('authToken');

  try {
    const response = await axios.post("https://gts.tsitcloud.com/api/cartItems/add", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "multipart/form-data"
      }
    });

    console.log("Form submitted successfully:", response.data);
    alert("Product added to cart successfully!");
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      const apiMessage = error.response.data?.message || "Something went wrong. Please try again.";
      alert(apiMessage);
    } else {
      console.error("Error submitting form:", error);
      alert("Network error or server not reachable.");
    }
  }
};








  
    
    const [productdetail, setProductdetail] = useState(null);
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoverImage, setHoverImage] = useState(null);
    
    const [hoveredImage, setHoveredImage] = useState(null);

   
    

    useEffect(() => {
      const fetchProduct = async () => {

        const token = localStorage.getItem('authToken');
   
        try {
          const response = await axios.get('https://gts.tsitcloud.com/api/products/single/products-by-category', {
            headers: {
              Authorization: `Bearer token`,
            },
          });
  
          // Flatten all products from all categories (like your home layout)
          const allProducts = response.data.flatMap(cat => cat.products);
          setProductsData(allProducts);
          const foundProduct = allProducts.find((p) => p._id === id);
  
          if (foundProduct) {
            setProductdetail(foundProduct);
            setSelectedImage(`https://gts.selfietoons.com/${foundProduct.images[0]}`);
          }
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };
  
      fetchProduct();
    }, [id]);





  
  
  
  
  const product = productdetail;

  const handleCartClick = () => {

    const token = localStorage.getItem('authToken');
   
    
    if (token) {
      // User is authenticated
      setActiveButton("cart");
      navigate(`/cart`);
    }else {
      // User is not authenticated
      alert("Please login to access the cart.");
      navigate('/profile'); // Or redirect to login page
    }
  };

  

  
  if (!productdetail) return <p>Loading...</p>;


  if (!product) return <h2>Product not found</h2>;







const responsive = {
  superLargeDesktop: {
   
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
  <div className="d-flex productpage-box row">
  <div className="col-lg-5 col-12">
  {productdetail ? (
    <>
      {/* Main image display */}
      <div className="product-imageful">
        <img
          src={
            hoveredImage ||
            selectedImage ||
            `https://gts.selfietoons.com/${productdetail?.images?.[0]}`
          }
          alt={productdetail?.name}
          className="img-fluid"
        />
      </div>

      {/* Thumbnail image (image[1]) */}
      <div className="d-flex mt-4 gap-4 w-100 align-items-start">
        <div
          className="productdetail-image"
          onMouseEnter={() =>
            setHoveredImage(`https://gts.selfietoons.com/${productdetail?.images?.[1]}`)
          }
          onMouseLeave={() => setHoveredImage(null)}
          // onClick={() =>
          //   setSelectedImage(`https://gts.selfietoons.com/${productdetail?.images?.[1]}`)
          // }
          style={{
            border:
              selectedImage ===
              `https://gts.selfietoons.com/${productdetail?.images?.[1]}`
                ? '2px solid blue'
                : '2px solid transparent',
            borderRadius: '8px',
            padding: '4px',
          }}
        >
          <img
            src={`https://gts.selfietoons.com/${productdetail?.images?.[1]}`}
            alt="Second"
            className="img-fluid"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </>
  ) : (
    <p>Loading product images...</p>
  )}
</div>


    <div className="col-lg-5 col-12">
     
      {productdetail ? (
        <>
          <h2 className="text-start">{productdetail?.name}</h2>
          <p className="text-start">{productdetail?.description}</p>

          <p className="text-start"><strong>Price:</strong> ₹{productdetail?.price.half_sleeve}</p>
          <p className="text-start"><strong>fullSleeve:</strong> ₹{productdetail?.price.full_sleeve}</p>
          <p className="text-start"><strong>Color:</strong> {productdetail?.color}</p>
          <p className="text-start"><strong>Material:</strong> {productdetail?.material}</p>
          <p className="text-start"><strong>Brand:</strong> {productdetail?.brand}</p>
          <p className="text-start"><strong>Weight:</strong> {productdetail?.weight}</p>

          <h2 className="text-xl font-bold mb-2 h5">About this item</h2>
          <ul className="text-start">
            <li><strong>Type:</strong> Comfortable Cotton T-Shirt</li>
            <li><strong>Fit:</strong> Regular Fit – Comfortable for daily wear</li>
            <li><strong>Fabric:</strong> 100% Pure Cotton – Durable and skin-friendly</li>
            <li><strong>Design:</strong> Printed Graphic – Stylish and trendy look</li>
          </ul>

          
          <div className="responsive-table-container mt-5">
  <table className="responsive-table table table-bordered text-center">
    <thead>
      <tr>
        {sizesone.length > 0 ? (
          sizesone.map((size, index) => (
            <th key={index} style={{ padding: '8px' }}>
              {size.label}
            </th>
          ))
        ) : (
          <th>No sizes available</th>
        )}
      </tr>
    </thead>
    <tbody>
      <tr>
        {sizesone.length > 0 ? (
          sizesone.map((size, index) => (
            <td key={index} style={{ padding: '8px' }}>
              {size.chest ? `${size.chest}"` : 'N/A'}
            </td>
          ))
        ) : (
          <td>No chest data available</td>
        )}
      </tr>
    </tbody>
  </table>
</div>


        </>
      ) : (
        <p>Loading product details...</p> 
      )}
    </div>
  </div>
</div>











{/* {productdetail &&
  productdetail.category &&
  productdetail.category._id === "68073351ecf739b9dae26185" && (

<form onSubmit={handleSubmit}>
    <div className="container mt-5">
    <div className="row mb-4">
  <label className="fs-6 fw-bold col-lg-2 mb-md-3">Enter Quantity required:</label>
  <div className="col-lg-2">
    <input
      type="number"
      min="15"
      className={`form-control ${formErrors.enteredQty ? 'is-invalid' : ''}`}
      placeholder="Enter Quantity"
      value={enteredQty}
      onChange={(e) => {
        setEnteredQty(e.target.value);
        if (formErrors.enteredQty && parseInt(e.target.value) >= 15) {
          setFormErrors((prev) => ({ ...prev, enteredQty: '' }));
        }
      }}
      onBlur={handleBlur}
    />
    {formErrors.enteredQty && (
      <div className="text-danger mt-1">{formErrors.enteredQty}</div>
    )}
  </div>

  <label className="fs-6 fw-bold col-lg-2 mt-lg-0 mb-md-3 mt-md-3">How many Logos to add:</label>
  <div className="col-lg-2">
    <input
      type="number"
      min="1"
      max="4"
      className={`form-control ${formErrors.logoCount ? 'is-invalid' : ''}`}
      placeholder="Enter quantity"
      value={logoCount}

     
      
      onChange={handleLogoCountChange}
      onBlur={handleLogoCountBlur}
    />
    {formErrors.logoCount && (
      <div className="text-danger mt-1">{formErrors.logoCount}</div>
    )}
  </div>

  <label className="fs-6 fw-bold col-lg-2 mt-lg-0 mt-3 mb-md-3">Pocket Required:</label>
  <div className="col-lg-2">
    <div className="d-flex gap-3">
      <div>
        <input
          type="radio"
          id="yes"
          name="pocketRequired"
          value="yes"
          checked={pocketRequired === 'yes'}
          onChange={(e) => {
            setPocketRequired(e.target.value);
            setFormErrors((prev) => ({ ...prev, pocketRequired: '' }));
          }}
        />
        <label htmlFor="yes">Yes</label>
      </div>
      <div>
        <input
          type="radio"
          id="no"
          name="pocketRequired"
          value="no"
          required
          checked={pocketRequired === 'no'}
          onChange={(e) => {
            setPocketRequired(e.target.value);
            setFormErrors((prev) => ({ ...prev, pocketRequired: '' }));
          }}
        />
        <label htmlFor="no">No</label>
      </div>
    </div>
    {formErrors.pocketRequired && (
      <div className="text-danger mt-1">{formErrors.pocketRequired}</div>
    )}
  </div>
</div>

      
      

      <div className="row mt-2 mb-4">
 
  <label className="fs-6 fw-bold col-lg-2 text-lg-end mb-md-3">Delivery Date:</label>
  <div className="col-lg-2 mb-md-3">
    <input
      type="date"
      className={`form-control ${formErrors.deliveryDate ? 'is-invalid' : ''}`}
      value={deliveryDate}
      required
      min={getMinDate()}
      onChange={(e) => {
        setDeliveryDate(e.target.value);
        setFormErrors((prev) => ({ ...prev, deliveryDate: '' }));
      }}
    />
    {formErrors.deliveryDate && (
      <div className="text-danger mt-1">{formErrors.deliveryDate}</div>
    )}
  </div>

  
  <label className="fs-6 fw-bold col-lg-2 text-lg-end mt-lg-0 mt-3">Choose Colour:</label>
  <div className="col-lg-2 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center mt-lg-0 mt-3">
    <input
      type="color"
      id="favcolor"
      name="favcolor"
      value={color}
      onChange={(e) => {
        setColor(e.target.value);
        setColorTouched(true);
        setFormErrors((prev) => ({ ...prev, color: '' }));
      }}
      className="form-control-color rounded-color"
    />
    <div style={{ height: '20px' }}>
      {formErrors.color && <div className="text-danger small">{formErrors.color}</div>}
    </div>
  </div>

  
  <label className="fs-6 fw-bold col-lg-2 text-lg-end mt-lg-0 mt-3">Choose Collar Colour:</label>
  <div className="col-lg-2 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center mt-lg-0 mt-3">
    <input
      type="color"
      id="collarcolor"
      name="collarcolor"
      value={collarcolor}
      onChange={(e) => {
        setcollarcolor(e.target.value);
        setcollarcolorTouched(true);
        setFormErrors((prev) => ({ ...prev, collarcolor: '' }));
      }}
      className="form-control-color rounded-color"
    />
    <div style={{ height: '20px' }}>
      {formErrors.collarcolor && <div className="text-danger small">{formErrors.collarcolor}</div>}
    </div>
  </div>
</div>


      
      
      <div className="row mt-2 pt-2 pb-4 chooseoption-box mb-4   ">
        <div>
        
        <label className="fs-6 fw-bold   text-center mb-3">Choose Your Option:</label>
        </div>
        <div className="selectmaterial-box row justify-content-evenly">
        <div className="col-lg-2">
          <div className="cotton-dropdown">
          <label onClick={polycottoggle} className="dropdown-label w-100 fw-bold fs-6 mb-2">Cotton</label>
          <select className="form-select mt-2"
          value={selectedCotton}
          onChange={(e) => {
            setSelectedCotton(e.target.value);
            setSelectedPolyester("");
            setSelectedPolyCotton("");
        
            
            setFormErrors((prev) => ({ ...prev, selectedoptions: '' }));
          }}>
            
        <option value="">option </option>
        <option value="Combed Cotton">Combed</option>
        <option value="Ringspun Cotton">Ringspun</option>
        <option value="Organic Cotton">Organic</option>
        <option value="Pima Cotton">Pima</option>
        <option value="Supima Cotton">Supima</option>
        <option value="Slub Cotton">Slub</option>
        
  </select>
          </div>
          <div>
            
          </div>
        </div>
        <div className="col-lg-2 mt-lg-0 mt-md-3">
          <div className="cotton-dropdown">
          <label onClick={polytoggle} className="dropdown-label w-100 fw-bold fs-6 mb-2">Polyester</label>
          <select className="form-select mt-2"
           value={selectedPolyester}
           onChange={(e) => {
            setSelectedPolyester(e.target.value);
            setSelectedCotton("");
            setSelectedPolyCotton("");
          
            setFormErrors((prev) => ({ ...prev, selectedoptions: '' }));
          }} >
        <option value="">option </option>
        <option value="Poly-cotton">Poly-cotton</option>
        <option value="Tri-blend Fabric">Tri-blend Fabric</option>
        <option value="Microfiber Polyester">Microfiber</option>
        <option value="Interlock Polyester">Interlock</option>
        <option value="Moisture-wicking">Moisture-wicking</option>
        
  </select>
          </div>
          <div>
            
          </div>
        </div>
        <div className="col-lg-2 mt-lg-0 mt-md-3">
          <div className="cotton-dropdown">
          <label onClick={toggleOptions} className="dropdown-label w-100 fw-bold fs-6 mb-2">Poly Cotton</label>
          <select className="form-select mt-2"
           value={selectedPolyCotton}
           onChange={(e) => {
            setSelectedPolyCotton(e.target.value);
            setSelectedCotton("");
            setSelectedPolyester("");
          
            setFormErrors((prev) => ({ ...prev, selectedoptions: '' }));
          }}>
        <option value="">option</option>
        <option value="Ring-Spun Poly-Cotton">Ring-Spun</option>
        <option value="Combed Poly-Cotton">Combed Poly</option>
        <option value="Brushed Poly-Cotton">Brushed Poly</option>
        
  </select>
          </div>
          <div>
            
          </div>
        </div>
        </div>
        {formErrors.selectedoptions && (
         <div className="text-danger mt-1">{formErrors.selectedoptions}</div>
          )}
        
      </div>


      
    

      <div className="row mt-2 pt-2 pb-4 chooseoption-box ">
      <div>
        <label className=" fs-6 fw-bold  d-flex align-items-center justify-content-center text-center mb-3">Logo:</label>
        </div>
        {logos.map((logo, index) => (
  <div key={index} className="mb-4">
    <div className="row d-flex justify-content-evenly">
      
      <div className="col-lg-2">
        <label className="form-label fw-bold">Logo Type</label>
        <select
          className="form-select"
          value={logo.type}
          onChange={(e) => handleLogoChange(index, 'type', e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="printed">Printed</option>
          <option value="embroidered">Embroidered</option>
        </select>
        {formErrors[`logoType_${index}`] && (
          <div className="text-danger">{formErrors[`logoType_${index}`]}</div>
        )}
      </div>

      
      <div className="col-lg-2">
        <label className="form-label fw-bold">Logo Position</label>
        <select
          className="form-select"
          value={logo.position}
          onChange={(e) => handleLogoChange(index, 'position', e.target.value)}
        >
          <option value="">Select</option>
          <option value="left Chest">Left Chest</option>
          <option value="Right Chest">Right Chest</option>
          <option value="Left Sleeve">Left Sleeve</option>
          <option value="Right Sleeve">Right Sleeve</option>
          <option value="Front Center">Front Center</option>
          <option value="Back Top">Back Top</option>
          <option value="Back Center">Back Center</option>
          <option value="On Pocket">On Pocket</option>
        </select>
        {formErrors[`logoPosition_${index}`] && (
          <div className="text-danger">{formErrors[`logoPosition_${index}`]}</div>
        )}
      </div>

      
      <div className="col-lg-2">
        <label className="form-label fw-bold">Upload Logo</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={(e) => handleLogoImageUpload(index, e.target.files[0])}
        />
        {formErrors[`logoImage_${index}`] && (
          <div className="text-danger">{formErrors[`logoImage_${index}`]}</div>
        )}
      </div>
    </div>

    
    {logo.image && (
      <div className="row mt-2">
        <div className="col-lg-12 d-flex justify-content-center">
          <img
            src={logo.image}
            alt={`Logo ${index + 1}`}
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            className="rounded-4 border"
          />
        </div>
      </div>
    )}
  </div>
))}

      </div>
      
    </div>
    

    <div className="container mt-5 d-flex justify-content-center align-items-center ">
      <div className="custom-scroll-x">
    <table className="table table-bordered text-center w-100">
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
  value={halfSleeve[label] || ''}
  onChange={(e) => handleInputChange("half", label, e.target.value)}
  
  
  
/>
            </td>
            <td>
            <input
  type="number"
  className="form-control"
  min="0"
  value={fullSleeve[label] || ''}
  onChange={(e) => handleInputChange("full", label, e.target.value)}
  
  
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
        <tr>
    <td colSpan="4">
    {formErrors.quantityMatch && (
  <div className="text-danger fw-bold mt-2">{formErrors.quantityMatch}</div>
)}
    </td>
  </tr>
        
      </tbody>
    </table>
    </div>

    </div>
    <div className="d-flex justify-content-center mt-4">
    <textarea
  className="form-control w-50"
  placeholder="Remark"
  rows="4"
  value={remark}
  onChange={(e) => {
    setRemark(e.target.value);
    if (formErrors.remark) {
      setFormErrors((prev) => ({ ...prev, remark: '' }));
    }
  }}
></textarea>
    
  </div>
  {formErrors.remark && (
      <div className="text-danger mt-1">{formErrors.remark}</div>
    )}
  <div className="d-flex justify-content-center mt-4">
  

  </div>
 














    <div className="container w-50 mt-5">
      <div className="row">
      <div className="col-lg-3">
      <label className="fw-bold">Amount:</label>
    </div>
    <div className="col-lg-5">
      <input type="text" className="form-control" readOnly value={`₹${total}`} />
    </div>
      </div>
      <div className="row mt-2">
      <div className="col-lg-3">
      <label className="fw-bold">Total amout with gst:</label>
    </div>
    <div className="col-lg-5">
      <input type="text" className="form-control" readOnly value={`₹${amountWithGst}`} />
    </div>
      </div>


      
    </div>




    <div className="container w-50 ">

    <div className=" cart-box mt-5 gap-2 row">
            

            <button type="button" class="btn btn-success btn-lg w-25">Buy Now</button>
            <button type="submit" className="btn btn-primary btn-lg w-25">
            <FaShoppingCart className="me-2" /> Add to cart
            </button>

            


    </div>
    </div>

    </form>

)} */}



{productdetail &&
  productdetail.category &&
  productdetail.category._id === "68073351ecf739b9dae26185" && (

<form onSubmit={handleSubmit}>
    <div className="container mt-5">
    <div className="row mb-4">
  <label className="fs-6 fw-bold col-lg-2 mb-md-3">Enter Quantity required:</label>
  <div className="col-lg-2">
    <input
      type="number"
      min="15"
      className={`form-control ${formErrors.enteredQty ? 'is-invalid' : ''}`}
      placeholder="Enter Quantity"
      value={enteredQty}
      onChange={(e) => {
        setEnteredQty(e.target.value);
        if (formErrors.enteredQty && parseInt(e.target.value) >= 15) {
          setFormErrors((prev) => ({ ...prev, enteredQty: '' }));
        }
      }}
      onBlur={handleBlur}
    />
    {formErrors.enteredQty && (
      <div className="text-danger mt-1">{formErrors.enteredQty}</div>
    )}
  </div>

  <label className="fs-6 fw-bold col-lg-2 mt-lg-0 mb-md-3 mt-md-3">How many Logos to add:</label>
  <div className="col-lg-2">
    <input
      type="number"
      min="1"
      max="4"
      className={`form-control ${formErrors.logoCount ? 'is-invalid' : ''}`}
      placeholder="Enter quantity"
      value={logoCount}

     
      
      onChange={handleLogoCountChange}
      onBlur={handleLogoCountBlur}
    />
    {formErrors.logoCount && (
      <div className="text-danger mt-1">{formErrors.logoCount}</div>
    )}
  </div>

  <label className="fs-6 fw-bold col-lg-2 mt-lg-0 mt-3 mb-md-3">Pocket Required:</label>
  <div className="col-lg-2">
    <div className="d-flex gap-3">
      <div>
        <input
          type="radio"
          id="yes"
          name="pocketRequired"
          value="yes"
          checked={pocketRequired === 'yes'}
          onChange={(e) => {
            setPocketRequired(e.target.value);
            setFormErrors((prev) => ({ ...prev, pocketRequired: '' }));
          }}
        />
        <label htmlFor="yes">Yes</label>
      </div>
      <div>
        <input
          type="radio"
          id="no"
          name="pocketRequired"
          value="no"
          required
          checked={pocketRequired === 'no'}
          onChange={(e) => {
            setPocketRequired(e.target.value);
            setFormErrors((prev) => ({ ...prev, pocketRequired: '' }));
          }}
        />
        <label htmlFor="no">No</label>
      </div>
    </div>
    {formErrors.pocketRequired && (
      <div className="text-danger mt-1">{formErrors.pocketRequired}</div>
    )}
  </div>
</div>

      
      

      <div className="row mt-2 mb-4">
 
  <label className="fs-6 fw-bold col-lg-2 text-lg-end mb-md-3">Delivery Date:</label>
  <div className="col-lg-2 mb-md-3">
    <input
      type="date"
      className={`form-control ${formErrors.deliveryDate ? 'is-invalid' : ''}`}
      value={deliveryDate}
      required
      min={getMinDate()}
      onChange={(e) => {
        setDeliveryDate(e.target.value);
        setFormErrors((prev) => ({ ...prev, deliveryDate: '' }));
      }}
    />
    {formErrors.deliveryDate && (
      <div className="text-danger mt-1">{formErrors.deliveryDate}</div>
    )}
  </div>

  
  <label className="fs-6 fw-bold col-lg-2 text-lg-end mt-lg-0 mt-3">Choose Colour:</label>
  <div className="col-lg-2 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center mt-lg-0 mt-3">
    <input
      type="color"
      id="favcolor"
      name="favcolor"
      value={color}
      onChange={(e) => {
        setColor(e.target.value);
        setColorTouched(true);
        setFormErrors((prev) => ({ ...prev, color: '' }));
      }}
      className="form-control-color rounded-color"
    />
    <div style={{ height: '20px' }}>
      {formErrors.color && <div className="text-danger small">{formErrors.color}</div>}
    </div>
  </div>

  
  <label className="fs-6 fw-bold col-lg-2 text-lg-end mt-lg-0 mt-3">Choose Collar Colour:</label>
  <div className="col-lg-2 d-flex flex-column align-items-lg-start align-items-center justify-content-lg-start justify-content-center mt-lg-0 mt-3">
    <input
      type="color"
      id="collarcolor"
      name="collarcolor"
      value={collarcolor}
      onChange={(e) => {
        setcollarcolor(e.target.value);
        setcollarcolorTouched(true);
        setFormErrors((prev) => ({ ...prev, collarcolor: '' }));
      }}
      className="form-control-color rounded-color"
    />
    <div style={{ height: '20px' }}>
      {formErrors.collarcolor && <div className="text-danger small">{formErrors.collarcolor}</div>}
    </div>
  </div>
</div>


      
      
      <div className="row mt-2 pt-2 pb-4 chooseoption-box mb-4   ">
        <div>
        
        <label className="fs-6 fw-bold   text-center mb-3">Choose Your Option:</label>
        </div>
        <div className="selectmaterial-box row justify-content-evenly">
        <div className="col-lg-2">
          <div className="cotton-dropdown">
          <label onClick={polycottoggle} className="dropdown-label w-100 fw-bold fs-6 mb-2">Cotton</label>
          <select className="form-select mt-2"
          value={selectedCotton}
          onChange={(e) => {
            setSelectedCotton(e.target.value);
            setSelectedPolyester("");
            setSelectedPolyCotton("");
        
            
            setFormErrors((prev) => ({ ...prev, selectedoptions: '' }));
          }}>
            
        <option value="">option </option>
        <option value="Combed Cotton">Combed</option>
        <option value="Ringspun Cotton">Ringspun</option>
        <option value="Organic Cotton">Organic</option>
        <option value="Pima Cotton">Pima</option>
        <option value="Supima Cotton">Supima</option>
        <option value="Slub Cotton">Slub</option>
        
  </select>
          </div>
          <div>
            
          </div>
        </div>
        <div className="col-lg-2 mt-lg-0 mt-md-3">
          <div className="cotton-dropdown">
          <label onClick={polytoggle} className="dropdown-label w-100 fw-bold fs-6 mb-2">Polyester</label>
          <select className="form-select mt-2"
           value={selectedPolyester}
           onChange={(e) => {
            setSelectedPolyester(e.target.value);
            setSelectedCotton("");
            setSelectedPolyCotton("");
          
            setFormErrors((prev) => ({ ...prev, selectedoptions: '' }));
          }} >
        <option value="">option </option>
        <option value="Poly-cotton">Poly-cotton</option>
        <option value="Tri-blend Fabric">Tri-blend Fabric</option>
        <option value="Microfiber Polyester">Microfiber</option>
        <option value="Interlock Polyester">Interlock</option>
        <option value="Moisture-wicking">Moisture-wicking</option>
        
  </select>
          </div>
          <div>
            
          </div>
        </div>
        <div className="col-lg-2 mt-lg-0 mt-md-3">
          <div className="cotton-dropdown">
          <label onClick={toggleOptions} className="dropdown-label w-100 fw-bold fs-6 mb-2">Poly Cotton</label>
          <select className="form-select mt-2"
           value={selectedPolyCotton}
           onChange={(e) => {
            setSelectedPolyCotton(e.target.value);
            setSelectedCotton("");
            setSelectedPolyester("");
          
            setFormErrors((prev) => ({ ...prev, selectedoptions: '' }));
          }}>
        <option value="">option</option>
        <option value="Ring-Spun Poly-Cotton">Ring-Spun</option>
        <option value="Combed Poly-Cotton">Combed Poly</option>
        <option value="Brushed Poly-Cotton">Brushed Poly</option>
        
  </select>
          </div>
          <div>
            
          </div>
        </div>
        </div>
        {formErrors.selectedoptions && (
         <div className="text-danger mt-1">{formErrors.selectedoptions}</div>
          )}
        
      </div>


      
    

      <div className="row mt-2 pt-2 pb-4 chooseoption-box ">
      <div>
        <label className=" fs-6 fw-bold  d-flex align-items-center justify-content-center text-center mb-3">Logo:</label>
        </div>
        {logos.map((logo, index) => (
  <div key={index} className="mb-4">
    <div className="row d-flex justify-content-evenly">
      
      <div className="col-lg-2">
        <label className="form-label fw-bold">Logo Type</label>
        <select
          className="form-select"
          value={logo.logotype}
           onChange={(e) => handleLogoChange(index, 'logotype', e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="printed">Printed</option>
          <option value="embroidered">Embroidered</option>
        </select>
        {formErrors[`logotype_${index}`] && (
          <div className="text-danger">{formErrors[`logotype_${index}`]}</div>
        )}
      </div>

      
      <div className="col-lg-2">
        <label className="form-label fw-bold">Logo Position</label>
        <select
          className="form-select"
          value={logo.position}
          onChange={(e) => handleLogoChange(index, 'position', e.target.value)}

        >
          <option value="">Select</option>
          <option value="left Chest">Left Chest</option>
          <option value="Right Chest">Right Chest</option>
          <option value="Left Sleeve">Left Sleeve</option>
          <option value="Right Sleeve">Right Sleeve</option>
          <option value="Front Center">Front Center</option>
          <option value="Back Top">Back Top</option>
          <option value="Back Center">Back Center</option>
          <option value="On Pocket">On Pocket</option>
        </select>
        {formErrors[`logoPosition_${index}`] && (
          <div className="text-danger">{formErrors[`logoPosition_${index}`]}</div>
        )}
      </div>

      
      <div className="col-lg-2">
        <label className="form-label fw-bold">Upload Logo</label>
        <input
  type="file"
  className="form-control"
  accept="image/*"
  onChange={(e) => {
    if (e.target.files[0]) {
      handleLogoPhotoChange(index, e.target.files[0]);
    }
  }}
/>

        {formErrors[`logoImage_${index}`] && (
          <div className="text-danger">{formErrors[`logoImage_${index}`]}</div>
        )}
      </div>
    </div>

    
    {logo.image && (
      <div className="row mt-2">
        <div className="col-lg-12 d-flex justify-content-center">
          <img
            src={logo.image}
            alt={`Logo ${index + 1}`}
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            className="rounded-4 border"
          />
        </div>
      </div>
    )}
  </div>
))}

      </div>
      
    </div>
    

    <div className="container mt-5 d-flex justify-content-center align-items-center ">
      <div className="custom-scroll-x">
    <table className="table table-bordered text-center w-100">
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
  value={halfSleeve[label] || ''}
  onChange={(e) => handleInputChange("half", label, e.target.value)}
  
  
  
/>
            </td>
            <td>
            <input
  type="number"
  className="form-control"
  min="0"
  value={fullSleeve[label] || ''}
  onChange={(e) => handleInputChange("full", label, e.target.value)}
  
  
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
        <tr>
    <td colSpan="4">
    {formErrors.quantityMatch && (
  <div className="text-danger fw-bold mt-2">{formErrors.quantityMatch}</div>
)}
    </td>
  </tr>
        
      </tbody>
    </table>
    </div>

    </div>
    <div className="d-flex justify-content-center mt-4">
    <textarea
  className="form-control w-50"
  placeholder="Remark"
  rows="4"
  value={remark}
  onChange={(e) => {
    setRemark(e.target.value);
    if (formErrors.remark) {
      setFormErrors((prev) => ({ ...prev, remark: '' }));
    }
  }}
></textarea>
    
  </div>
  {formErrors.remark && (
      <div className="text-danger mt-1">{formErrors.remark}</div>
    )}
  <div className="d-flex justify-content-center mt-4">
  

  </div>
 














    <div className="container w-50 mt-5">
      <div className="row">
      <div className="col-lg-3">
      <label className="fw-bold">Amount:</label>
    </div>
    <div className="col-lg-5">
      <input type="text" className="form-control" readOnly value={`₹${total}`} />
    </div>
      </div>
      <div className="row mt-2">
      <div className="col-lg-3">
      <label className="fw-bold">Total amout with gst:</label>
    </div>
    <div className="col-lg-5">
      <input type="text" className="form-control" readOnly value={`₹${amountWithGst}`} />
    </div>
      </div>


      
    </div>




    <div className="container w-50 ">

    <div className=" cart-box mt-5 gap-2 row">
            

            <button type="button" class="btn btn-success btn-lg w-25">Buy Now</button>
            <button type="submit" className="btn btn-primary btn-lg w-25">
            <FaShoppingCart className="me-2" /> Add to cart
            </button>

            


    </div>
    </div>

    </form>

)}




    <>
    <Roundneck></Roundneck>
    </>

    <>
    <Hoodies></Hoodies>
    </>

    <>
    <Jackets></Jackets>
    </>


     <>
    <Caps></Caps>
    </>


    <>
    <Jerseys></Jerseys>
    </>







    <div className="social container-fluid  ">
        <div class="row justify-content-center">
          <div className="sociladivider   d-flex justify-content-around text-white">
            <div className="d-flex align-items-center justify-content-center socialone col-2 ">
              <text
                className="socialtexts"
                style={{ color: "white"}}
              >
                Facebook
              </text>
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

          <div className="footer2 py-3">
              <p style={{ color: "#000000", fontSize: "16px", margin: "0px" }}>
                © All Copyright 2025 by Website Design and Build -
                <span style={{ fontWeight: "bold", color: "#000000" }}>
                  www.Tabsquareinfotech.com
                </span>
              </p>
            </div>
    
    
    </>
  )
}

export default Productdetail




