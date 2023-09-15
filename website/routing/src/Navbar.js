import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css"


export default function Navbar() {
    return(
        <div className="header">
        <nav className="navbar">
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
        
        </div>       
        )
}



