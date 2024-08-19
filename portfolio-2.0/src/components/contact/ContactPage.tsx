import React from 'react';
import ImageWithTextSection from '../common/sections/ImageWithTextSection';
import contactHeaderImage from './img/contact-header.png';
import mobileHeaderImage from './img/contact-header-mobile.png';

export default function ContactPage() {
  return (
    <div className="block w-full bg-off-white">
      <ImageWithTextSection
        designSide="right"
        topTitle="Contact Leigh"
        title="Book Your Project or Get In Touch"
        paragraph="Update to something about contacting me or for all other inquires contact@leighdahlin.com."
        buttonText="Project Inquire Form"
        imageSrc={contactHeaderImage}
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
