import React from 'react'
// CSS
import './form.css'

const Form = () => {
  return (
    <div className='form'>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea name="" id="" cols="30" rows="6" placeholder='Type Your Message Here'></textarea>
        <button className='btn'>Submit</button>
    </div>
  )
}

export default Form