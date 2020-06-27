const path = require('path');
const nextOffline = require('next-offline');

const nextConfig = {
  exportTrailingSlash: true,
  workboxOpts: {
    swDest: path.resolve('public', 'service-worker.js'),
    runtimeCaching: [
      {
        urlPattern: /https?:\/\/(cms.)?indaytrending.com\/.*\.(jpg|png|gif|svg|webp)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.json$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'stories',
        },
      },
      {
        urlPattern: /^https?:\/\/(cms.)?indaytrending.com.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'cache',
        },
      },
    ],
  },
  env: {
    DOMAIN: process.env.DOMAIN,
  },
};

module.exports = nextOffline(nextConfig);
