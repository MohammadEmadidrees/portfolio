import React from 'react'
import Image from "../assets/img/about.webp"

const About = () => {
  return (
    <section className='section bg '> 
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-24">
        <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt=''/>
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className="flex flex-col">
                <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3
                before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden
                before:lg:block text-[#1F260A]'>Emad Idrees</h2>
                <p className='mb-4 text-[#1F260A]'>Freelancer Web Developer</p>
                <hr className='mb-8 opacity-5'/>
                <p className='mb-8 text-[#1F260A]'>I have been working as a front-end developer for the last 3 months having strong command over 
                HTML, CSS, JavsScript, Bootstrap ,Tailwind. My work is fully responsive and all devices 
                compatible including desktops and real devices.</p>
            </div>
            <button className='btn btn rounded-full btn-md bg-[#1F260A] hover:bg-white hover:text-cyan-800 transition-all'>Contact Me</button>
        </div>
    </div>
    </div>
    </section>
  )
}

export default About