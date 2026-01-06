import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'
import Book from '../atoms/Book'
import TransAnalysisCard from '../atoms/TransAnalysisCard'

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
          La terapia analitico transazionale offre strumenti potenti e concreti per comprendere i meccanismi che generano i propri comportamenti. A volte, senza volerlo, si cade in <Highlight>giochi psicologici</Highlight>, ovvero <Highlight>schemi relazionali</Highlight> che continuano a ripetersi sempre nello stesso modo, portando a esiti insoddisfacenti. La terapia consente di riconoscere questi schemi e di riprendere il controllo, in modo più libero e consapevole.
        </>
      ),
    },
    {
      title: "Il Lavoro Terapeutico",
      content: (
        <>
          Sul ponte che si crea tra il mondo interno (o intrapsichico) e quello esterno si inserisce il lavoro terapeutico, che mira a comprendere il passato della persona e a ricostruire ciò che fa parte del suo presente.
        </>
      ),
    },
    {
      title: "Contrattualità e Obiettivi",
      content: (
        <>
          La metodologia terapeutica dell’Analisi Transazionale si fonda sulla <Highlight>contrattualità</Highlight>: la relazione terapeutica è vista come un accordo in cui specialista e paziente hanno una <Highlight>responsabilità congiunta</Highlight> nel raggiungere <Highlight>obiettivi di terapia chiari</Highlight>.
        </>
      ),
    },
    {
      title: "Un Approccio Flessibile",
      content: (
        <>
          Questo approccio terapeutico agisce, su tutti i domini del funzionamento psichico: cognitivo, comportamentale, affettivo e relazionale, adattandosi in maniera flessibile a seconda delle caratteristiche del paziente e del suo problema. Questo consente di effettuare una terapia mirata, finalizzata alla <Highlight>remissione dei sintomi</Highlight>, ma anche di curare gli aspetti più profondi e intrapsichici attraverso una <Highlight>ristrutturazione</Highlight> del proprio modo di <Highlight>sentire, agire e pensare</Highlight>.
        </>
      ),
    },
  ]

  return (
    <Section id="analisitransazionale">
      <h3 className="text-2xl md:text-4xl font-bold mb-12 text-purple uppercase">
        Analisi Transazionale
      </h3>
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-24">
        {info.map((card, idx) => (
          <TransAnalysisCard key={idx} title={card.title} content={card.content} />
        ))}
        <TransAnalysisCard
          title="Prenota un appuntamento"
          // noShadow
          content={
            <div className="flex flex-col items-center">
              <span className="text-black text-base mb-10">
                Per fissare una prima visita o richiedere informazioni, contatta la dottoressa.
              </span>

              <Book />
            </div>
          }
        />
      </div>
    </Section>
  )
}

export default TransAnalysis