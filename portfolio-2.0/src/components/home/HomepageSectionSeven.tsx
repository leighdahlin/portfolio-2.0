import React from 'react';
// import Image from 'next/image';
import { shrikhand } from '@/app/fonts';
import '../../app/globals.css';

export default function HomepageSectionSeven() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row p-10 scroll-mt-[60px]"
    >
      <div className="flex flex-col md:w-[50%] p-5">
        <div className={shrikhand.className}>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-dark-teal pb-10">
            Let&apos;s Connect
          </h1>
        </div>
        <div className="pb-5">
          <p className="pb-10">
            Do you have a question about a potential project?
          </p>
          <p className="pb-10">Or do you want more information about me?</p>
          <p className="pb-10">
            Send me a message! Or connect with me using the links below.
          </p>
        </div>
        <div className="flex items-center justify-around gap-5 w-[80%]">
          <a href="https://www.linkedin.com/in/leighdahlin/" target="_blanks">
            <img
              src="/images/connect-linkedin.png"
              height={40}
              width={40}
              alt="LinkenIn icon"
              className=""
            />
          </a>
          <a href="https://github.com/leighdahlin" target="_blanks">
            <img
              src="/images/connect-github.png"
              height={40}
              width={40}
              alt="GitHub icon"
              className=""
            />
          </a>
          <a href="mailto:leigh@leighdahlin.com">
            <img
              src="/images/connect-mail.png"
              height={40}
              width={40}
              alt="Mail icon"
              className=""
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:w-[50%] p-5">
        <div id="indy-65af88400f712078f18abc59" className="shadow-custom"></div>
        {/* <form className="flex flex-col justify-between gap-5 w-full h-full">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            className="p-2 rounded-lg shadow-lg"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="p-2 rounded-lg shadow-lg"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="p-2 rounded-lg shadow-lg"
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            rows={8}
            cols={50}
            className="p-2 rounded-lg shadow-lg"
            required
          />
          <div>
            <button className="px-10 py-[5px] bg-gradient-to-r from-teal to-dark-teal text-off-white text-sm md:text-base rounded-xl shadow-lg">
              Send
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
