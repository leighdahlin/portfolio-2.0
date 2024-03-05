import React from 'react';
import backgroundImage from './img/wood.jpg';
import { shrikhand } from '@/app/fonts';
import Image from 'next/image';
import ContactButton from '../../ContactButton';

export default function HomepageSectionThree() {
  return (
    <div className="h-[calc(100vh-60px)] relative text-off-white">
      <Image
        src={backgroundImage}
        alt="Picture of Leigh Dahlin"
        fill={true}
        className="object-cover object-center"
      />
      <div className="absolute top-0 lg:top-[40%] w-full p-2 sm:p-5 lg:pl-[4rem]">
        <div className={shrikhand.className}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-[400px] pb-3 sm:pb-5 drop-shadow-[0px_0px_5px_black] md:drop-shadow-[3px_3px_9px_black]">
            Creating Great User Experiencess
          </h1>
        </div>
        <div className="drop-shadow-[0_0_10px_black] md:drop-shadow-[2px_2px_8px_black]">
          <ContactButton color="white" />
        </div>
      </div>
    </div>
  );
}
