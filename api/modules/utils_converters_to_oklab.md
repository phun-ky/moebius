[@phun-ky/moebius](../README.md) / utils/converters/to-oklab

# Module: utils/converters/to-oklab

## Functions

### toOKLAB

▸ **toOKLAB**(`color`): [`MoebiusLABObjectType`](types.md#moebiuslabobjecttype)

Converts a color to its OKLAB representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusLABObjectType`](types.md#moebiuslabobjecttype)

The OKLAB representation of the input color.

**`Example`**

```ts
const oklabColor = toOKLAB('#3498db');
console.log(oklabColor); // Output: { l: 52.42, a: -9.93, b: -39.49 }
```

#### Defined in

[utils/converters/to-oklab.ts:18](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-oklab.ts#L18)
