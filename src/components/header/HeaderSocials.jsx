import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {CgFigma} from 'react-icons/cg'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com/mohammed_a_sobur" target="_blank"> <BsLinkedin/></a>
        <a href="http://github.com" target="_blank"> <BsGithub/></a>
        <a href="http://dribble.com" target="_blank"> <CgFigma/></a>
    </div>
  )
}

export default HeaderSocials