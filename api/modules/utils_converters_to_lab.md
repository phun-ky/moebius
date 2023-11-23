[@phun-ky/moebius](../README.md) / utils/converters/to-lab

# Module: utils/converters/to-lab

## Functions

### toLAB

▸ **toLAB**(`color`): [`MoebiusLABObjectType`](types.md#moebiuslabobjecttype)

Converts a color to its corresponding LAB object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusLABObjectType`](types.md#moebiuslabobjecttype)

The LAB color representation object.

**`Example`**

```ts
const labObject = toLAB('#3498db');
console.log(labObject); // Output: { l: 54.24, a: -12.56, b: -43.81 }
```

#### Defined in

utils/converters/to-lab.ts:17
