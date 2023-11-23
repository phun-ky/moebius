[@phun-ky/moebius](../README.md) / features/interpolate

# Module: features/interpolate

## Functions

### interpolate

▸ **interpolate**(`primaryColor`, `secondaryColor`, `options?`): \`#${string}\`[]

Interpolate between two colors and generate a color palette.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `primaryColor` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The starting color for interpolation. |
| `secondaryColor` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The ending color for interpolation. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the interpolated palette.

**`Example`**

```ts
const startColor = '#3498db';
const endColor = '#db3434';
const interpolatedPalette = interpolate(startColor, endColor, { numberOfColors: 5 });
console.log(interpolatedPalette); // ['#3498db', '#5d6d7e', '#8473a9', '#ad7a95', '#db3434']
```

#### Defined in

features/interpolate.ts:29
