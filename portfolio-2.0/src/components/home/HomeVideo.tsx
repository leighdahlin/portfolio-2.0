import React from 'react';

export default function HomeVideo() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center mb-[2.5rem]">
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <div className="flex w-full flex-col md:flex-ro ">
          <div
            data-id="top-text"
            className="block box-border text-black dark:text-off-white mx-[0.625rem] md:mx-[0rem]"
          >
            <div className="block box-border bg-off-white dark:bg-dark-blue w-full md:absolute md:top-[9.4375rem] md:w-[16rem] md:z-20">
              <h1 className="uppercase font-semibold leading-8 text-[1.5rem] pt-[1.5rem] md:pt-[2rem] md:pr-[1rem] tracking-[.1rem] text-center md:text-left max-w-[240px] mx-auto">
                Your vision, My expertise
              </h1>
              <p className="pt-[0.5rem] md:pr-[1rem] pb-[1rem] md:pb-[2rem] text-center md:text-left">
                Personalized websites{' '}
                <span className="text-golden font-semibold">
                  tailored to you
                </span>{' '}
                and your business&apos; needs.
              </p>
            </div>
          </div>
          <div className="box-border self-end w-full">
            <div data-id="video" className="relative">
              <div className="bg-black">
                <video
                  id="home-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/videos/gold-code-hd.mp4"
                  className="w-full bg-black object-cover md:object-contain overflow-clip h-[400px] md:h-[100%] md:max-h-[533px]"
                />
              </div>
            </div>
            <div
              data-id="button"
              className="flex flex-col justify-end relative w-full items-end bottom-[1.5rem] right-[1.5rem] box-border"
            >
              <div className="flex absolute z-20 gap-10 box-border">
                <button
                  onClick={() => {
                    scrollToContact();
                  }}
                  className="p-[1rem] bg-golden text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden"
                >
                  Get Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-id="bottom-text"
          className="flex flex-col md:flex-row md:justify-between mt-[1rem] md:mt-[2.5rem] mx-[0.625rem] md:mx-[0rem] text-black dark:text-off-white"
        >
          <h1 className="font-semibold leading-8 text-[1.5rem] text-left">
            Design and Development Services.
          </h1>
          <p className="text-left pt-[0.5rem] md:pt-[0rem]">
            Crafting your digital identity with someone you can trust.
          </p>
        </div>
      </div>
    </div>
  );
}
