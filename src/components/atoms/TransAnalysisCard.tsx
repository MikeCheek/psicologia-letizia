import React from 'react'

const TransAnalysisCard = ({ title, content, noShadow = false }: { title: string, content: JSX.Element, noShadow?: boolean }) => {
  return (
    <div
      className={`bg-white ${noShadow ? '' : 'shadow-lg'} rounded-lg p-6 w-full md:max-w-[45vw] lg:max-w-[30vw] flex flex-col gap-2 relative group
          after:content-[''] after:rounded-lg after:absolute after:rotate-3 
          ${noShadow ? '' : 'after:shadow-lg after:shadow-lightBlue'} after:w-full after:opacity-40 after:h-full after:top-0 after:-z-10 after:right-0
          after:transition-transform after:duration-300 after:ease-in-out
          hover:after:rotate-6`}
    >
      <h4 className="text-xl md:text-2xl font-semibold text-lightBlue mb-2">{title}</h4>
      <div className="text-black text-base mb-8">{content}</div>
    </div>
  )
}

export default TransAnalysisCard