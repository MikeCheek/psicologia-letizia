import React from 'react'

const Highlight = ({ children }: { children: string }) => {
  return (
    <strong className="text-purple contents">
      {children}
    </strong>
  )
}

export default Highlight