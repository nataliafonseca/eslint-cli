export const reactTsEslintConfig = {
  env: {
    browser: true,
    node: true,
    es6: true,
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
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
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
