import { Mail, MessageCircle } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { email, phoneNumber } from '../../utilities/contacts'

const Book = () => {
  const [hovered, setHovered] = useState(false);

  const filteredNumber = phoneNumber.replace(/\D/g, '');

  return (
    <a
      href="#contatti"
      title="Prenota una consulenza"
      className="cta w-fit relative flex items-center gap-2 !py-0 font-semibold text-secondary rounded-lg border-2 border-secondary transition duration-300 hover:bg-secondary hover:text-white hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="inline-block p-3">
        Prenota un appuntamento
      </span>
      <span
        className={`inline-flex items-center ml-3 origin-left transform overflow-hidden transition-[max-width,opacity,transform] duration-300 ${hovered ? 'max-w-[96px] opacity-100 scale-100' : 'max-w-0 opacity-0 scale-0 pointer-events-none'}`}
      >
        <a
          href={`https://wa.me/${filteredNumber}`}
          title="Contattami su WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={`inline-flex p-3 items-center transform transition duration-200 ${hovered ? 'opacity-100 translate-y-0 delay-75' : 'opacity-0 -translate-y-1'}`}
        >
          <MessageCircle size={20} />
        </a>

        <span
          aria-hidden="true"
          className={`w-px h-5 bg-white rounded mx-2 transform transition duration-200 ${hovered ? 'opacity-100 scale-100 delay-100' : 'opacity-0 scale-0'}`}
        />

        <a
          href={`mailto:${email}`}
          title="Inviami una email"
          aria-label="Mail"
          className={`inline-flex p-3 items-center transform transition duration-200 ${hovered ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 -translate-y-1'}`}
        >
          <Mail size={20} />
        </a>
      </span>
    </a>
  );
}

export default Book