import React from 'react';

export default function WhatToExpect() {
  //progress bar example
  //https://codepen.io/desandro/pen/obpVGa
  const slides = [
    {
      title: 'Initial Consultation',
      image: '/images/home/carousel/initial-consult.png',
      imageAlt: 'Pages full of colors and a hand holding text that says "logo"',
      text: "During our initial consultation, we'll sit down to discuss your project needs, whether it's design, development, or both. Prior to our meeting, you'll receive a questionnaire to help determine your goals and objectives. This ensures that we're aligned from the outset and can tailor our approach to best meet your needs.",
    },
    {
      title: 'Responsive Design',
      image: '/images/home/carousel/responsive-design.png',
      imageAlt: 'Laptop and cell phone',
      text: "Your website will be designed and developed to be fully responsive, adapting seamlessly to both mobile phones and computers. This ensures that your audience enjoys a consistent and optimal browsing experience, regardless of the device they're using to access your site.",
    },
    {
      title: 'Feedback and Collaboration',
      image: '/images/home/carousel/feedback.png',
      imageAlt: 'Two people having a meeting across a table',
      text: "Your feedback is invaluable throughout the entire process. You'll have ample opportunities to provide input and suggestions at each stage, ensuring that your vision is fully realized. I value collaboration and strive to incorporate your feedback to create a website that exceeds your expectations.",
    },
    {
      title: 'Approval at Each Stage',
      image: '/images/home/carousel/design-approval.png',
      imageAlt: 'Thumbs up',
      text: "To ensure your satisfaction, we'll break your project into manageable stages. Your approval will be sought before progressing to the next stage, giving you full control and peace of mind throughout the process. Your happiness is my priority, and your approval is key to achieving that.",
    },
    {
      title: 'Website Previews',
      image: '/images/home/carousel/website-dev.png',
      imageAlt: 'Something',
      text: "Transparency is essential. You'll have the opportunity to preview and review changes to your website before they're finalized and published. This allows you to provide feedback and make any necessary adjustments, ensuring that the end result perfectly reflects your vision and expectations.",
    },
    {
      title: 'Regular Check-Ins',
      image: '/images/home/carousel/regular-checkin.png',
      imageAlt: 'Two people having a video conference meeting',
      text: "I believe in keeping you informed every step of the way. Regular progress checks and updates ensure that you're always aware of the status of your project and have the opportunity to provide input or address any concerns promptly. Open communication is key to a successful collaboration.",
    },
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
