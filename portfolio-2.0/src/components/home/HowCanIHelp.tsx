'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

import PackagesAtAGlance from '../common/sections/PackagesAtAGlance';
import ThreeDButtonLink from '../common/buttons/ThreeDButtonLink';

import sectionImage from './img/how-can-i-help.png';
import sectionImageMobile from './img/how-can-i-help-mobile.png';

export default function HowCanIHelp() {
  const isMobile = useIsMobile(1024);
  const image = useMemo(() => {
    return isMobile ? sectionImageMobile : sectionImage;
  }, [isMobile]);

  return (
    <section
      className={`w-full pt-[2rem] lg:pt-0 flex flex-col lg:flex-row items-center lg:gap-[1rem]`}
    >
      <div className="relative order-last w-full lg:max-w-[60%]">
        <Image
          src={image}
          alt="abstract design"
          width={1350}
          height={932}
          className={`hidden sm:block max-w-[600px]`}
        />
        <div className="w-full h-full sm:absolute sm:top-0 flex items-center justify-center">
          <PackagesAtAGlance />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-[8px]`}
      >
        <h1 className="sm:max-w-[500px]">How Can I Help?</h1>
        <p className="pb-[15px] max-w-[500px]">
          From website design, hosting setup and a fully coded website, I got
          you covered! I also have maintenance plans available.
        </p>
        <ThreeDButtonLink
          text="Compare Packages"
          link="/work-with-me#compare-packages"
        />
      </div>
    </section>
  );
}
