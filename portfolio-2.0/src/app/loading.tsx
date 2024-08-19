import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';

export default function Loading() {
  return (
    <GlobalLayout>
      <div className="bg-off-white dark-bg-dark-blue flex items-center justify-center h-full">
        <div
          id="loader"
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-off-white bg-opacity-50 z-50"
        >
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-off-white h-12 w-12"></div>
        </div>
      </div>
    </GlobalLayout>
  );
}
