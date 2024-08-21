import React from 'react';
import ImageWithTextSection from '../common/sections/ImageWithTextSection';
import contactHeaderImage from './img/contact-header.png';
import mobileHeaderImage from './img/contact-header-mobile.png';

export default function ContactPage() {
  return (
    <div className="block w-full bg-off-white">
      <ImageWithTextSection
        designSide="right"
        topTitle="Let's Connect"
        title="Start Your Project or Drop a Line"
        paragraph="If you're ready to bring your project to life or just have a question, I'm here to help. Whether it's a new website, ongoing support, or any other inquiry, feel free to reach out. For all inquiries, you can also email me directly at contact@leighdahlin.com. I look forward to hearing from you!"
        buttonText="Get in Touch"
        imageSrc={contactHeaderImage}
        imageSrcMobile={mobileHeaderImage}
        imageAlt="Leggos on a soft back drop"
        imageWidth={1350}
        imageHeight={932}
        imageClass={null}
        buttonLink="/contact/#inquiryform"
      />
    </div>
  );
}
