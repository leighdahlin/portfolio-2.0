'use client';
import Image from 'next/image';
import Link from 'next/link';
import OutlinedButtonLink from '../buttons/OutlinedButtonLink';
import logoWithText from './img/logo-text.png';
import linkedInImage from './img/footer-linkedin.png';
import githubImage from './img/footer-github.png';
import mailImage from './img/footer-mail.png';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-soft-black mx-[auto] w-full shadow-custom-light-separation">
      <div className="h-[1px] bg-gradient-to-r from-bluegray to-golden w-ful hidden dark:block" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col-reverse sm:flex-row items-center md:items-stretch justify-around gap-[2rem] md:gap-[0rem] md:justify-stretch w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] py-[4rem]">
          <div className="md:w-[25%]">
            <Image
              src={logoWithText}
              height={400}
              width={500}
              alt="logo"
              className="w-[200px]"
            />
          </div>
          <div className="flex flex-col-reverse gap-[2rem] md:gap-[0rem] md:w-[75%] md:flex-row">
            <div className="flex flex-col items-center md:w-2/3">
              <OutlinedButtonLink text="Get Custom Quote" link="/contact" />
              <div className="flex justify-center items-center gap-10 pt-[2rem]">
                <a
                  href="https://www.linkedin.com/in/leighdahlin/"
                  target="_blank"
                >
                  <Image
                    src={linkedInImage}
                    height={30}
                    width={30}
                    alt="LinkenIn icon"
                    className="hover:transition-transform hover:scale-105"
                  />
                </a>
                <a href="https://github.com/leighdahlin" target="_blank">
                  <Image
                    src={githubImage}
                    height={35}
                    width={35}
                    alt="Logo"
                    className="hover:transition-transform hover:scale-105"
                  />
                </a>
                <a href="mailto:leigh.dahlin@gmail.com">
                  <Image
                    src={mailImage}
                    height={35}
                    width={35}
                    alt="Mail icon"
                    className="hover:transition-transform hover:scale-105"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start md:justify-end font-semibold md:w-1/3 gap-[2rem] text-dark-blue dark:text-off-white">
              <ul className="flex flex-col flex-wrap items-center sm:items-start gap-[1rem]">
                <li className="group relative w-fit">
                  <Link href="/about">About</Link>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <Link href="/work-with-me">Work With Me</Link>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <Link href="/portfolio">Portfolio</Link>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <Link href="/contact">Contact</Link>

                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
