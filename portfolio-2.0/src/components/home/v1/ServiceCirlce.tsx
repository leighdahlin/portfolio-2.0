import React from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function ServiceCircle({
  image,
  alt,
  selected,
  index,
}: {
  image: StaticImport;
  alt: string;
  selected: boolean;
  index: number;
}) {
  return (
    <div
      className={`${index === 1 || index === 2 ? `md:pt-[15rem]` : `md:pt-0`}`}
    >
      <Image
        src={image}
        alt={alt}
        height={200}
        width={200}
        className={`${
          selected
            ? `scale-105 transition-transform`
            : `hover:scale-105 transition-transform`
        }`}
      />
    </div>
  );
}
