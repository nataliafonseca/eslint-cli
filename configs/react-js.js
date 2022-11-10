export const reactJsEslintConfig = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "prettier",
    "react",
    "react-hooks",
    "jsx-a11y",
    "flowtype",
    "simple-import-sort",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  ignorePatterns: ["jest.config.js", "webpack.config.js", "setupTests.js"],
};
