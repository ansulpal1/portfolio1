import React from 'react'
import "./Footer.css"
import Logo from '../../Commons/Logo'
import SocialHandels from '../../Commons/SocialHandels/socialHandels'
import { footer } from '../../sources'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    
    <footer id='footer'>
      <div className="wrapper">
        <div className="column" data-aos='fade-right'>
<Logo/>
<SocialHandels/>
        </div>
        {
          footer.map((list,index)=>(
            <div className="column" data-aos='fade-right' key={index}>
              <h3 className="muted title">{list.title}</h3>
              {
                list.routes.map((route,i)=>(
                  <Link to={route.id || ""} smooth={true} className='route' key={index}>
                  {route.name}
                  </Link>
                ))
              }
            </div>
            
          ))
        }
      </div>
<div className=" flex-center copyright"data-aos='fade-left' >
  <h4>Copyright &copy; All right reserved -| 2024</h4>
  <p className="muted">
    Built with <span  style={{color:'red'}}>&hearts;</span> by Ansul pal

  </p>

</div>
    </footer>
  )
}

export default Footer