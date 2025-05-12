import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button } from "antd";

const Roundneck = () => {
  const { id } = useParams();

  const [productdetail, setProductdetail] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem("authToken");

      try {
        const response = await axios.get(
          "https://gts.tsitcloud.com/api/products/single/products-by-category",
          {
            headers: {
              Authorization: `Bearer token`,
            },
          }
        );

        // Flatten all products from all categories (like your home layout)
        const allProducts = response.data.flatMap((cat) => cat.products);
        setProductsData(allProducts);
        const foundProduct = allProducts.find((p) => p._id === id);

        if (foundProduct) {
          setProductdetail(foundProduct);
          setSelectedImage(
            `https://gts.tsitcloud.com/${foundProduct.images[0]}`
          );
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const product = productdetail;

  if (!productdetail) return <p>Loading...</p>;

  if (!product) return <h2>Product not found</h2>;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      {productdetail &&
        productdetail.category &&
        productdetail.category._id === "680745325e2dc9adc8495f07" && (
          <div>
            <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
              <div className="container mt-5"></div>
              <Form.Item
                label="Enter Quantity"
                name="quantity"
                rules={[{ required: true, message: "Please enter your quantity" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType="submit">
              Submit
              </Button>
              </Form.Item>
            </Form>
          </div>
        )}
    </>
  );
};

export default Roundneck;
