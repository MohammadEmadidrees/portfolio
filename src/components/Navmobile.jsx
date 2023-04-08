import React, { useState } from 'react'
import { navigation, Navigation } from '../data'
import {XIcon} from "@heroicons/react/outline"
import {MenuAlt3Icon} from "@heroicons/react/outline"
import Socials from './Socials'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
const Navmobile = () => {
  const[isOpen,setIsOpen]=useState(false)
  const circleVariants={
    hidden:{
      scale:0
    },
    visible:{
      scale:180,
      transition:{
        type:'spring',
        stiffness:160,
        damping:60
      }
    }
  }
  const ulVariants={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.1,
      },
    },
  };
  return (
    <nav className='relative'>

      {/* menu icon  */}
      <div onClick={()=> setIsOpen(true)} className='cursor-pointer w-max relative left-[20%] text-[#1F260A]'>
        
        <MenuAlt3Icon className="h-8 "> </MenuAlt3Icon>
        </div>
        
        {/* circle shit */}

        <motion.div variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible': 'hidden'}
        className='w-4  h-4 rounded-full bg fixed top-0 right-0' ></motion.div>
        

        {/* menu things  */}
          
        <motion.ul variants={ulVariants} initial='hidden' 
        animate={isOpen? 'visible':""} className={`${isOpen? "right-0":'-right-full'} fixed top-0 bottom-0 w-screen
        flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
        >

          {/* close icon  */}

          <div className='cursor-pointer absolute top-8 right-9' onClick={()=>setIsOpen(false)}>
          <XIcon className='w-full h-8'></XIcon>
          </div>
          {navigation.map((item,index)=>{
            return(
              <li key={index} className=' mb-8 relative top-[0px] '>
                <Link>{item.name}</Link>
              </li>
              );
            
          })}
        </motion.ul>
      </nav>
  )
}

export default Navmobile