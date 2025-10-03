import React from 'react'

const NavItem = ({ href, value, onClick }: { href: string, value: string, onClick?: () => void }) => {
  return (
    <a
      href={`#${href}`}
      onClick={onClick}
      title={`Vai alla sezione ${value}`}
      className="relative text-base text-lightBlue font-semibold no-underline uppercase transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-lightBlue after:transition-width after:duration-300 hover:after:w-full"
    >
      {value}
    </a>
  )
}

export default NavItem