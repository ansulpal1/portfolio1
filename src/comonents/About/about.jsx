import React from 'react'
import "./About.css"

import { WhyChooseMe } from '../../sources'
const About = () => {
  return (
   <section id='about'>
<div className="wrapper">
  <div className="section-header">
    <h1 className="heading-1" data-aos='fade-left'>
      <span className="gradient-text">
        About Me
      </span>
    </h1>
    <h4 className="sub-title muted" data-aos='fade-left'>
    My journey in the world of development began with a strong foundation in JavaScript,which has since expanded to encompass a wide array of technologies.I'm adept at building responsive and dynamic user interfaces using React,ensuring an engaging and seamless user experience.On the back-end,I've honed my skills in crafting robust APIs using Node.js and Express.js,while also managing data using MongoDB,thus creating a complete and efficient data flow.
    </h4>
  </div>
  <div className="group">
  
  {
  WhyChooseMe.map((list, index) => (
    <div className="flex-center group-item" data-aos='fade-right' key={index}>
      <div className="flex-center icon-wrapper">
        {list.icon}
      </div>
      <h4 className="title">{list.title}</h4>
    </div>
  ))
}

  </div>
</div>
   </section>
  )
}

export default About