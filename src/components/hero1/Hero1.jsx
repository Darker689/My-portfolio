import React from 'react'
// CSS
import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className='hero1'>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Hero1