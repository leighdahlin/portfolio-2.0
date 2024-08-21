/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['https://extraordinary-cranachan-fe7e16.netlify.app/*'],
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });
    return cfg;
  },
};

module.exports = nextConfig;
