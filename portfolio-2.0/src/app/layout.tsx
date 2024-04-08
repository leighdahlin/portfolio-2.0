'use client';

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HelmetProvider>
      <head>
        <title>Leigh Dahlin - Website Developer and Designer</title>
        <meta
          name="description"
          content="Unlock the potential of your online presence with Leigh Dahlin's website development and design services. Elevate your brand with tailored solutions crafted to captivate and convert. Let's bring your vision to life online."
        />
        <meta
          property="og:title"
          content="Leigh Dahlin - Website Developer and Designer"
        />
        <meta
          property="og:description"
          content="Unlock the potential of your online presence with Leigh Dahlin's website development and design services. Elevate your brand with tailored solutions crafted to captivate and convert. Let's bring your vision to life online."
        />
        <meta
          property="og:image"
          content="https://leighdahlin.com/images/link-preview.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://leighdahlin.com/" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Leigh Dahlin, Freelancer, Developer, Website Developer, Designer, Website Designer, Custom Website"
        ></meta>
      </head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </HelmetProvider>
  );
}
