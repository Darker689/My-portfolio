import React from 'react'
// Components
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero1 from '../components/hero1/Hero1'
import Form from '../components/form/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero1 heading='CONTACT' text='Lets have a chat'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact