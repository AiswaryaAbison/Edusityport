import React from 'react'
import './Hero.css'
import darkarrow from '../assets/darkarrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to the website .We ensure better education for better world</h1>
        <p>The website is created to empore students
            in their studies by upgrading their knowledge,
            skill and experiencing needee to excel in the
            dynamic field of education.
        </p>
        <button className='btn'>Explore More 
            <img  src={darkarrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
