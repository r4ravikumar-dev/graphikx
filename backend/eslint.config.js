import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {ignores: ['dist', 'coverage']},
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {globals: globals.node},
    rules: {
      // Express identifies error handlers by arity, so unused `_next` must stay.
      '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    },
  },
);
