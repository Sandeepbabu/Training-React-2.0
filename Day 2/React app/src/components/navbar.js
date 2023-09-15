import React from 'react'
import "./Navbar.css"
import img from "./assets/India_Post_Logo.png"
function Navbar(){
    return(
        <div class='nav'>
            {/* Navbar */}
            <nav>
                <h1 style= {{fontsize:"12px"}}> Postal</h1>
                <img src={img} style={{width:"200px"}} alt="India Post logo"></img> 
                <ul> 
                    <li> Home</li>
                    {/* <a href="Home.html" */}
                    <li> About Us</li>
                    <li> Services</li>
                </ul>
                <button> Sign In</button>
            </nav>
        </div>
    )
}

export default Navbar;