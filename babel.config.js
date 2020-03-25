module.exports = (api) => {
  api.cache(true);

  const presets = [
    'next/babel',
  ];

  const plugins = [
    '@babel/syntax-dynamic-import',
    'emotion',
    'graphql-tag',
  ];

  return {
    presets,
    plugins,
  };
};
