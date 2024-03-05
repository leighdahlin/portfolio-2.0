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
        'Leigh is experienced website developer with a passion for user interface design and creating unique user experiences.',
      buttonText: 'View Experience',
      image: '/images/home/professional.png',
      imageAlt:
        'Leigh Dahlin with her arms crossed and an old brick wall in the background',
    },
    {
      mobileTitle: 'Diverse Set of Skills.',
      webTitle: 'Skilled.',
      description:
        'While she specializes in React and Jamstack applications, Leigh’s always learning new skills and technologies.',
      buttonText: 'View Skills',
      image: '/images/home/skilled.png',
      imageAlt: 'Leigh Dahlin leaning against a blue door',
    },
    {
      mobileTitle: 'Experienced in Project Management.',
      webTitle: 'Experienced.',
      description:
        'She enjoys working on a variety of projects and believes that no project is too big or small, Leigh has a wide variety of projects.',
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
