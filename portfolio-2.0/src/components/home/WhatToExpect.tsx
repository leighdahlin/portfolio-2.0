import React from 'react';

export default function WhatToExpect() {
  //progress bar example
  //https://codepen.io/desandro/pen/obpVGa

  const slides = [
    {
      title: 'Inital Consult',
      image: '/images/home/carousel/initial-consult.png',
      imageAlt: 'pages full of colors and a hand holding text that says "logo"',
      text: 'We will meet to discuss your needs, whether that be design, development or both. You will be provided with a questionnaire before the meeting to determine what your goals are.',
    },
    {
      title: 'Responsive',
      image: '/images/home/carousel/responsive-design.png',
      imageAlt: 'Laptop and cell phone',
      text: 'All designs and website development will be adapted to both mobile phones and computers so your viewers will always have the best experience.',
    },
    {
      title: 'Feedback',
      image: '/images/home/carousel/feedback.png',
      imageAlt: 'Two people having a meeting across a table',
      text: 'Your feedback is valuable. You will have opportunities to provide feedback at each stage in the process, ensuring that you get as much value as possible from this process.',
    },
    {
      title: 'Approval at Each Stage',
      image: '/images/home/carousel/design-approval.png',
      imageAlt: 'Thumbs up',
      text: 'We will break up your project into stages, and your approval will be required before we proceed to the next stage to ensure you are a happy customer.',
    },
    {
      title: 'Website Previews',
      image: '/images/home/carousel/website-dev.png',
      imageAlt: 'something',
      text: 'It is important that you can see the changes to your website before they are published. All of my websites include website previews, so you can feel at ease about each update that is made to your website.',
    },
    {
      title: 'Regular Check-Ins',
      image: '/images/home/carousel/regular-checkin.png',
      imageAlt: 'Two people having a video conference meeting',
      text: 'Progress checks are important so you know where everything is at.',
    },
    //Change to something else
    // {
    //   title: 'Publish Website',
    //   image: '/images/home/carousel/publish.png',
    //   imageAlt: 'something',
    //   text: 'Progress checks are important so you know where everything is at.',
    // },
  ];

  return (
    <div
      id="whattoexpect"
      className="bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center py-[2rem] scroll-mt-[76px]"
    >
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] overflow-hidden">
        <h1 className="uppercase font-semibold leading-8 text-[1.5rem] mb-[0.5rem] text-black dark:text-off-white">
          What To Expect
        </h1>
        <div
          className="main-carousel"
          data-flickity='{ "freeScroll": true, "imagesLoaded": true, "adaptiveHeight": true, "prevNextButtons": true, "cellAlign": "left" }'
        >
          {slides.map((s) => (
            <div
              key={s.title}
              data-id="card"
              className="carousel-cell w-/2 mr-[2rem]"
            >
              <div className="group relative overflow-hidden">
                <img
                  data-flickity-lazyload
                  src={s.image}
                  alt={s.imageAlt}
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
