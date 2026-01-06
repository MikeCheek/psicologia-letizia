import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'
import Book from '../atoms/Book'

const AboutMe = () => {
  return (
    <Section id="sudime">
      <h3 className="text-2xl md:text-4xl font-bold mb-12 text-purple uppercase">
        Su di me</h3>
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-evenly gap-8">
        <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left">
          Sono <Highlight>Specialista in Psicoterapia</Highlight> a indirizzo Analitico Transazionale.
          <br /><br />

          Ho conseguito la <Highlight>laurea</Highlight> magistrale in <Highlight>Psicologia Clinica</Highlight> con lode presso l'Università degli Studi di Padova e, dopo l'abilitazione alla professione, la <Highlight>Specializzazione in Psicoterapia</Highlight> col massimo dei voti presso la Scuola di Specializzazione PerFormat, affiliata all' European Association Transactional Analysis (EATA).
          <br /><br />

          Nel corso della mia formazione universitaria e specialistica ho maturato significativa <Highlight>esperienza clinica</Highlight> presso i <Highlight>Servizi di Psicologia</Highlight>, occupandomi di di valutazione e trattamento anche in contesti ad elevata complessità.
          <br /><br />

          Ho lavorato presso l’Ospedale ARNAS Garibaldi, prestando servizio di consulenza specialistica nel trattamento dell'obesità, dei disturbi alimentari e della gestione psicologica di patologie croniche. Parallelamente, ho preso parte a <Highlight>progetti di ricerca in Psicologia</Highlight>, coniugando la pratica clinica con l’interesse per la ricerca scientifica.
          <br /><br />

          La scelta di dedicarmi alla psicologia nasce da un interesse profondo per il funzionamento della mente e per i processi attraverso cui l’esperienza umana si struttura, si trasforma e talvolta entra in sofferenza. Sono diventata psicoterapeuta per mettere questa comprensione al servizio della cura, attraverso un lavoro capace di incidere positivamente sulla vita delle persone.
          <br /><br />

          Mi dedico alla pratica psicoterapeutica e alla psicodiagnostica clinica, occupandomi di <Highlight>prevenzione, diagnosi e terapia</Highlight>.
          <br /><br />

          Credo fortemente nella <Highlight>relazione terapeutica</Highlight> e baso quindi il mio lavoro sulla creazione di un <Highlight>clima di fiducia e di alleanza</Highlight>, mettendo la massima cura e dedizione per il benessere dei miei pazienti.

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