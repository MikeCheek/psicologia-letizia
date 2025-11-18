import React from "react"
import type { PageProps } from "gatsby"
import NavBar from "../components/molecules/NavBar"
import Footer from "../components/molecules/Footer"
import Hero from "../components/molecules/Hero"
import AboutMe from "../components/molecules/AboutMe"
import { ParallaxProvider } from "react-scroll-parallax"
import Approach from "../components/molecules/Approach"
import Seo from "../components/atoms/Seo"
import TransAnalysis from "../components/molecules/TransAnalysis"
import ShortServices from "../components/molecules/ShortServices"

const IndexPage: React.FC<PageProps> = () => {

  return (<ParallaxProvider>
    <NavBar />
    <Hero />
    <AboutMe />
    <ShortServices />
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