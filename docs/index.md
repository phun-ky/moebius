---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Möbius'
  text: 'Generate color palettes programmatically'
  tagline: 'Möbius is a color palette generation tool that is ideal for ui design, web design and data visualization.'
  image:
    src: './logo/logo.svg'
    alt: 'Hero Image Description'
  actions:
    - theme: brand
      text: Online generator
      link: https://moebiues.wtf
    - theme: brand
      text: Get started
      link: /guide/introduction/
    - theme: alt
      text: View on GitHub
      link: https://github.com/phun-ky/moebius

features:
  - title: Generate palettes using
    details: Interpolation, Luminance shifts, Monochromatic, Complementary, Analogous, Triadic, Tetradic, etc.
    icon:
      dark: '/icons/palette-dark.svg'
      light: '/icons/palette-light.svg'
      width: '52px'
      height: 'auto'
  - title: Output in multiple color spaces
    details: RGB, HSL, LCH, CMYK, etc.
    icon:
      dark: '/icons/space-dark.svg'
      light: '/icons/space-light.svg'
      width: '52px'
      height: 'auto'
  - title: Randomized or lightness-corrected options
    details: You can tweak the setting to what suits you best
    icon:
      dark: '/icons/correct-dark.svg'
      light: '/icons/correct-light.svg'
      width: '52px'
      height: 'auto'
  - title: Diverging palette support
    details: Add a base color to diverge to
    icon:
      dark: '/icons/diverging-dark.svg'
      light: '/icons/diverging-light.svg'
      width: '52px'
      height: 'auto'
  - title: TypeScript-friendly API
    details: Types are readily available
    icon:
      dark: '/icons/ts-dark.svg'
      light: '/icons/ts-light.svg'
      width: '52px'
      height: 'auto'
---
