import React from 'react';
import ImageWithTextSection from '../common/sections/ImageWithTextSection';
import servicesHeaderImage from './img/services-header.png';
import mobileHeaderImage from './img/services-header-mobile.png';

export default function WorkWithMePage() {
  return (
    <div className="block w-full bg-off-white">
      <ImageWithTextSection
        designSide="left"
        topTitle={null}
        title="Let's Build Something Great Together"
        paragraph="Whether you're looking for a stunning website design, seamless hosting setup, or a fully coded and responsive site, I've got you covered! From start to finish, I'm here to turn your vision into a reality. Plus, with flexible maintenance plans, you can ensure your website stays fresh and functional long after launch."
        buttonText="Book a Free Consultation"
        imageSrc={servicesHeaderImage}
        imageSrcMobile={mobileHeaderImage}
        imageAlt="Leggos on a soft back drop"
        imageWidth={1350}
        imageHeight={932}
        imageClass={null}
        buttonLink="/contact"
      />
    </div>
  );
}
