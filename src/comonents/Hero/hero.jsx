import React from 'react'
import "./Hero.css"
import HeroImage from './HeroImage'
import Achievement from '../../Commons/Achievement/achievement'

import Ansul from '../../assets/ansul.img.jpg'
import { Link } from 'react-scroll'


const Hero = () => {


  return (
    <section id='hero'>

      <div className='wrapper info-container'>
        <div className='column'>
          <h3 className='sub-title' data-aos='fade-right' >
            Hi I'm <span className="primary">Ansul Pal</span>

          </h3>
          <h1 className="heading-1" data-aos='fade-up'>
            A <span className="gradient-text">Fullstack</span> Web Developer
          </h1>
          <p className="muted" data-aos='fade-up' data-aos-delay='200'>Hello! I'm a passionate and skilled Full Stack Developer with expertise in the MERN (MongoDB, Express.js, React, Node.js) stack. With a deep understanding of both front-end and back-end technologies, I'm thrilled to be part of the Kavach Hackathon. This event represents a chance for me to leverage my technical prowess and problem-solving abilities to develop impactful solutions.</p>
          <div className="flex-center buttons-wrapper">


            <a href='/Ansul_resume.pdf'
              download='Ansul_resume.pdf' smooth={true} className='btn primary btn2' data-aos='fade-left' data-aos-delay='1200' data-aos-offset="50" > Download CV </a>
            <Link to='contact' smooth={true} className='btn btn2' data-aos='fade-left' data-aos-delay='1500' data-aos-offset="50"> 👋 Let's Connect</Link>
          </div>
        </div>
        <div className='column hero-image column2' data-aos='fade-left' data-aos-delay='200'>
          {/* <img  src={Ansul}alt="client" className="client-image" /> */}
          <HeroImage />
        </div>

      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement />
        </div>
      </div>
    </section>
  )
}

export default Hero