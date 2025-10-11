/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from 'vitepress';
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons';
import pkg from '../../package.json' with { type: 'json' };
import typedocSidebar from '../api/typedoc-sidebar.json';

import darkTheme from './shiki/accessible-aa-dark-shiki.json' with { type: 'json' };
import lightTheme from './shiki/accessible-aa-light-shiki.json' with { type: 'json' };
import { fileURLToPath } from 'node:url';

import path from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = path.resolve(here, '../../..');

export default defineConfig({
  lang: 'en-GB',
  head: [
    ['meta', { property: 'og:url', content: 'https://möbius.dev' }],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      {
        property: 'og:title',
        content:
          'Generate harmonious, customizable color palettes from a single base color - instantly and programmatically'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Möbius is a color palette generation tool designed for developers and designers who need quick, consistent, and attractive color schemes. It supports a wide variety of palette types and exports color data in multiple formats - RGB, HSL, LAB, CMYK, and more - making it ideal for both web design and data visualization'
      }
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content:
          'Generate harmonious, customizable color palettes from a single base color - instantly and programmatically'
      }
    ],
    ['meta', { property: 'og:locale:locale', content: 'en_GB' }],
    [
      'meta',
      {
        property: 'og:image',
        content:
          'https://repository-images.githubusercontent.com/711797916/65ed9057-08fb-4045-bf62-e9595acf19ee'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:domain', content: 'moebius.wtf' }],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://möbius.dev'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:title',
        content:
          'Generate harmonious, customizable color palettes from a single base color - instantly and programmatically'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Möbius is a color palette generation tool designed for developers and designers who need quick, consistent, and attractive color schemes. It supports a wide variety of palette types and exports color data in multiple formats - RGB, HSL, LAB, CMYK, and more - making it ideal for both web design and data visualization'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content:
          'https://repository-images.githubusercontent.com/711797916/65ed9057-08fb-4045-bf62-e9595acf19ee'
      }
    ]
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  description:
    'Möbius is a color palette generation tool designed for developers and designers who need quick, consistent, and attractive color schemes. It supports a wide variety of palette types and exports color data in multiple formats - RGB, HSL, LAB, CMYK, and more - making it ideal for both web design and data visualization',
  title:
    'Generate harmonious, customizable color palettes from a single base color - instantly and programmatically',
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/phun-ky/moebius/edit/main/docs/:path'
    },
    siteTitle: 'Möbius',
    logo: {
      src: '/logo/logo.svg',
      alt: 'Möbius logo'
    },
    nav: [
      { text: 'Guide', link: '/guide/introduction/' },
      { text: 'Reference', link: '/api/' },
      { text: 'Sponsor', link: '/sponsor' },
      {
        text: pkg.version,
        items: [
          {
            text: '1.0.6',
            link: 'https://github.com/phun-ky/moebius/blob/1.0.6/README.md'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/phun-ky/moebius/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/phun-ky/moebius/blob/main/CONTRIBUTING.md'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phun-ky/moebius' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@phun-ky/moebius' }
    ],
    footer: {
      message:
        'Released under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="nofollow noreferrer">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://phun-ky.net/">Alexander Vassbotn Røyne-Helgesen</a>'
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Getting started',
          collapsed: false,
          items: [
            { text: 'What is Möbius?', link: '/guide/introduction/what' },
            { text: 'Introduction', link: '/guide/introduction/' }
          ]
        },
        {
          text: 'Usage',
          link: '/guide/usage/'
        },
        {
          text: 'Development',
          link: '/guide/development'
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: typedocSidebar.map((s) => ({
            ...s,
            collapsed: false
          }))
        }
      ]
    }
  },
  vite: {
    plugins: [groupIconVitePlugin()],
    resolve: {
      alias: [
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/ToggleDarkMode.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },

    theme: {
      dark: darkTheme as any,
      light: lightTheme as any
    },
    // (Optional) Preload themes explicitly
    shikiSetup: async (shiki) => {
      await shiki.loadTheme(darkTheme as any);
      await shiki.loadTheme(lightTheme as any);
    }
  }
});
