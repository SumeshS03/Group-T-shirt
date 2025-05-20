import React, { useEffect, useState } from 'react';
import Header from "../Layout/HomeHeader"
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';



export const Stockcart = () => {

  const [cartItems, setCartItems] = useState({ items: [] });

  useEffect(() => {
      const fetchProduct = async () => {
        try {
          const storedCustomerId = localStorage.getItem('customerId');
          const token =localStorage.getItem('authToken')
          const response = await axios.get(
            `https://gts.tsitcloud.com/api/stockCart/${storedCustomerId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
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

 
    const handleDelete = async(itemId) => {
    const storedCustomerId = localStorage.getItem('customerId');
    const token = localStorage.getItem('authToken');
    console.log('itemid',itemId);
    try{
      const response = axios.post(`https://gts.tsitcloud.com/api/stockCart/${storedCustomerId}`,
        {
           itemId:itemId,
           customerId : storedCustomerId,
        },
        {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
      alert(response.data?.message || "Item deleted successfully!");
      setCartItems((prev) => prev.filter(item => item._id !== itemId));

    }catch (error) {
    const errorMsg = error.response?.data?.message || "Error deleting item.";
    console.error("Delete error:", errorMsg);
    alert(errorMsg);
  }


  };

  return (
    <>
    <Header></Header>
   <div className='container mt-5 d-flex align-items-center justify-content-center'>
      <div className='row w-75'>
      <div className='fw-bold shopping-cart-text'>Shopping cart</div>
       </div>
       </div>
   
     <div className='container mt-5 d-flex align-items-center justify-content-center'>
  <div className='row w-75'>
    <div className='col-12'>
      {cartItems?.items?.length > 0 ? (
        cartItems.items.map((item, index) => (
          <div key={item._id || index} className="card p-3 mb-3">
            <div className='row'>
              <div className='col-lg-5'>
                {/* Product Image */}
                {item.stockId?.productId?.images?.length > 0 && (
                  <img
                    src={`https://gts.tsitcloud.com/${item.stockId.productId.images[0]}`}
                    alt="Product"
                    className="img-fluid rounded"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className='col-lg-5 text-start'>
                <h5>{item.stockId?.productId?.name}</h5>
                
                <p><strong>Material:</strong> {item.stockId?.productId.material}</p>
                <p><strong>Size:</strong> {item.size}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
                <p><strong>Sleeve Type:</strong> {item.sleeveType}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
               
                
                {/* Logo Images */}
                
              </div>
              <div className='col-lg-2 d-flex flex-column align-items-center justify-content-center gap-lg-5 gap-2  mt-lg-0 mt-3'>
                <MdDelete 
                  className='delete-icon'
                  onClick={() => handleDelete(item._id)}
                  size={32} 
                />
                <Button variant="contained" style={{ backgroundColor: 'green' }}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products in cart</p>
      )}
    </div>
  </div>
</div>
   </>
    
    
  )
}
