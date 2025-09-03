import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    ignores: ['.github/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      // ESLint recommended rules
      'no-unused-vars': 'warn',
      'no-console': 'off',

      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
