'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logoDark from './img/logo-dark.png';
import ContactButton from './ContactButton';
import useIsMobile from '@/hooks/useIsMobile';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useIsMobile(640);

  const scrollToTop = () => {
    const topElement = document.body;
    topElement.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    const contactSection = document.querySelector('#skills');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToServices = () => {
    const contactSection = document.querySelector('#services');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    //prevent scrolling behind the nav on mobile
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  return (
    <header className="sticky top-0 z-40 shadow-lg bg-off-white">
      <div className="flex flex-row justify-between p-3 bg-navySmoke relative">
        <button
          onClick={() => {
            scrollToTop();
          }}
        >
          <Image
            src={logoDark}
            alt="Leigh Dahlin logo"
            priority={true}
            height={40}
            width={40}
          />
        </button>
        <nav className="flex flex-row space-x-8 font-visbyBold items-center">
          {!isMobile ? (
            <ul className="hidden sm:flex justify-center items-center list-none gap-[35px] text-dark-blue">
              <li>
                <button onClick={scrollToServices}>Services</button>
              </li>
              <li>
                <button onClick={scrollToSkills}>Skills</button>
              </li>
              {/* <li>
              <a href="#background">Background</a>
            </li> */}
              <li>
                <ContactButton color="gradient" />
              </li>
            </ul>
          ) : (
            <button
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="flex flex-col items-center justify-between w-[22px] h-[20px] p-0"
            >
              <div className="bg-dark-blue h-[2px] w-full " />
              <div className="bg-dark-blue h-[2px] w-full " />
              <div className="bg-dark-blue h-[2px] w-full " />
            </button>
          )}
        </nav>
      </div>
      {navOpen && (
        <div className="fixed top-[60px] h-screen w-screen bg-dark-teal">
          <div className="flex flex-col items-center font-visbyBold gap-10 p-5">
            <a
              href="#services"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="text-off-white"
            >
              Services
            </a>
            <a
              href="#skills"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="text-off-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="text-off-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
