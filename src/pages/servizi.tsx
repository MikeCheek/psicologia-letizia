import React from "react"
import type { PageProps } from "gatsby"
import NavBar from "../components/molecules/NavBar"
import Footer from "../components/molecules/Footer"
import Hero from "../components/molecules/Hero"
import { ParallaxProvider } from "react-scroll-parallax"
import Services from "../components/molecules/Services"
import Seo from "../components/atoms/Seo"

const ServicesPage: React.FC<PageProps> = () => {

  return (<ParallaxProvider>
    <NavBar />
    <Hero title="Servizi" />
    <Services />
    <Footer />
  </ParallaxProvider>
  )
}

export default ServicesPage

export const Head = () => {

  return (
    <Seo
      title={"Psicologia Letizia Puglisi"}
      pathname="/"
      description={""}
      structuredData

    />
  );
};