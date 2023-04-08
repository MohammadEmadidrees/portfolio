import React from 'react'
import { social } from '../data'
const Footer = () => {
  return (
    <footer className='bg py-12 mt-3'>
        <div className='container mx-auto'>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div className="flex space-x-6 items-center justify-center">
                    {social.map((item,index)=>{
                        const{href,icon}=item
                        return <a className='text-accent text-base' href={href} target="_blank" key={index}>{icon}</a>
                    })}
                </div>
                <p className='text-zinc-50'>&copy; 2023 Emad Idrees All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer