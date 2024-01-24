import React from 'react';
// import img from 'next/img';
import { shrikhand } from '@/app/fonts';

export default function HomepageSectionSix() {
  return (
    <div id="skills" className="flex flex-col gap-10 p-10 scroll-mt-[60px]">
      <div className={shrikhand.className}>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-dark-teal md:px-5 pb-5">
          Skills
        </h1>
      </div>
      <div className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-4 max-w-[1400px]">
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/js.png"
            height={100}
            width={100}
            alt="JavaScript icon"
            className=""
          />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/html.png"
            height={100}
            width={100}
            alt="HTML icon"
            className=""
          />
          <p>HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/css.png"
            height={100}
            width={100}
            alt="CSS icon"
            className=""
          />
          <p>CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/github.png"
            height={100}
            width={100}
            alt="GitHub icon"
            className=""
          />
          <p>Github</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/ts.png"
            height={100}
            width={100}
            alt="TypeScript icon"
            className=""
          />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/react.png"
            height={100}
            width={100}
            alt="React icon"
            className=""
          />
          <p>React</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/node.png"
            height={100}
            width={100}
            alt="Node icon"
            className=""
          />
          <p>Node</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <img
            src="/images/git.png"
            height={100}
            width={100}
            alt="Git icon"
            className=""
          />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}
