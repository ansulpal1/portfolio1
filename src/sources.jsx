import Bsn1 from "./assets/bsn1.png"
import Event1 from "./assets/event1.png"
import picyard1 from "./assets/picyard1.png"
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode, FaLinkedin,FaGithub} from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import { MdMobileFriendly } from "react-icons/md";
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import ComingSoon from "./comonents/ComingSoon/comingSoon";

export const tabs = [
  {name:"Home",id:'hero'},
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    // {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
   
    // {name:"Testimonials",id:'testimonials'},
]

export const WhyChooseMe = [
  {
    title:"Unmatched Local Expertise",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Comprehensive Market Analysise",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Dedicated Client Support",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Innovative Marketing Strategies",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"UI/UX Design",
    icon:<FaPaintBrush/>,
    description:`I specialize in user-centered UI/UX design, creating intuitive and visually appealing interfaces. My process includes understanding user needs, iterative testing, and seamless functionality across devices. With experience in diverse industries, I tailor solutions to exceed client goals, ensuring engaging, effective, and satisfying user experiences.`,
  },
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`I specialize in web development, creating responsive, high-performance websites and applications. My expertise includes front-end and back-end development, utilizing technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js. I ensure clean, maintainable code and prioritize user experience, security, and scalability to meet and exceed client goals.`,
  },
  {
    name:"App Development",
    icon:<MdMobileFriendly />,
    description:`
I specialize in app development using React Native, creating cross-platform mobile applications that are efficient and user-friendly. With expertise in JavaScript and React Native, I build apps that deliver a seamless experience on both iOS and Android. I prioritize performance, clean code, and intuitive design to meet and exceed client expectations.`,
  },
  
]


export const skills = [
  {
      title:"UI/UX",
      data:[
          {
              skill:"Figma",
              level:"Intermediate",
          },
          
          {
              skill:"Canva",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Frontend Development",
      data:[
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
           {
               skill:"Tailwind",
               level:"Intermediate",
          },
          {
              skill:"Bootstrap",
              level:"Experienced",
          },
          {
              skill:"React",
              level:"Intermediate",
          },
          {
              skill:"React Native",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Backend Development",
      data:[
          {
              skill:"Node JS",
              level:"Intermediate",
          },
          {
              skill:"MangoDB",
              level:"Intermediate",
          },
          
          // {
          //     skill:"Python",
          //     level:"Intermediate",
          // },
          {
              skill:"MySQL",
              level:"Intermediate",
          },
          {
              skill:"C++",
              level:"Intermediate",
          },
          {
              skill:"Java",
              level:"Intermediate",
          },
          {
              skill:"Git/Github",
              level:"Intermediate",
          },
      ]
  },
]


export const projects = [
  { 
    id:1,
    title: 'Blood Source Navigator',
    image: Bsn1,
    category:"UI/UX",
    description: `Our platform bridges hospitals with blood donors, facilitating rapid, reliable connections for life-saving donations. We streamline the donor search process, ensuring hospitals receive timely support, enhancing patient care and outcomes through a seamless, user-friendly interface.`,
    demoLink: "https://github.com/ansulpal1/BloodSourceNavigoter",
    stack:[
     
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:2,
    title: 'E-Commerce Application',
    image: 'https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg',
    category:"Web",
    description:`Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://github.com/ansulpal1/Apnastore",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:3,
    title: 'E-Commerce Application-Pikyard',
    image: picyard1,
    category:"Web",
    description:`Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://github.com/ansulpal1/pikyard",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  {
    id:4,
    title: 'Event Management System',
    image: Event1,
    category:"Web",
    description:`Our college society's event management system simplifies organizing and attending events. It streamlines event planning, registration, and communication, ensuring efficient coordination. With features like scheduling, reminders, and participant tracking, it enhances the event experience for both organizers and attendees, making every event successful and memorable`,
    demoLink: "https://github.com/ansulpal1/minor-project",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"MongoDB",
        icon: <SiMongodb/>,
        iconColor:"limegreen",
      },
    ]
  },
  
 
]

export const clients = [
  {
    image:"",
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laboris`
  },
  {
    image:"",
    name:'Richael Linda',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:"",
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:"",
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:"",
    name:'Ndubisi John',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },

];

export const contactOptions = [
  {
    title:"Email",
    value:"palansul1@gmail.com",
    icon:<MdMarkEmailRead />,
  },
  {
    title:"Phone Number",
    value:"+91 8968118060",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Ludhiana,Punjab,India",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"https://www.instagram.com/i_ansul_pal/",
    },
    {
      name:"Linkdin",
      icon:< FaLinkedin/>,
      link:"https://www.linkedin.com/in/ansul-pal/",
    },
    {
      name:"Twitter",
      icon:<FaXTwitter/>,
      link:"https://www.instagram.com/i_ansul_pal/",
    },
    {
      name:"Github",
      icon:<FaGithub/>,
      link:"https://github.com/ansulpal1",
    },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        // {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"}
       
      ]
    },
]

    