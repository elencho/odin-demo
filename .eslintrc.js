module.exports = {
  root: true,
  extends: ['./eslint.config.mjs'],
  env: {
    es2023: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        es2023: true,
        node: true,
      },
    },
  ],
};
