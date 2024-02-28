[@phun-ky/moebius](../README.md) / utils/get-chroma-scale-colors

# Module: utils/get-chroma-scale-colors

## Functions

### getChromaScaleColors

▸ **getChromaScaleColors**(`colors`, `options?`): `any`

Generates a color scale using Chroma.js.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | \`#$\{string}\`[] | The input colors for the color scale. |
| `options?` | `Record`\<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Options for generating the color scale. |

#### Returns

`any`

- The generated color scale.

**`Example`**

```ts
const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
const options = { numberOfColors: 5, colorScaleMode: 'lch', correctLightness: false };
const scaleColors = getChromaScaleColors(inputColors, options);
console.log(scaleColors);
```

#### Defined in

[utils/get-chroma-scale-colors.ts:21](https://github.com/phun-ky/moebius/blob/main/src/utils/get-chroma-scale-colors.ts#L21)
