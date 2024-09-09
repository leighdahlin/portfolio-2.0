import React from 'react';
import ImageWithTextSection from '../common/sections/ImageWithTextSection';
import headerImage from './img/homepage-header-2.png';
import headerImageMobile from './img/homepage-header-mobile.png';
import meetLeighImage from './img/meet-leigh.png';
import { lazy } from 'react';

const HowCanIHelp = lazy(() => import('./HowCanIHelp'));

export default function Home() {
  return (
    <div className="block w-full bg-off-white">
      <ImageWithTextSection
        designSide="right"
        topTitle="Leigh Dahlin"
        title="Sleek, Custom + Fast React Websites"
        paragraph="I design and develop personalized websites tailored to you and your business' needs, saving you time and money while bringing your vision to life."
        buttonText="Let’s Go"
        imageSrc={headerImage}
        imageSrcMobile={headerImageMobile}
        imageAlt="Paper plans flying high on a soft back drop"
        imageWidth={1350}
        imageHeight={932}
        imageClass={null}
        buttonLink="/portfolio"
      />
      <ImageWithTextSection
        designSide="left"
        topTitle="Meet Leigh"
        title="Your React Expert + User Interface Designer"
        paragraph="I design and develop personalized websites tailored to you and your business' needs, saving you time and money while bringing your vision to life."
        buttonText="Get To Know Me"
        imageSrc={meetLeighImage}
        imageSrcMobile={null}
        imageAlt="Leigh Dahlin"
        imageWidth={934}
        imageHeight={1050}
        imageClass="pt-[1rem] lg:pt-0 max-h-[600px] w-auto lg:w-[500px]"
        buttonLink="/about"
      />
      <HowCanIHelp />
    </div>
  );
}
