import logo from './logo.svg';
import './App.css';
// import HomeHeader from './Layout/HomeHeader';
import Homecontent from './pages/Homecontent';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeHeader from './Layout/HomeHeader';
import Aboutcontent from './pages/Aboutcontent';
import Servicecontent from './pages/Servicecontent';
import Contactus from './pages/Contactus';
import Shopcontent from './pages/Shopcontent';
import Shopcontentproduct from './pages/Shopcontentproduct'
import Longsleeves from './pages/Longsleeves'
import Sweater from './pages/Sweater'
import Hoodies from './pages/Hoodies'
import Cups from './pages/Cups'
import Productpage from './pages/Productpage'
import Newdesign from './pages/Newdesign'
import Stockpage from './pages/Stockpage'
import Productdetail from './pages/Productdetail';
import Cartpage from './pages/Cartpage';


function App() {
  return (
    <div className="App">
     {/* <Router> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homecontent />} />
        <Route path="/aboutus" element={<Aboutcontent />} />
        <Route path="/service" element={<Servicecontent />} />
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/shop" element={<Shopcontent/>}></Route>
        <Route path="/product" element={<Shopcontentproduct/>}></Route>
        <Route path="/product/:id" element={<Productdetail />} />
        <Route path="/cart/:id" element={<Cartpage></Cartpage>}></Route>
        {/* <Route path="/longsleeves" element={<Longsleeves/>}></Route>
        <Route path="/sweater" element={<Sweater/>}></Route>
        <Route path="/hoodies" element={<Hoodies></Hoodies>}></Route>
        <Route path='/cups' element={<Cups></Cups>}></Route> */}
        {/* <Route path='/product' element={<Productpage></Productpage>}></Route> */}
        <Route path='/newdesign' element={<Newdesign></Newdesign>}></Route>
        <Route path='/stock' element={<Stockpage></Stockpage>}></Route>
        
      </Routes>
    {/* </Router> */}
    </div>
  );
}

export default App;
