[@phun-ky/moebius](../README.md) / utils/converters/to-hsv

# Module: utils/converters/to-hsv

## Functions

### toHSV

▸ **toHSV**(`color`): [`MoebiusHSVObjectType`](types.md#moebiushsvobjecttype)

Converts a color to its corresponding HSV object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusHSVObjectType`](types.md#moebiushsvobjecttype)

The HSV color representation object.

**`Example`**

```ts
const hsvObject = toHSV('#3498db');
console.log(hsvObject); // Output: { h: 207.76, s: 0.86, v: 0.85 }
```

#### Defined in

[utils/converters/to-hsv.ts:17](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-hsv.ts#L17)
