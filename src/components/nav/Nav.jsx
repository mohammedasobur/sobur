import React from 'react'
import './nav.css'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     
      <a href="#about" onClick={() => setActiveNav  ('#about')} className={activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav ('#experience')} className= {activeNav === '#experience' ? 'active' : ''}> <BsJournalBookmark/> </a>
      <a href="#" onClick={() => setActiveNav  ('#')} className={activeNav === '#' ? 'active' : ''}  > <AiOutlineHome/></a>
      <a href="#portfolio" onClick={() => setActiveNav  ('#portfolio')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine/></a>
      {/* <a href="#portfolio" onClick={() => setActiveNav  ('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>P</a>
      <a href="#testimonial" onClick={() => setActiveNav  ('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}>T</a> */}
      <a href="#contact" onClick={() => setActiveNav  ('#contact')} className={activeNav === '#contact' ? 'active' : ''} > <BiMessageSquareDots /></a>
    </nav>
  )
}

export default Nav