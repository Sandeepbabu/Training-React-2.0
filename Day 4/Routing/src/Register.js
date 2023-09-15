import React from "react"
// import {Link} from 'react-router-dom';
import "./Register.css"


export default function Home(){
    return(
        <div className="Registration">
            <h1 style={{textAlign:"center"}}>REGISTER HERE</h1>
            <form className="reg-form">
                <div classname="reg-group">
                    <label> Username: </label>
                    <input type="text" placeholder='Enter your User Name' required style={{padding:"4px"}} />
                </div>
                <div className="reg-group">
                    <label> Enter Password: </label>
                    <input type="password" placeholder="Enter Password" required style={{padding:"4px"}}/>
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" placeholder="Confirm Password" required style={{padding:"4px"}}/>
                </div>
            
            
            <div className="regbutton">
            <button> Sign Up </button>
                
            </div>
        </form>
        </div>
        
    )
}