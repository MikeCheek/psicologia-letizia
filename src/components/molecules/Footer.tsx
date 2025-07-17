import { Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const phoneNumber = "+39 3475777357"
  const email = "studiopsicologiapuglisi@gmail.com"

  return (
    <footer className='w-full pt-36 pb-4 bg-lightBlue' id='contatti'>
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center gap-4">
        <div className="text-white text-left gap-2 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Contatti</h3>
          <p className="text-sm">Dott.ssa Letizia Puglisi</p>
          <p className="text-sm">Psicologo Psicoterapeuta</p>
          <p className="text-xs">N. Iscrizione Albo 10702-A</p>
        </div>
        <div className="text-white text-left flex flex-col gap-2">
          <span>
            Telefono:{' '}
            <a href={`tel:${phoneNumber}`} className="text-sm underline hover:opacity-80">
              {phoneNumber}
            </a>
          </span>
          <span>
            Email:{' '}
            <a href={`mailto:${email}`} className="text-sm underline hover:opacity-80">{email}</a>
          </span>
          {/* <a
            href="#"
            className="text-xs underline mt-1 inline-block"
          >
            Prenota una consulenza
          </a> */}

        </div>
        <div className="flex gap-6 mt-2">
          <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/facebook/ffffff" alt="Facebook" width={25} height={25} />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" width={25} height={25} />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/youtube/ffffff" alt="YouTube" width={25} height={25} />
          </a>
        </div>
        {/* <div className="text-white text-left w-full md:w-1/3">
          <p className="text-sm mb-2">Subscribe to Get My Newsletter</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-2 py-1 rounded-l bg-white text-blue outline-none w-full"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-white text-blue font-semibold rounded-r border-l border-blue"
            >
              Join
            </button>
          </form>
          <p className="text-xs mt-2">Thanks for submitting!</p>
        </div> */}
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 mt-14">
        <div className="text-center text-white">
          <p className="text-sm">
            © {new Date().getFullYear()} Dott.ssa Letizia Puglisi
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer