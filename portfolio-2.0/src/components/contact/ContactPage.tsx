import React from 'react';
// import { LetsConntect, FreeConstulation } from '../home/Form';

export default function ContactPage() {
  return (
    <div className="bg-off-white dark:bg-soft-black mx-[auto] w-full flex items-center justify-center pb-[2rem]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-[85.75rem] md:mx-[1.5625rem] ">
        <div className="mt-[30px] flex flex-col gap-[4rem] max-w-[500px] mx-[0.625rem]">
          {/* <LetsConntect />
          <FreeConstulation /> */}
        </div>
        <div
          id="contact"
          className="scroll-mt-[70px] w-full xl:w-1/2 flex justify-center pt-[4rem] lg:pt-[1rem]"
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfm7sDRHlovEUDxS12r0OT2LCYRHymJeQ8j894jljRzWop2YA/viewform?embedded=true"
            width="640"
            height="1048"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
