import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ToUse from './components/ToUse'
import Footer from './components/Footer'

function page() {
  return (
    <div className='flex flex-col w-full items-center justify-center overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <ToUse/>
      {/* <Feedback/> */}
      {/* <BlogLatest/> */}
      {/* <Subscribe/> */}
      {/* <AboutUs/> */}
      <Footer/>
    </div>
  )
}

export default page