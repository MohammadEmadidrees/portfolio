import { useEffect } from "react"
import { useState } from "react"
import React  from 'react'
// import Logo from "../assets/img/logo.svg"
import Nav from "./Nav"
import NavMobile from "./Navmobile"
import Socials from "./Socials"




const Header = () => {
 const [bg,setBg]=useState(false)
 useEffect(()=>
 {
  window.addEventListener("scroll",()=>
  {
    return window.scrollY >50 ? setBg(true):setBg(false)
  })

 })

  return (
    <header className={`${bg? "bg	h-20":'h-24'}flex items-center  fixed top-0 w-full z-10 transition-all 
    duration-300`}> 
    <div className="container mx-auto h-full flex items-center justify-between">
      <a href="#">
        {/* <img src={Logo}/> */}
      </a>
    <div className="hidden lg:block ">
      <Nav/>
    </div>
    <div className="hidden lg:block ">
      <Socials/>
    </div>
    <div className=" lg:hidden ">
      <NavMobile/>
    </div>
    </div>   
    </header>
    
  )
}

export default Header