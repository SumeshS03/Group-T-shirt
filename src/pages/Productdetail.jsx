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

const Productdetail = () => {

   const [selectedSize, setSelectedSize] = useState("");
   const [color, setColor] = useState("#e6194b");
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


 
   const handleCartClick = () => {

   

    
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

  const handleInputChange = (type, label, value) => {
    const val = parseInt(value, 10);
    const safeVal = isNaN(val) ? 0 : val;
  
    if (type === "half") {
      setHalfSleeve((prev) => ({ ...prev, [label]: safeVal }));
    } else {
      setFullSleeve((prev) => ({ ...prev, [label]: safeVal }));
    }

    setFormErrors((prev) => ({ ...prev, quantityMatch: '' }))
  };

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





  
    

    

  //  const products = [
  //                  { id: 1, image: Hoodiesone,imageone:Hoodie,imagetwo:Hoodiethree, label: "Sleeve", price: 299,sizes: {XS:2,S: 5,M: 4,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
  //                  { id: 2, image: tshirttwo,imageone:tshirtthree,imagetwo:tshirtfour, label: "Full Sleeve", price: 349,sizes: {XS:2,S: 5,M: 3,L: 1,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
  //                  { id: 3, image: fullsleeveone,imageone:fullsleevethree,imagetwo:qualityshirt, label: "Round Neck", price: 279,sizes: {XS:2,S: 2,M: 3,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
  //                  { id: 4, image: qualityshirt,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 3,L: 1,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
  //                  { id: 5, image: shopimage,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 15,L: 4,X: 2,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
  //                  { id: 6, image: shopimage,imageone:shopimage,imagetwo:qualityshirt, label: "V Neck", price: 319,sizes: {XS:2,S: 5,M: 3,L: 4,X: 41,XL: 1,'2XL': 3, '3XL': 2, '4XL': 1, '5XL': 0} },
  //                ];
   
    const [logoCount, setLogoCount] = useState(1);
    const [visibleLogos, setVisibleLogos] = useState(1);
    const [uploadedImages, setUploadedImages] = useState({});
    const [remark, setRemark] = useState('');
    const [qtyError, setQtyError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [pocketRequired, setPocketRequired] = useState('');
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
     const [productsData, setProductsData] = useState([]);
     const [hasSubmitted, setHasSubmitted] = useState(false);
    
     const [logos, setLogos] = useState([
      { type: '', position: '', image: '' } // 👈 one row initially
    ]);


    // const handleLogoCountChange = (e) => {
    //   const count = parseInt(e.target.value) || 1;
    //   setLogoCount(count);
    
    //   const updatedLogos = [...logos];
    
    //   // Expand or trim the logos array
    //   if (count > updatedLogos.length) {
    //     while (updatedLogos.length < count) {
    //       updatedLogos.push({ type: '', position: '', image: '' });
    //     }
    //   } else {
    //     updatedLogos.length = count;
    //   }
    
    //   setLogos(updatedLogos);
    
    //   // Optional: Clear error
    //   setFormErrors((prev) => ({ ...prev, logoCount: '' }));
    // };
    

    const handleLogoCountChange = (e) => {
      const count = parseInt(e.target.value, 10);
      setLogoCount(count);
    
      const updatedLogos = Array.from({ length: count }, (_, index) => {
        return logos[index] || { type: '', position: '', image: null };
      });
    
      setLogos(updatedLogos);
    };
    
    

    const handleLogoChange = (index, field, value) => {
      const updatedLogos = [...logos];
      updatedLogos[index][field] = value;
      setLogos(updatedLogos);
    
      // Clear individual error if corrected
      const updatedErrors = { ...formErrors };
      if (field === 'type' && value) {
        delete updatedErrors[`logoType_${index}`];
      }
      if (field === 'position' && value) {
        delete updatedErrors[`logoPosition_${index}`];
      }
    
      setFormErrors(updatedErrors);
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

   // DELETE THIS UNUSED FUNCTION
// const validateQuantity = () => {
//   const newErrors = {};
//   if (!enteredQty) {
//     newErrors.enteredQty = 'Quantity Must Be 15 or More';
//   } else if (isNaN(enteredQty)) {
//     newErrors.enteredQty = 'Quantity must be a number';
//   } else if (parseInt(enteredQty) < 15) {
//     newErrors.enteredQty = 'Minimum quantity should be 15';
//   }
//   setFormErrors(prevErrors => ({ ...prevErrors, ...newErrors }));
// };
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
useEffect(() => {
  if (hasSubmitted) {
    if (Object.keys(formErrors).length === 0) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }
  }
}, [formErrors, hasSubmitted]);



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

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
    
      // validations
      if (!enteredQty) {
        newErrors.enteredQty = 'Quantity must be entered';
      }
      if (!pocketRequired) {
        newErrors.pocketRequired = 'Pocket selection is required';
      }
      // if (!logoPosition) {
      //   newErrors.logoPosition = 'Select the logo position';
      // }
      if (!deliveryDate) {
        newErrors.deliveryDate = 'Delivery date is required';
      }
      if (!colorTouched) {
        newErrors.color = 'Choose color';
      }
      // if (!uploadedImage) {
      //   newErrors.uploadedImage = 'Upload logo';
      // }
      if (!selectedCotton && !selectedPolyester && !selectedPolyCotton) {
        newErrors.selectedoptions = 'Please select at least one option.';
      }
      // if (!logoType) {
      //   newErrors.logoType = 'Select Logo Type';
      // }
      if (parseInt(enteredQty) !== grandTotal) {
        newErrors.quantityMatch = 'Total quantities must match entered quantity';
      }

      logos.forEach((logo, index) => {
        if (!logo.type) {
          newErrors[`logoType_${index}`] = `Select Logo Type for logo ${index + 1}`;
        }
        if (!logo.position) {
          newErrors[`logoPosition_${index}`] = `Select Logo Position for logo ${index + 1}`;
        }
        if (!logo.image) {
          newErrors[`logoImage_${index}`] = `Upload logo image for logo ${index + 1}`;
        }
      });
    
      setFormErrors(newErrors);
      setHasSubmitted(true); // ✅ always true on submit
    
      // if (Object.keys(newErrors).length === 0) {
       
      //   const formData = {
      //     quantity: enteredQty,
      //     logoCount: logoCount,
      //     logoPosition: logoPosition,
      //     logoPositionTwo: logoPositionTwo,
      //     logoType: logoType,
      //     logotypetwo: logotypetwo,
      //     pocketRequired: pocketRequired,
      //     deliveryDate: deliveryDate,
      //     color: color,
      //     halfSleeveQuantities: halfSleeve,
      //     fullSleeveQuantities: fullSleeve,
      //     totalHalfSleeve: totalHalf,
      //     totalFullSleeve: totalFull,
      //     grandTotal: grandTotal,
      //     remark: remark,
      //     logoTwo: uploadedImagetwo,
      //     logo: uploadedImage,
      //     SelectedItem: selectedCotton || selectedPolyester || selectedPolyCotton,
      //     productid: productdetail?._id,
          
      //   };
    
      //   console.log('Form submitted:', formData);
      // }
      if (Object.keys(newErrors).length === 0) {
        const logoDetails = logos.map((logo, index) => {
          console.log(`Logo ${index + 1}:`);
          console.log(`  Type: ${logo.type}`);
          console.log(`  Position: ${logo.position}`);
          console.log(`  Image:`, logo.image);
      
          return {
            type: logo.type,
            position: logo.position,
            image: logo.image,
          };
        });
      
        const formData = {
          quantity: enteredQty,
          logoCount: logoCount,
          // logoPosition: logoPosition,
          // logoPositionTwo: logoPositionTwo,
          // logoType: logoType,
          // logotypetwo: logotypetwo,
          pocketRequired: pocketRequired,
          deliveryDate: deliveryDate,
          color: color,
          halfSleeveQuantities: halfSleeve,
          fullSleeveQuantities: fullSleeve,
          totalHalfSleeve: totalHalf,
          totalFullSleeve: totalFull,
          grandTotal: grandTotal,
          remark: remark,
          // logoTwo: uploadedImagetwo,
          // logo: uploadedImage,
          SelectedItem: selectedCotton || selectedPolyester || selectedPolyCotton,
          productid: productdetail?._id,
          logos: logoDetails, // ✅ include processed logo details here
        };
      
        console.log('Form submitted:', formData);
      }
      
    };
    
    
  
    
    const [productdetail, setProductdetail] = useState(null);
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoverImage, setHoverImage] = useState(null);
    
    const [hoveredImage, setHoveredImage] = useState(null);

   
    

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get('https://gts.selfietoons.com/api/products/single/products-by-category', {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTA1ZjNmOTc3Mzc1ODkzNzFkODI5YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NTk5MDM3OSwiZXhwIjoxNzQ2MDc2Nzc5fQ.A3EHXDY4ABwLQ4HEHuBAUeDfeWJEbvYTaojMbxS4PHA`,
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

  // const product = products.find((p) => p.id === parseInt(id));
  
  // const productone = productsData.find((p) => p._id === id);
  // productsData.forEach((p) => console.log(p._id));

  // const [selectedImage, setSelectedImage] = useState(product.image);
  
  // const totalAvailable = product
  // ? Object.values(product.sizes).reduce((sum, qty) => sum + qty, 0)
  // : 0;

  // const sizeWiseStock = product.sizes;

  
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

          <p className="text-start"><strong>Price:</strong> ₹{productdetail?.price}</p>
          <p className="text-start"><strong>Price:</strong> ₹{productdetail?.price}</p>
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






    {/* <div className="container mt-5">
      <div className="d-flex productpage-box row ">
        <div className="col-lg-5 col-12">
        <div className="product-imageful">
        <img src={selectedImage} alt={product.label} className="img-fluid" />

     

      </div>
      
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
  
  
    </div>
 

      
       </div>
       <div className="col-lg-5 col-12 ">
        <h2 className="text-start">{product.label}</h2>
        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque quasi alias eveniet consequuntur dolor.</p>
        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque quasi alias eveniet consequuntur dolor.</p>
        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque quasi alias eveniet consequuntur dolor.</p>
        
        <h2 className="text-xl font-bold mb-2 h5">About this item</h2>
        <li className="text-start"><strong>Type:</strong> Cotton Round Neck T-Shirt – Soft and breathable fabric</li>
        <li className="text-start"><strong>Fit:</strong> Regular Fit – Comfortable for daily wear</li>
        <li className="text-start"><strong>Fabric:</strong> 100% Pure Cotton – Durable and skin-friendly</li>
        <li className="text-start"><strong>Design:</strong> Printed Graphic – Stylish and trendy look</li>

        <div className="mt-5" style={{ margin: '20px' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {sizesone.map((size, index) => (
              <th key={index} style={{ border: '1px solid black', padding: '8px' }}>
                {size.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {sizesone.map((size, index) => (
              <td key={index} style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                {size.chest}"
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
      </div>


      
      </div>  
      
      
    </div> */}


{/* <div className="container mt-5">
      <div className="d-flex productpage-box row">
        <div className="col-lg-5 col-12">
          <div className="product-imageful">
            <img src={selectedImage} alt={productdetail.name} className="img-fluid" />
          </div>

          <div className="d-flex mt-4 gap-4 w-100 align-items-start">
            {productdetail.images.map((img, index) => (
              <div
                key={index}
                className="productdetail-image"
                onClick={() => setSelectedImage(`https://gts.selfietoons.com/${img}`)}
                style={{
                  border: selectedImage.endsWith(img) ? '2px solid blue' : '2px solid transparent',
                  borderRadius: '8px',
                  padding: '4px',
                }}
              >
                <img
                  src={`https://gts.selfietoons.com/${img}`}
                  alt={`product-thumb-${index}`}
                  className="img-fluid"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-5 col-12">
          <h2 className="text-start">{productdetail.name}</h2>
          <p className="text-start">{productdetail.description}</p>

          <h2 className="text-xl font-bold mb-2 h5">About this item</h2>
          <ul>
            <li className="text-start"><strong>Material:</strong> {productdetail.material}</li>
            <li className="text-start"><strong>Weight:</strong> {productdetail.weight}</li>
            <li className="text-start"><strong>Brand:</strong> {productdetail.brand}</li>
          </ul>
        </div>
      </div>
    </div> */}



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

     
      // onChange={(e) => setLogoCount(e.target.value)}
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
        <label className="fs-6 fw-bold col-lg-2 text-lg-end mb-md-3 ">Delivery Date:</label>
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
          ></input>
          {formErrors.deliveryDate && (
         <div className="text-danger mt-1">{formErrors.deliveryDate}</div>
          )}
        </div>
        <label className="fs-6 fw-bold col-lg-2 text-lg-end mt-lg-0 mt-3">Choose Colour:</label>
        <div className="col-lg-1 d-flex align-items-lg-start align-items-center justify-content-lg-start justify-content-center mt-lg-0 mt-3 ">
        <input  type="color" id="favcolor" name="favcolor" value={color} 
        onChange={(e) => {
          setColor(e.target.value);
          setColorTouched(true);
    
          
          setFormErrors((prev) => ({ ...prev, color: '' }));
        }}
        className="form-control-color rounded-color"></input>
        
        </div>
        {formErrors.color && <div className="text-danger">{formErrors.color}</div>}
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
        
            // Clear material selection error
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


      
      {/* <div className="row mt-2 pt-2 pb-4 chooseoption-box ">
        <div>
        <label className=" fs-6 fw-bold  d-flex align-items-center justify-content-center text-center mb-3">Logo:</label>
        </div>


        <div className="row d-flex  justify-content-evenly">
        <div className="col-lg-2">
        <label className="dropdown-label w-100 fw-bold fs-6 mb-3">Logo Type</label>
        <select className="form-select"
        value={logoType}
        onChange={(e) =>{
          setLogoType(e.target.value);
        setFormErrors((prev)=>({...prev,logoType:''}))}
        }>
        <option value="">Select Type</option>
        <option value="printed">Printed</option>
        <option value="embroidered">Emposed</option>
  </select>
  {formErrors.logoType && (
         <div className="text-danger mt-1">{formErrors.logoType}</div>
          )}

        </div>
        <div className="col-lg-2">
        <label className="dropdown-label w-100 fw-bold fs-6 mb-3">Logo Position</label>
        <select className="form-select"
        value={logoPosition}
        onChange={(e)=>{setLogoPosition(e.target.value);
          setFormErrors((prev)=>({...prev,logoPosition:''}))
        }}>
        <option value="">Select</option>
        <option value="left Chest">left Chest</option>
        <option value="Right Chest">Right Chest</option>
        <option value="Left Sleeve">Left Sleeve</option>
        <option value="Right Sleeve">Right Sleeve</option>
        <option value="Front Center">Front Center</option>
        <option value="Back Top">Back Top</option>
        <option value="Back Center">Back Center</option>
        <option value="On Pocket">On Pocket</option>
  </select>
  {formErrors.logoPosition && (
         <div className="text-danger mt-1">{formErrors.logoPosition}</div>
          )}
        </div>
        <div className="col-lg-2">
        <label className="dropdown-label w-100 fw-bold fs-6 mb-3">Upload 
          Logo</label>
          <input 
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageUpload}
          />
          {formErrors.uploadedImage && (
  <div className="text-danger">{formErrors.uploadedImage}</div>
)}
          
        </div>
        </div>
<div>
        {uploadedImage && (
          <>
          
          <img src={uploadedImage} alt="Uploaded preview" className="uploded-img p-2  col-lg-2 rounded-5" 
   />


   <div>
   <Button className=" col-lg-1  text-center mb-3 " onClick={showsecondlogoadd}>Add Logo</Button>
   </div>
   </>
  
  
   
)}
</div>

 {secondlogo && (
  <div className="">
    
    
    <div className="row d-flex  justify-content-evenly">
    <div className="col-12 col-sm-6 col-lg-2">
        <label className="form-label">Logo Type</label>
        <select className="form-select"
        value={logotypetwo}
        onChange={(e)=> setLogoTypeTwo(e.target.value)}>
        <option value="">Select Type</option>
        <option value="printed">Printed</option>
        <option value="embroidered">Embroidered</option>
  </select>
        </div>

        <div className="col-lg-2">
        <label className="form-label">Logo Position</label>
        <select className="form-select"
        value={logoPositionTwo}
        onChange={(e)=> setLogoPositionTwo(e.target.value)}>
        <option value="">Select</option> 
        <option value="left Chest">left Chest</option>
        <option value="Right Chest">Right Chest</option>
        <option value="Left Sleeve">Left Sleeve</option>
        <option value="Right Sleeve">Right Sleeve</option>
        <option value="Front Center">Front Center</option>
        <option value="Back Top">Back Top</option>
        <option value="Back Center">Back Center</option>
        <option value="On Pocket">On Pocket</option>
  </select>
        </div>
    <div className="col-lg-2 ms-3">
    <label className="form-label">Upload 
    Logo</label>
          <input 
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageUploadtwo}
          />
          
        </div>
        </div>
        <div>
        {uploadedImagetwo && (
          <>
        
          <img src={uploadedImagetwo} alt="Uploaded preview" className="uploded-img p-2  col-lg-2 rounded-5" 
   />
   
  
   </>
  
  
   
)}
</div>
  </div>
   )}

      </div> */}

      <div className="row mt-2 pt-2 pb-4 chooseoption-box ">
      <div>
        <label className=" fs-6 fw-bold  d-flex align-items-center justify-content-center text-center mb-3">Logo:</label>
        </div>
        {logos.map((logo, index) => (
  <div key={index} className="mb-4">
    <div className="row d-flex justify-content-evenly">
      {/* Logo Type */}
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

      {/* Logo Position */}
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

      {/* Upload Logo */}
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

    {/* Image Preview */}
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
      onChange={(e) => setRemark(e.target.value)}
    ></textarea>
  </div>
  <div className="d-flex justify-content-center mt-4">
  <button type="submit" className="btn btn-primary px-5" >
  Submit
</button>

  </div>
  {hasSubmitted && !showSuccess && (
  <div className="text-danger mt-2">
    Enter required fields and submit
  </div>
)}

{hasSubmitted && showSuccess && (
  <div className="text-success mt-2">
    Check amount
  </div>
)}
</form>












    <div className="container w-50 mt-5">
      <div className="row">
      <div className="col-lg-2">
      <label className="fw-bold">Amount:</label>
    </div>
    <div className="col-lg-3">
      <input type="text" className="form-control" readOnly />
    </div>
      </div>
      <div className="row mt-2">
      <div className="col-lg-2">
      <label className="fw-bold">Total:</label>
    </div>
    <div className="col-lg-3">
      <input type="text" className="form-control" readOnly />
    </div>
      </div>


      
    </div>
    <div className="container w-50 ">

    <div className=" cart-box mt-5 gap-2 row">
            <button  className={`btn  buynow-btn col-lg-2 col-12  ${
          activeButton === "buy" ? "active-btn" : ""
        }`}
        onClick={() => setActiveButton("buy")}>Buy Now</button>
            <button className={`btn  addtocart-btn col-lg-3 col-12 ${
          activeButton === "cart" ? "active-btn" : ""
        }`}
        onClick={handleCartClick}>Add to Cart</button>
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




{/* {logos.map((logo, index) => (
  <div key={index} className="mb-4">
    <div className="row justify-content-evenly">
      <div className="col-lg-2">
        <label className="form-label">Logo Type</label>
        <select
          className={`form-select ${formErrors[index]?.type ? 'is-invalid' : ''}`}
          value={logo.type}
          onChange={(e) => handleLogoChange(index, 'type', e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="printed">Printed</option>
          <option value="embroidered">Embroidered</option>
        </select>
        {formErrors[index]?.type && (
          <div className="text-danger mt-1">{formErrors[index].type}</div>
        )}
      </div>

      <div className="col-lg-2">
        <label className="form-label">Logo Position</label>
        <select
          className={`form-select ${formErrors[index]?.position ? 'is-invalid' : ''}`}
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
        {formErrors[index]?.position && (
          <div className="text-danger mt-1">{formErrors[index].position}</div>
        )}
      </div>

      <div className="col-lg-2">
        <label className="form-label">Upload Logo</label>
        <input
          type="file"
          accept="image/*"
          className={`form-control ${formErrors[index]?.image ? 'is-invalid' : ''}`}
          onChange={(e) =>
            handleLogoImageUpload(index, e.target.files[0])
          }
        />
        {formErrors[index]?.image && (
          <div className="text-danger mt-1">{formErrors[index].image}</div>
        )}
      </div>
    </div>

    
    {logo.image && (
      <div className="row justify-content-center mt-3">
        <div className="col-lg-2">
          <img
            src={logo.image}
            alt={`Logo ${index + 1}`}
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            className="border rounded"
          />
        </div>
      </div>
    )}
  </div>
))} */}