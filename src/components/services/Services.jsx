import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2> Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Website Development: I can assist in creating custom websites tailored to your specific needs and preferences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Front-end Development: I can help with crafting engaging user interfaces using HTML, CSS, and JavaScript (react)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Back-end Development: I can assist in building the server-side logic and functionality of websites using programming languages like PHP, Node.js & Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> E-commerce Development: I can provide support in developing secure and feature-rich e-commerce websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Website Optimization and Performance: I can help optimize your website for speed, performance, and search engine rankings</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Website Maintenance and Support: I can offer assistance with ongoing website maintenance, including software updates</p>
            </li>
            </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'> 
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            </ul>
        </article>
      </div>

    </section>
  )
}

export default Services