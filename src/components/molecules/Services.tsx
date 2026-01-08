import React from 'react'
import Section from '../organisms/Section';
import Book from '../atoms/Book';
import { ServiceBlockProps, ServicesInfo } from '../../utilities/siteInfo';

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, image, description, description2, reversed, id }) => {

  return (
    <div className={`grid w-full px-2 md:px-20 gap-8 md:gap-16 ${reversed ? 'md:grid-cols-[1fr_auto]' : 'md:grid-cols-[auto_1fr]'} md:items-center`}>
      {/* Title: mobile row 1, on md span both columns above the image+description */}
      <h3 id={id} className={`row-start-1 md:row-start-1 md:col-span-2 rounded-lg font-bold text-2xl md:text-4xl text-purple text-center uppercase py-4 mt-6 md:mt-12`}>
        {title}
      </h3>

      {/* Image: mobile row 2, on md placed in the image column beside the description (row 2) */}
      <div className={`row-start-2 md:row-start-2 ${reversed ? 'md:col-start-2' : 'md:col-start-1'} h-[200px] min-h-[200px] md:w-[250px] md:h-[250px] md:min-h-[250px] flex items-center justify-center justify-self-center md:self-start`}>
        {image}
      </div>

      {/* Description & actions: mobile row 3, on md placed in the content column (row 2) next to the image */}
      <div className={`${reversed ? 'md:col-start-1' : 'md:col-start-2 justify-self-end'} row-start-3 md:row-start-2 flex flex-col gap-4 w-full md:w-[45vw] self-start items-center md:items-start`}>
        <span className={`relative text-base text-left ${description2 ? 'mb-4' : 'mb-8'}`}>
          {description}
        </span>
        {description2 ? (
          <span className="mb-8 w-full">
            {description2}
          </span>
        ) : null}
        <Book />
      </div>
    </div>
  );
}

const Services = () => {
  return (
    <Section id="servizi">
      <div className="flex w-full gap-20 pt-12 flex-col items-center justify-center">
        {ServicesInfo.map((service, idx) => (
          <ServiceBlock key={idx} id={service.id} reversed={idx % 2 === 0} title={service.title} image={service.image} description={service.description} description2={service.description2} />
        ))}
      </div>
    </Section>
  )
}

export default Services