import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from '../components/molecules/Footer'
import TransAnalysis from '../components/molecules/TransAnalysis'
import Hero from '../components/molecules/Hero'
import NavBar from '../components/molecules/NavBar'

const AnalisiTransazionale = () => {
  return (
    <ParallaxProvider>
      <NavBar />
      <Hero title="Analisi Transazionale" />
      <TransAnalysis />
      <Footer />
    </ParallaxProvider>
  )
}

export default AnalisiTransazionale