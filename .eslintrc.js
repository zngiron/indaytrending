module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'next/typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
};
