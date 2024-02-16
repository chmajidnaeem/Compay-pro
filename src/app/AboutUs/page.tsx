import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutPara from '../components/AboutPara'
import News from '../components/News'

const page = () => {
  return (
    <div>
     
      <AboutHero />
      <AboutPara/>
      <News />
      
    </div>
  )
}

export default page
