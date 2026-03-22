import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import AboutUs from './components/aboutUS'
import Carousel from './components/carousel'

function App() {
  return(
  <div>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Carousel/>
    <Footer/>
  </div>
  )
}
export default App
