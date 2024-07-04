import React from 'react'
import "./Services.css"
import { services} from "../../sources"
import { Link } from 'react-scroll'
const Services = () => {
  return (
    <section id='services'>
     <div className="wrapper">

     <div className="section-header">
        <h1 className='heading-1' data-aos='fade-right'>
          <span className="gradient-text">
            Services
          </span>
        </h1>
        <h4 className="sub-title muted"data-aos='fade-left'>
        I provide comprehensive services in web development, UI/UX design, and app development. I create responsive and high-performance websites, focusing on user-centric design for optimal usability. My expertise in React Native enables me to develop cross-platform mobile apps that deliver seamless experiences on both iOS and Android. I prioritize clean code, intuitive interfaces, and user satisfaction, ensuring all solutions meet and exceed client expectations.
        </h4>
      </div>
      <div className="services-container">
{
  services.map((service, index) => (
    <div className="service"data-aos='fade-left' key={index}>
      <div className="flex-center icon-wrapper">
        {service.icon}
      </div>
      <div className="details">
        <h3 className="name gradient-text">{service.name}</h3>
        <p className="muted">{
          service.description}</p>
      </div>
      <div className="buttons-wrapper">
      <Link className="btn">Read More</Link>
      <Link to='contact' smooth={true} className='btn'>Get Started</Link>
      </div>

    </div>
  )
  )
}
      </div>

     </div>

    </section>
  )
}

export default Services