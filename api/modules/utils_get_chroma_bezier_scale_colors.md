[@phun-ky/moebius](../README.md) / utils/get-chroma-bezier-scale-colors

# Module: utils/get-chroma-bezier-scale-colors

## Functions

### getChromaBezierScaleColors

▸ **getChromaBezierScaleColors**(`colors`, `options?`): `any`

Generates a color scale using Chroma.js's bezier interpolation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | \`#$\{string}\`[] | The input colors for the bezier interpolation. |
| `options?` | `Record`\<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the color scale. |

#### Returns

`any`

- The generated color scale.

**`Example`**

```ts
const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
const options = { numberOfColors: 5, colorScaleMode: 'lch', correctLightness: false };
const scaleColors = getChromaBezierScaleColors(inputColors, options);
console.log(scaleColors);
```

#### Defined in

[utils/get-chroma-bezier-scale-colors.ts:21](https://github.com/phun-ky/moebius/blob/main/src/utils/get-chroma-bezier-scale-colors.ts#L21)
