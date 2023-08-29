import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Who from '../components/Who'

function About() {
  return (
    <div>
      <Navbar/>
      <Hero2 title='About.' subtitle="I'm friendly Front-end Developer"/> 
      <Who/>
      <Footer/>
    </div>
  )
}

export default About
