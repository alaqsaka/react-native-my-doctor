module.exports = {
  root:    true,
  extends: 'airbnb',
  env:     {
    browser: true,
    es6:     true,
    jest:    true,
  },
  globals: {
    Atomics:           'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser:        '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType:  'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    camelcase: [
      0,
    ],
    'class-methods-use-this': [0],
    'consistent-return':      [0],
    'func-call-spacing':      [
      0,
    ],
    indent: [
      1,
      2,
      {
        ignoredNodes: [
          'CallExpression',
        ],
        SwitchCase: 1,
      },
    ],
    'key-spacing': [
      1, { align: 'value', afterColon: true },
    ],
    'linebreak-style': [
      0,
    ],
    'no-multi-spaces': [
      1,
      {
        exceptions: {
          VariableDeclarator: true,
          CallExpression:     true,
          ObjectExpression:   true,
        },
      },
    ],
    'no-nested-ternary': [0],
    'no-param-reassign': [
      0,
    ],
    'no-underscore-dangle': [
      0,
    ],
    'object-curly-newline': [
      0,
      {
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    'object-property-newline': [
      0,
    ],
    'prefer-const': [
      1,
      {
        destructuring:          'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'max-len': [
      1,
      {
        code: 150,
      },
    ],
    'no-alert': [
      0,
    ],
    'no-await-in-loop': [
      0,
    ],
    'no-bitwise': [1],
    'no-console': [
      0,
    ],
    'no-multi-assign': [
      0,
    ],
    'no-multi-str': [
      0,
    ],
    'no-restricted-globals': [
      0,
    ],
    'no-restricted-syntax': [
      0,
    ],
    'no-else-return': [
      0,
    ],
    'no-use-before-define':    [0],
    'no-unused-vars':          [0],
    'no-unexpected-multiline': [
      0,
    ],
    'no-spaced-func': [
      0,
    ],
    'prefer-destructuring': [
      1,
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape:           true,
      },
    ],
    'react/destructuring-assignment': [0],
    'react/jsx-filename-extension':   [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/prop-types':                      [0],
    'react/no-access-state-in-setstate':     [1],
    'react/no-array-index-key':              [1],
    'react/no-did-update-set-state':         [1],
    'react/prefer-stateless-function':       [0],
    'react/sort-comp':                       [0],
    'spaced-comment':                        [0],
    'react/jsx-props-no-spreading':          'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'import/no-extraneous-dependencies':   [0],
    'import/prefer-default-export':        [0],
    'jsx-a11y/anchor-is-valid':            [0],
    'react/no-unstable-nested-components': [0],
  },
};
