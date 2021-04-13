module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: false,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "xo",
    "xo/esnext",
    "xo/browser",
    "react-app",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  plugins: ["react-hooks", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-redeclare": ["error"],
    "@typescript-eslint/prefer-optional-chain": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-async-promise-executor": "error",
    "no-redeclare": "off",
    "prettier/prettier": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "no-warning-comments": "off",
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        ignore: ["param", "Params", "err", "props", "i18n"],
      },
    ],
    "unicorn/no-null": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-useless-undefined": "off",
  },
  overrides: [
    {
      files: ["*.tsx", "*.jsx"],
      rules: {
        "sonarjs/cognitive-complexity": ["error", 37],
      },
    },
  ],
};