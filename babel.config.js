module.exports = (api) => {
  api.cache(true);

  const presets = [
    'next/babel',
  ];

  const plugins = [
    'emotion',
    'graphql-tag',
  ];

  return {
    presets,
    plugins,
  };
};
