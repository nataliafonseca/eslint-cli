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
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended",
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
    "simple-import-sort",
    "import",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  ignorePatterns: ["jest.config.js", "webpack.config.js", "setupTests.js"],
  rules: {
    "import/extensions": [
      0,
      "always",
      { js: "never", ts: "never", jsx: "never", tsx: "never" },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["**/src/*"],
            message:
              "Relative imports outside the /src folder will not function once published. Please remain inside the /src folder instead.",
          },
        ],
      },
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: false,
      },
    ],
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

  "import/no-cycle": "error",
  "import/no-unresolved": "error",
};
