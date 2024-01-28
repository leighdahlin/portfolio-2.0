'use client';

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Leigh Dahlin - Freelance Website Developer and Designer</title>
        <meta
          name="description"
          content="Leigh Dahlin is a freelance website developer or design that can assist you in creating or maintaining your website."
        />
        <meta
          property="og:title"
          content="Leigh Dahlin - Freelance Website Developer and Designer"
        />
        <meta
          property="og:description"
          content="Leigh Dahlin is a freelance website developer or design that can assist you in creating or maintaining your website."
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
      </Helmet>
      <html lang="en">
        <body>{children}</body>
      </html>
    </HelmetProvider>
  );
}
