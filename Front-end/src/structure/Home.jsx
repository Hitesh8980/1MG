import React from 'react'
import ImageSlider from './Imageslider'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Body from './body/Body'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <ImageSlider/>
        <Body/>
        {/* <Footer/> */}
      
    </div>
  )
}

export default Home
