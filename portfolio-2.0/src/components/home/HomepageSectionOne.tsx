import React from 'react';
import { shrikhand } from '@/app/fonts';
// import Image from 'next/image';

export default function HomepageSectionOne() {
  return (
    <div className="bg-off-white">
      <div className="h-[calc(100vh-60px)] max-h-full pt-[40px] px-[20px] max-w-[1400px] bg-off-white">
        <div className="h-full w-full flex flex-col justify-between items-center gap-[25px] text-center md:flex-row md:justify-evenly md:text-left">
          <div className="flex flex-col justify-center">
            <div className={shrikhand.className}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-[30px] text-dark-teal">
                Hello, I&apos;m Leigh.
              </h1>
            </div>
            <p className="md:max-w-[425px] text-black">
              An experienced Frontend{' '}
              <span className="text-peach font-bold inline">Web Developer</span>{' '}
              and{' '}
              <span className="text-peach font-bold inline">
                User Interface Designer
              </span>{' '}
              skilled in crafting visually appealing and user-friendly websites.
            </p>
          </div>
          <img
            src="/images/meet-leigh.png"
            alt="Picture of Leigh Dahlin"
            className="max-w-[175px] sm:max-w-[200px] md:max-w-[250px] w-auto md:self-end"
            width={300}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
