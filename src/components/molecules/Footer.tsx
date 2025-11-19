import React from 'react'
import { email, filteredNumber, phoneNumber } from '../../utilities/contacts'
import { MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full pt-36 pb-4 bg-lightBlue' id='contatti'>
      <div className='w-full max-w-6xl items-center mx-auto mb-8'>
        <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-white">Contatti</h3>
        <div className="w-full max-w-[80%] mx-auto px-4 flex flex-col md:flex-row justify-evenly items-start md:items-center gap-4">
          <div className="text-white text-left gap-2 flex flex-col">
            <p className="italic font-bold">Dott.ssa Letizia Puglisi</p>
            <p className="italic">Psicologo Specialista in Psicoterapia</p>
            <p className="italic">N. Iscrizione Albo 10702</p>
            <p className="">Partita IVA: 06074890879</p>
          </div>
          <div className="text-white text-left flex flex-col gap-2 md:max-w-[35vw]">
            <span className="flex flex-row items-center flex-wrap gap-2 w-full">
              <b>Telefono:</b>{' '}
              <a href={`tel:${phoneNumber}`} className="underline hover:opacity-80 whitespace-nowrap" title="Chiama ora">
                {phoneNumber}
              </a>{' -'}
              <a
                href={`https://wa.me/${filteredNumber}`}
                title="Contattami su WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`hover:opacity-80 w-fit inline-flex`}
              >
                <MessageCircle size={20} className='mr-1' />
                WhatsApp
              </a>
            </span>
            <span className="flex flex-row items-center gap-2">
              <b>Email:</b>{' '}
              <a href={`mailto:${email}`} className="underline hover:opacity-80" title="Scrivimi una email">
                {email}
              </a>
            </span>
            <p className="">
              <b>Dove ricevo:</b> Piazza Cavour, 14, Palazzo Porto Sollima, Catania
            </p>
          </div>

        </div>
        {/* <div className="flex gap-6 mt-2">
          <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/facebook/ffffff" alt="Facebook" width={25} height={25} />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" width={25} height={25} />
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:opacity-80" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/youtube/ffffff" alt="YouTube" width={25} height={25} />
          </a>
        </div> */}
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
      <div className="w-full max-w-6xl mx-auto px-4 mt-24">
        <div className="text-center text-white">
          <p className="text-sm">
            © {new Date().getFullYear()} Dott.ssa Letizia Puglisi
          </p>
          <p className="text-xs mt-2">
            Questo sito internet rispetta la linea guida nazionale del CNOP in materia di pubblicità sanitaria, secondo gli artt. 39-40 del Codice Deontologico degli Psicologi.
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer