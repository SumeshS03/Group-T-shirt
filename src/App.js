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



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homecontent />} />
        <Route path="/aboutus" element={<Aboutcontent />} />
        <Route path="/service" element={<Servicecontent />} />
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/shop" element={<Shopcontent/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
