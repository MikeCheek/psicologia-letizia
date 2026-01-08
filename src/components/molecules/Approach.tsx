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
import { ApproachSteps, ApproachTitle } from '../../utilities/siteInfo'

const steps = ApproachSteps.map((text, idx) => {
  const icons = [Smile, UserPlus, Layers, ArrowUpRight];
  const Icon = icons[idx];
  return {
    icon: Icon,
    text: text,
  };
});

const Approach: React.FC = () => (
  <Section id="approccio" title={ApproachTitle}>
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
