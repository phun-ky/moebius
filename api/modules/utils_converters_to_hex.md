[@phun-ky/moebius](../README.md) / utils/converters/to-hex

# Module: utils/converters/to-hex

## Functions

### toHEX

▸ **toHEX**(`color`): \`#$\{string}\`

Converts a color to its corresponding HEX representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in various formats (HEX, RGB, HSL, etc.). |

#### Returns

\`#$\{string}\`

The HEX representation of the color.

**`Example`**

```ts
const hexColor = toHEX('#3498db');
console.log(hexColor); // Output: '#3498db'
```

#### Defined in

[utils/converters/to-hex.ts:20](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-hex.ts#L20)
