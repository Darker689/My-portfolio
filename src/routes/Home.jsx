import React from 'react'
// Components
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Work from '../components/work/Work'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home