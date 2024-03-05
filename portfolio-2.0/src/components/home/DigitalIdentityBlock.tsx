import React from 'react';

export default function DigitalIdentityBlock() {
  const scrollToFaq = () => {
    const contactSection = document.querySelector('#faq');
    console.log(contactSection);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center my-[2rem]">
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <img
          src="/images/home/digital-identity.png"
          alt="Digial identiy represented as a woman with icon in front on her for websites"
          className="w-full object-cover"
        />
        <h2 className="font-semibold text-[1.325rem] mt-[1rem] text-black dark:text-off-white">
          Crafting Your Digital Identity.
        </h2>
        <p className="mt-[0.5rem] text-black dark:text-off-white">
          Why settle for an out-of-the-box website that can&apos;t grow with
          you? Choose a website that’s flexible and adaptable.
        </p>
        <button
          onClick={() => {
            scrollToFaq();
          }}
          className="p-[1rem] bg-off-white dark:bg-dark-blue text-dark-blue dark:text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-dark-blue dark:hover:bg-off-white hover:text-off-white dark:hover:text-dark-blue my-[1rem] border border-dark-blue dark:border-off-white md:max-w-[175px]"
        >
          View FAQs
        </button>
      </div>
    </div>
  );
}
