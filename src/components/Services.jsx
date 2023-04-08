import React from 'react'
import { services } from '../data'
const Services = () => {
  return (
    <section id="services" className='section bg mt-3'>
    <div className="container mx-auto">
    <div className="flex flex-col items-center text-center">
        <h2 className='section-title before:content-services relative before:absolute before:opacity-40
        before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>What i do for Clients's</h2>
        <p className='subtitle text-zinc-50'>I can design a beautiful eye-catching front-end for my clients which are responsible for all devices.
        </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        {services.map((service,index)=>{
            const {icon,name,description}=service;
            return <div className='bg-white p-6 rounded-2xl' key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24
                text-[28px] ">{icon}</div>
                <h4 className='text-xl font-medium mb-2 text-black'>{name}</h4>
                <p className="text-black">{description}</p>
            </div>
        })}
    </div>
    </div>
    </section>
  )
}

export default Services