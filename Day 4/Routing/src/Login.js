import React from 'react';
import {Link } from 'react-router-dom';
import "./login.css"


export default function login(){
    return(
        <div className="login-container">
            <h2> Login </h2>
            <form className="login-form">
                <div classname="form-group">
                    <label> Username: </label>
                    <input type="text" placeholder='Enter your User Name' required style={{padding:"4px"}} />
                </div>
                <div className="form-group">
                    <label> Password: </label>
                    <input type="password" placeholder="Enter your Password" required style={{padding:"4px"}}/>
                </div>
                
            
            <div className="button1">
                <Link to=" /Forgot">Forget Password?</Link>
                <button> Login </button>
                <span className='seperator'></span>
                <button> <Link to="/Register">Sign Up</Link>  </button>
            </div>
            </form>
        </div>
    )
}
