import Navbar from "./comonents/Navbar"
import Hero from "./comonents/Hero/hero"
import About from "./comonents/About/about"
import Skills from "./comonents/Skill/skill"
import Services from "./comonents/Services/services"
import Projects from "./comonents/Projects/projects"
import Testimonials from "./comonents/Testimonials/testimonials"
import Contact from "./comonents/Contact/contact"
import Footer from "./comonents/Footer/footer"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"




function App() {
useEffect(()=>{
  Aos.init({
    duration: 500,
    easing:"ease-in-sine",
  })
},[])
  return (

    <>
  
  <Navbar />
     <Hero />
    
     <About />
     <Skills />
     {/* <Services/> */}
     <Projects/>
     {/* <Testimonials/> */}
     <Contact/>
     <Footer/>
    
  
     
     </>
    
  )
}

export default App
