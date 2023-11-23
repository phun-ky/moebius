[@phun-ky/moebius](../README.md) / utils/converters/to-oklch

# Module: utils/converters/to-oklch

## Functions

### toOKLCH

▸ **toOKLCH**(`color`): [`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype)

Converts a color to its OKLCH representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype)

The OKLCH representation of the input color.

**`Example`**

```ts
const oklchColor = toOKLCH('#3498db');
console.log(oklchColor); // Output: { l: 52.12, c: 126.62, h: 232.53 }
```

#### Defined in

utils/converters/to-oklch.ts:17
