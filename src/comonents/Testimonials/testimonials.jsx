import React,{useRef  } from 'react'
import "./Testimonial.css"
import Slider from 'react-slick'
import { clients } from '../../sources'
import { FaStar } from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
const Testimonials = () => {
  const ref =useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    pauseOnHover:true,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive:[
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section id='testimonials'>
<div className="wrapper">
  <div className="section-header">
    <h1 className="heading-1" data-aos='fade-left' >
      <span className="gradient-text">Testimonials</span>
    </h1>
    <h4 className="sub-title" data-aos='fade-left' data-aos-deley="400"  >What my clients are saying</h4>
  </div>
  <div data-aos='fade-right'>
  <Slider {...settings} className='testimonials-container' ref={ref}>
    {
clients.map((list,index)=>(
  <React.Fragment key={index}>
    <div className="flex">
      <div className="profile">
        <img src={list.image} alt={list.name} className="profile-img" />
      </div>
      <div className="details">
        <h3 className="name">{list.name}</h3>
        <small className="muted">CEO</small>
      </div>
      
    </div>
    <p className="p muted content">{list.review}</p>
      <div className="stars-container">
       < FaStar/>
       < FaStar/>
       < FaStar/>
       < FaStar/>
       < FaStar/>
      </div>
  </React.Fragment>
))
    }
  </Slider>
  </div>
  
  <div className="flex-center buttons-container"data-aos='fade-left' >
    <button className="flex-center btn"
    onClick={()=>ref.current.slickPrev()}>
      <FaLongArrowAltLeft/>
    </button>
    <button className="flex-center btn"
    onClick={()=>ref.current.slickNext()}>
      <FaLongArrowAltRight/>
    </button>
  </div>
</div>
    </section>
  )
}

export default Testimonials