import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Footer from './components/footer'

function App() {
  return(
  <div>
    <Navbar/>
    <Hero/>
    <Footer/>
  </div>
  )
}
export default App
