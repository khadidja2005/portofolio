import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footerstyle.css"
import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="box">
                <FaHome className="icon"/>
                <p>123 Hosting Sociaty.algeria </p>
            </div>
            <div className="box">
                <FaPhone className="icon"/>
                <p>1-2213-15258-25 </p>
            </div>
            <div className="box">
                <FaMailBulk className="icon"/>
                <p>info@gmail.com </p>
            </div>
        </div>
        <div className="left">
            <p className="about">About the company</p>
            <p>this is my website written with react which is a labrary of javascript enjoy your journy in this website do not forgrt to support me </p>
            <div className="social">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaLinkedin className="icon"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
