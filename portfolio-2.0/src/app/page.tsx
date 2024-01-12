import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Home from '@/components/home/Homepage';

export default function Homepage() {
  return (
    <>
      <GlobalLayout>
        <main>
          <Home />
        </main>
      </GlobalLayout>
    </>
  );
}
