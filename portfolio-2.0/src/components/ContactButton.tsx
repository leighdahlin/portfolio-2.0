'use client';

import React from 'react';

export default function ContactButton({
  color,
}: {
  color: 'white' | 'gradient';
}) {
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
}
