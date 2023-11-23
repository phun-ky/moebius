[@phun-ky/moebius](../README.md) / features/monochromatic

# Module: features/monochromatic

## Functions

### monochromatic

▸ **monochromatic**(`color`, `options?`): \`#${string}\`[]

Generates a monochromatic color palette based on the given color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for the palette. |
| `options` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- An array of hex color values in the palette.

**`Example`**

```typescript
const baseColor = '#003f5c';
const options = { numberOfColors: 5, bezier: true, randomOffset: false };
const monochromaticPalette = monochromatic(baseColor, options);
console.log(monochromaticPalette);
[
  '#003f5c', // maniacMansion,
  '#014268', // darkImperialBlue,
  '#024575', // macraggeBlue,
  '#044784', // bridgeport,
  '#064898', // frightNight,
  '#0745b6', // absoluteZero,
  '#002df5', // blueBouquet
];
```

#### Defined in

features/monochromatic.ts:34
