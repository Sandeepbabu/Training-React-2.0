import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './header';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services'
import AboutUs from './AboutUs';
import Login from './Login';
// import Register from './Register';
import Register from './Register2';
import Footer from './Footer';
import Dashboard from './dashboard';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Register2 from './Register2';
import './footer.css'


function App() {
//   const [seen, setSeen] = useState(false)
//   function togglePop () {
//     setSeen(!seen);
// };
  return (
    <>
    <Header />
      <Router>
      <Navbar />
      <ToastContainer /> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />}/>
        {/* <Route path="/Register" element={<Register />} /> */}
        <Route path="/Register" element={<Register2 />} />
      </Routes>
      
    </Router>
<div> 
      <Footer /> 
</div>
    

    </>
  );
}
export default App;
