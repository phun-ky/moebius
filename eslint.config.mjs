import { defineConfig } from 'eslint/config';
import customConfig from 'eslint-config-phun-ky';

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
  }
]);
