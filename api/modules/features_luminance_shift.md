[@phun-ky/moebius](../README.md) / features/luminance-shift

# Module: features/luminance-shift

## Functions

### luminanceShift

▸ **luminanceShift**(`colors`, `divergingColors?`, `options?`): \`#${string}\`[]

Generate a luminance shift palette based on an array of colors, with optional diverging colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype)[] | `undefined` | Array of base colors for generating the luminance shift palette. |
| `divergingColors?` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype)[] | `[]` | Array of diverging colors. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | `{}` | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the luminance shift palette.

**`Example`**

```ts
const baseColors = ['#3498db', '#99db34'];
const divergingColors = ['#db3434'];
const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, { numberOfColors: 5 });
console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

#### Defined in

[features/luminance-shift.ts:120](https://github.com/phun-ky/moebius/blob/main/src/features/luminance-shift.ts#L120)
