import './Heroimg.css'

import intro from '../assets/intro-bg.jpg'
import React from 'react'
import { Link } from 'react-router-dom'


function heroimg() {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro'
        src={intro} alt='intro'/>
      </div>
      <div className='content'>
        <p>HI , I'M FREELANCER.</p>
        <h1>React Developer.</h1>
        <div className='bottom'>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn-light'>Contact</Link>
        </div>
      </div>
      
    </div>
  )
}

export default heroimg
