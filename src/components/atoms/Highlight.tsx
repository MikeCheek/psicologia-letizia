import React from 'react'

const Highlight = ({ children, bigger, h4 = false }: { children: string, bigger?: boolean, h4?: boolean }) => {
  const Tag = h4 ? 'h4' : 'strong';

  return (
    <Tag className={`contents ${bigger ? 'text-xl md:text-2xl text-lightBlue' : 'text-black'} ${h4 ? 'font-bold !mb-4 !inline-block' : 'font-semibold'}`}>
      {children}
    </Tag>
  )
}

export default Highlight

// const Highlight = ({ children, bigger }: { children: string, bigger?: boolean }) => {
//   return (
//     <strong className={`contents ${bigger ? 'text-lg md:text-xl text-lightBlue' : 'text-purple'}`}>
//       {children}
//     </strong>
//   )
// }