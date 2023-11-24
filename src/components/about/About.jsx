import React from 'react'
import './about.css'
import M from '../../asserts/mm.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={M} alt="Abdul-Sobur" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>

            </article>
            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>60+ worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ completed </small>

            </article>
          </div>
          <p>
            I'm a creative and forward-thinking developer able to create cutting-edge websites and 
            applications for high profile clients with challenging demands and visions.
             Skilled analytical problem solver with top-notch organizational, scheduling and code verification skills. 
            Expertise in Figma, Material UI, JavaScript(react) and PHP scripting
          </p>
          <a href="#contact" className='btn btn-primary'> Chat Me</a>

        </div>
      </div>

    </section>
  )
}

export default About