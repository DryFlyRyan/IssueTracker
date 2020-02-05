module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
  ],
  env: {
    cdn: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: [
                '>0.2%',
                'not dead',
                'not ie <= 11',
                'not op_mini all',
              ],
            },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ],
    },
  },
};
