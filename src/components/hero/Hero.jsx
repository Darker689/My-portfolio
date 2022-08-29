import React from 'react'
// CSS
import './hero.css'
// IMG
import img from '../../assets/img1.jpg'
// Router
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="mask">
                <img src={img} alt="RS_HUB" className='into_img' />
            </div>
            <div className="content">
                <p>HI, I`M A DEVELOPER</p>
                <h1>React Developer</h1>
                <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn_light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero