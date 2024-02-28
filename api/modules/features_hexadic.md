[@phun-ky/moebius](../README.md) / features/hexadic

# Module: features/hexadic

## Functions

### hexadic

▸ **hexadic**(`color`, `options?`): \`#$\{string}\`[]

Generate a hexadic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the hexadic palette. |
| `options?` | `Record`\<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#$\{string}\`[]

- Array of hex color values representing the hexadic palette.

**`Example`**

```ts
const baseColor = '#3498db';
const hexadicPalette = hexadic(baseColor, { numberOfColors: 5 });
console.log(hexadicPalette); // ['#3498db', '#5d7f33', '#8473a9', '#ad7a95', '#db3434']
```

#### Defined in

[features/hexadic.ts:28](https://github.com/phun-ky/moebius/blob/main/src/features/hexadic.ts#L28)
