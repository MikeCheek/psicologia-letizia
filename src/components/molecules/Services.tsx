import React from 'react'
import Section from '../organisms/Section';

type ServiceBlockProps = {
  title: string;
};

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title }) => (
  <div className="flex-1 flex flex-col justify-center w-full min-w-[30vw] gap-4">
    <div className="w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">Immagine</span>
    </div>
    <h4 className="rounded-lg font-bold text-lg text-center">
      {title}
    </h4>
  </div>
);

const Services = () => {
  return (
    <Section id="servizi">
      <h3 className="text-3xl font-bold mb-12 text-purple">
        Servizi
      </h3>
      <div className="flex w-full max-w-[80%] gap-12 flex-row flex-wrap items-center justify-center">
        <ServiceBlock title="Visita psicologica e consulenza" />
        <ServiceBlock title="Diagnostica clinica" />
        <ServiceBlock title="Rilascio certificati d'identità psichica" />
      </div>
    </Section>
  )
}

export default Services