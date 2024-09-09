import React from 'react';
import loadingBgImage from './img/loading-background.png';
import loadingTextImage from './img/loading-text.png';
import Image from 'next/image';

export default function LoadingPage() {
  return (
    <div className="relative bg-off-white dark-bg-dark-blue flex items-center justify-center h-full p-[25px]">
      <Image
        src={loadingBgImage}
        className="w-[221px] animate-pulse-slow"
        width={443}
        height={416}
        alt="abstract blobs"
      />
      <Image
        src={loadingTextImage}
        className="w-[150px] absolute top-[37%]"
        width={305}
        height={75}
        alt="Loading..."
      />
    </div>
  );
}
