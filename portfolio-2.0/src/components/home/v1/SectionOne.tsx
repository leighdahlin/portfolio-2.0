import React from 'react';
import backgroundImage from './img/homepage-min.jpg';
import Image from 'next/image';
import { shrikhand } from '@/app/fonts';

export default function SectionOne() {
  return (
    <div className="h-[calc(100vh-60px)] relative text-off-white">
      <Image
        src={backgroundImage}
        alt="Picture of Leigh Dahlin"
        priority={true}
        fill={true}
        className="object-cover object-center"
      />
      <div className="absolute top-0 lg:top-1/2 w-full bg-dark-teal lg:bg-transparent p-[10px] lg:p-0 lg:pl-[4rem] text-center lg:text-left">
        <div className={shrikhand.className}>
          <h1 className="text-2xl sm:text-3xl xl:text-6xl">Leigh Dahlin</h1>
        </div>
        <h2 className="pt-[10px] text-lg sm:text-2xl lg:w-2/10">
          Website Developer & Designer
        </h2>
      </div>
    </div>
  );
}
