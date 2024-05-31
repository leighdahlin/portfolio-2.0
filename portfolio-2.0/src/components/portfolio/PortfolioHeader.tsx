import React from 'react';
import headerImage from './img/portfolio-header-image.png';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioHeader() {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-b lg:bg-gradient-to-r">
      <Image
        src={headerImage}
        alt="a laptop next to a cup of coffee and some leaves"
        width={512}
        height={512}
        className="lg:w-full lg:max-w-[669px]"
        loading="eager"
      />
      <div className="flex w-full lg:justify-center">
        <div className="py-[2.5rem] flex flex-col lg:justify-center gap-[1rem] mx-[0.625rem] lg:mx-[1.5625rem]">
          <h1 className="font-semibold leading-8 text-[1.5rem]">
            Featured Projects
          </h1>
          <p className="lg:max-w-[500px]">
            Welcome to my portfolio! Here you&apos;ll find a selection of my
            work, showcasing both client collaborations and personal projects.
            Each project highlights my skills, creativity, and dedication to
            delivering high-quality results. Explore the sections below to see
            what I can do for you.
          </p>
          <Link
            href="/contact"
            className="p-[1rem] bg-transparent text-dark-blue dark:text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-dark-blue dark:hover:bg-off-white hover:text-off-white dark:hover:text-dark-blue my-[1rem] border border-dark-blue dark:border-off-white w-fit"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
