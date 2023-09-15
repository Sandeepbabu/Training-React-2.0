import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css"


const Url = "http://restapi.adequateshop.com";

export default function Login(){
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isValid, setValid]= useState(false);
    const [userDetails, setUserDetails] = useState(
      {
        email: '',
        password: ''

      }
    );
    const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserDetails({ ...userDetails, email: e.target.value });
    if (!userDetails.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
      setEmailError('Please enter a valid email address');
      
      
    } else {
      setEmailError('');
      setValid(emailError === '');
    }
   
  };

  const handlePasswordChange = (e) => {
    setUserDetails({ ...userDetails, password: e.target.value });
    if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
      setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
      
    } else {
      setPasswordError('');
      setValid(emailError === '');
    }
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (isValid){

   
      axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
         toast.success(`Welcome ${userDetails.email}`);
        navigate("/dashboard")
      })
        .catch((error) => {
        toast.error(error.message);
        })}
  };


    return(
        <div className="login-container">
            <h1> LOGIN </h1>
            <form onSubmit={handleSubmit}>
            
                <div classname="form-group">
                    <label> Username: </label>
                    <div classname="form-group">
                    <input type="text" placeholder='Enter your User Name' value={userDetails.email} onChange={handleEmailChange}  /> </div>
                </div>
                <div>
                <span className="error">{emailError}</span></div>
                <div className="form-group">
                    <label> Password: </label>
                    <div className="form-group"> 
                    <input type="password" placeholder="Enter your Password" value={userDetails.password} onChange={handlePasswordChange}/> </div>
                </div>
                <div> <span className="error">{passwordError}</span></div>
              
            
            <div className="button1">
                <Link to=" /Forgot">Forget Password?</Link>
                <button> Login </button>
            <div classname="remember"> 
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember Me
                    </label>
            </div>
                <span className='seperator'></span>
                <button> <Link to="/Register">Sign Up</Link>  </button>
            </div>
            </form>
        </div>
    )
}
