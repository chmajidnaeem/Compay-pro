import React from 'react'
import Navbar from '../components/Navbar'
import ContactPage from '../components/ContactComp'
import Footer from '../components/Footer'
import ServiceHero from '../components/ServiceHero'
import OurServices from '../components/OurServices'

const Contact =() => {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <OurServices />
      <Footer />
    </div>
  )
}

export default Contact
