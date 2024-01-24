'use client';

import React, { useState } from 'react';
import { shrikhand } from '@/app/fonts';
import ServiceCircle from './ServiceCirlce';

import serviceOne from './img/1-development.png';
import serviceTwo from './img/2-design.png';
import serviceThree from './img/3-responsive.png';
import serviceFour from './img/4-consult.png';

export default function SectionThree() {
  const services = [
    {
      title: 'Custom Website Development',
      paragraph:
        'Let me bring your vision to life with tailor-made solutions that not only meet but exceed your expectations, I understand that your online presence is a reflection of your brand identity.',
      image: serviceOne,
      alt: '',
    },
    {
      title: 'User Centric Website Design',
      paragraph:
        'My focus is on creating websites that not only look great but also provide an intuitive and enjoyable user experience. Your audience will love navigating through your site.',
      image: serviceTwo,
      alt: '',
    },
    {
      title: 'Responsive Websites',
      paragraph:
        'With the increasing use of various devices, I will ensure that your website looks and functions flawlessly across desktops, tablets, and mobiles. No matter where your audience is, your website will be ready to impress.',
      image: serviceThree,
      alt: '',
    },
    {
      title: 'Consultation',
      paragraph:
        'Your input is invaluable. We involve you in every step of the development process, ensuring that the final product aligns perfectly with your vision and business goals.',
      image: serviceFour,
      alt: '',
    },
  ];
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="h-full md:h-[calc(100vh-60px)] bg-off-white flex flex-col items-center p-10">
      <div className={shrikhand.className}>
        <h1 className="text-3xl sm:text-5xl xl:text-6xl text-dark-blue text-left md:text-center md:pt-[3rem] pb-10 md:pb-0">
          Services
        </h1>
      </div>
      <div className="relative h-full w-full flex flex-col items-center">
        <div className="absolute top-[60px] flex flex-col max-w-[600px] text-center">
          <p className="font-bold text-lg text-black">
            {services[selectedService].title}
          </p>
          <p className="text-black"> {services[selectedService].paragraph}</p>
        </div>
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center">
          {services.map((service, i) => {
            return (
              <button
                key={service.title}
                onClick={() => {
                  setSelectedService(i);
                }}
              >
                <ServiceCircle
                  image={service.image}
                  alt={service.alt}
                  selected={i === selectedService}
                  index={i}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
