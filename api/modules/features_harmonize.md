[@phun-ky/moebius](../README.md) / features/harmonize

# Module: features/harmonize

## Functions

### harmonize

▸ **harmonize**(`color`, `start`, `end`, `interval`, `options?`): \`#$\{string}\`[]

Generate a harmonized color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the harmonized palette. |
| `start` | `number` | The starting angle for generating harmonized colors (degrees). |
| `end` | `number` | The ending angle for generating harmonized colors (degrees). |
| `interval` | `number` | The interval between harmonized colors (degrees). |
| `options?` | `Record`\<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#$\{string}\`[]

- Array of hex color values representing the harmonized palette.

**`Example`**

```ts
const baseColor = '#3498db';
const harmonizedPalette = harmonize(baseColor, 30, 210, 30, { noDuplicates: true });
console.log(harmonizedPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#3498db']
```

#### Defined in

[features/harmonize.ts:27](https://github.com/phun-ky/moebius/blob/main/src/features/harmonize.ts#L27)
