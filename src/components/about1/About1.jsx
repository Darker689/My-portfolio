import React from 'react'
// Link
import { Link } from 'react-router-dom'
// CSS
import './about1.css'
// IMG
import img from '../../assets/img3.jpg'
import img1 from '../../assets/img2.webp'


const About1 = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img_container">
                <div className="img_stack top">
                    <img src={img} alt="true" className='img'  />
                </div>
                <div className="img_stack bottom">
                    <img src={img1} alt="true" className='img'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About1