/* eslint-disable import/no-extraneous-dependencies */

const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/amp/:slug',
        destination: '/stories/:slug',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cms.indaytrending.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
};

module.exports = withAnalyzer(nextConfig);
