import { Link } from 'gatsby'
import React from 'react'

const NavItem = ({ href, value, onClick, link = false }: { href: string, value: string, onClick?: () => void, link?: boolean }) => {
  return <>
    {
      link ? (
        <Link
          to={`/${href}`}
          onClick={onClick}
          title={`Vai alla sezione ${value}`}
          className="relative text-base text-lightBlue font-semibold no-underline uppercase transition-colors duration-300
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-lightBlue after:transition-width after:duration-300 hover:after:w-full"
        >
          {value}
        </Link>
      ) : (
        <a
          href={`${href == "contatti" ? "" : "/"}#${href}`}
          onClick={onClick}
          title={`Vai alla sezione ${value}`}
          className="relative text-base text-lightBlue font-semibold no-underline uppercase transition-colors duration-300
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-lightBlue after:transition-width after:duration-300 hover:after:w-full"
        >
          {value}
        </a>
      )
    }
  </>
}

export default NavItem