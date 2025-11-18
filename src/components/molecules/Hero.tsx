import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Hero = ({ title }: { title?: string }) => {
  return (
    <main className="relative w-full flex items-center justify-center bg-primary text-white">
      <div className="relative w-full h-screen flex items-center justify-center flex-col overflow-hidden">
        <Parallax speed={-200} className="w-full h-screen">
          <StaticImage
            src="../../images/studio.jpg"
            alt="Studio"
            quality={100}
            placeholder="blurred"
            layout="fullWidth"
            className="w-full h-screen object-cover brightness-[0.8]"
          />

          <div
            className="absolute left-0 top-0 w-full h-full z-10 pointer-events-none opacity-50"
            style={{
              background: 'linear-gradient(to bottom, rgb(20 157 163), transparent 80%)',
            }}
          />
        </Parallax>
        <div className="absolute z-20 text-center -mt-20 md:-mt-10" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          <h1 className="md:text-[4rem] text-[3rem] font-bold z-20 text-center">
            {title ?? "Studio di Psicologia Clinica"}
          </h1>
          <h2 className="text-[1.5rem] md:text-[3rem] mt-4 z-20 text-center">
            Dott.ssa Letizia Puglisi <br />
            Psicoterapeuta
          </h2>
        </div>
      </div>

    </main>
  )
}

export default Hero