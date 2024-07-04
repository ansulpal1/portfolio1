import React from 'react'
import "./Logo.css"
import Logoo from "../../assets/logo.svg"
const Logo = () => {
  return (
    <div className='logo'>
        <img src={Logoo} alt="client" className="icon" />
        <h1>Portfolio</h1>
        </div>
  )
}

export default Logo