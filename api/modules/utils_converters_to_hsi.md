[@phun-ky/moebius](../README.md) / utils/converters/to-hsi

# Module: utils/converters/to-hsi

## Functions

### toHSI

▸ **toHSI**(`color`): [`MoebiusHSIObjectType`](types.md#moebiushsiobjecttype)

Converts a color to its corresponding HSI object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusHSIObjectType`](types.md#moebiushsiobjecttype)

The HSI color representation object.

**`Example`**

```ts
const hsiObject = toHSI('#3498db');
console.log(hsiObject); // Output: { h: 207.76, s: 0.52, i: 0.4 }
```

#### Defined in

[utils/converters/to-hsi.ts:17](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-hsi.ts#L17)
