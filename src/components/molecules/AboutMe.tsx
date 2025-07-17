import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'

const AboutMe = () => {
  return (
    <Section id="sudime">
      <h3 className="text-3xl font-bold mb-4 text-purple">Su di me</h3>
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-evenly gap-8">
        <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left">
          Sono Specialista Psicoterapeuta a Indirizzo Analitico Transazionale.
          <br /><br />

          Mi occupo di <Highlight>adolescenti, giovani adulti e adulti</Highlight>.
          Mi dedico alla pratica psicoterapeutica e alla psicodiagnostica clinica.
          <br /><br />

          Ho conseguito la Laurea Magistrale in Psicologia Clinica e l'abilitazione alla professione di Psicologo presso l'Università degli Studi di Padova.
          Ho successivamente conseguito la Specializzazione in Psicoterapia presso la Scuola di Specializzazione Performat, facente parte dell'European Association Transactional Analysis (EATA).
          <br /><br />

          Nel corso della mia formazione universitaria e specialistica ho frequentato i servizi di Psicologia ospedalieri e territoriali.
          Ho esperienza nel trattamento dei <Highlight>disturbi dell'alcolismo</Highlight>, delle <Highlight>dipendenze patologiche</Highlight> e degli <Highlight>Psicologi Clinici Ospedalieri</Highlight>, maturando specifiche competenze nel trattamento della sofferenza psichica legata a condizioni mediche.
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