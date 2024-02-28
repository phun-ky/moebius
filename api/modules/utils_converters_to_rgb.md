[@phun-ky/moebius](../README.md) / utils/converters/to-rgb

# Module: utils/converters/to-rgb

## Functions

### toRGB

▸ **toRGB**(`color`): \`rgb($\{number}, $\{number}, $\{number})\`

Converts a color to its RGB representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in any valid chroma-js format. |

#### Returns

\`rgb($\{number}, $\{number}, $\{number})\`

The RGB representation of the input color.

**`Example`**

```ts
const rgbColor = toRGB('#3498db');
console.log(rgbColor); // Output: 'rgb(52, 152, 219)'
```

#### Defined in

[utils/converters/to-rgb.ts:20](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-rgb.ts#L20)
