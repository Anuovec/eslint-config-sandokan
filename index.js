const allOurSelectors = [
  'variable',
  'function',
  'classProperty',
  'objectLiteralProperty',
  'parameterProperty',
  'classMethod',
  'objectLiteralMethod',
  'typeMethod',
  'accessor',
];

const ourShortcuts = '^.*UTC.*$|^.*URL.*$|^.*DOP.*$|^.*DOC.*^';

const getNamingConventionRule = ({ isTsx }) => ({
  '@typescript-eslint/naming-convention': [
    'error',
    {
      /// selector: ['variableLike', 'memberLike', 'property', 'method'],
      // Note: Leaving out `parameter` and `typeProperty` because of the mentioned known issues.
      // Note: We are intentionally leaving out `enumMember` as it's usually pascal-case or upper-snake-case.
      selector: allOurSelectors,
      format: ['strictCamelCase', isTsx && 'StrictPascalCase'].filter(Boolean),
      // We allow double underscore because of GraphQL type names and some React names.
      leadingUnderscore: 'allowSingleOrDouble',
      trailingUnderscore: 'allow',
      // Ignore `{'Retry-After': retryAfter}` type properties.
      filter: {
        regex: `[- ]|^[0-9]+$|${ourShortcuts}`,
        match: false,
      },
    },
    {
      selector: 'typeLike',
      format: ['StrictPascalCase'],
    },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['StrictPascalCase'],
      prefix: ['is', 'has', 'can', 'should', 'will', 'did'],
    },
    {
      // Interface name should not be prefixed with `I`.
      selector: 'interface',
      filter: /^(?!I)[A-Z]/.source,
      format: ['StrictPascalCase'],
    },
    {
      selector: 'typeParameter',
      filter: /^[A-Z][a-z][a-zA-Z]+$/.source,
      format: ['StrictPascalCase'],
    },
    {
      selector: 'typeParameter',
      filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
      format: ['PascalCase'],
    },
    // Allow these in non-camel-case when quoted.
    {
      selector: ['classProperty', 'objectLiteralProperty'],
      format: null,
      modifiers: ['requiresQuotes'],
    },
    {
      selector: allOurSelectors,
      filter: {
        regex: ourShortcuts,
        match: true,
      },
      format: ['camelCase'],
    },
  ],
});

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: false,
    browser: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'xo',
    'xo-typescript',
    'xo/browser',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },

    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['@typescript-eslint', 'no-date-parsing'],
  rules: {
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
        typedefs: false,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    // note you must disable the base rule as it can report incorrect errors
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': [
      'error',
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      'error',
      'domain',
      'freelist',
      'smalloc',
      'punycode',
      'sys',
      'querystring',
      'colors',
      'antd',
      '@mantine',
    ],
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreTernaryTests: false,
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',

    // turned off from eslint-config-xo-typescript due to prettier handling this
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use `string` instead.',
            fixWith: 'string',
          },
          Number: {
            message: 'Use `number` instead.',
            fixWith: 'number',
          },
          Boolean: {
            message: 'Use `boolean` instead.',
            fixWith: 'boolean',
          },
          Symbol: {
            message: 'Use `symbol` instead.',
            fixWith: 'symbol',
          },
          BigInt: {
            message: 'Use `bigint` instead.',
            fixWith: 'bigint',
          },
          Object: {
            message:
              'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          '{}': {
            message:
              'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
            fixWith: 'Record<string, unknown>',
          },
          object: {
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          Function: 'Use a specific function type instead, like `() => void`.',
          '[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
          '[[]]':
            "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
          '[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
          '[[[[]]]]': 'ur drunk 🤡',
          '[[[[[]]]]]': '🦄💥',
        },
      },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    ...getNamingConventionRule({ isTsx: false }),

    camelcase: 'off',
    'logical-assignment-operators': [
      'error',
      'always',
      {
        enforceForIfStatements: true,
      },
    ],
    'no-async-promise-executor': 'error',
    'no-warning-comments': 'off',
    'array-callback-return': [
      'warn',
      {
        allowImplicit: true,
        checkForEach: false,
      },
    ],
    'capitalized-comments': [
      'warn',
      'always',
      {
        ignorePattern: /pragma|ignore|prettier-ignore|webpack\w+:|c8|type-coverage:/.source,
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    ],
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    'default-case': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    'no-dupe-class-members': 'off',
    // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    'no-undef': 'off',
    eqeqeq: ['warn', 'smart'],
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': [
      'warn',
      {
        allowLoop: true,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': [
      'warn',
      {
        props: true,
      },
    ],
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
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
      'top',
    ],
    'no-unreachable': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-private-class-members': 'warn',
    'no-useless-computed-key': [
      'warn',
      {
        enforceForClassMembers: true,
      },
    ],
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'require-atomic-updates': 'warn',
    'require-yield': 'warn',
    strict: ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false,
      },
    ],
    'getter-return': 'warn',

    'promise/no-multiple-resolved': 'error',

    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/newline-after-import': 'warn',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'warn',
    'import/no-empty-named-blocks': 'error',
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-namespace': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '{pages,locales,permissions,ui}',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '{common,features,pages,locales,models,permissions,ui,types}/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'unicorn/template-indent': 'warn',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['param', 'Params', 'err', 'props', 'i18n'],
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-module': 'off',

    'react/hook-use-state': ['error', { allowDestructuredState: true }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/no-object-type-as-default-prop': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: false,
        ignore: [],
      },
    ],
    'react/no-typos': 'error',
    'react/style-prop-object': 'error',
    'react/jsx-uses-vars': 'warn',
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-danger': 'error',
    'react/no-children-prop': ['error', { allowFunctions: true }],
    'react/no-unused-class-component-methods': 'warn',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-leaked-render': 'warn',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    // a lot of false positives
    'react/prop-types': 'off',
    // a lot of false positives and not very useful with react functional components
    'react/display-name': 'off',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': 'error',

    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: 'useRecoilCallback|useRecoilTransaction_UNSTABLE|useRecoilTransaction',
      },
    ],

    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/prefer-tag-over-role': 'error',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',

    'sonarjs/elseif-without-else': 'error',

    'no-date-parsing/no-date-parsing': 'error',

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        ...getNamingConventionRule({ isTsx: true }),
      },
    },
    {
      files: ['src/ui/**/*.[jt]s?(x)', 'App.tsx'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          'error',
          'domain',
          'freelist',
          'smalloc',
          'punycode',
          'sys',
          'querystring',
          'colors',
        ],
      },
    },
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:testing-library/react'],
      env: {
        'jest/globals': true,
      },
      rules: {
        // add jest extension and turn off original rule
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
        'jest/max-nested-describe': [
          'error',
          {
            max: 5,
          },
        ],
        'jest/no-commented-out-tests': 'off',
        'jest/no-if': 'error',
        'jest/no-test-return-statement': 'warn',
        'jest/no-large-snapshots': 'error',
        'jest/no-untyped-mock-factory': 'warn',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-each': 'warn',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': ['error', { ignoreTopLevelDescribe: true }],
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-hook': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'warn',

        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/prefer-explicit-assert': ['error', { assertion: 'toBeInTheDocument' }],
        'testing-library/prefer-wait-for': 'error',
      },
      settings: {
        jest: { version: 27 },
      },
    },
  ],
  settings: {
    'import/external-module-folders': ['node_modules', '@types'],
    react: {
      version: 'detect',
    },
  },
};
