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
        title="My Services"
        paragraph="From website design, hosting setup and a fully coded website, I got you covered! I also have maintenance plans available."
        buttonText="Jump To Packages"
        imageSrc={servicesHeaderImage}
        imageSrcMobile={mobileHeaderImage}
        imageAlt="Leggos on a soft back drop"
        imageWidth={1350}
        imageHeight={932}
        imageClass={null}
        buttonLink="#packages"
      />
    </div>
  );
}
