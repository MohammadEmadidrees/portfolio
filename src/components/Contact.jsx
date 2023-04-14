import { contact } from '../data'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toast from "./Ant"
import { message } from 'antd';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9p677zo', 'template_pfz2zx9', form.current, 'gGUAkF_em2w75eBcq')
      .then((result) => {
         console.log(result.text);
         setTimeout(()=>{
            message.success("Email Sent Successfully")
         },2000)
      }, (error) => {
         console.log(error.text);
         setTimeout(()=>{
            message.error("Email Not Sent Successfully")
         },2000)
      });
      e.target.reset();
};

  return (
    <div className='background'>
    <section className='section bg' id='contact'>
        <div className="container mx-auto ">
            <div className="flex flex-col items-center text-center">
                <h2 id="contact" className='section-title before:content:-contact relative 
                before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-[#1F260A]'>Contact Me</h2>
                {/* <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis cumque
                .</p> */}
            </div>
            <div className="flex flex-col lg:gap-x-8 lg:flex-row ">
                <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 ">
                    {contact.map((item,index)=>{
                        const{icon,title,subtitle,description}=item;
                        return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                            <div className=" rounded-sm w-14 h-14 flex items-start justify-center mt-2
                            mb-4 lg:mb-0 text-2xl">{icon}
                            </div>
                            
                            <div>
                                <h4 className='font-body text-xl mb-1 text-[#1F260A]'>{title}</h4>
                                <p className='mb-1 text-[#1F260A]'>{subtitle}</p>
                                <p className='text-[#1F260A] font normal'>{description}</p>
                            </div>
                        </div>
                   
                    })}
                </div>
            </div>
            <div className='formclass'>
            <form className='space-y-8  max-w-[780px] mt-4 w-[50rem]' ref={form} onSubmit={sendEmail}>
                    <div className='flex gap-8 mt-1  '>
                    <input className='input bg-white' required type="text" name='user_name' placeholder='Your name' />
                    <input className='input bg-white' required type="email" name='user_email' placeholder='Your email'/>
                    </div>
                    <textarea className='textarea bg-white' required name='message' placeholder='Your Message'></textarea>
                    <button className='btn rounded-full btn-md bg-[#1F260A] hover:bg-white hover:text-cyan-800'>Send Message</button>
            </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact