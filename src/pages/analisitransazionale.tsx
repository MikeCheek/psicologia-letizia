import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from '../components/molecules/Footer'
import TransAnalysis from '../components/molecules/TransAnalysis'
import Hero from '../components/molecules/Hero'
import NavBar from '../components/molecules/NavBar'
import { StaticImage } from 'gatsby-plugin-image'

const AnalisiTransazionale = () => {
  const image = (
    <StaticImage
      src="../images/studio/FOTO 3.jpeg"
      alt="Studio"
      quality={100}
      placeholder="blurred"
      objectPosition="bottom center"
      layout="fullWidth"
      className="w-full h-[90vh] md:h-screen object-cover"
    />
  )

  return (
    <ParallaxProvider>
      <NavBar />
      <Hero title="Analisi Transazionale" image={image} darker />
      <TransAnalysis />
      <Footer />
    </ParallaxProvider>
  )
}

export default AnalisiTransazionale