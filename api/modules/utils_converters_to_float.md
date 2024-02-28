[@phun-ky/moebius](../README.md) / utils/converters/to-float

# Module: utils/converters/to-float

## Functions

### toFloat

▸ **toFloat**(`color`, `type?`): [`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](types.md#moebiusrgbobjecttype)

Converts a color to its float representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex, rgb, or rgba format. |
| `type?` | `string` | The color type ('hsl' for HSL, undefined for RGB). |

#### Returns

[`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](types.md#moebiusrgbobjecttype)

- The float representation of the color.

**`Example`**

```ts
const hslFloatColor = toFloat('#00ff00', 'hsl');
console.log(hslFloatColor.toString()); // 120, 100, 50
```

**`Example`**

```ts
const rgbFloatColor = toFloat('#00ff00');
console.log(rgbFloatColor.toString()); // 0, 1, 0
```

#### Defined in

[utils/converters/to-float.ts:27](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-float.ts#L27)
