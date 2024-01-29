'use client';
import React, { useState } from 'react';
import { shrikhand } from '@/app/fonts';

export default function HomepageSectionTwo() {
  const [selectedService, setSelectedService] = useState<null | number>(null);
  const services = [
    {
      label: 'Development',
      circleImage: '/images/1-dev-circle.png',
      wideImage: '/images/1-dev.png',
      alt: 'laptop with code on the screen',
      title: 'Custom Website Development',
      description:
        'Specializing in custom website development, I bring a meticulous approach to crafting unique digital experiences tailored to meet the specific needs of each client.',
    },
    {
      label: 'Design',
      circleImage: '/images/2-des-circle.png',
      wideImage: '/images/2-des.png',
      alt: 'laptop with design software on the screen',
      title: 'User Interface Design',
      description:
        'As a seasoned web developer, my proficiency extends to creating intuitive and visually compelling user interfaces that prioritize seamless user interactions.',
    },
    {
      label: 'Consultation',
      circleImage: '/images/3-con-circle.png',
      wideImage: '/images/3-con.png',
      alt: 'two people in a conference room in a discussion',
      title: 'Website Consultation',
      description:
        "In my consulting role, I provide strategic insights and expertise to elevate a client's website, focusing on enhancing its overall performance and user experience.",
    },
  ];
  return (
    <div
      id="services"
      className="bg-white h-full text-black scroll-mt-[60px] min-h-[calc(100vh-60px)]"
    >
      <div className="min-h-[calc(100vh-60px)] flex flex-col items-center p-5 md:p-10 max-w-[1400px]">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start pb-2 md:pb-5">
          <div className={shrikhand.className}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-dark-teal pr-5">
              Services
            </h1>
          </div>
          <p
            className={`${
              selectedService === null ? 'visible text-center' : 'invisible'
            }`}
          >
            (select one to learn more)
          </p>
        </div>
        <div className="md:flex md:justify-evenly items-center w-full flex-1 md:gap-5">
          <div className="flex flex-col items-start justify-center mx-auto gap-5 max-w-[450px] md:max-w-[350px] lg:max-w-[400px]">
            {services.map((s, i) => (
              <button
                key={s.label}
                onClick={() => {
                  setSelectedService(i);
                }}
                className={`${
                  selectedService === i
                    ? 'bg-dark-blue-transparent px-5 py-3 rounded-lg w-full'
                    : 'px-5 py-3 rounded-md w-full'
                }`}
              >
                <div
                  className={`${
                    selectedService === i ? 'flex flex-col gap-5' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={s.circleImage}
                      alt={s.alt}
                      width={200}
                      height={200}
                      className="w-[100px] h-[100px] lg:w-[125px] lg:h-[125px]"
                    />
                    <h2
                      className={`${
                        selectedService === i ? 'font-bold text-lg' : 'text-lg'
                      }`}
                    >
                      {s.label}
                    </h2>
                  </div>
                  {/* Smaller than MD screens ONLY */}
                  {selectedService === i && (
                    <p className="text-left text-sm md:hidden">
                      {s.description}
                    </p>
                  )}
                  {/* END Smaller than MD screens ONLY */}
                </div>
              </button>
            ))}
          </div>
          {/* MD+ SCREENS ONLY SECTION */}
          {selectedService !== null && (
            <div className="hidden md:flex md:justify-center md:w-[60%] max-w-[598px]">
              {services.map((s, i) => (
                <div
                  key={s.label}
                  className={`${
                    selectedService === i
                      ? 'visible flex flex-col gap-5 p-5'
                      : 'hidden h-0 w-0'
                  }`}
                >
                  <img
                    src={s.wideImage}
                    alt={s.alt}
                    width={498}
                    height={286}
                    className="w-full"
                  />
                  <p className="text-left">{s.description}</p>
                </div>
              ))}
            </div>
          )}
          {/* END MD+ ONLY SECTION */}
        </div>
      </div>
    </div>
  );
}
