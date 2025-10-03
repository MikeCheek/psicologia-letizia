import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import NavItem from '../atoms/NavItem'

const NavBar = () => {
  const sections = {
    sudime: "Su di me",
    servizi: "Servizi",
    approccio: "Il mio approccio",
    contatti: "Contatti"
  }
  const [open, setOpen] = React.useState(false)

  return (
    <header className="w-full">
      <nav className="w-full flex h-20 justify-end md:justify-center items-center bg-primary relative">
        {/* <a href="/">
          <StaticImage
            src="../../images/logo.png"
            alt="Logo"
            layout="fixed"
            height={80}
            placeholder="blurred"
            className="w-auto m-2"
          />
        </a> */}
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center gap-10 px-8">
          {Object.entries(sections).map(([key, value]) => (
            <NavItem key={key} href={key} value={value} />
          ))}
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center m-4 z-[999]"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Apri menu"
        >
          <span className="block w-8 h-1 bg-lightBlue mb-1 rounded"></span>
          <span className="block w-8 h-1 bg-lightBlue mb-1 rounded"></span>
          <span className="block w-8 h-1 bg-lightBlue rounded"></span>
        </button>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-primary shadow-lg transform transition-transform duration-300
             z-[998] ${open ? "translate-x-0" : "translate-x-full"
            } md:hidden  flex flex-col pt-24 px-4 gap-6`}
        >
          {Object.entries(sections).map(([key, value]) => (
            <NavItem
              key={key}
              href={key}
              value={value}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-0 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  )
}

export default NavBar