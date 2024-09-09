'use client';
import React from 'react';
import Link from 'next/link';

export default function HomeVideo() {
  return (
    <div className="bg-off-white dark:bg-soft-black mx-[auto] w-full flex items-center justify-center mb-[4.5rem]">
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <div className="w-full grid grid-cols-12 gap-4">
          <div
            data-id="top-text"
            className="block box-border text-black dark:text-off-white mx-[0.625rem] md:mx-[0rem] col-start-1 col-span-12"
          >
            <div className="block box-border bg-off-white dark:bg-soft-black w-full md:absolute md:top-[14rem] md:w-[440px] md:z-20">
              <h1 className="font-semibold leading-[50px] text-[2rem] pt-[1.5rem] md:pt-[2rem] md:pr-[1rem] tracking-[.1rem] text-center md:text-left mx-auto">
                Sleek, Custom + <span className="italic">Fast</span> <br />{' '}
                React Websites For Businessess
              </h1>
              <p className="pt-[0.5rem] md:pr-[1rem] pb-[1rem] md:pb-[2rem] text-center md:text-left">
                I design <span className="italic">and</span> develop
                personalized websites{' '}
                <span className="text-golden font-semibold">
                  tailored to you
                </span>{' '}
                and your business&apos; needs, saving you time and money while
                bringing your vision to life.
              </p>
            </div>
          </div>
          <div className="box-border self-end w-full col-start-2 col-span-11">
            <div data-id="video" className="relative">
              <div className="bg-black">
                <video
                  id="home-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/videos/gold-code-hd.mp4"
                  className="w-full bg-black object-cover md:object-contain overflow-clip h-[400px] md:h-[100%] md:max-h-[533px]"
                />
              </div>
            </div>
            <div
              data-id="button"
              className="flex flex-col justify-end relative w-full items-end bottom-[1.5rem] right-[1.5rem] box-border"
            >
              <div className="flex absolute z-20 gap-10 box-border">
                <Link
                  href="/contact"
                  className="p-[1rem] bg-golden text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
            <div
              data-id="bottom-text"
              className="flex flex-col md:flex-row md:justify-between mt-[1rem] md:mt-[2.5rem] mx-[0.625rem] md:mx-[0rem] text-black dark:text-off-white"
            >
              <h1 className="font-semibold leading-8 text-[1.5rem] text-left">
                Design and Development Services.
              </h1>
              <p className="text-left pt-[0.5rem] md:pt-[0rem]">
                Crafting your digital identity with someone you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
