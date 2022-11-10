export const nodeJsEslintConfig = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "flowtype"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/no-unresolved": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
