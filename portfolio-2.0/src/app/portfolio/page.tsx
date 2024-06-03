import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import PortfolioPage from '@/components/portfolio/PortfolioPage';

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

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
      images: [
        {
          url: `${baseUrl}/images/link-preview.png`,
          width: 1200,
          height: 630,
        },
      ],
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
