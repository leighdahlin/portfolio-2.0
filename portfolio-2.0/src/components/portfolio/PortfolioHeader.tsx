import React from 'react';
import headerImage from './img/portfolio-header-image.png';
import Image from 'next/image';

export default function PortfolioHeader() {
  return (
    <div className="flex flex-col md:flex-row">
      <Image
        src={headerImage}
        alt="a laptop next to a cup of coffee and some leaves"
        width={512}
        height={512}
        className="w-[70%] md:w-full md:max-w-[800px]"
      />
      <div className="flex w-full md:justify-center">
        <div className="py-[2.5rem] flex flex-col md:justify-center gap-[1rem] mx-[0.625rem] md:mx-[1.5625rem] max-w-[550px]">
          <h1 className="font-semibold leading-8 text-[1.5rem]">
            Featured Projects
          </h1>
          <p className="">
            Welcome to my portfolio! Here you&apos;ll find a selection of my
            work, showcasing both client collaborations and personal projects.
            Each project highlights my skills, creativity, and dedication to
            delivering high-quality results. Explore the sections below to see
            what I can do for you.
          </p>
        </div>
      </div>
    </div>
  );
}
