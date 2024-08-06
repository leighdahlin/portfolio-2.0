'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ThreeDButton from './ThreeDButton';
import useIsMobile from '@/hooks/useIsMobile';

type ImageWithTextSectionProps = {
  designSide: 'right' | 'left';
  topTitle: string | null;
  title: string;
  paragraph: string;
  buttonText: string;
  imageSrc: StaticImageData;
  imageSrcMobile: StaticImageData | null;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageClass: string | null;
  buttonLink: string;
};

export default function ImageWithTextSection({
  designSide,
  topTitle,
  title,
  paragraph,
  buttonText,
  imageSrc,
  imageSrcMobile,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClass,
  buttonLink,
}: ImageWithTextSectionProps) {
  const isMobile = useIsMobile(1024);
  const image = !!imageSrcMobile && isMobile ? imageSrcMobile : imageSrc;

  return (
    <section
      className={`w-full pt-[2rem] lg:pt-0 pb-[2rem] flex ${designSide === 'left' ? 'flex-col-reverse' : 'flex-col justify-between'} lg:flex-row items-center gap-[1rem]`}
    >
      {designSide === 'left' && (
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`${imageClass} sm:max-w-[500px] lg:max-w-[55%]`}
        />
      )}
      <div
        className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-[8px] sm:max-w-[400px] ${designSide === 'left' ? 'mx-auto' : ''}`}
      >
        <h2 className="uppercase">{topTitle}</h2>
        <h1>{title}</h1>
        <p className="pb-[15px]">{paragraph}</p>
        {/* TO DO: CHANGE BUTTON LINK TO PRICING */}
        <ThreeDButton text={buttonText} link={buttonLink} />
      </div>
      {designSide === 'right' && (
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={`${imageClass} sm:max-w-[500px] lg:max-w-[50%]`}
        />
      )}
    </section>
  );
}
