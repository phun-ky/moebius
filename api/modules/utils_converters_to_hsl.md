[@phun-ky/moebius](../README.md) / utils/converters/to-hsl

# Module: utils/converters/to-hsl

## Functions

### toHSL

▸ **toHSL**(`color`): [`MoebiusHSLObjectType`](types.md#moebiushslobjecttype)

Converts a color to its corresponding HSL object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusHSLObjectType`](types.md#moebiushslobjecttype)

The HSL color representation object.

**`Example`**

```ts
const hslObject = toHSL('#3498db');
console.log(hslObject); // Output: { h: 207.76, s: 0.86, l: 0.56 }
```

#### Defined in

[utils/converters/to-hsl.ts:18](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-hsl.ts#L18)
