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

const Stockdetail = () => {
  const { id } = useParams();
  const [productdetail, setProductdetail] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
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
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const allProducts = response.data.flatMap((cat) =>
          cat.stocks.map((stock) => stock.product)
        );
        setProductsData(allProducts);
        const foundProduct = allProducts.find((p) => p.id === parseInt(id));

        if (foundProduct) {
          setProductdetail(foundProduct);
          setSelectedImage(
            `https://gts.tsitcloud.com/${foundProduct.images[0]}`
          );
          const categoryId = foundProduct?.category?._id;
          if (categoryId) {
            localStorage.setItem("categoryId", categoryId);
          }
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

  const foundProduct = productsData.find((p) => p.id === parseInt(id));
  if (!foundProduct) {
    return <h2>Product not found</h2>;
  }

  const totalQuantity = Object.values(foundProduct.sizes).reduce(
    (sum, qty) => sum + qty,
    0
  );
  const maxQuantity = foundProduct.sizes[size] || 0;
  const quantityOptions = Array.from({ length: maxQuantity }, (_, i) => i + 1);

  const sizesone = [
    { label: "XS", chest: 34 },
    { label: "S", chest: 36 },
    { label: "M", chest: 38 },
    { label: "L", chest: 40 },
    { label: "XL", chest: 42 },
    { label: "2XL", chest: 44 },
    { label: "3XL", chest: 46 },
    { label: "4XL", chest: 48 },
    { label: "5XL", chest: 50 },
  ];

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

      <div className="row w-100">
        <div className="col-9">
          <div className="row">
            <div className="container-fluid mt-5"></div>
            <div className="col-lg-6 col-12">
              {productdetail && (
                <>
                  <div className="product-imageful">
                    <img
                      src={
                        hoveredImage ||
                        selectedImage ||
                        `https://gts.tsitcloud.com/${productdetail.images[0]}`
                      }
                      alt={productdetail.name}
                      className="img-fluid"
                    />
                  </div>

                  <div className="d-flex mt-4 gap-4 w-100 align-items-start">
                    <div
                      className="productdetail-image"
                      onMouseEnter={() =>
                        setHoveredImage(
                          `https://gts.tsitcloud.com/${productdetail.images[1]}`
                        )
                      }
                      onMouseLeave={() => setHoveredImage(null)}
                      style={{
                        border:
                          selectedImage ===
                          `https://gts.tsitcloud.com/${productdetail.images[1]}`
                            ? "2px solid blue"
                            : "2px solid transparent",
                        borderRadius: "8px",
                        padding: "4px",
                      }}
                    >
                      <img
                        src={`https://gts.tsitcloud.com/${productdetail.images[1]}`}
                        alt="Second"
                        className="img-fluid"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stockdetail;