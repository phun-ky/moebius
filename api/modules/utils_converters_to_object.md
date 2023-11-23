[@phun-ky/moebius](../README.md) / utils/converters/to-object

# Module: utils/converters/to-object

## Functions

### toObject

▸ **toObject**(`color`, `type?`): [`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](types.md#moebiusrgbobjecttype)

Converts a color to its corresponding object representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex format. |
| `type?` | `string` | The type of representation ('hsl' or undefined for RGB). |

#### Returns

[`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](types.md#moebiusrgbobjecttype)

The color representation object.

**`Example`**

```ts
const rgbObject = toObject('#3498db');
console.log(rgbObject); // Output: { r: 52, g: 152, b: 219 }

const hslObject = toObject('#3498db', 'hsl');
console.log(hslObject); // Output: { h: 207, s: 79, l: 57 }
```

#### Defined in

[utils/converters/to-object.ts:24](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-object.ts#L24)
