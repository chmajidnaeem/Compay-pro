import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import AboutPara from '../components/AboutPara'
import BlogHero from '../components/BlogHero'
import Blogpa from '../components/Blogpa'
import BlogPhoto from '../components/BlogPhoto'
import CardsBlog from '../components/CardsBlog'

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogHero/>
      <Blogpa/>
      <BlogPhoto />
      <CardsBlog />
      <Footer />
    </div>
  )
}

export default page
