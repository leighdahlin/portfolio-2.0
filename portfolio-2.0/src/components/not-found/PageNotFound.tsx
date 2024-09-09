import React from 'react';
import Image from 'next/image';
import bgImage from './img/oops-bg.png';
import oopsImage from './img/oops-text.png';
import ThreeDButtonLink from '../common/buttons/ThreeDButtonLink';

export default function PageNotFound() {
  return (
    <div className="relative bg-off-white dark:bg-soft-black flex flex-col gap-[2rem] items-center justify-center h-full">
      <Image
        src={bgImage}
        alt="overlapping abstract pattern"
        width={2050}
        height={1010}
        className="max-h-[calc(100vh-96px)] w-auto"
      />
      <div className="absolute flex flex-col gap-[0.5rem] sm:gap-[1rem] lg:gap-[2rem] justify-center items-center">
        <Image
          src={oopsImage}
          alt="Oops!"
          width={305}
          height={75}
          className="w-[125px] md:w-[200px] lg:w-[305px]"
        />
        <p className="text-black dark:text-off-white">
          There isn&apos;t a page here.
        </p>
        <ThreeDButtonLink text="Let's Go Home" link="/" />
      </div>
    </div>
  );
}
