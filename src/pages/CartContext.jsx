import React, { useRef, useState , useEffect } from 'react';
import HomeHeader from '../Layout/HomeHeader'
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
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import bluef from "../images/blue-f.png"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import './CartContext.css'
import Button from '@mui/material/Button';

const CartContext = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [productdetail, setProductdetail] = useState(null);
   const [productsData, setProductsData] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const { id } = useParams();
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const storedCustomerId = localStorage.getItem('customerId');
        const response = await axios.get(
          `https://gts.tsitcloud.com/api/cartItems/list/${storedCustomerId}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MThhNmQ2ZjA0MzVhYzExMGNiNGYwYSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc0NjY4Mzc1NywiZXhwIjoxNzQ2NzcwMTU3fQ.V7SgeITidTzUAE_S5BCciSTizowlhblmrgBC3Wy6FBk`,
            },
          }
        );
        setCartItems(response.data);
        console.log('Fetched product:', response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
  
    fetchProduct();
  }, []);

  

  return (
    <>
    <div>
    <HomeHeader />
   </div>
    
   <div className='container mt-5 d-flex align-items-center justify-content-center'>
   <div className='row w-75'>
   <div className='fw-bold shopping-cart-text'>Shopping cart</div>
    </div>
    </div>

   <div className='container mt-5 d-flex align-items-center justify-content-center'>
  <div className='row w-75'>
    <div className='col-12'>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={item._id || index} className="card p-3 mb-3">
            <div className='row'>
              <div className='col-lg-5'>
                {/* Product Image */}
                {item.productId?.images?.length > 0 && (
                  <img
                    src={`https://gts.tsitcloud.com/${item.productId.images[0]}`}
                    alt="Product"
                    className="img-fluid rounded"
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className='col-lg-5 text-start'>
                <h5>{item.productId?.name}</h5>
                <p><strong>Cloth:</strong> {item.cloth}</p>
                <p><strong>Quantity:</strong> {item.quantityCount}</p>
                <p><strong>Delivery Date:</strong> {new Date(item.deliveryDate).toLocaleDateString()}</p>
                <p><strong>Amount:</strong> ₹{item.amount}</p>
                <p><strong>Total Amount:</strong> ₹{item.totalAmount}</p>

                {/* Logo Images */}
                {Array.isArray(item.logos) && item.logos.length > 0 && (
                  <div className="mt-3">
                    <strong>Logos:</strong>
                    <div className="d-flex flex-wrap gap-3 mt-2">
                      {item.logos.map((logo, idx) => (
                        <div key={idx} className="text-center">
                          <img
                            src={`https://gts.tsitcloud.com/${logo.photo?.replace(/\\/g, '/')}`}
                            alt={logo.logotype}
                            className="img-thumbnail"
                            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                          />
                          <div className="small mt-1">{logo.logotype}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center justify-content-center gap-5'>
                
              <MdDelete className='delete-icon  ' size={32} />
              <Button variant="contained" style={{ backgroundColor: 'green' }}>Buy Now</Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading cart items...</p>
      )}
    </div>
  </div>
</div>






   
  


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
    </>
  )
}

export default CartContext