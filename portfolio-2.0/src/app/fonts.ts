import { Shrikhand } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const shrikhand = Shrikhand({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

//using multiple fonts: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
