import React from 'react';
import ImageWithTextSection from '../common/ImageWithTextSection';
import ClientSection from './ClientsSection';
import portfolioHeaderImage from './img/portfolio-header.png';
import mobileHeaderImage from './img/portfolio-header-mobile.png';

export default function PortfolioPage() {
  return (
    <>
      <ImageWithTextSection
        designSide="left"
        topTitle="Porfolio"
        title="Featured Projects"
        paragraph="Welcome to my portfolio! Here you'll find a selection of my work, showcasing both client collaborations and personal projects. Each project highlights my skills, creativity, and dedication to delivering high-quality results. Explore the sections below to see what I can do for you."
        buttonText={null}
        imageSrc={portfolioHeaderImage}
        imageSrcMobile={mobileHeaderImage}
        imageAlt="image on a string on a soft back drop"
        imageWidth={1350}
        imageHeight={932}
        imageClass={null}
        buttonLink={null}
      />
      <ClientSection />
    </>
  );
}
