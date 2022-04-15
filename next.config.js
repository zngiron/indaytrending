const nextConfig = {
  env: {
    DOMAIN: process.env.DOMAIN,
    API: process.env.API,
    ANALYTICS: process.env.ANALYTICS,
    BANNER: process.env.BANNER,
    RECIRCULATION: process.env.RECIRCULATION,
  },
  experimental: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
