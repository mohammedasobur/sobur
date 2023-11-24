import React from 'react'
import './portfolio.css'
import img01 from '../../asserts/images_demo/img01.jpg'
import img02 from '../../asserts/images_demo/img.png'
import img04 from '../../asserts/images_demo/img55.png'
import img05 from '../../asserts/images_demo/img04.jpg'
import img06 from '../../asserts/images_demo/img02.jpg'
import img07 from '../../asserts/images_demo/img06.jpg'

const data = [
  {
    id:1,
    image:img01,
    title:'Tuma-lana Cleaner',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:2,
    image:img02,
    title:'GlowGarden',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:5,
    image:img05,
    title:'Callbiz',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:6,
    image:img06,
    title:'GoPro Academy',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:4,
    image:img07,
    title:'Tumalana',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:3,
    image:img04,
    title:'Infinet Wallet',
    github:'https://github.com',
    demo:'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo }) => {
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} srcset="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank' rel='noreferrer'> Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
          )
        })
       }
        
      </div>
    </section>
  )
}

export default Portfolio