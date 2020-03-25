const nextOffline = require('next-offline');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(gql|graphql)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader',
          },
        ],
      },
    );

    return config;
  },
  workboxOpts: {
    swDest: `${__dirname}/public/service-worker.js`,
  },
};

module.exports = nextOffline(nextConfig);
