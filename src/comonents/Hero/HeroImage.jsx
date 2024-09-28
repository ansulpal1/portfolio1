import React from 'react';
import "./Herom.css";
import ansul from "../../assets/Profile picture.png"
import SocialHandels from '../../Commons/SocialHandels/socialHandels'
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const HeroImage = () => {
  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'UI/UX Designer','React Developer','Java Developer'],
    loop: {}

  })
  return (
    <>
      <div className='main-m'>
        <div className="wrapper-m">
          <div className="img-area-m">
            <div className="inner-area-m">
              <img src={ansul} alt />
            </div>
          </div>
          <div className="icon arrow"><i className="fas fa-arrow-left" /></div>
          <div className="icon dots"><i className="fas fa-ellipsis-v" /></div>
          <div className="name-m">Ansul Pal</div>
          <div className="about-m  ">
            <span className='gradient-text'>{text}</span>
            <span> <Cursor/></span> 
             </div>
          
          <div className="social-icons-m">

            <SocialHandels />
          </div>
          <div className="buttons-m">
            <button><Link to='contact' smooth={true} > Message</Link></button>
            <button>Subscribe</button>
          </div>
          <div className="social-share-m">
            <div className="row-m">
              <i className="far fa-heart" />
              <i className="icon-2 fas fa-heart" />
              <span>1.4k</span>
            </div>
            <div className="row-m">
              <i className="far fa-comment" />
              <i className="icon-2 fas fa-comment" />
              <span>4.3k</span>
            </div>
            <div className="row-m">
              <i className="fas fa-share" />
              <span>1k</span>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default HeroImage