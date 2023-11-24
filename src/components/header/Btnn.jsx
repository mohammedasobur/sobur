import React from 'react'
import Letter from '../../asserts/letter.docx'
const Btnn
 = () => {
  return (
    <div className='cta'>
        <a href={Letter} download className='btn' >Download CV</a>
        <a href='#contact' className='btn btn-primary'>Chat Me</a>

    </div>
  )
}

export default Btnn

