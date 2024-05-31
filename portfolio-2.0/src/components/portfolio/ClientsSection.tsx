'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import givherclientLogoLight from './img/givher/client-logo-givher.png';
import givherclientLogoDark from './img/givher/client-logo-givher-dark.png';
import givherBackground from './img/givher/client-background-givher.png';
import givherThumbnailHome from './img/givher/thumbnail-homepage.png';
import givherThumbnailEvents from './img/givher/thumbnail-events.png';
import givherThumbnailEventDetail from './img/givher/thumbnail-event-detail.png';
import givherFullPageHome from './img/givher/fullpage-homepage.png';
import givherFullPageEvents from './img/givher/fullpage-events.png';
import givherFullPageEventDetail from './img/givher/fullpage-event-detail.png';
import givherThumbnailDarkmodeHome from './img/givher/thumbnail-darkmode-homepage.png';
import givherThumbnailDarkmodeEvents from './img/givher/thumbnail-darkmode-events.png';
import givherThumbnailDarkmodeEventDetail from './img/givher/thumbnail-darkmode-event-detail.png';
import givherFullPageDarkmodeHome from './img/givher/fullpage-darkmode-homepage.png';
import givherFullPageDarkmodeEvents from './img/givher/fullpage-darkmode-events.png';
import givherFullPageDarkmodeEventDetail from './img/givher/fullpage-darkmode-event-detail.png';

type FeaturedPage = {
  pageName: string;
  thumbnail: StaticImageData;
  fullPage: StaticImageData;
  darkModeThumbnail: StaticImageData;
  darkModeFullpage: StaticImageData;
};

type Highlight = {
  boldedText: string;
  text: string;
};

type ClientProject = {
  clientName: string;
  clientLogoLight: StaticImageData;
  clientLogoDark: StaticImageData;
  logoWidth: number;
  logoHeight: number;
  clientBackgroundImage: StaticImageData;
  clientBackgroundAlt: string;
  title: string;
  description: string;
  link: string;
  longDescription: string;
  skills: string;
  highlights: Highlight[];
  pages: FeaturedPage[];
  darkMode: boolean;
};

export default function ClientSection() {
  const [showProject, setShowProject] = useState<null | ClientProject>(null);
  const [selectedThumnail, setSelectedThumbnail] = useState<number>(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    //prevent scrolling behind open bio
    if (showProject) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showProject]);

  const clientProjects: ClientProject[] = [
    {
      clientName: 'Givher',
      clientLogoLight: givherclientLogoLight,
      clientLogoDark: givherclientLogoDark,
      logoWidth: 220,
      logoHeight: 96,
      clientBackgroundImage: givherBackground,
      clientBackgroundAlt: 'Palm trees in the sky',
      title: 'Dynamic Website Design and Development',
      description:
        'Crafting a visually engaging website with dynamic animations to reflect the client’s unique and vibrant brand identity.',
      link: 'https://www.givher.com/',
      longDescription:
        'Designed and developed a vibrant and engaging website for a political consultant, featuring dynamic elements that match the client’s personal style. Drawing inspiration from music events and modern tech websites, the site incorporates fun carousels and a flexible, user-friendly interface. Through collaborative meetings, we tailored the website to meet the client’s specific needs, providing advice and solutions to ensure her satisfaction. The website includes a seamless contact form integration and a dark mode toggle for enhanced accessibility and user experience.',
      skills: 'TypeScript, Tailwind, Next.js, Github',
      highlights: [
        {
          boldedText: 'Tailored Design and User Experience',
          text: 'Crafted a unique and engaging design inspired by modern events and tech websites, incorporating fun carousels to reflect the client’s vibrant personality.',
        },
        {
          boldedText: 'Client-Centric Collaboration',
          text: 'Worked closely with the client, offering flexible scheduling and tailored advice to ensure the final product met all her needs and exceeded expectations.',
        },
        {
          boldedText: 'Enhanced Functionality and Flexibility',
          text: 'Implemented a seamless contact form integration and a user-friendly dark mode toggle, ensuring an accessible and adaptable website experience.',
        },
      ],
      pages: [
        {
          pageName: 'Homepage',
          thumbnail: givherThumbnailHome,
          fullPage: givherFullPageHome,
          darkModeThumbnail: givherThumbnailDarkmodeHome,
          darkModeFullpage: givherFullPageDarkmodeHome,
        },
        {
          pageName: 'Events Page',
          thumbnail: givherThumbnailEvents,
          fullPage: givherFullPageEvents,
          darkModeThumbnail: givherThumbnailDarkmodeEvents,
          darkModeFullpage: givherFullPageDarkmodeEvents,
        },
        {
          pageName: 'Event Detail Page',
          thumbnail: givherThumbnailEventDetail,
          fullPage: givherFullPageEventDetail,
          darkModeThumbnail: givherThumbnailDarkmodeEventDetail,
          darkModeFullpage: givherFullPageDarkmodeEventDetail,
        },
      ],
      darkMode: true,
    },
  ];
  return (
    <div className=" bg-off-white dark:bg-dark-blue mx-[auto] w-full flex items-center justify-center lg:items-stretch py-[4rem] scroll-mt-[76px]">
      <div className="flex flex-col mx-[0.625rem] max-w-[85.75rem] lg:mx-[1.5625rem] lg:gap-[1rem] w-full">
        <div className="flex flex-col lg:flex-row gap-[2rem] lg:justify-between w-full">
          <div className="flex flex-col gap-[1rem]">
            <h1 className="font-semibold leading-8 text-[1.5rem]">
              Client Projects
            </h1>
            <p className="lg:max-w-[500px]">
              These are the projects I&apos;ve completed in collaboration with
              my clients. Each project demonstrates my ability to understand
              client needs, solve problems, and deliver outstanding results.
            </p>
          </div>
          <div className="">
            {clientProjects.map((p, i) => (
              <div key={i} className="relative w-full max-w-[720px]">
                <Image
                  src={p.clientBackgroundImage}
                  alt={p.clientBackgroundAlt}
                  width={720}
                  height={442}
                  className="w-full min-h-[442px] object-cover"
                />
                <div className="h-full max-w-[720px] absolute top-0 px-[2.5rem] py-[2rem] flex flex-col justify-between">
                  <Image
                    src={p.clientLogoLight}
                    alt={`${p.clientName} logo`}
                    width={p.logoWidth}
                    height={p.logoHeight}
                  />
                  <div className="flex flex-col gap-[1rem]">
                    <h2 className="font-semibold md:leading-8 text-[1rem] text-off-white">
                      {p.title}
                    </h2>
                    <p className="text-off-white">{p.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowProject(p);
                    }}
                    className="p-[1rem] bg-transparent text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-off-white dark:hover:bg-off-white hover:text-dark-blue dark:hover:text-dark-blue my-[1rem] border border-off-white w-fit min-w-[175px]"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row">
            <h1 className="font-semibold leading-8 text-[1.5rem]">Personal Projects</h1>
            <p>
              These are the projects I&apos;ve worked on independently, driven
              by my passion for [your field/industry]. These projects allow me
              to experiment with new ideas, hone my skills, and showcase my
              creativity.
            </p>
          </div>
          <div></div>
        </div> */}
        <div
          data-id="bio"
          className={`transition-opacity duration-300 ease-in-out z-[101] ${
            showProject ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {showProject && (
            <div
              className={`fixed top-0 left-0 bottom-0 w-full h-full bg-overlay visible overflow-hidden`}
            >
              <div className="bg-off-white dark:bg-dark-blue opacity-100 max-w-[85.75rem] max-h-[100vh] mx-auto relative m-[2.5rem] p-[1rem] md:p-[2.5rem] overflow-y-scroll">
                <button
                  type="button"
                  data-id="Close Button"
                  onClick={() => {
                    setShowProject(null);
                    setSelectedThumbnail(0);
                  }}
                  className={`group self-end flex flex-col items-center justify-between h-[50px] w-[50px] p-0 transition-transform absolute top-[10px] right-[10px]`}
                >
                  <div
                    className={`h-[2px] w-full bg-customGrey group-hover:bg-customGreyDarker absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] mt-0`}
                  />
                  <div
                    className={`h-[2px] w-full bg-customGrey group-hover:bg-customGreyDarker absolute top-[50%] left-[50%] max-w-[20px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 mt-0`}
                  />
                </button>
                <div className="flex flex-col gap-[2rem]">
                  <div className="flex flex-col md:flex-row md:gap-[5rem]">
                    <Image
                      src={showProject.clientLogoDark}
                      alt={`${showProject.clientName} logo`}
                      width={showProject.logoWidth}
                      height={showProject.logoHeight}
                      className="pb-[1rem] max-w-[150px] md:max-w-[unset]"
                    />
                    <div className="w-full flex flex-wrap items-center gap-[0.5rem] sm:gap-[1rem]">
                      <Link
                        href={showProject.link}
                        className="p-[1rem] bg-transparent text-dark-blue dark:text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-dark-blue dark:hover:bg-off-white hover:text-off-white dark:hover:text-dark-blue border border-dark-blue dark:border-off-white w-fit"
                      >
                        Launch Website
                      </Link>
                      <Link
                        href="/contact"
                        className={`block p-[1rem] min-w-[175px] bg-golden text-off-white text-center text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden`}
                      >
                        Request A Quote
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[2rem]">
                    <div className="flex flex-1 flex-col gap-[1rem]">
                      <h1 className="font-semibold leading-8 text-[1.5rem]">
                        {showProject.title}
                      </h1>
                      <p>{showProject.longDescription}</p>
                    </div>
                    <div className="flex flex-1 flex-col gap-[1rem]">
                      <div>
                        <h2 className="font-semibold inline-block">
                          Skills Used
                        </h2>
                        : <p className="inline-block">{showProject.skills}</p>
                      </div>
                      <div>
                        <h2 className="font-semibold">Project Highlights:</h2>
                        <ul className="list-disc pl-[1.5rem]">
                          {showProject.highlights.map((h, i) => (
                            <li key={i}>
                              <span className="font-semibold">
                                {h.boldedText} :{' '}
                              </span>
                              {h.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-[1rem]">
                    <div>
                      <div
                        data-id="dark mode toggle"
                        className="flex md:justify-center items-center gap-[1rem]"
                      >
                        <label
                          id="switch"
                          className="relative inline-block w-[60px] h-[34px]"
                        >
                          <input
                            type="checkbox"
                            onChange={() => {
                              setDarkMode(!darkMode);
                            }}
                            className="h-[0px] w-[0px]"
                          />
                          <span
                            id="slider round"
                            className={`absolute cursor-pointer rounded-[34px] top-0 left-0 right-0 bottom-0 transition before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:transition-all before:rounded-[50%] ${
                              darkMode
                                ? 'bg-golden before:bg-off-white before:translate-x-[26px]'
                                : 'bg-customGrey before:bg-off-white'
                            }`}
                          ></span>
                        </label>
                        <p className="text-black dark:text-off-white">
                          Show Dark Mode
                        </p>
                      </div>
                      <div className="flex flex-row md:flex-col gap-[1rem] pt-[1rem]">
                        {showProject.pages.map((p, i) => (
                          <button
                            key={i}
                            className="relative"
                            onClick={() => {
                              setSelectedThumbnail(i);
                            }}
                          >
                            <Image
                              src={darkMode ? p.darkModeThumbnail : p.thumbnail}
                              alt={`${showProject.clientName} page Thumbnail`}
                              width={240}
                              height={136}
                              className={`${
                                selectedThumnail === i
                                  ? 'md:scale-105 transition-all ease-in-out drop-shadow-xl duration-200'
                                  : 'scale:100 drop-shadow-none'
                              } `}
                            />
                            <div
                              className={`${
                                selectedThumnail === i
                                  ? ''
                                  : 'bg-black opacity-75'
                              } absolute top-0 w-full h-full`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="block overflow-scroll max-h-[650px] align-middle md:px-[2rem] py-[1rem]">
                      <Image
                        src={
                          darkMode
                            ? showProject.pages[selectedThumnail]
                                .darkModeFullpage
                            : showProject.pages[selectedThumnail].fullPage
                        }
                        alt={`${showProject.clientName} page`}
                        width={673}
                        className="w-full overflow-clip shadow-custom-light-separation"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
