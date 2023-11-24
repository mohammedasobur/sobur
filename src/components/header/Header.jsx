import React from 'react'
import './header.css'
import Btnn from './Btnn'
import M from '../../asserts/m.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Abdul-Sobur Sibdoo</h1>
        <h5 className="text-light"> Software Developer</h5>
        <Btnn />
        <HeaderSocials />

        <div className="me">
          <img src={M} alt="myself" />
        </div>

        <a href="#contact" className='scroll__down'> Indegnious Expert </a>
      </div>
    </header>
  )
}

export default Header