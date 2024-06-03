import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Home from '@/components/home/Homepage';
import Script from 'next/script';
import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: 'Leigh Dahlin - Innovative Frontend Development & Design',
    description:
      'Creating high-quality, innovative, and visually appealing websites tailored to your needs.',
    openGraph: {
      title: 'Leigh Dahlin - Innovative Frontend Development & Design',
      description:
        'Creating high-quality, innovative, and visually appealing websites tailored to your needs.',
      url: '/',
      siteName: 'Leigh Dahlin',
      type: 'website',
    },
  };
}

export default function Homepage() {
  return (
    <>
      <GlobalLayout>
        <Link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>
        <Home />
      </GlobalLayout>
    </>
  );
}
