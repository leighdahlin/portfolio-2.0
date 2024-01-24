/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.main--extraordinary-cranachan-fe7e16.netlify.app',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
