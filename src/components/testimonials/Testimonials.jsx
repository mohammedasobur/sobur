import React from 'react'
import './testimonials.css'
import test1 from './../../asserts/images_demo/test1.png'
import test2 from './../../asserts/images_demo/test2.jpg'
import test3 from './../../asserts/images_demo/test3.jpg'
import test7 from './../../asserts/images_demo/test7.jpg'
import test5 from './../../asserts/images_demo/test5.jpg'


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [
  {
    image:test1,
    name:'Issahaku Sollahudeen',
    review:'Working with Abdul-Sobur was a game-changer for our company. His expertise in Web development and Graphic designs helped us build a robust and scalable web application that surpassed our expectations. He was proactive, communicated effectively, and delivered the project on time. I highly recommend him for any software development needs.'
  },
  {
    image:test7,
    name:'Abubakari A Wunpini',
    review:'Abdul-Sobur is an integral part of our development team.\n His technical skills and problem-solving  abilities are exceptional. He quickly grasp our project requirements and deliver high-quality code that improve the overall functionality and performance of our application. He is reliable, responsive, and a pleasure to work with.'
  },
  {
    image:test3,
    name:'Issahaku Mohammed Awal',
    review:'This Young mans contribution as a Front-end developer to our software project at Hon. Haruna Institute was extremely useful. His attention to detail and ability to write clean and efficient code ensured a smooth development process. He consistently met deadlines and went above and beyond to find innovative solutions to complex problems. We would gladly work with him again.'
  },
  {
    image:test5,
    name:'Abdul-Karim Hawa Wuntiti',
    review:'Abdul-Sobur expertise in software development played a significant role in the success of our mobile app. He understood our vision and translated it into a user-friendly and intuitive application. His strong communication skills and collaborative approach made the entire development process seamless. We highly recommend his services.'
  },
  {
    image:test2,
    name:'Suraju Inusah Iddrisu',
    review:'Abdul-Sobur exceeded our expectations as a software developer. He demonstrated deep knowledge of multiple programming languages and frameworks, which allowed him to tackle diverse projects with ease. His attention to detail and ability to optimize code for performance were commendable. We were impressed with his professionalism and would hire him again in a heartbeat.'
  }
  
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({image, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avator">
            <img src={image} alt={name} />
          </div>
          <h5 className='clients__name'> {name}</h5>
            <small className="clients__review"> {review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials