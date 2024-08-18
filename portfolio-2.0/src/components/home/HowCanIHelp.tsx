'use client';

import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

import PackagesAtAGlance from '../common/PackagesAtAGlance';
import ThreeDButtonLink from '../common/ThreeDButtonLink';

import sectionImage from './img/how-can-i-help.png';
import sectionImageMobile from './img/how-can-i-help.png';

export default function HowCanIHelp() {
  const isMobile = useIsMobile(1024);
  const image = isMobile ? sectionImageMobile : sectionImage;

  return (
    <section
      className={`w-full pt-[2rem] lg:pt-0 pb-[2rem] flex flex-col lg:flex-row items-center gap-[1rem]`}
    >
      <div className="relative order-last lg:max-w-[55%]">
        <Image
          src={image}
          alt="abstract design"
          width={1350}
          height={932}
          className={``}
        />
        <div className="absolute top-[15%] right-[10%] max-w-[550px]">
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
