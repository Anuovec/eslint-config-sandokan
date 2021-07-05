module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: false,
    browser: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'xo',
    'xo/browser',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },

    warnOnUnsupportedTypeScriptVersion: true
  },
  plugins: ['react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/prefer-optional-chain': 'warn',
    // Add TypeScript specific rules (and turn off ESLint equivalents)
    '@typescript-eslint/consistent-type-assertions': 'warn',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',

    'no-async-promise-executor': 'error',
    'no-warning-comments': 'off',
    'array-callback-return': [
      'warn',
      {
        allowImplicit: true,
        checkForEach: false
      }
    ],
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    'default-case': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    'no-dupe-class-members': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    'no-undef': 'off',
    eqeqeq: ['warn', 'smart'],
    'no-caller': ['warn'],
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': ['warn'],
    'no-control-regex': ['warn'],
    'no-delete-var': ['warn'],
    'no-dupe-args': ['warn'],
    'no-dupe-keys': ['warn'],
    'no-duplicate-case': ['warn'],
    'no-empty-character-class': ['warn'],
    'no-empty-pattern': ['warn'],
    'no-eval': ['warn'],
    'no-ex-assign': ['warn'],
    'no-extend-native': ['warn'],
    'no-extra-bind': ['warn'],
    'no-extra-label': ['warn'],
    'no-fallthrough': ['warn'],
    'no-func-assign': ['warn'],
    'no-implied-eval': ['warn'],
    'no-invalid-regexp': ['warn'],
    'no-iterator': ['warn'],
    'no-label-var': ['warn'],
    'no-labels': [
      'warn',
      {
        allowLoop: true,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': ['warn'],
    'no-loop-func': ['warn'],
    'no-multi-str': ['warn'],
    'no-native-reassign': ['warn'],
    'no-negated-in-lhs': ['warn'],
    'no-new-func': ['warn'],
    'no-new-object': ['warn'],
    'no-new-symbol': ['warn'],
    'no-new-wrappers': ['warn'],
    'no-obj-calls': ['warn'],
    'no-octal': ['warn'],
    'no-octal-escape': ['warn'],
    'no-regex-spaces': ['warn'],
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': ['warn'],
    'no-self-assign': [
      'warn',
      {
        props: true
      }
    ],
    'no-self-compare': ['warn'],
    'no-sequences': ['warn'],
    'no-shadow-restricted-names': ['warn'],
    'no-sparse-arrays': ['warn'],
    'no-template-curly-in-string': ['warn'],
    'no-this-before-super': ['warn'],
    'no-throw-literal': ['warn'],
    'no-restricted-globals': [
      'error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top'
    ],
    'no-unreachable': ['warn'],
    'no-unused-labels': ['warn'],
    'no-useless-computed-key': [
      'warn',
      {
        enforceForClassMembers: true
      }
    ],
    'no-useless-concat': ['warn'],
    'no-useless-escape': ['warn'],
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-with': ['warn'],
    'require-yield': ['warn'],
    strict: ['warn', 'never'],
    'use-isnan': ['warn'],
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false
      }
    ],
    'getter-return': ['warn'],

    'import/no-amd': 'error',
    'import/no-anonymous-default-export': ['warn'],
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': ['error'],

    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['param', 'Params', 'err', 'props', 'i18n']
      }
    ],
    'unicorn/no-null': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-module': 'off',

    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true
      }
    ],
    'react/jsx-no-comment-textnodes': ['warn'],
    'react/jsx-no-duplicate-props': ['warn'],
    'react/jsx-no-target-blank': ['warn'],
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: false,
        ignore: []
      }
    ],
    'react/no-typos': ['error'],
    'react/style-prop-object': ['error'],
    'react/jsx-uses-vars': ['warn'],
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    // a lot of false positives
    'react/prop-types': 'off',
    // a lot of false positives and not very useful with react functional components
    'react/display-name': 'off',

    'jsx-a11y/alt-text': ['warn'],
    'jsx-a11y/anchor-is-valid': ['warn'],
    'jsx-a11y/iframe-has-title': ['warn'],
    'jsx-a11y/img-redundant-alt': ['warn'],
    'jsx-a11y/no-access-key': ['warn'],
    'jsx-a11y/no-redundant-roles': ['warn'],
    'jsx-a11y/role-has-required-aria-props': ['warn'],
    'jsx-a11y/role-supports-aria-props': ['warn'],

    'sonarjs/elseif-without-else': 'error',

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:testing-library/react'],
      env: {
        'jest/globals': true
      },
      rules: {
        // add jest extension and turn off original rule
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',

        'jest/lowercase-name': 'error',
        'jest/no-commented-out-tests': 'off',
        'jest/prefer-called-with': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'warn',
        'jest/no-test-return-statement': 'warn',
        'jest/no-large-snapshots': 'error',
        'jest/no-if': 'error',

        'testing-library/no-debug': 'warn',
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/no-render-in-setup': 'error',
        'testing-library/no-unnecessary-act': 'warn',
        'testing-library/no-wait-for-multiple-assertions': 'warn',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/no-wait-for-snapshot': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-wait-for': 'error'
      },
      settings: {
        jest: { version: 26 }
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
