import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Formulaire from '../components/Formulaire'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero2 title='Contact.' subtitle="Lets have a chat"/> 
      <Formulaire/>
      <Footer/>
    </div>
  )
}

export default Contact
