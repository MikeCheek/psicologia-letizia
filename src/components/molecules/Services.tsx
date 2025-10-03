import React, { useState } from 'react'
import Section from '../organisms/Section';
import Highlight from '../atoms/Highlight';
import { StaticImage } from 'gatsby-plugin-image';

type ServiceBlockProps = {
  title: string;
  description: JSX.Element;
  description2?: JSX.Element;
  image: JSX.Element;
  reversed?: boolean;
};

const services = [
  {
    title: "Visita psicologica e consulenza",
    description: <>
      La <Highlight>consulenza psicologica</Highlight> è il primo e fondamentale passo per affrontare un disagio emotivo, relazionale o personale.
      <br />
      Attraverso una o più visite preliminari, dedicate all’ascolto e alla raccolta della storia clinica, potrai:
      <ul>
        <li> Esplorare pensieri, emozioni e comportamenti </li>
        <li> Chiarire la natura del problema </li>
        <li> Comprendere se sia necessario un percorso di psicoterapia, un intervento mirato su un tema specifico, oppure se sia indicato un invio ad altro specialista. </li>
      </ul>
      <br />
      La consulenza fornisce un'<Highlight>opportunità</Highlight> strutturata per fare <Highlight>chiarezza</Highlight> sulla propria situazione e delineare le <Highlight>possibili vie d'intervento</Highlight>.
      <br />
      È uno spazio sicuro e riservato, in cui si decide la direzione da intraprendere per il tuo benessere.
    </>,
    image: (
      <StaticImage
        src="../../images/firstvisit.jpg"
        alt="Visita psicologica e consulenza"
        placeholder="blurred"
        layout="constrained"
        width={250}
        height={250}
      />
    ),
  },
  {
    title: "Diagnostica clinica",
    description: <>
      Lo Studio offre un servizio di <Highlight>diagnosi e valutazione psicologica</Highlight> con <Highlight>finalità cliniche o medico-legali</Highlight>.
      Utilizzo un approccio clinico e strumentale per un'analisi approfondita, integrando la valutazione diagnostica con una profonda comprensione delle dinamiche cliniche.<br /><br />
      <Highlight bigger>Cosa include il servizio?</Highlight><br />
      Il processo psicodiagnostico si articola in diverse fasi, che possono includere:
      <ul>
        <li><Highlight>Colloquio clinico:</Highlight> analisi dettagliata della storia clinica, sintomi attuali e impatto sulla vita quotidiana.</li>
        <li><Highlight>Strumenti diagnostici:</Highlight> la somministrazione di test psicologici e psicometrici validati, che sono parte integrante del processo di valutazione. Questi strumenti supportano la diagnosi differenziale e offrono una misurazione oggettiva di specifici aspetti del funzionamento psicologico. L’accertamento testologico, unito al colloquio clinico, consente di ottenere un quadro diagnostico più preciso e completo.</li>
        <li><Highlight>Refertazione:</Highlight> rilascio di relazioni cliniche con restituzione degli esiti.</li>
      </ul>
    </>,
    description2: <>
      <Highlight bigger>Aree di diagnosi e servizi offerti:</Highlight><br />
      A seconda delle specifiche esigenze, il servizio di valutazione e diagnosi include:
      <ul>
        <li><Highlight>Certificazioni di idoneità:</Highlight> rilascio di certificati psicologici per scopi specifici (es. porto d'armi, scuola, ecc.).</li>
        <li><Highlight>Valutazione psicologica per interventi chirurgici:</Highlight> accertamento dell'idoneità psichica necessaria per l'accesso a interventi di chirurgia bariatrica e chirurgia plastica.</li>
        <li><Highlight>Valutazione della personalità:</Highlight> utilizzo di test specifici per esplorare e comprendere le caratteristiche della personalità.</li>
        <li><Highlight>Valutazione per diagnosi differenziale:</Highlight> individuazione e distinzione tra diversi quadri sintomatologici per una diagnosi accurata.</li>
        <li><Highlight>Valutazione del quoziente intellettivo (QI):</Highlight> somministrazione di test di livello per misurare le abilità cognitive.</li>
        <li><Highlight>Screening neuropsicologico:</Highlight> esame neuropsicologico per valutare la memoria, l'attenzione e altre funzioni cognitive, utili ad esempio in caso di sospetto deterioramento cognitivo.</li>
        <li><Highlight>Consulenza Tecnica di Parte (CTP):</Highlight> valutazione psicodiagnostica, in ambito civile e penale, per tutelare gli interessi della parte assistita nel contesto di procedimenti giudiziari, come la valutazione della <i>capacità di intendere e di volere</i>, la definizione delle <i>conseguenze psicologiche di eventi traumatici</i> o l'accertamento del <i>danno psichico</i> (danni esistenziali e biologici di natura psichica).</li>
      </ul>
      La perizia viene generalmente rilasciata in collaborazione o su richiesta dell'avvocato della parte.
    </>,
    image: (
      <StaticImage
        src="../../images/diagnostic.jpg"
        alt="Diagnostica clinica"
        placeholder="blurred"
        layout="constrained"
        width={250}
        height={250}
      />
    ),
  },
  {
    title: "Psicoterapia",
    description: <>
      La pratica clinica si rivolge ad <Highlight>adolescenti</Highlight>, <Highlight>giovani adulti</Highlight> e <Highlight>adulti</Highlight>.
      <br />
      L'approccio <Highlight>analitico transazionale</Highlight> consente di personalizzare l'intervento sulla base dei bisogni specifici di ciascuno e di impostare una terapia strutturata, in grado di intervenire sia sui <Highlight>sintomi</Highlight> che generano disagio, utilizzando tecniche cognitivo-comportamentali, sia sugli aspetti più profondi che ne sono la <Highlight>causa</Highlight>. L'obiettivo iniziale è il <Highlight>ripristino del benessere</Highlight>, per poi procedere all'individuazione e alla risoluzione dei conflitti interni che hanno originato il malessere, favorendo un cambiamento radicato.
      <br /><br />
      <Highlight bigger>Come funziona la psicoterapia?</Highlight><br />
      Per avviare un piano di trattamento realmente personalizzato, la prima fase prevede un'<Highlight>accurata valutazione</Highlight> del tuo funzionamento, della tua storia e delle tue caratteristiche di personalità. Questo processo di indagine, che può includere l'utilizzo di reattivi psicodiagnostici, permette di raccogliere le informazioni necessarie per definire insieme gli obiettivi e il percorso più adatto a te.
      <br />
      Pur basando il mio intervento su linee guida ed <Highlight>evidenze consolidate</Highlight>, ogni percorso terapeutico è <Highlight>costruito su misura</Highlight> e tiene conto della tua storia, delle tue risorse e dei tuoi obiettivi. La terapia non è una soluzione standard, ma una collaborazione attiva tra paziente e terapeuta, basata su un'alleanza solida, dove tu sei partecipe del processo clinico.
      <br />
      Ritengo che la psicoterapia sia un'arte complessa che si nutre di due dimensioni essenziali: il rigore della scienza e la profondità della connessione umana. È l'incontro tra il <Highlight>metodo</Highlight>, che guida l'intervento, e la <Highlight>relazione terapeutica</Highlight>, che lo rende possibile.
      <br />
      Penso alla cura come alla combinazione tra sapere scientifico e umanità del rapporto, per accompagnarti a ritrovare <Highlight>consapevolezza</Highlight>, <Highlight>spontaneità</Highlight>, <Highlight>intimità</Highlight> e <Highlight>autonomia</Highlight>.
    </>,
    description2: <>
      <Highlight bigger>Disturbi trattati</Highlight><br />
      Le mie aree principali di intervento includono:
      <ul>
        <li>Ansia e attacchi di panico</li>
        <li>Disturbi psicosomatici</li>
        <li>Stress e gestione emotiva</li>
        <li>Depressione e difficoltà legate all'umore</li>
        <li>Disturbi alimentari</li>
        <li>Disturbi ossessivo-compulsivi</li>
        <li>Difficoltà relazionali e familiari</li>
        <li>Lutto e disturbi correlati</li>
        <li>Difficoltà legate alla salute fisica (es. patologie croniche)</li>
      </ul>
    </>,
    image: (
      <StaticImage
        src="../../images/psicotherapy.jpg"
        alt="Psicoterapia"
        placeholder="blurred"
        layout="constrained"
        width={250}
        height={250}
      />
    ),
  },
];

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, image, description, description2, reversed }) => {

  const Book = <a href="#contatti" className="cta w-fit" title="Prenota una consulenza">
    Prenota una consulenza
  </a>

  return (
    <div className={`${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col flex justify-between items-start gap-8 md:gap-16`}>
      <div className="w-[200px] min-w-[200px] h-[200px] min-h-[200px] md:w-[250px] md:min-w-[250px] md:h-[250px] md:min-h-[250px] md:mt-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
        {image}
      </div>
      <div className="flex flex-col gap-4 w-full md:w-[50vw] self-start">
        <h4 className="rounded-lg font-bold text-xl md:text-3xl text-lightBlue text-center md:text-left uppercase">
          {title}
        </h4>
        <p className={`relative text-base text-left ${description2 ? 'mb-4' : 'mb-8'}`}>
          {description}
        </p>
        {description2 ? (
          <div className="mb-8 w-full md:w-[50vw]">
            {description2}
          </div>
        ) : null}
        {Book}
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <Section id="servizi">
      <h3 className="text-3xl font-bold mb-12 text-purple">
        Servizi
      </h3>
      <div className="flex w-full gap-20 flex-col items-center justify-center">
        {services.map((service, idx) => (
          <ServiceBlock key={idx} reversed={idx % 2 === 1} title={service.title} image={service.image} description={service.description} description2={service.description2} />
        ))}
      </div>
    </Section>
  )
}

export default Services