import { defineConfig } from 'eslint/config';
import customConfig from 'eslint-config-phun-ky';
import globals from 'globals';

export default defineConfig([
  {
    // Generated files
    ignores: [
      'CHANGELOG.md',
      'docs/api/**',
      'docs/.vitepress/cache/**',
      'docs/.vitepress/dist/**'
    ]
  },
  {
    extends: [customConfig]
  },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      // Command-line scripts report to the terminal
      'no-console': 'off'
    }
  }
]);
