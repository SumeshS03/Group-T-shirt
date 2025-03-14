import logo from './logo.svg';
import './App.css';
// import HomeHeader from './Layout/HomeHeader';
import Homecontent from './pages/Homecontent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeHeader from './Layout/HomeHeader';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
        {/* <Route path="/" element={<HomeHeader />} /> */}
        <Route path="/home" element={<Homecontent />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
