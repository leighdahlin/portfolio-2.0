import React from 'react';
import Image from 'next/image';
import { shrikhand } from '@/app/fonts';
import meetLeigh from './img/meet-leigh.png';
import backgroundImage from './img/background.png';

export default function SectionTwo() {
  return (
    <div className="h-full md:h-[calc(100vh-60px)] bg-off-white md:bg-dark-teal relative">
      <div className="flex h-full">
        <Image
          src={backgroundImage}
          alt="Pattern of 0s and 1s"
          className="hidden md:flex md:w-1/2 h-auto"
        />
        <Image
          src={backgroundImage}
          alt="Pattern of 0s and 1s"
          className="hidden md:flex md:w-1/2 h-auto"
        />
      </div>

      <div className="md:absolute md:bottom-0 w-full flex justify-around md:justify-center md:gap-5 h-full sm:pt-10">
        <Image
          src={meetLeigh}
          alt="Picture of Leigh Dahlin"
          className="md:h-full w-auto hidden sm:block"
          width={500}
          height={1000}
        />
        <div className="flex items-center justify-center">
          <div className="md:flex md:items-center md:justify-center">
            <div className="bg-off-white h-full w-full p-[25px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] md:rounded-full">
              <div className={shrikhand.className}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl text-dark-blue text-left md:text-center md:pt-[3rem]">
                  Meet Leigh
                </h1>
              </div>
              <div className="flex justify-center py-5 lg:py-10">
                <p className="text-black max-w-[400px] lg:max-w-[450px] text-xs lg:text-sm leading-5 lg:leading-6 md:text-center">
                  I’m a frontend website developer and website designer. I enjoy
                  developing interfaces that my clients love. I worked for a
                  tech startup in Sacramento, CA for two years where I got to
                  work closely with designers. This inspired me to go off on my
                  own and work on my own designs. All of my interfaces are
                  designed to be responsive for web and mobile (and everything
                  in between). I can also help you with any small are large
                  changes to your website and I’m always happy to schedule a
                  meeting to discuss your needs.
                </p>
              </div>
              <div className="flex md:justify-center">
                <button className="px-10 py-[5px] bg-gradient-to-r from-teal to-dark-blue text-off-white rounded-xl">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
