import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Pricing from '../components/Pricing'
import Work from '../components/Work'

function Projects() {
  return (
    <div>
      <Navbar/>
      <Hero2 title="PROJECTS." subtitle='Some of my most recent works'/>
      <Work/>
      <Pricing/>
      <Footer  />
      
    </div>
  )
}

export default Projects
