'use client';
import React, { useState, useEffect } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import { AboutCardInfoType } from './AboutBlocks';
import Image from 'next/image';

interface AboutCardProps {
  aboutCardInfo: AboutCardInfoType;
}

export default function AboutCard({ aboutCardInfo }: AboutCardProps) {
  const isMobile = useIsMobile(768);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  return (
    <div
      data-id="about-card"
      className="flex flex-col justify-between h-full flex-grow mb-[1rem] w-full md:w-1/3"
    >
      <div className="flex flex-col text-black dark:text-off-white">
        <Image
          src={aboutCardInfo.image}
          alt={aboutCardInfo.imageAlt}
          className="h-[400px] sm:h-[600px] object-cover object-[center 35%]"
          width={1000}
          height={1500}
        />
        <h2 className="font-semibold text-[1.325rem] mt-[1rem]">
          {mounted && isMobile
            ? aboutCardInfo.mobileTitle
            : aboutCardInfo.webTitle}
        </h2>
        <p className="mt-[0.5rem]">{aboutCardInfo.description}</p>
      </div>
      {/* <button className="p-[1rem] bg-off-white dark:bg-dark-blue text-dark-blue dark:text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-dark-blue dark:hover:bg-off-white hover:text-off-white dark:hover:text-dark-blue my-[1rem] border border-dark-blue dark:border-off-white md:w-fit md:min-w-[175px]">
        {aboutCardInfo.buttonText}
      </button> */}
    </div>
  );
}
