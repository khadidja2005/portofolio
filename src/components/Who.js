import { Link } from "react-router-dom"
import "./Whostyle.css"
import React from 'react'
import image1 from "../assets/react1.jpg"
import image2 from "../assets/react2.webp"

function Who() {
  return (
    <div className="who-container">
        <div className="content">
            <h1>Who Am I </h1>
            <p>I'm a react front end developer create resposive secure websites for my clients</p>
            <Link className="btn" to="../contact">Contact</Link> 
        </div>
        <div className="images">
            <img src={image1} alt="image1" className="image1"/>
            <img src={image2} alt="image2" className="image2"/>
        </div>
    </div>
  )
}

export default Who
