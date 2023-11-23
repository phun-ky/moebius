[@phun-ky/moebius](../README.md) / features/tetradic

# Module: features/tetradic

## Functions

### tetradic

▸ **tetradic**(`color`, `options?`): \`#${string}\`[]

Generate a tetradic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the tetradic palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the tetradic palette.

**`Example`**

```ts
const baseColor = '#3498db';
const tetradicPalette = tetradic(baseColor, { numberOfColors: 5 });
console.log(tetradicPalette); // ['#3498db', '#db3434', '#34db99', '#dbd134', '#8f34db']
```

#### Defined in

features/tetradic.ts:26
