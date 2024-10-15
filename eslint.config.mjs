import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

const ignores = [
  '.bundle',
  '.husky',
  '.vscode',
  'android',
  'ios',
  'node_modules',
  'public',
  'vendor',
];

const rules = {
  'linebreak-style': ['warn', 'unix'],
  'no-duplicate-imports': ['error', { includeExports: true }],
  'no-empty-function': ['error'],
  'no-empty-pattern': ['off'],
  'react/react-in-jsx-scope': ['off'],
  '@typescript-eslint/no-require-imports': ['off'],
  'arrow-body-style': ['off'],

  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        markers: ['/'],
        exceptions: ['-', '+'],
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true,
      },
    },
  ],
  'import/export': ['off'],
  '@typescript-eslint/no-empty-object-type': ['off'],
  'no-undef': ['off'],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      'ts-expect-error': 'allow-with-description',
      minimumDescriptionLength: 5,
    },
  ],
  '@typescript-eslint/no-empty-interface': ['off'],
  '@typescript-eslint/ban-tslint-comment': ['error'],
  '@typescript-eslint/no-misused-promises': ['off'],
  '@typescript-eslint/no-floating-promises': ['off'],
  '@typescript-eslint/no-unused-vars': ['error'],
  '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [
        'private-constructors',
        'protected-constructors',
        'decoratedFunctions',
        'overrideMethods',
      ],
    },
  ],
};

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules,
    ignores,
  },
];
