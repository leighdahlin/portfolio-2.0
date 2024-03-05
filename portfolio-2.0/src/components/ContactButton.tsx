import React from 'react';
import scrollToSection from '@/utils/scrollToSection';

type ContactButtonProps = {
  color: 'white' | 'gradient' | 'gold';
  className?: string;
};

export default function ContactButton({
  color,
  className,
}: ContactButtonProps) {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  if (color === 'white')
    return (
      <button
        onClick={scrollToContact}
        className="px-10 py-[5px] bg-off-white text-black text-sm md:text-base rounded-xl"
      >
        Contact
      </button>
    );
  if (color === 'gradient') {
    return (
      <button
        onClick={scrollToContact}
        className="px-10 py-[5px] bg-gradient-to-r from-teal to-dark-blue text-off-white text-sm md:text-base rounded-xl"
      >
        Contact
      </button>
    );
  }
  if (color === 'gold') {
    return (
      <button
        onClick={() => {
          scrollToSection('#contact');
        }}
        className={`block p-[0.75rem] min-w-[175px] bg-golden text-off-white text-center text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden ${className}`}
      >
        Contact
      </button>
      // <a
      //   href="/contact/"
      //   className={`block p-[0.75rem] min-w-[175px] bg-golden text-off-white text-center text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden ${className}`}
      // >
      //   Contact
      // </a>
    );
  }
}
