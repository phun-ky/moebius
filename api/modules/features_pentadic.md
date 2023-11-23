[@phun-ky/moebius](../README.md) / features/pentadic

# Module: features/pentadic

## Functions

### pentadic

▸ **pentadic**(`color`, `options?`): \`#${string}\`[]

Generate a pentadic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the pentadic palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the pentadic palette.

**`Example`**

```ts
const baseColor = '#3498db';
const pentadicPalette = pentadic(baseColor, { numberOfColors: 5 });
console.log(pentadicPalette); // ['#3498db', '#dbd134', '#db3434', '#34db99', '#8f34db']
```

#### Defined in

features/pentadic.ts:26
