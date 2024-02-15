import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutPara from '../components/AboutPara'

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutPara/>
      <Footer />
    </div>
  )
}

export default page
