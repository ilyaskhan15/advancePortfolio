import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import { globalIgnores } from 'eslint/config';

export default [
  globalIgnores(['dist/**', '.astro/**', 'public/scripts/**']),
  eslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        process: 'readonly'
      }
    }
  }
];
