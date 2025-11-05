import React from 'react'
import Section from '../organisms/Section'
import services from '../../utilities/servicesInfo'
import Book from '../atoms/Book'

const ShortServices: React.FC = () => {
  return (
    <Section id="servizi">
      <h3 className="text-2xl md:text-4xl font-bold mb-6 text-purple uppercase">Servizi</h3>

      <div className="w-full max-w-4xl py-10 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map((s, i) => {
            const isLastSingle = i === services.length - 1 && services.length % 2 === 1
            return (
              <a
                key={s.title}
                href={'/servizi#' + s.id}
                className={`group block overflow-hidden shadow-lg hover:shadow-xl  rounded-lg p-6 transform transition-transform duration-200 hover:scale-105 hover:shadow-transparentLightBlue ${isLastSingle ? 'sm:col-span-2 md:col-span-1 sm:justify-self-center md:justify-self-auto' : ''}`}
                aria-label={`Vai alla pagina servizi — ${s.title}`}
              >
                <div className="w-full">
                  <div className="flex-shrink-0 flex items-center justify-center mx-auto">
                    {s.image}
                  </div>

                  <p className="mt-6 text-center text-xl font-semibold transition-200 group-hover:text-lightBlue">
                    {s.title}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* <Book /> */}
    </Section>
  )
}

export default ShortServices
