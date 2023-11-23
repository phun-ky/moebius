[@phun-ky/moebius](../README.md) / features/split

# Module: features/split

## Functions

### split

▸ **split**(`color`, `options?`): \`#${string}\`[]

Generate a split color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The base color for generating the split palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the split palette.

**`Example`**

```ts
const baseColor = '#3498db';
const splitPalette = split(baseColor, { numberOfColors: 5 });
console.log(splitPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

#### Defined in

[features/split.ts:27](https://github.com/phun-ky/moebius/blob/main/src/features/split.ts#L27)
