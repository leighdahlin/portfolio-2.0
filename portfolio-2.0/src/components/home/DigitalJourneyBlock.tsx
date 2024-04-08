import React from 'react';

export default function EmpowerJourneyBlock() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center mt-[1rem]">
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <img
          src="/images/home/digital-journey.png"
          alt="Man walking on beach next to mountains"
          className="w-full object-cover"
        />
        <h2 className="font-semibold text-[1.325rem] mt-[1rem] text-black dark:text-off-white">
          Empowering Your Online Journey.
        </h2>
        <p className="mt-[0.5rem] text-black dark:text-off-white">
          Your website should reflect the creativity and uniqueness of your
          business. Don&apos;t settle for anything less than a captivating and
          distinctive online presence.
        </p>
        <button
          onClick={() => {
            scrollToContact();
          }}
          className="p-[1rem] my-[1rem] bg-golden text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden md:max-w-[175px]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
