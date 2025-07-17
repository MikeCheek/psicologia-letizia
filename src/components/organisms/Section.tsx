import React from 'react'

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id = "psicologiaclinica", children }) => {
  return (
    <section
      id={id}
      className="w-full min-h-[70vh] px-[10%] flex flex-col items-center justify-center text-black py-20 gap-12"
    >
      {children}
    </section>
  );
}

export default Section