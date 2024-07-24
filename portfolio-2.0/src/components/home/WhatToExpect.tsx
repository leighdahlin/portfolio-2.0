'use client';
import React from 'react';
import Image from 'next/image';

export default function WhatToExpect() {
  //progress bar example
  //https://codepen.io/desandro/pen/obpVGa
  const slides = [
    {
      title: 'Initial Consultation',
      image: '/images/home/carousel/initial-consult.png',
      imageAlt: 'Pages full of colors and a hand holding text that says "logo"',
      text: "In our initial meeting, we'll discuss your project needs. Beforehand, you'll receive a questionnaire to align our approach with your goals.",
    },
    {
      title: 'Responsive Design',
      image: '/images/home/carousel/responsive-design.png',
      imageAlt: 'Laptop and cell phone',
      text: 'Your website will be fully responsive, ensuring an optimal browsing experience on all devices.',
    },
    {
      title: 'Feedback and Collaboration',
      image: '/images/home/carousel/feedback.png',
      imageAlt: 'Two people having a meeting across a table',
      text: "Your input is crucial. You'll have ample opportunities to provide feedback at every stage, ensuring your vision is realized.",
    },
    {
      title: 'Approval at Each Stage',
      image: '/images/home/carousel/design-approval.png',
      imageAlt: 'Thumbs up',
      text: "We'll seek your approval before progressing, giving you control and peace of mind throughout.",
    },
    {
      title: 'Website Previews',
      image: '/images/home/carousel/website-dev.png',
      imageAlt: 'Something',
      text: "Transparency is key. You'll preview and review changes before finalization, ensuring your vision is accurately reflected.",
    },
    {
      title: 'Regular Check-Ins',
      image: '/images/home/carousel/regular-checkin.png',
      imageAlt: 'Two people having a video conference meeting',
      text: 'Regular progress updates keep you informed and provide opportunities for input.',
    },
  ];

  return (
    <div
      id="whattoexpect"
      className="bg-off-white dark:bg-soft-black mx-[auto] w-full flex items-center justify-center py-[2rem] scroll-mt-[76px]"
    >
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] overflow-hidden">
        <h1 className="uppercase font-semibold leading-8 text-[1.5rem] mb-[0.5rem] text-black dark:text-off-white">
          What To Expect
        </h1>
        <div
          className="main-carousel"
          data-flickity='{ "freeScroll": true, "imagesLoaded": true, "adaptiveHeight": true, "prevNextButtons": true, "cellAlign": "left", "wrapAround": true }'
        >
          {slides.map((s) => (
            <div
              key={s.title}
              data-id="card"
              className="carousel-cell w-/2 mr-[2rem]"
            >
              <div className="group relative overflow-hidden">
                <Image
                  data-flickity-lazyload
                  src={s.image}
                  alt={s.imageAlt}
                  width={285}
                  height={396}
                  className="group-hover:scale-[1.1] transition duration-400 ease-in-out overflow-hidden"
                />
                <div className="absolute top-[225px] left-0 p-5 translate-y-[50px] group-hover:translate-y-0 flex flex-col justify-end transition duration-400">
                  <h2 className="text-off-white font-semibold pb-2">
                    {s.title}
                  </h2>
                  <p className="text-off-white text-[0.75rem] transition duration-400 opacity-0 ease-in-out group-hover:opacity-100">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
