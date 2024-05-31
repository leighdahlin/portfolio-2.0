import React from 'react';
import AboutCard from './AboutCard';

export interface AboutCardInfoType {
  mobileTitle: string;
  webTitle: string;
  description: string;
  buttonText: string;
  image: string;
  imageAlt: string;
}

export default function AboutBlocks() {
  const aboutCards: AboutCardInfoType[] = [
    {
      mobileTitle: 'Professional Background.',
      webTitle: 'Professional.',
      description:
        'Leigh brings a wealth of experience to the table as a professional, having spent 7 years as a Certified Public Accountant before transitioning to development in 2021. With dedication to crafting exceptional user experiences, Leigh is committed to delivering top-notch results for every project.',
      buttonText: 'View Experience',
      image: '/images/home/professional.png',
      imageAlt:
        'Leigh Dahlin with her arms crossed and an old brick wall in the background',
    },
    {
      mobileTitle: 'Diverse Set of Skills.',
      webTitle: 'Skilled.',
      description:
        'Leigh brings a diverse set of skills to the table, with a focus on React and Jamstack applications. Committed to ongoing growth, she stays at the forefront of industry trends, incorporating technologies like TypeScript while continually expanding her knowledge base.',
      buttonText: 'View Skills',
      image: '/images/home/skilled.png',
      imageAlt: 'Leigh Dahlin leaning against a blue door',
    },
    {
      mobileTitle: 'Versatile Experience.',
      webTitle: 'Versatile.',
      description:
        'Leigh thrives on the diversity of projects, believing that no endeavor is too big or small. With a versatile experience spanning various industries and challenges, she approaches each project with dedication and expertise, ensuring exceptional results every time as well as client satisfaction.',
      buttonText: 'View Projects',
      image: '/images/home/experienced.png',
      imageAlt: 'Leigh Dahlin typing on a laptop',
    },
  ];
  return (
    <div
      id="about"
      className=" bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center md:items-stretch pb-[2rem] scroll-mt-[76px]"
    >
      <div className="flex flex-col items-center justify-center mx-[0.625rem] max-w-[85.75rem] md:flex-row md:mx-[1.5625rem] md:gap-[1rem]">
        {aboutCards.map((c) => (
          <AboutCard key={c.webTitle} aboutCardInfo={c} />
        ))}
      </div>
    </div>
  );
}
