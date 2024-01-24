import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'off-white': '#fafafa',
      teal: '#0D776C',
      'dark-teal': '#126164',
      'dark-blue': '#27545B',
      'dark-blue-transparent': 'rgb(39, 84, 91,0.1)',
      'burnt-orange': '#CE6518',
      peach: '#CE9077',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
export default config;
