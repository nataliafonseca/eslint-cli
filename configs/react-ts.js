export const reactTsEslintConfig = {
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
    "plugin:react-perf/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-perf",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        singleQuote: false,
        trailingComma: "all",
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
  },
};
