import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'
import {
  Smile,
  UserPlus,
  Layers,
  ArrowUpRight,
} from 'lucide-react'
import { StaticImage } from 'gatsby-plugin-image'

const steps = [
  {
    icon: Smile,
    text: (
      <>
        <Highlight>La persona al centro:</Highlight> accoglienza, attenzione e cura.
      </>
    ),
  },
  {
    icon: UserPlus,
    text: (
      <>
        <Highlight>Intervento clinico specialistico</Highlight> e personalizzato.
      </>
    ),
  },
  {
    icon: Layers,
    text: (
      <>
        <Highlight>Utilizzo di tecniche integrate</Highlight> per l'efficacia clinica.
      </>
    ),
  },
  {
    icon: ArrowUpRight,
    text: (
      <>
        <Highlight>Promozione dell'autonomia</Highlight> e del cambiamento.
      </>
    ),
  },
]

const Approach: React.FC = () => (
  <Section id="approccio">
    <h3 className="text-2xl md:text-4xl font-bold mb-12 text-purple uppercase">
      Il mio approccio</h3>
    <div className="relative flex flex-col lg:flex-row-reverse gap-20 items-center">
      <StaticImage
        src="../../images/foto-studio.jpg"
        alt="Studio 2"
        placeholder="blurred"
        layout="constrained"
        className="h-[300px] lg:w-[40vw] lg:h-[400px] rounded-lg"
      // height={400}
      />
      <ul className="relative z-10 w-full lg:w-[30vw] max-w-md space-y-12">
        {steps.map(({ icon: Icon, text }, idx) => (
          <li key={idx} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lightBlue flex items-center justify-center shadow-lg border-4 border-white">
              <Icon size={24} color="#fff" strokeWidth={2} />
            </div>
            <span className="text-lg text-gray-700">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
)

export default Approach
