'use client';
import React from 'react';
// import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import roadMapBackground from './img/road-map.png';
import { shrikhand } from '@/app/fonts';
import useIsMobile from '@/hooks/useIsMobile';

export default function HomepageSectionFour() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile(1024);

  // useEffect(() => {
  //   console.log(scrollPosition);
  // }, [scrollPosition]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentPosition = window.scrollY;

  //     // Set scroll position
  //     setScrollPosition(currentPosition);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="relative pt-10 flex flex-col justify-center items-center bg-off-white p-10">
      <div className="w-full flex items-center justify-center md:justify-start pb-2 md:pb-5">
        <div className={shrikhand.className}>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-dark-teal md:px-5 pb-5">
            Background
          </h1>
        </div>
      </div>
      <div
        className={`${
          isMobile ? 'flex flex-col gap-10' : 'h-full w-full text-black'
        }`}
      >
        <div className="lg:absolute lg:top-[10%] lg:right-[4%]">
          <h1 className="font-bold text-2xl pb-2">Education</h1>
          <p className="max-w-[500px]">
            I earned my Bacheolor’s and Master’s degrees in Accounting at Texas
            A&M University and went on to get my CPA(Certified Public
            Accountant) License. I forged a successful career path as an IT
            Auditor at a public accounting firm, a Corporate Accountant at a
            regional bank, and a Tax Preparer and Client Manager at a tax firm.
            During these years, I developed strengths in problem-solving,
            analytical thinking, communication, project management, and
            attention to detail, among other valuable skills.
          </p>
        </div>
        <div className="lg:absolute lg:top-[30%] lg:left-[4%]">
          <h1 className="font-bold text-2xl pb-2">Web Development</h1>
          <p className="max-w-[500px]">
            Seeking a more personally fulfilling journey, I transitioned to web
            development after completing a rigorous 6-month full-stack coding
            bootcamp at UC Davis. My transformative journey led me to contribute
            significantly to a cloud-based video security tech startup in
            Sacramento, where I not only revamped the corporate website
            single-handedly but also earned a promotion to contribute to the
            development of the company&apos;s product website. Over two years, I
            immersed myself in the dynamic realm of web development, acquiring
            hands-on experience and honing my skills in creating impactful
            digital experiences.
          </p>
        </div>
        <div className="lg:absolute lg:top-[70%] lg:right-[4%]">
          <h1 className="font-bold text-2xl pb-2">Freelancing</h1>
          <p className="max-w-[500px]">
            Currently, as a freelance web developer living in Germany, I bring a
            unique blend of financial acumen, technical expertise, and a passion
            for crafting exceptional websites that seamlessly blend
            functionality and design. My commitment to excellence, honed through
            diverse professional experiences, ensures that every project I
            undertake is not just a piece of code but a tailored solution that
            meets the unique needs of my clients.
          </p>
        </div>
      </div>
      {!isMobile && (
        <Image
          src={roadMapBackground}
          height={1286}
          width={1192}
          alt="Timeline with pins for points in the timeline"
          className=" w-full max-w-[1000px]"
        />
      )}
    </div>
  );
}
