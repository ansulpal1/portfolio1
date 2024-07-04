import React from 'react'
import "./SocialHandels.css"
import { socialHandles } from '../../sources'

const SocialHandels = () => {
    return (
        <div className='handles-container'>
           
           {
            socialHandles.map((handle, index) =>(
                <a key={index} href={handle.link} target="_blank" className='flex-center icon-wrapper' >
                    {handle.icon}
                </a>
            )
            )
           }
        </div>
    )
}

export default SocialHandels