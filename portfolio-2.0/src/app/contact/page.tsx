import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import ContactPage from '@/components/contact/ContactPage';

export async function generateMetadata() {
  return {
    title: 'Contact Leigh Dahlin - Frontend Developer & Designer',
    description:
      'Contact Leigh Dahlin for expert frontend development and web design services.',
    openGraph: {
      title: 'Contact Leigh Dahlin - Frontend Developer & Designer',
      description:
        'Contact Leigh Dahlin for expert frontend development and web design services.',
      url: '/contact',
      siteName: 'Leigh Dahlin',
      type: 'website',
    },
  };
}

export default function Contact() {
  return (
    <>
      <GlobalLayout>
        <ContactPage />
      </GlobalLayout>
    </>
  );
}
