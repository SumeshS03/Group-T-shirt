import React, { useRef, useState,useEffect } from "react";
import HomeHeader from "../Layout/HomeHeader";
import shopimage from "../images/shopimage.png";
import "./Shopcontentproduct.css";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation,useNavigate } from "react-router-dom";

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
import sampleimages from "../images/grouptshirtone.png"
import { RiUpload2Fill } from "react-icons/ri";
import "./Newdesign.css"
import Button from 'react-bootstrap/Button';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';




const Shopcontentproduct = () => {
  const [activeTab, setActiveTab] = useState("product");
  const [showColors, setShowColors] = useState(false);
 

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};


const [showColorList, setShowColorList] = useState(false);
const colors = ["red", "blue", "green", "yellow", "black", "purple"];
const [selectedColor, setSelectedColor] = useState(['#ff0000', '#00ff00']);

const [selectedColors, setSelectedColors] = useState([['#ff0000', '#00ff00']]); // 💡 The array you're asking about

const [activeIndex, setActiveIndex] = useState(null);

const addSelectedColor = () => {
  if (
    selectedColors.length < 2 &&
    !selectedColors.includes(selectedColor)
  ) {
    setSelectedColors([...selectedColors, selectedColor]);
  }
};

  const [selectedCategory, setSelectedCategory] = useState("T-Shirts");
  const [selectedNumber, setSelectedNumber] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSize, setSelectedSize] = useState('XXL');
  const [selectedQuality, setSelectedQuality] = useState("Premium");
  const [selectedType, setSelectedType] = useState("Print");
  const [clicked, setClicked] = useState(false);
  const sliderRef = useRef(null);
  const cardWidth = 270; // Must match actual width of one card
  const [showSamples, setShowSamples] = useState(false);

  const handleColorClick = (color) => {
    const updatedColors = [...selectedColors];
    updatedColors[activeIndex] = color;
    setSelectedColors(updatedColors);
    setShowColorList(false); // Close the dropdown after selecting a color
  };

 const handleAddCircle = () => {
    setSelectedColors([...selectedColors, '#eee']); // Add a new default color slot (light gray)
  };


  const sizes = ['S', 'M', 'L', 'XL', 'XXL', '3XL','4XL'];


  const numbers = Array.from({ length: 2000 }, (_, i) => i + 10);


  const handleSelect = (num) => {
    setSelectedNumber(num);
    setShowDropdown(false);
  };

  const tshirtItems = [
    { id: 1, image: qualityshirt, title: "Normal T-Shirts" },
    { id: 2, image: qualityshirt, title: "Full Color T-Shirts" },
    { id: 3, image: qualityshirt, title: "Line T-Shirts" },
    { id: 4, image: qualityshirt, title: "Double Line T-Shirts" },
    { id: 5, image: qualityshirt, title: "Single Line T-Shirts" }, // Add more items as needed
    { id: 6, image: qualityshirt, title: "Striped T-Shirts" },
    { id: 7, image: qualityshirt, title: "T-shirts" },
    { id: 8, image: qualityshirt, title: "Oversize T-Shirts" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 768 ? 1 : 4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 4);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 
  

  const visibleItems = tshirtItems.slice(
    currentPage,
    currentPage + itemsPerPage
  );

  const canGoNext = currentPage < tshirtItems.length - itemsPerPage;
  const canGoPrev = currentPage > 0;





  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { title: "T-Shirts", path: "/tshirts" },
    { title: "Long Sleeves", path: "/longsleeves" },
    { title: "Sweater", path: "/sweater" },
    { title: "Hoodies", path: "/hoodies" },
    { title: "Cups", path: "/cups" },
  ];

  const pathToTitleMap = {
    "/tshirts": "T-Shirts",
    "/longsleeves": "Long Sleeves",
    "/sweater": "Sweater",
    "/hoodies": "Hoodies",
    "/cups": "Cups",
 
  };


  const allProducts = [
    { id: 1, title: "Tee 1", category: "T-Shirts", image: qualityshirt },
    { id: 2, title: "Tee 2", category: "T-Shirts", image: qualityshirt },
    { id: 3, title: "Long Sleeve 1", category: "Long Sleeves", image: qualityshirt },
    { id: 4, title: "Hoodie 1", category: "Hoodies", image: qualityshirt },
    { id: 5, title: "Sweater 1", category: "Sweater", image: qualityshirt },
    { id: 6, title: "Cup 1", category: "Cups", image: qualityshirt },
    // Add more sample items
  ];

 



  const handleClick = (item) => {
    setSelectedCategory(item.title);
    setCurrentPage(0); // reset to first page on new category
  };

  const selectedBox = selectedCategory;

  



 


  useEffect(() => {
    // Set activeTab based on current path
    if (location.pathname === "/product") setActiveTab("product");
    else if (location.pathname === "/newdesign") setActiveTab("new");
    else if (location.pathname === "/stock") setActiveTab("stock");
  }, [location.pathname]);


 

  const handleAddProduct = () => {
    setProductRows(prevRows => [...prevRows, { ...defaultRow }]);
  };

  const defaultRow = {
    colors: ['#ff0000', '#00ff00'],
    activeColorIndex: 0,
    showColorList: false,
    selectedQuantity: 1,
    showDropdown: false,
    selectedType: 'Print',
    selectedSize: 'M',
    showSizes: false,
  };
  
  const [productRows, setProductRows] = useState([defaultRow]);
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const[deliverydate,setDeliveryDate]=useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});


  const [visibleSizeCount, setVisibleSizeCount] = useState(1);
  const [sizeQuantities, setSizeQuantities] = useState({});


  const handleAddSize = () => {
    if (visibleSizeCount < sizes.length) {
      setVisibleSizeCount(visibleSizeCount + 1);
    }
  };



  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

 const [previewImages, setPreviewImages] = useState([]);
const [formData, setFormData] = useState({
  previewImages: [], 
  quantity: '',
 
  deliverydate: '',
});







 const validate = () => {
  const newErrors = {};
  const { previewImages,deliverydate,quantity } = formData;

  if (!previewImages || previewImages.length === 0) {
    newErrors.previewImages = 'Please upload at least one image';
  }

  if (!quantity) {
    newErrors.quantity = 'Quantity is required';
  } else if (isNaN(quantity)) {
    newErrors.quantity = 'Quantity must be a number';
  } else if (parseInt(quantity) <= 15) {
    newErrors.quantity = 'Quantity must be greater than 15';
  }

 

 
 

  if (!deliverydate) newErrors.deliverydate = 'Select delivery date';

  return newErrors;
};

  

  


const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
 

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setSubmitted(false);
    
    return; // Important: exit early on validation error
  }
  setIsSubmitting(true);
  const customerId = localStorage.getItem('customerId');
  const token = localStorage.getItem('authToken');
  const data = new FormData();
  data.append('quantity', formData.quantity);
  data.append('customerId', customerId);
  data.append('deliveryDate', new Date(formData.deliverydate).toISOString());

  formData.previewImages.forEach((file) => {
    data.append('designImages', file); 
  });

  for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

  if (!token || !customerId) {
    alert("Login and continue");
    navigate('/profile')
    return;
  }
  
  console.log('token', token);
  try {
    const response = await axios.post('https://gts.tsitcloud.com/api/customizeDesign/add', data, {
      headers: {
        
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data && response.data.message === "CustomizeDesign saved successfully") {
      console.log('API Response:', response.data);
      setSubmitted(true);
      // Reset form after successful submission
      setFormData({
        previewImages: [],
        quantity: '',
        deliverydate: '',
      });
      setPreviewImages([]);
      alert('Your design details have been sent to your registered email!');
      
    } else {
      console.error('Unexpected API response:', response);
      // alert('Submission failed. Please try again.');
    }
  }  catch (error) {
    console.error('Submission error:', error);
    if (error.response) {
      
      console.error('Server response:', error.response.data);
      
    } else {
      alert('Network error. Please check your connection.');
    }
  }
  finally{
    setIsSubmitting(false);
  }
};



  



 


 
 const [previewImage, setPreviewImage] = useState(null);

const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  if (files.length > 0) {
    setFormData((prev) => ({
      ...prev,
      previewImages: files,
    }));

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);

    
    setErrors((prev) => {
      const { previewImages, ...rest } = prev;
      return rest;
    });
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
          <div className="row w-75 gap-2 mb-5">
          
              <div
                 className={`col-lg-3 col-12 product-page 



                  ${
                  activeTab === "product" ? "active-tab" : ""
                }`
              
              }
              onClick={() => navigate("/product")}
              >
                <h2 className="h4 heading-text-product">Product</h2>
              </div>
              <div
                className={`col-lg-3 col-12 new-design-page ${
                  activeTab === "new" ? "active-tab" : ""
                }`}
                onClick={() => navigate("/newdesign")}
              >
                <h2 className="h4 heading-text-product">New Design</h2>
              </div>
              <div
                className={`col-lg-3 col-12 stock-page ${
                  activeTab === "stock" ? "active-tab" : ""
                }`}
                onClick={() => navigate("/stock")}
              >
                <h2 className="h4 heading-text-product">Ready Stock</h2>
              </div>
            
          </div>



          
        </div>
      </div>

      <h1 className="mt-5 ">
              <span className="heading-text">Please Insert</span>
              <span className="heading-text-two" style={{ margin: "0px" }}>
                {" "}
                Your Design
              </span>
            </h1>

            

<form onSubmit={handleSubmit}>
      <div className="container d-flex justify-content-center align-items-center mt-5">
  <div className="upload-newdeisgn-box text-center">
    <label className="upload-button">
      <RiUpload2Fill className="uplode-icon" />
      <span>Upload File</span>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </label>

   {previewImages.length > 0 && (
  <div className="mt-3" style={{ width: '100%', height: '148px' }}>
    <Carousel
      responsive={responsive}
      infinite={false}
      arrows={true}
      keyBoardControl={true}
      autoPlay={false}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {previewImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Preview ${index}`}
          style={{
            width: '70%',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '8px',
            padding: '5px'
          }}
        />
      ))}
    </Carousel>
  </div>
)}




    {errors.previewImages && (
      <div className="text-danger mt-2">{errors.previewImages}</div>
    )}
  </div>
</div>


      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 enter-quality-box text-center">
            <h1 className="h5 mb-3">Enter Quantity Required</h1>
            <input
              type="number"
              className="form-control mb-2"
              value={formData.quantity}
              onChange={handleChange('quantity')}
              placeholder="Enter quantity"
            />
            {errors.quantity && <div className="text-danger">{errors.quantity}</div>}
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 enter-quality-box text-center">
            <h1 className="h5 mb-3">Enter Delivery date</h1>
            <input
              type="date"
              className="form-control mb-2"
              value={formData.deliverydate}
              onChange={handleChange('deliverydate')}
              
            />
            {errors.deliverydate && <div className="text-danger">{errors.deliverydate}</div>}
          </div>
        </div>
      </div>

     

      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-sm-6 text-center">
            <Button type="submit" className="w-25 btn btn-primary new-sent-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </div>
      </div>

      {/* {submitted && (
        <div className="text-success text-center mb-4">
          <strong>*Detail Sent to Register mail</strong>
        </div>
      )} */}
    </form>
    












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
  );
};

export default Shopcontentproduct;
