import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'

const TransAnalysis = () => {

  const info = [
    {
      title: "Cos'è l'Analisi Transazionale?",
      content: (
        <>
          L’<Highlight>Analisi Transazionale</Highlight> è un <Highlight>orientamento specialistico</Highlight> della psicoterapia che si concentra sulle <Highlight>dinamiche interpersonali</Highlight> e sul modo in cui queste influenzano il nostro benessere. Il termine “transazionale” deriva proprio dal fatto che in uno scambio comunicativo e relazionale, ciascuno riceve e dona qualcosa all’altro. La qualità della nostra vita, quindi, non dipende solo da noi, ma da ciò che abbiamo vissuto – e che viviamo oggi – in famiglia, nella coppia, nelle amicizie e sul lavoro.
        </>
      ),
    },
    {
      title: "Schemi e Giochi Psicologici",
      content: (
        <>
          La terapia analitico transazionale offre strumenti potenti e concreti per svelare i motivi dietro i nostri schemi, imparando a gestirli e a superarli. A volte, senza volerlo, si cade in <Highlight>giochi psicologici</Highlight>, ovvero <Highlight>schemi relazionali</Highlight> che continuano a ripetersi sempre nello stesso modo e che nascondono un secondo fine, portando a esiti insoddisfacenti. La terapia aiuta a riconoscere questi schemi e a riprendere il controllo, consentendo di riscrivere la storia della propria vita in modo più libero e consapevole.
        </>
      ),
    },
    {
      title: "Il Lavoro Terapeutico",
      content: (
        <>
          Sul ponte che si crea tra il mondo interno e quello esterno si inserisce il lavoro terapeutico, che mira a comprendere il passato della persona e a ricostruire ciò che fa parte del suo presente. Il percorso di terapia consente di scoprire le proprie risorse interne e di comprendere i meccanismi che generano i propri comportamenti, in cerca di un nuovo livello di consapevolezza.
        </>
      ),
    },
    {
      title: "Contrattualità e Obiettivi",
      content: (
        <>
          La metodologia terapeutica dell’Analisi Transazionale si fonda sulla contrattualità: la relazione terapeutica è vista come un accordo tra terapeuta e paziente, i quali hanno una responsabilità congiunta nel lavorare per raggiungere <Highlight>obiettivi di terapia</Highlight> chiari e specifici.
        </>
      ),
    },
    {
      title: "Un Approccio Flessibile",
      content: (
        <>
          Il punto di forza di questo approccio terapeutico risiede nella possibilità di agire su tutti i domini del funzionamento psichico: cognitivo, comportamentale, affettivo e relazionale, adattandosi in maniera flessibile a seconda delle caratteristiche del paziente e del suo problema. Questo consente di effettuare una terapia mirata, finalizzata alla <Highlight>remissione dei sintomi</Highlight> o a un cambiamento comportamentale, oppure di curare gli aspetti più profondi e intrapsichici attraverso una <Highlight>ristrutturazione</Highlight> del proprio modo di <Highlight>sentire, agire e pensare</Highlight>.
        </>
      ),
    },
  ]

  return (
    <Section id="analisitransazionale">
      <h3 className="text-3xl font-bold mb-4 text-purple text-center">Analisi Transazionale</h3>
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-12">
        {info.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 w-full md:max-w-[45vw] lg:max-w-[30vw] flex flex-col gap-2"
          >
            <h4 className="text-xl font-semibold text-lightBlue mb-2">{card.title}</h4>
            <div className="text-black text-base">{card.content}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TransAnalysis