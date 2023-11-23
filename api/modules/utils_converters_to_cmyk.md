[@phun-ky/moebius](../README.md) / utils/converters/to-cmyk

# Module: utils/converters/to-cmyk

## Functions

### toCMYK

▸ **toCMYK**(`color`): [`MoebiusCMYKObjectType`](types.md#moebiuscmykobjecttype)

Converts an RGB color to its CMYK representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in hex, rgb, or rgba format. |

#### Returns

[`MoebiusCMYKObjectType`](types.md#moebiuscmykobjecttype)

- The CMYK representation of the color.

**`Example`**

```ts
const cmykColor = toCMYK('#00ff00');
console.log(cmykColor); // { c: 40, m: 0, y: 100, k: 0 }
```

#### Defined in

[utils/converters/to-cmyk.ts:18](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-cmyk.ts#L18)
