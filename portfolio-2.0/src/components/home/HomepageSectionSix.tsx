import React from 'react';
import Image from 'next/image';
import { shrikhand } from '@/app/fonts';
import jsImage from './img/js.png';
import cssImage from './img/css.png';
import gitImage from './img/git.png';
import githubImage from './img/github.png';
import htmlImage from './img/html.png';
import nodeImage from './img/node.png';
import reactImage from './img/react.png';
import tsImage from './img/ts.png';

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
          <Image
            src={jsImage}
            height={100}
            width={100}
            alt="JavaScript icon"
            className=""
          />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={htmlImage}
            height={100}
            width={100}
            alt="HTML icon"
            className=""
          />
          <p>HTML</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={cssImage}
            height={100}
            width={100}
            alt="CSS icon"
            className=""
          />
          <p>CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={githubImage}
            height={100}
            width={100}
            alt="GitHub icon"
            className=""
          />
          <p>Github</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={tsImage}
            height={100}
            width={100}
            alt="TypeScript icon"
            className=""
          />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={reactImage}
            height={100}
            width={100}
            alt="React icon"
            className=""
          />
          <p>React</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={nodeImage}
            height={100}
            width={100}
            alt="Node icon"
            className=""
          />
          <p>Node</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-sm">
          <Image
            src={gitImage}
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
