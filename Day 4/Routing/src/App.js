import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services'
import AboutUs from './AboutUs';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
