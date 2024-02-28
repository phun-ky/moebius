[@phun-ky/moebius](../README.md) / utils/converters/to-hwb

# Module: utils/converters/to-hwb

## Functions

### toHWB

▸ **toHWB**(`color`): [`MoebiusHWBObjectType`](types.md#moebiushwbobjecttype)

Converts a color to its corresponding HWB object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusHWBObjectType`](types.md#moebiushwbobjecttype)

The HWB color representation object.

**`Example`**

```ts
const hwbObject = toHWB('#3498db');
console.log(hwbObject); // Output: { h: 207.76, w: 0.5, b: 0.14 }
```

#### Defined in

[utils/converters/to-hwb.ts:18](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-hwb.ts#L18)
