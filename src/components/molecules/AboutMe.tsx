import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'
import Book from '../atoms/Book'
import { AboutMeText, AboutMeTitle } from '../../utilities/siteInfo'

const AboutMe = () => {
  return (
    <Section id="sudime" title={AboutMeTitle}>
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-evenly gap-8">
        <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left">
          {AboutMeText}
        </div>
        <StaticImage
          src="../../images/letizia-centered.jpg"
          alt="Dott.ssa Letizia Puglisi"
          className="mt-6 object-cover rounded-full shadow-xl"
          placeholder="blurred"
          objectPosition="center"
          layout="fixed"
          quality={100}
          width={300}
          height={300}
        />
      </div>
      <Book />
    </Section>
  )
}

export default AboutMe