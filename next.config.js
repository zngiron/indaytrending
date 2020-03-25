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
};

module.exports = nextConfig;
