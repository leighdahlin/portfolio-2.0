import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';

export default function NotFound() {
  return (
    <GlobalLayout>
      <div className="bg-off-white dark:bg-dark-blue flex flex-col gap-[2rem] items-center justify-center h-full">
        <p className="text-black dark:text-off-white">Page Not Found</p>
        <a
          href="/"
          className="p-[0.75rem] min-w-[175px] bg-golden text-off-white text-center text-sm md:text-base rounded-[.25rem] font-medium tracking-[.1rem] hover:bg-hover-golden"
        >
          Back to Home
        </a>
      </div>
    </GlobalLayout>
  );
}
