import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = props => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mmkkszc', 'template_ifjl2za', form.current, 'R8_sgqyu-2AONTA8Q')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };    
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4> WhatsApp</h4>
            <h5> +233 54 397 3323</h5>
            <a href="https://wa.me/+233543973323" target="_blank"> Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4> Email</h4>
            <h5>abdul-sobur@infinetwallet.com</h5>
            <a href="mailto:abdul-sobur@infinetwallet.com" target="_blank"> Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className='contact__option-icon' />
            <h4> Telegram</h4>
            <h5>Med A Sobur</h5>
            <a href="https://t.me/A_sobur" target="_blank"> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Full Name' required />
          <input type="email" name='email' placeholder='Enter Email' required />
          <textarea name="message" rows="7" placeholder='Enter message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}



export default Contact