[@phun-ky/moebius](../README.md) / utils/converters/to-lch

# Module: utils/converters/to-lch

## Functions

### toLCH

▸ **toLCH**(`color`): [`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype)

Converts a color to its corresponding LCH object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype)

The LCH color representation object.

**`Example`**

```ts
const lchObject = toLCH('#3498db');
console.log(lchObject); // Output: { l: 54.66, c: 76.91, h: 217.76 }
```

#### Defined in

utils/converters/to-lch.ts:17
