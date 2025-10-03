import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'

const AboutMe = () => {
  return (
    <Section id="sudime">
      <h3 className="text-2xl md:text-4xl font-bold mb-12 text-purple uppercase">
        Su di me</h3>
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-evenly gap-8">
        <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left">
          Sono Specialista Psicoterapeuta a indirizzo Analitico Transazionale.
          <br />
          Mi dedico alla pratica psicoterapeutica e alla psicodiagnostica clinica.
          <br /><br />

          Ho conseguito la laurea magistrale in Psicologia Clinica presso l'Università degli Studi di Padova e l'abilitazione alla professione di Psicologo nello stesso Ateneo.
          <br /><br />

          Ho poi conseguito la Specializzazione in Psicoterapia presso la Scuola di Specializzazione <Highlight>PerFormat</Highlight>, facente parte dell'<Highlight>European Association Transactional Analysis (EATA)</Highlight>.
          <br /><br />

          Nel corso della mia formazione universitaria e specialistica ho maturato significativa esperienza presso i <Highlight>Servizi di Psicologia ospedalieri e territoriali (ASL)</Highlight>, occupandomi di diversi ambiti di intervento nel campo della salute mentale.
          <br /><br />

          Ho lavorato presso l’Ospedale <Highlight>ARNAS Garibaldi</Highlight>, prestando servizio di consulenza specialistica nel trattamento dell'<Highlight>obesità</Highlight>, dei <Highlight>disturbi alimentari</Highlight> e della <Highlight>gestione di patologie croniche</Highlight>. Sempre in contesti clinico-ospedalieri, mi sono occupata di <Highlight>ricerca in Psicologia</Highlight>, coniugando la pratica clinica con l’interesse per la ricerca scientifica.
        </div>
        <StaticImage
          src="../../images/letizia-puglisi.png"
          alt="Dott.ssa Letizia Puglisi"
          className="mt-6 object-cover"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
    </Section>
  )
}

export default AboutMe