import React from 'react'
import "./Shopcontent.css"
import HomeHeader from '../Layout/HomeHeader'
import aboutus from "../images/about-us1.png";
import bluef from "../images/blue-f.png"
import shopimage from "../images/shopimage.png"

const Shopcontent = () => {
  return (
    <>
<div>
    <HomeHeader />
</div>
<div
        className="about-box d-flex  h-50 flex-column align-items-center "
        style={{ position: "relative" }}
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
    </>
  )
}

export default Shopcontent