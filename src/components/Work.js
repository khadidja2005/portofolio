import "./Workstyle.css"
import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import { NavLink } from "react-router-dom"


function Work() {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img className="image" src={project1} alt="project1"/>
            <h3>LMS/Course Design</h3>
            <p>podcast thriving for you all and top zejefhio dslkpkr ranked in all around the world podcast thriving ml"toprogjeri poerjgopzjrz ""pjergi for you all and top ranked in all around the world podcast thriving for you all and top ranked in all around the world </p>
            <div className="botton">
                <NavLink to="google.com" className="btn">view</NavLink>
                <NavLink to="google.com" className="btn">source</NavLink>
            </div>
        </div>
        <div className="project-card">
            <img className="image" src={project2} alt="project1"/>
            <h3>LMS/Course Design</h3>
            <p>podcast thriving for  world podcast thriving for youthe world holla !!!!  jherizhfv preigtoufrh  </p>
            <div className="botton">
                <NavLink to="google.com" className="btn">view</NavLink>
                <NavLink to="google.com" className="btn">source</NavLink>
            </div>
        </div>
        <div className="project-card">
            <img className="image" src={project3} alt="project1"/>
            <h3>LMS/Course Design</h3>
            <p>podcast thriving for you all and top ranked ziuzfpoz jrgkzpf pitopzejf  in all around the world podcast thriving for you zejefhio dslkpkr all and top ranked in all around the world podcast thriving for you all and top ranked in all around the world </p>
            <div className="botton">
                <NavLink to="google.com" className="btn">view</NavLink>
                <NavLink to="google.com" className="btn">source</NavLink>
            </div>
        </div>
        <div className="project-card">
            <img className="image" src={project4} alt="project1"/>
            <h3>LMS/Course Design</h3>
            <p> zejefhio dslkpkr podcast thriving for you all and top ranked in all around the world podcast thriving for you all and top ranked in zjfh sdfjiozhd qosfuiozehd all around the world podcast thriving for you all and top ranked in all around the world </p>
            <div className="botton">
                <NavLink to="google.com" className="btn">view</NavLink>
                <NavLink to="google.com" className="btn">source</NavLink>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Work
