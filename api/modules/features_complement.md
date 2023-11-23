[@phun-ky/moebius](../README.md) / features/complement

# Module: features/complement

## Functions

### complement

▸ **complement**(`color`, `options?`): \`#${string}\`[]

Generate a complement color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the complement palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the complement palette.

**`Example`**

```ts
const baseColor = '#3498db';
const complementPalette = complement(baseColor, { numberOfColors: 5 });
console.log(complementPalette); // ['#3498db', '#db3434', '#75db34', '#dbd134', '#db7434']
```

#### Defined in

features/complement.ts:27
