[@phun-ky/moebius](../README.md) / features/analogous

# Module: features/analogous

## Functions

### analogous

▸ **analogous**(`color`, `options?`): \`#${string}\`[]

Generate an analogous color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the analogous palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the analogous palette.

**`Example`**

```ts
const baseColor = '#3498db';
const analogousPalette = analogous(baseColor, { numberOfColors: 5 });
console.log(analogousPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#db3474']
```

#### Defined in

features/analogous.ts:27
