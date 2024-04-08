'use client';
import Image from 'next/image';

import React from 'react';
import scrollToSection from '@/utils/scrollToSection';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-blue mx-[auto] w-full">
      <div className="h-[1px] bg-gradient-to-r from-bluegray to-golden w-ful hidden dark:block" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col-reverse sm:flex-row items-center md:items-stretch justify-around gap-[2rem] md:gap-[0rem] md:justify-stretch w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] py-[4rem]">
          <div className="md:w-[25%]">
            <Image
              src="/images/footer-logo.png"
              height={200}
              width={200}
              alt="LinkenIn icon"
              className="dark:hidden"
            />
            <Image
              src="/images/footer-logo-dark.png"
              height={200}
              width={200}
              alt="LinkenIn icon"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-col-reverse gap-[2rem] md:gap-[0rem] md:w-[75%] md:flex-row">
            <div className="flex flex-col items-center md:w-2/3">
              <button
                onClick={() => {
                  scrollToSection('#contact');
                }}
                className="p-[1rem] bg-golden text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden w-fit min-w-[175px]"
              >
                Get Custom Quote
              </button>
              <div className="flex justify-center items-center gap-10 pt-[2rem]">
                <a
                  href="https://www.linkedin.com/in/leighdahlin/"
                  target="_blank"
                >
                  <Image
                    src="/images/footer-linkedin.png"
                    height={30}
                    width={30}
                    alt="LinkenIn icon"
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/footer-linkedin-light.png"
                    height={30}
                    width={30}
                    alt="LinkenIn icon"
                    className="hidden dark:block"
                  />
                </a>
                <a href="https://github.com/leighdahlin" target="_blank">
                  <Image
                    src="/images/footer-github.png"
                    height={35}
                    width={35}
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/footer-github-light.png"
                    height={35}
                    width={35}
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>
                <a href="mailto:leigh@leighdahlin.com">
                  <Image
                    src="/images/footer-mail.png"
                    height={35}
                    width={35}
                    alt="Mail icon"
                    className="dark:hidden"
                  />
                  <Image
                    src="/images/footer-mail-light.png"
                    height={35}
                    width={35}
                    alt="Mail icon"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-end font-semibold md:w-1/3 gap-[2rem] text-dark-blue dark:text-off-white">
              <ul className="flex flex-col flex-wrap gap-[1rem]">
                <li className="group relative w-fit">
                  <button
                    onClick={() => {
                      scrollToSection('#about');
                    }}
                  >
                    About
                  </button>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-golden absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <button
                    onClick={() => {
                      scrollToSection('#faq');
                    }}
                  >
                    FAQs
                  </button>

                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-golden absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
              </ul>
              <ul className="flex flex-col flex-wrap gap-[1rem]">
                <li className="group relative w-fit">
                  <button
                    onClick={() => {
                      scrollToSection('#whattoexpect');
                    }}
                  >
                    What to Expect
                  </button>

                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-golden absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <button
                    onClick={() => {
                      scrollToSection('#contact');
                    }}
                  >
                    Contact
                  </button>

                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-golden absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
