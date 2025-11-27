import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Highlight from "../components/atoms/Highlight";

type ServiceBlockProps = {
  title: string;
  description: JSX.Element;
  description2?: JSX.Element;
  image: JSX.Element;
  reversed?: boolean;
  id: string;
};

const services = [
  {
    title: "Visita psicologica e consultazione",
    description: <>
      La <Highlight>consultazione psicologica</Highlight> è il primo e fondamentale passo per affrontare un disagio emotivo, relazionale o personale.
      <br />
      Attraverso una o più visite, dedicate all’ascolto e alla raccolta della storia clinica, è possibile:
      <ul>
        <li> Esplorare pensieri, emozioni e comportamenti </li>
        <li> Chiarire la natura del problema e, se necessario, avere un primo inquadramento diagnostico</li>
        <li> Ricevere l’indicazione terapeutica più appropriata: l'avvio di un percorso di psicoterapia, un intervento circoscritto, oppure un invio ad altro professionista </li>
      </ul>
      <br />
      La valutazione iniziale fornisce un'<Highlight>opportunità</Highlight> strutturata per fare <Highlight>chiarezza</Highlight> sulla propria situazione e delineare le <Highlight>possibili vie d'intervento</Highlight>.
      <br />
      Si svolge in un <Highlight>contesto clinico protetto e riservato</Highlight>, finalizzato alla definizione congiunta del percorso più idoneo per il tuo benessere.
    </>,
    image: (
      <StaticImage
        src="../images/firstvisit.jpg"
        alt="Visita psicologica e consultazione"
        placeholder="blurred"
        layout="constrained"
        quality={100}
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
  },
  {
    title: "Diagnostica clinica",
    description: <>
      Lo Studio offre il servizio di <Highlight>diagnosi</Highlight> e <Highlight>valutazione psicologica</Highlight> con <Highlight>finalità cliniche o medico-legali</Highlight>.
      Utilizzo un approccio clinico e strumentale per un'analisi approfondita.<br /><br />
      <Highlight bigger h4>Cosa include il servizio?</Highlight><br />
      Il processo psicodiagnostico si articola in diverse fasi, che possono includere:
      <ul>
        <li><Highlight>Colloquio clinico:</Highlight> un'analisi dettagliata della storia clinica, sintomi attuali e impatto sulla vita quotidiana.</li>
        <li><Highlight>Strumenti diagnostici:</Highlight> la somministrazione di test psicologici e psicometrici validati. Questi strumenti supportano la diagnosi differenziale e offrono una misurazione oggettiva di specifici aspetti del funzionamento psicologico. Gli accertamenti testologici, uniti al colloquio clinico, consentono di ottenere un quadro diagnostico più preciso e completo.</li>
        <li><Highlight>Refertazione:</Highlight> rilascio di relazioni cliniche con restituzione degli esiti.</li>
      </ul>
    </>,
    description2: <>
      <Highlight bigger h4>Aree di diagnosi e servizi offerti:</Highlight><br />
      A seconda delle specifiche esigenze, il servizio di valutazione e diagnosi include:
      <ul>
        <li><Highlight>Certificazioni di idoneità:</Highlight> rilascio di attestati di idoneità psicologica per specifici scopi (es. porto d'armi, scuola, ecc.).</li>
        <li><Highlight>Valutazione psicologica per interventi chirurgici:</Highlight> accertamento dell'idoneità psichica necessaria per l'accesso a interventi di chirurgia bariatrica e chirurgia plastica.</li>
        <li><Highlight>Valutazione della personalità:</Highlight> utilizzo di test specifici per esplorare e comprendere le caratteristiche della personalità.</li>
        <li><Highlight>Valutazione per diagnosi differenziale:</Highlight> individuazione e distinzione tra diversi quadri sintomatologici per una diagnosi accurata.</li>
        <li><Highlight>Valutazione del quoziente intellettivo (QI):</Highlight> somministrazione di test di livello per misurare le abilità cognitive.</li>
        <li><Highlight>Screening neuropsicologico:</Highlight> esame neuropsicologico per valutare la memoria, l'attenzione e altre funzioni cognitive, utili ad esempio in caso di sospetto deterioramento cognitivo.</li>
        <li><Highlight>Consulenza Tecnica di Parte (CTP):</Highlight> valutazione psicodiagnostica, in ambito civile e penale, per tutelare gli interessi della parte assistita nel contesto di procedimenti giudiziari, come la valutazione della <i>capacità di intendere e di volere</i>, la definizione delle <i>conseguenze psicologiche di eventi traumatici</i> o l'accertamento del <i>danno psichico</i> (danni esistenziali e biologici di natura psichica). La perizia viene generalmente rilasciata in collaborazione o su richiesta dell'Avvocato della parte.</li>
      </ul>
    </>,
    image: (
      <StaticImage
        src="../images/diagnostic.jpg"
        alt="Diagnostica clinica"
        placeholder="blurred"
        layout="constrained"
        quality={100}
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
  },
  {
    title: "Psicoterapia",
    description: <>
      La mia pratica clinica, che include la <Highlight>psicoterapia individuale e di coppia</Highlight>, si rivolge ad <Highlight>adolescenti</Highlight>, <Highlight>giovani adulti</Highlight> e <Highlight>adulti</Highlight>.
      <br />
      L'approccio <Highlight>analitico transazionale</Highlight> consente di personalizzare l'intervento sulla base dei bisogni specifici di ciascuno e di impostare una terapia strutturata, in grado di intervenire sia sui <Highlight>sintomi</Highlight> che generano disagio, utilizzando tecniche cognitivo-comportamentali, sia sugli aspetti più profondi che ne sono la <Highlight>causa</Highlight>. L'obiettivo è duplice: il <Highlight>ripristino del benessere</Highlight> e la successiva individuazione e risoluzione dei conflitti interni che hanno originato il malessere, favorendo un cambiamento radicato.
      <br /><br />
      <Highlight bigger h4>Come funziona la psicoterapia?</Highlight><br />
      Per un piano di trattamento personalizzato, la fase iniziale prevede un'<Highlight>accurata valutazione</Highlight> del funzionamento psicologico e della storia clinica della persona (che può includere l'impiego di reattivi psicodiagnostici). Questo processo di indagine consente di chiarire insieme gli <Highlight>obiettivi</Highlight> e delineare il percorso più indicato.
      <br />
      Pur basando il mio intervento su linee guida ed <Highlight>evidenze consolidate</Highlight>, ogni <Highlight>percorso</Highlight> terapeutico è <Highlight>costruito su misura</Highlight> e tiene conto della storia, delle risorse e degli obiettivi individuali. La terapia è una collaborazione attiva tra paziente e terapeuta, basata su un'alleanza solida, dove tu sei partecipe del processo clinico.
      <br />
      Ritengo che la <Highlight>psicoterapia</Highlight> sia un'arte complessa che si nutre di due dimensioni essenziali: il rigore della <Highlight>scienza</Highlight> e la profondità della <Highlight>connessione umana</Highlight>.
      <br />
      Penso alla cura come all'incontro tra il metodo, che guida l'intervento, e la relazione terapeutica, che lo rende possibile, per accompagnarti a ritrovare <Highlight>consapevolezza</Highlight>, <Highlight>spontaneità</Highlight>, <Highlight>intimità</Highlight> e <Highlight>autonomia</Highlight>.
    </>,
    description2: <>
      <Highlight bigger h4>Disturbi trattati</Highlight><br />
      Le mie aree principali di intervento includono:
      <ul>
        <li>Ansia e attacchi di panico</li>
        <li>Disturbi psicosomatici</li>
        <li>Stress e gestione emotiva</li>
        <li>Depressione e difficoltà legate all'umore</li>
        <li>Disturbi alimentari</li>
        <li>Disturbi ossessivo-compulsivi</li>
        <li>Disturbi di personalità</li>
        <li>Difficoltà relazionali e familiari</li>
        <li>Lutto e disturbi correlati</li>
        <li>Difficoltà legate alla salute fisica (es. patologie croniche)</li>
      </ul>
    </>,
    image: (
      <StaticImage
        src="../images/psicotherapy.jpg"
        alt="Psicoterapia"
        placeholder="blurred"
        layout="constrained"
        quality={100}
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
  },
].map(service => ({
  ...service,
  id: service.title.replace(/\s+/g, '-').toLowerCase()
})
);

export default services;
export type { ServiceBlockProps };