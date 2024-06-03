import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import PortfolioPage from '@/components/portfolio/PortfolioPage';

export async function generateMetadata() {
  return {
    title: 'Leigh Dahlin - Portfolio of Frontend Development & Design',
    description:
      "Explore Leigh Dahlin's portfolio, featuring high-quality, responsive, and innovative web designs.",
    openGraph: {
      title: 'Leigh Dahlin - Portfolio of Frontend Development & Design',
      description:
        "Explore Leigh Dahlin's portfolio, featuring high-quality, responsive, and innovative web designs.",
      url: '/portfolio',
      siteName: 'Leigh Dahlin',
      type: 'website',
    },
  };
}

export default function Portfolio() {
  return (
    <GlobalLayout>
      <PortfolioPage />
    </GlobalLayout>
  );
}
