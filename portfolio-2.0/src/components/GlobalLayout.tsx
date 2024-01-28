import React from 'react';
import { montserrat } from '@/app/fonts';

import Navbar from './Navbar';
import Footer from './Footer';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={montserrat.className}>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
