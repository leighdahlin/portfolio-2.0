'use client';

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
// import type { Metadata } from 'next';
import './globals.css';

// export const metadata: Metadata = {
//   title: 'Leigh Dahlin',
//   description: 'Website Freelancer',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HelmetProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </HelmetProvider>
  );
}
