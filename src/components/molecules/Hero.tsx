import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { ContactsJobTitle, ContactsName } from '../../utilities/siteInfo'

const Hero = ({ title, image, darker = false, notFound = false }: { title?: string, image?: JSX.Element, darker?: boolean, notFound?: boolean }) => {

  return (
    <main className="relative w-full flex items-center justify-center bg-primary text-white">
      <div className="relative w-full h-[90vh] md:h-screen flex items-center justify-center flex-col overflow-hidden">
        <Parallax speed={-200} className="w-full h-[90vh] md:h-screen">
          {image}

          <div
            className={`absolute left-0 top-0 w-full h-full z-10 pointer-events-none ${darker ? 'opacity-40' : 'opacity-30'}`}
            style={{
              background: 'linear-gradient(to bottom, rgb(20 157 163), transparent 80%)',
            }}
          />
        </Parallax>
        <div className="absolute z-20 text-center -mt-20 md:-mt-10 flex flex-col items-center justify-center h-full" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
          <h1 className="md:text-[4rem] text-[3rem] font-bold z-20 text-center my-20">
            {title ?? "Studio di Psicologia Clinica"}
          </h1>
          {notFound ?
            <button className="text-2xl mt-4 z-20 text-center px-6 py-3 bg-lightBlue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <a href="/" title="Torna alla homepage">Torna alla home</a>
            </button>
            : (
              <h2 className="text-[1.5rem] md:text-[2.9rem] mt-4 z-20 text-center leading-tight font-serif italic">
                {ContactsName} <br />
                <span className='text-[1.3rem] md:text-[2.8rem]'>{ContactsJobTitle}</span>
              </h2>
            )}
        </div>
      </div>

    </main>
  )
}

export default Hero