import React from 'react'
// Components
import Footer from '../components/footer/Footer'
import Hero1 from '../components/hero1/Hero1'
import Navbar from '../components/navbar/Navbar'
import Price from '../components/price/Price'
import Work from '../components/work/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading='PROJECTS' text='Some of my most recent works'/>
      <Work/>
      <Price/>
      <Footer/> 
    </div>
  )
}

export default Project