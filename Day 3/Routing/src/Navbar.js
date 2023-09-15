dimport React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css"
import img from "../Assets/logo.png"


export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <img src={img} alt="logo" className="logo"/>
            </div>

            <div className="navbar-right">
            <ul className="nav-links"> 
                <li className="nav-item"> 
                    <Link to="/Home">Home</Link>
                </li>
                <li className="nav-item"> 
                    <Link to="/Services">Services</Link>
                </li>
                <li className="nav-item"> 
                    <Link to="/AboutUs">About Us</Link>
                </li>
                <li className="nav-item"> 
                    <Link to="/Login">Login</Link>
                </li>
                
            </ul>                
            </div>
        </nav>
    )
}