import React from 'react'
import "./Navbar.css"
import {BiHome}  from "react-icons/bi";

function Navbar(){
    return(
        <header class="header">
            <a href="#" class="logo"> ShoesHub</a>

            <nav class="navbar">
                <BiHome /> <a href="#"> Home</a>
                <a href="#"> About Us</a>
                <a href="#"> Services</a>
                <a href="#"> Contact Us </a>
            </nav>
            <div class="button">
                <button> Register Here</button>
                <button> Sign In</button>
            </div>
        </header>
    )
}


export default Navbar;