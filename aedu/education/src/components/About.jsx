import React from 'react'
import './About.css'
import about from '../assets/about.png'
import playicon from '../assets/playicon.png'


const About = () => {
  return (
    <div className='about container'>
      <div className='aboutleft'>
        <img src={ about } alt="" className='aboutimg'/>
        <img src={ playicon } alt="" className='playicon'/>
      </div>
      <div className='aboutright'>
        <h1>About Us</h1>
        <p>We are dedicated to shaping the future through quality education 
            and innovative learning experiences. Our institution stands as a
            beacon of excellence, fostering an environment where curiosity thrives,
            creativity flourishes, and students are empowered to reach their
             full potential.<br />
             Our mission is to nurture and inspire the next generation of leaders,
              thinkers, and innovators. We are committed to providing an inclusive and supportive environment that
               encourages academic excellence, critical thinking, and a passion for lifelong learning. Our goal
                is to equip our students with the skills,
              knowledge, and values necessary to excel in a rapidly changing world.<br />
              We envision a world where education is a transformative force that not only imparts knowledge but also fosters a deep 
              sense of responsibility, empathy, and global citizenship.We strive to create a learning community
               that is diverse, inclusive, and forward-thinking, 
              preparing our students to make meaningful contributions to society.</p>
      </div>
    </div>
  )
}

export default About
