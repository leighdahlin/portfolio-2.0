import React from 'react';
import Image from 'next/image';

export default function FormSection() {
  return (
    <div
      data-id="form-section"
      className="bg-off-white dark:bg-soft-black mx-[auto] w-full flex items-center justify-center py-[2rem]"
    >
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] md:mx-[1.5625rem]">
        <div className="flex flex-col md:flex-row md:border-b md:border-customGrey md:pb-[2rem] mx-[0.625rem]">
          <div className="md:pr-[1rem] md:w-1/2">
            <FreeConstulation />
          </div>
          <div className="md:w-1/2 mt-[2rem] md:mt-[0rem] md:pl-[2rem] md:border-l md:border-customGrey">
            <LetsConntect />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mx-[0.625rem]">
          <Image
            src="/images/home/contact.png"
            alt="Leigh holding a cup of coffee"
            className="hidden xl:block lg:w-1/3 xl:w-1/2 object-cover py-[2rem]"
            width={1000}
            height={1500}
          />
          <div
            id="contact"
            className="scroll-mt-[70px] w-full xl:w-1/2 flex justify-center pt-[2rem] xl:pt-[1rem]"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfm7sDRHlovEUDxS12r0OT2LCYRHymJeQ8j894jljRzWop2YA/viewform?embedded=true"
              width="640"
              height="1048"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LetsConntect() {
  return (
    <div>
      <h2 className="font-semibold text-[1.325rem] text-black dark:text-off-white">
        Let’s Connect
      </h2>
      <p className="mt-[0.5rem] text-black dark:text-off-white">
        You can connect with me using the links below.
      </p>
      <div className="flex items-center gap-[4rem] pt-[2rem]">
        <a href="https://www.linkedin.com/in/leighdahlin/" target="_blank">
          <Image
            src="/images/footer-linkedin.png"
            height={30}
            width={30}
            alt="LinkenIn icon"
            className="dark:hidden"
          />
          <Image
            src="/images/footer-linkedin-light.png"
            height={30}
            width={30}
            alt="LinkenIn icon"
            className="hidden dark:block"
          />
        </a>
        <a href="https://github.com/leighdahlin" target="_blank">
          <Image
            src="/images/footer-github.png"
            height={35}
            width={35}
            alt="Logo"
            className="dark:hidden"
          />
          <Image
            src="/images/footer-github-light.png"
            height={35}
            width={35}
            alt="Logo"
            className="hidden dark:block"
          />
        </a>
        <a href="mailto:leigh.dahlin@gmail.com">
          <Image
            src="/images/footer-mail.png"
            height={35}
            width={35}
            alt="Mail icon"
            className="dark:hidden"
          />
          <Image
            src="/images/footer-mail-light.png"
            height={35}
            width={35}
            alt="Mail icon"
            className="hidden dark:block"
          />
        </a>
      </div>
    </div>
  );
}

export function FreeConstulation() {
  const bullets = [
    {
      image: '/images/home/form/free.png',
      darkModeImage: '/images/home/form/free-light.png',
      alt: 'money',
      text: 'Free consultation and custom quote',
    },
    {
      image: '/images/home/form/commitment.png',
      darkModeImage: '/images/home/form/commitment-light.png',
      alt: 'hands shaking',
      text: 'No commitment until contract signed',
    },
    {
      image: '/images/home/form/separate.png',
      darkModeImage: '/images/home/form/separate-light.png',
      alt: 'two arrows pointing in different directions',
      text: 'Separte quotes for design and development',
    },
  ];

  return (
    <div>
      <h2 className="font-semibold text-[1.325rem] text-black dark:text-off-white">
        Free Consultation
      </h2>
      <p className="mt-[0.5rem] text-black dark:text-off-white mb-[1rem]">
        Interested in my services? Fill out{' '}
        <span className="xl:hidden">the form below</span>
        <span className="hidden xl:inline">this form</span> and we can set up a
        meeting to discuss your website needs.
      </p>
      <div className="flex flex-col gap-[1rem]">
        {bullets.map((b) => (
          <div key={b.alt} className="flex gap-[1rem]">
            <Image
              src={b.image}
              alt={b.alt}
              className="dark:hidden h-[40px] w-[55px]"
              width={55}
              height={40}
            />
            <Image
              src={b.darkModeImage}
              alt={b.alt}
              className="hidden dark:block h-[40px] w-[55px]"
              width={55}
              height={40}
            />
            <p className="font-semibold mt-[0.5rem] text-black dark:text-off-white">
              {b.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
