import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DigitalIdentityBlock() {
  return (
    <div className="bg-off-white dark:bg-soft-black mx-[auto] w-full flex items-center justify-center">
      <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <Image
          src="/images/home/digital-identity.png"
          alt="Digial identiy represented as a woman with icon in front on her for websites"
          className="w-full object-cover"
          width={1263}
          height={698}
        />
        <h2 className="font-semibold text-[1.325rem] mt-[1rem] text-black dark:text-off-white">
          Crafting Your Digital Identity.
        </h2>
        <p className="mt-[0.5rem] text-black dark:text-off-white">
          Why settle for an out-of-the-box website that can&apos;t evolve with
          your needs? Choose a website that offers flexibility and adaptability,
          ensuring it grows seamlessly alongside your business.
        </p>
        <Link
          href="/portfolio"
          className="p-[1rem] text-center bg-off-white dark:bg-soft-black text-dark-blue dark:text-off-white text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-dark-blue dark:hover:bg-off-white hover:text-off-white dark:hover:text-dark-blue my-[1rem] border border-dark-blue dark:border-off-white md:max-w-[175px]"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
