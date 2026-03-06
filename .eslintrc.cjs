module.exports = {
  root: true,
  ignorePatterns: [
    "node_modules",
    ".next",
    ".turbo",
    "dist",
    "out",
    "coverage",
    "pnpm-lock.yaml",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
};
