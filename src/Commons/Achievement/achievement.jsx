import React,{useState,useEffect} from 'react'
import "./Achievement.css"
import Odometer from "react-odometerjs"
const Achievement = () => {
    const [experience,setExperience] = useState(0);
    const [client,setClient] = useState(0);
    const [project,setProject] = useState(0);
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setExperience(1);
            setClient(2);
            setProject(10);
        },3000)
        return ()=>clearTimeout(timeOutId);
    } ,[])
  return (
    <div className="achievement-container">
        <div className="card">
            <div className="flex-center">
                <Odometer value={experience} className='title' />
                <h1 className="title">+</h1>

            </div>
            <p className="muted name">
                Years Experience
            </p>
        </div>
        <div className="card">
            <div className="flex-center">
                <Odometer value={client} className='title' />
                <h1 className="title">+</h1>

            </div>
            <p className="muted name">
                Happy Client
            </p>
        </div>
        <div className="card">
            <div className="flex-center">
                <Odometer value={project} className='title' />
                <h1 className="title">+</h1>

            </div>
            <p className="muted name">
                Completed Projects
            </p>
        </div>
    </div>
  )
}

export default Achievement