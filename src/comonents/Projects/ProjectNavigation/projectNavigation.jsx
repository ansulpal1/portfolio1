import React, { useState, useRef,useEffect } from 'react';
import './ProjectNavigation.css';
import Aos from 'aos';
const ProjectNavigation = ({ tabs, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset,setOffset] =useState(0);
   const [indicatorWidth,setIndicatorWidth] = useState(0);
  const sumArray = (arr)=>{
     let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
     }
     return sum;
   }
  const itemEls = useRef(new Array());
   useEffect(()=>{
    Aos.refreshHard();
    const prevEl =itemEls.current.filter((_,index)=>index < activeIndex);
   setOffset(
        sumArray(prevEl.map(item=>item.offsetWidth))
    )
     setIndicatorWidth(itemEls.current[activeIndex].offsetWidth)
  }, [activeIndex])

  return (
<nav className='project-navigation'>
  {tabs.map((tab, index) => (
        <button
        ref={(el) => itemEls.current[index] = el}
     onClick={() => {
           setActiveIndex(index);
            onChange(tab);
            Aos.refreshHard();
          }}
          key={index}
         
        >
          {tab}
        </button>
      ))}
      <span className="indicator"
       style={{left:`${offset}px`, width:`${indicatorWidth}px`}}
       >

      </span>
     </nav>
   
  );
};

export default ProjectNavigation;
