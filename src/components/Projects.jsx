import React, {useState,useEffect} from 'react'
import {projectsData} from "../data"
import {projectsNav} from "../data"
import Project from "./Project"
const Projects = () => {
    const[item,setItem]=useState({name:'all'});
    const[projects,setProjects]=useState([])
    const[active,setActive]=useState(0);
    useEffect(()=>
    {if(item.name==='all')
    {
        setProjects(projectsData);
    }
    else
    {
        const newProjects= projectsData.filter(
            (projects)=>{
                return projects.category.toLowerCase()===
                item.name;
            }
        )
        setProjects(newProjects)
    }
    },[item])
    const handleClick=(e,index)=>
    {
        // setItem({ name: e.target.textContext.toString()});
        setActive(index)
    }
  return (
    <div>
        {/* <nav className='mb-12 max-w-xl mx-auto'>
            <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
                {projectsNav.map((item,index)=> {
                    return <li onClick={(e)=>{handleClick(e,index);}}
                    className={`${active === index ? 'active' : ''
                    } cursor-pointer capitalize m-4`}
                    key={index}>{item.name}</li>
                })}
            </ul>
        </nav> */}
        <section className='grid lg:grid-cols-2 gap-y-12 lg:gap-x-8 lg:gap-y-8 '>
                {projects.map((item)=>{
                    return <Project item={item} key={item.id} />
                })}
        </section>
    </div>
  )
}

export default Projects;