import React from 'react'
import img from "../src/Assets/logo.png"
// import img2 from 

const header = () => {
  return (
    <div>
      <h1> This is Header </h1>
      <div className="navbar-left">
                <img src={img} alt="logo" className="logo"/>
            </div>
    </div>
  )
}

export default header
