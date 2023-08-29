import './Hero2style.css'
import React from 'react'

function Hero2(props) {
  return (
    <div className='hero2'>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

export default Hero2
