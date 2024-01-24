import React from 'react';
import { shrikhand } from '@/app/fonts';
import Image from 'next/image';
import leighImage from './img/meet-leigh.png';

export default function HomepageSectionOne() {
  return (
    <div className="bg-off-white">
      <div className="h-full md:h-[calc(100vh-60px)] max-h-full pt-[40px] px-[20px] max-w-[1400px] bg-off-white">
        <div className="h-full w-full flex flex-col justify-between items-center gap-[10px] text-center md:flex-row md:justify-evenly md:text-left">
          <div className="flex flex-col justify-center">
            <div className={shrikhand.className}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-[20px] text-dark-teal">
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
          <Image
            src={leighImage}
            alt="Picture of Leigh Dahlin"
            priority={true}
            className="max-h-[80%] max-w-[33%] w-auto md:self-end"
            width={300}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
