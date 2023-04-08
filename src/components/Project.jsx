import React from 'react'

// import { projectsData } from '../data'

const Project = ({item}) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className='mb-8'>


      {/* {projectsData.map((item)=>{ */}
                 <img className='rounded-2xl' src={item.image} alt="Project Images"/>
            {/* })} */}

        
      </div>
      <p className='capitalize text-[#1F260A] text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3 text-[#1F260A]'>{item.name}</h3>
    </div>
  )
}

export default Project;