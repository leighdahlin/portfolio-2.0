'use client';
import React, { useState } from 'react';
import Image from 'next/image';
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
        'Specializing in custom website development, I bring a meticulous approach to crafting unique digital experiences tailored to meet the specific needs of each client. Every line of code is carefully curated, ensuring not just functionality but a seamless blend of user-centric design and technical excellence. With a commitment to professionalism and precision, I transform concepts into sophisticated, responsive websites that elevate brands and engage audiences effectively.',
    },
    {
      label: 'Design',
      circleImage: '/images/2-des-circle.png',
      wideImage: '/images/2-des.png',
      alt: 'laptop with design software on the screen',
      title: 'User Interface Design',
      description:
        'As a seasoned web developer, my proficiency extends to creating intuitive and visually compelling user interfaces that prioritize seamless user interactions. Employing a user-centered design philosophy, I meticulously refine each element, ensuring an optimal balance between aesthetics and functionality. Through a keen understanding of user behavior, I strive to deliver interfaces that not only captivate but enhance the overall user experience, fostering engagement and satisfaction.',
    },
    {
      label: 'Consultation',
      circleImage: '/images/3-con-circle.png',
      wideImage: '/images/3-con.png',
      alt: 'two people in a conference room in a discussion',
      title: 'Website Consultation',
      description:
        "In my consulting role, I provide strategic insights and expertise to elevate a client's website, focusing on enhancing its overall performance and user experience. Through comprehensive analysis, I identify opportunities for improvement, offering tailored recommendations to optimize functionality, design, and user engagement. By collaborating closely with clients, I aim to empower them with actionable insights, guiding the evolution of their websites to align seamlessly with their business goals and user expectations.",
    },
  ];
  return (
    <div id="services" className="bg-white h-full text-black scroll-mt-[60px]">
      <div className="h-full flex flex-col justify-center items-center p-5 md:p-10 max-w-[1400px]">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start pb-2 md:pb-5">
          <div className={shrikhand.className}>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-dark-teal md:px-5">
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
        <div className="md:flex md:justify-evenly w-full md:h-full md:gap-5">
          <div className="pb-10 flex flex-col items-start justify-center mx-auto gap-5 max-w-[450px] md:max-w-[350px] lg:max-w-[400px]">
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
                    <Image
                      src={s.circleImage}
                      alt={s.alt}
                      width={200}
                      height={200}
                      className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
                    />
                    <h2
                      className={`${selectedService === i ? 'font-bold' : ''}`}
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
                      ? 'visible flex flex-col gap-5'
                      : 'hidden h-0 w-0'
                  }`}
                >
                  <Image
                    src={s.wideImage}
                    alt={s.alt}
                    width={498}
                    height={286}
                    className="w-full"
                  />
                  <p className="text-justify">{s.description}</p>
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
