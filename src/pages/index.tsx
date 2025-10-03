import React from "react"
import type { PageProps } from "gatsby"
import NavBar from "../components/molecules/NavBar"
import Footer from "../components/molecules/Footer"
import Hero from "../components/molecules/Hero"
import AboutMe from "../components/molecules/AboutMe"
import { ParallaxProvider } from "react-scroll-parallax"
import Services from "../components/molecules/Services"
import Approach from "../components/molecules/Approach"
import Seo from "../components/atoms/Seo"
import TransAnalysis from "../components/molecules/TransAnalysis"

const IndexPage: React.FC<PageProps> = () => {

  return (<ParallaxProvider>
    <NavBar />
    <Hero />
    <AboutMe />
    <TransAnalysis />
    <Services />
    <Approach />
    <Footer />
  </ParallaxProvider>
  )
}

export default IndexPage

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