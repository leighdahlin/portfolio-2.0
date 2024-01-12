'use client';
import React from 'react';
import Image from 'next/image';
import logoDark from './img/logo-dark.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full p-[10px] bg-off-white shadow-xl z-10 flex justify-between">
      <Image
        src={logoDark}
        alt="Leigh Dahlin logo"
        priority={true}
        height={40}
        width={40}
      />
      <nav className="flex justify-center items-center pr-5">
        <button className="h-[22px] w-[25px] flex md:hidden flex-col items-center justify-between">
          <div className="bg-dark-blue h-[2px] w-full " />
          <div className="bg-dark-blue h-[2px] w-full " />
          <div className="bg-dark-blue h-[2px] w-full " />
        </button>
        <ul className="hidden md:flex justify-center items-center list-none gap-[35px] text-dark-blue">
          <li>Services</li>
          <li>Meet Leigh</li>
          <li>
            <button className="px-10 py-[5px] bg-gradient-to-r from-teal to-dark-blue text-off-white rounded-xl">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
