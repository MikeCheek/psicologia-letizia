import React from 'react'
import Highlight from '../atoms/Highlight'
import Section from '../organisms/Section'
import {
  Smile,
  UserPlus,
  Layers,
  ArrowUpRight,
} from 'lucide-react'

const steps = [
  {
    icon: Smile,
    text: (
      <>
        <Highlight>Accoglienza</Highlight> e ascolto empatico della persona.
      </>
    ),
  },
  {
    icon: UserPlus,
    text: (
      <>
        Percorso personalizzato basato sulle <Highlight>esigenze individuali</Highlight>.
      </>
    ),
  },
  {
    icon: Layers,
    text: (
      <>
        Utilizzo di <Highlight>tecniche integrate</Highlight> per il benessere psicologico.
      </>
    ),
  },
  {
    icon: ArrowUpRight,
    text: (
      <>
        Promozione dell'<Highlight>autonomia</Highlight> e della crescita personale.
      </>
    ),
  },
]

const Approach: React.FC = () => (
  <Section id="approccio">
    <h3 className="text-3xl font-bold mb-4 text-purple">Il mio approccio</h3>
    <div className="relative flex flex-col items-center">
      <ul className="relative z-10 w-full max-w-md space-y-12">
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
