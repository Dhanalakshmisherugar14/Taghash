import { useState } from 'react'  
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trackdeadline from './components/Trackdeadline'
import LearnCompliance from './components/LearnCompliance'
import AccessibilityControlCentre from './components/AccessibilityControlCentre'
import Resources from './components/Resources'
import AccessibilityTerms from './components/AccessibilityTerms'
import AccessibleCompliant from './components/AccessibleCompliant'  
import Footer from './components/Footer'

import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Trackdeadline/>
      <LearnCompliance/>
      <AccessibilityControlCentre/>
      <Resources/>
      <AccessibilityTerms/>
      <AccessibleCompliant/>
      <Footer/>
    </>
  )
}

export default App
