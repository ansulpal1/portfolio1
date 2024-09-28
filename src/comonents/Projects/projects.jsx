import React,{useEffect, useState} from 'react'
import "./Project.css"
import { projects } from '../../sources'
import ProjectCard from './ProjectCard/projectCard'
import ProjectNavigation from './ProjectNavigation/projectNavigation'
const Projects = () => {
  const [activeProjects,setActiveProjects] = useState(projects);
  const [load,setLoad]=useState(false);

useEffect(()=>{
  setLoad(true);
  setTimeout(()=>{
    setLoad(false);
  },600)
},[activeProjects])

  const getTabs = ()=>{
    const tabs = ["All"];
    projects.map((item)=>{
      if(!tabs.includes(item.category)){
        tabs.push(item.category);
      }
    })
    return tabs;
  }
  const setProjects =(value) =>{
    if(value === "All"){
      return setActiveProjects(projects);
    }
    const new_projects = projects.filter(item =>item.category === value);
    setActiveProjects(new_projects);
  }
  return (
    <section id='projects'data-aos='fade-right'>
      <div className="wrapper">
      <div className="section-header">
        <h1 className="heading-1">
          <span className="gradient-text">Featured Projects</span>
        </h1>
        
      </div>
      <ProjectNavigation tabs={getTabs()} onChange={setProjects}/>
      <div className="projects-container">
        {
activeProjects.map((project,index) => (
<ProjectCard
{...project}


key={index}
className={ load ? 'Loading':''}
/>
))
        }
      </div>

      </div>
    </section>
  )
}

export default Projects