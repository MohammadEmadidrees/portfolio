import React from 'react'
import { skills } from '../data'
export const Skills = () => {
  return (
    <section className='bg-white py-12'>
        <div className="container mx-auto">
            <div className='grid grid-cols-8 md:grid:flow-row'>
                {skills.map((skill,index)=>
                {
                    return <div className='flex item-center justify-center'key={index}>
                        <img src={skill.image} alt="Skills Images"/>
                 </div>
                    
                })}
            </div>
        </div>
    </section>
  )
}
