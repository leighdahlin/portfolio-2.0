import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import WorkWithMePage from '@/components/work-with-me/WorkWithMePage';

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return {
    title: 'Work With Leigh Dahlin - Frontend Developer & Designer',
    description:
      'Contact Leigh Dahlin for expert frontend development and web design services.',
    openGraph: {
      title: 'Work With Leigh Dahlin - Frontend Developer & Designer',
      description:
        'Contact Leigh Dahlin for expert frontend development and web design services.',
      url: '/contact',
      siteName: 'Leigh Dahlin',
      type: 'website',
    },
    images: [
      {
        url: `${baseUrl}/images/link-preview.png`,
        width: 1200,
        height: 630,
      },
    ],
  };
}

export default function Contact() {
  return (
    <>
      <GlobalLayout>
        <WorkWithMePage />
      </GlobalLayout>
    </>
  );
}
