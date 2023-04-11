import React ,{useState,useEffect} from 'react'
import Womanimg from "../assets/img/banner-woman2.webp"
import { animateScroll as scroll } from 'react-scroll'


const Hero = () => 
{
    
  
  
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 
    lg:py-0 overflow-hidden'>
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8">
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className='text-lg text-[#1F260A] mb-[22px]'>Hey, I am Emad Idrees</p>
              <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl
              lg:leading-[1.2] font-bold md:tracking-[-2px] text-[#1F260A]' >I Build & Design <br/> Web Interfaces.</h1>
              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[-480px]  text-center lg:text-left text-lg text-[#1F260A] mb-[22px]
              '>Design that speaks, code that does the work.
              </p>
              <a href='#contact'><button className='btn rounded-full btn-md bg-[#1F260A] hover:bg-white hover:text-cyan-800  
              md:btn-lg transition-all'>Work With Me</button></a>
             
            </div>
            {/* <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
              <img src={Womanimg} alt=''/>
            </div> */}
          </div>
        </div>
    </section>
  )
}

export default Hero