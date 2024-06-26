// eslint-disable-next-line no-undef
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    // browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    // quotes: ["error", "double", "single"],
    // semi: ["error", "never"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "no-console": "error", // Add this line
    "arrow-spacing": ["error", { before: true, after: true }],
    "react/prop-types": 0,
  },
};
