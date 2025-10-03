import React from 'react'

const Highlight = ({ children, bigger }: { children: string, bigger?: boolean }) => {
  return (
    <strong className={`contents ${bigger ? 'text-lg md:text-xl text-lightBlue' : 'text-purple'}`}>
      {children}
    </strong>
  )
}

export default Highlight