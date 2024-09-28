import React from 'react'
import "./ProjectCard.css"
import { AiOutlineShareAlt } from 'react-icons/ai'
import ComingSoonModal from '../../ComingSoon/comingSoon'

const ProjectCard = ({
    title,
    description,
    image,
    stack,
    demoLink,
    classname,

}) => {
  return (
    <div className={`project-card ${classname ? classname : ''}`}>
<div className="picture">
    <img src={image} alt={title}  />
</div>
<div className="details">
    <div className="top">
        <h2 className="title">{title}</h2>
    </div>
    <div className="middle">
        <p className="muted description">{description}</p>
    </div>
    <div className="bottom">
        <div className="stack-container">
            <div className="stack-left">
                Stack
            </div>
        </div>
        <div className="stack-right">
            <div className="stack-box-container">
                {
                    stack.map((list, index) => (
<div className="stack-box" key={index}>
    <div className="stack-icon-container">
        <span className="flex-center stack-icon" style={{color:list.iconColor}}>
            {list.icon}
        </span>
        <span className="stack-name">{list.name}</span>
    </div>
</div>
                    ))
                }
            </div>
        </div>
    </div>
    <div className=" flex-center buttons-container">
       
        <div className="flex-center btn "> <ComingSoonModal/></div>
    </div>
</div>

    </div>
  )
}

export default ProjectCard