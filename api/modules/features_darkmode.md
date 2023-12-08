[@phun-ky/moebius](../README.md) / features/darkmode

# Module: features/darkmode

## Functions

### darkmode

▸ **darkmode**(`baseColor`, `secondaryColor`, `options?`): `Record`<`string`, \`#${string}\`[]\>

Generates a dark mode color palette based on the provided base and secondary colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for the palette. |
| `secondaryColor` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The secondary color for the palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Palette options. |

#### Returns

`Record`<`string`, \`#${string}\`[]\>

- The generated dark mode color palette.

**`Example`**

```ts
const baseColor = '#3498db';
const secondaryColor = '#2ecc71';
const options = { bezier: true, colorScaleMode: 'lch' };
const palette = darkmode(baseColor, secondaryColor, options);
console.log(palette);
```

#### Defined in

[features/darkmode.ts:30](https://github.com/phun-ky/moebius/blob/main/src/features/darkmode.ts#L30)
