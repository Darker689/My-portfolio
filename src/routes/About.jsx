import React from 'react'
// Components
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Hero1 from '../components/hero1/Hero1'
import About1 from '../components/about1/About1'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading='ABOUT' text='Im a friendly Front-End Developer'/>\
      <About1/>
      <Footer/>
    </div>
  )
}

export default About