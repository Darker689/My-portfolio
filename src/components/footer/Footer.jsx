import React from 'react'
// CSS
import './footer.css'
// Icon
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="left">
                    <div className="location">
                        <i className='icon mar'><FaHome /></i>
                        <div>
                            <p>123 Housing Society</p>
                            <p>Uzbekistan</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <i className='icon mar'><FaPhone /></i>
                            +998 91 205 16 88
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <i className='icon mar'><FaMailBulk /></i>
                            muhammadjon@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me MuhammadJON. CEO & Founder of Tech2etc. I enjoy discussing  new projects and design challanges.</p>
                    <div className="social">
                        <i className='icon'><FaFacebook className='marg'/></i>
                        <i className='icon'><FaTwitter className='marg'/></i>
                        <i className='icon'><FaLinkedin className='marg'/></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer