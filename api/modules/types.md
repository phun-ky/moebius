[@phun-ky/moebius](../README.md) / types

# Module: types

## Interfaces

- [MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md)
- [MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md)
- [MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md)
- [MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md)
- [NearestColorColorMatchInterface](../interfaces/types.NearestColorColorMatchInterface.md)
- [NearestColorColorSpecInterface](../interfaces/types.NearestColorColorSpecInterface.md)

## Type Aliases

### MoebiusCMYKObjectType

Ƭ **MoebiusCMYKObjectType**: `Object`

Represents a CMYK color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `c` | `number` |
| `k` | `number` |
| `m` | `number` |
| `y` | `number` |

#### Defined in

[types/index.ts:169](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L169)

___

### MoebiusChromaColorInputType

Ƭ **MoebiusChromaColorInputType**: [`MoebiusCMYKObjectType`](types.md#moebiuscmykobjecttype) \| [`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype) \| [`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusColorValueHexType`](types.md#moebiuscolorvaluehextype) \| `string`

#### Defined in

[types/index.ts:194](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L194)

___

### MoebiusColorValueHexType

Ƭ **MoebiusColorValueHexType**: \`#${string}\`

Represents a color value in hexadecimal format.

#### Defined in

[types/index.ts:102](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L102)

___

### MoebiusColorValueHslType

Ƭ **MoebiusColorValueHslType**: \`hsl(${number}, ${string}, ${string})\`

Represents a color value in HSL format.

#### Defined in

[types/index.ts:107](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L107)

___

### MoebiusColorValueHslaType

Ƭ **MoebiusColorValueHslaType**: \`hsl(${number}, ${string}, ${string}, ${number})\`

Represents a color value in HSLA format.

#### Defined in

[types/index.ts:112](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L112)

___

### MoebiusColorValueRgbType

Ƭ **MoebiusColorValueRgbType**: \`rgb(${number}, ${number}, ${number})\`

Represents a color value in RGB format.

#### Defined in

[types/index.ts:118](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L118)

___

### MoebiusColorValueRgbaType

Ƭ **MoebiusColorValueRgbaType**: \`rgb(${number}, ${number}, ${number}, ${number})\`

Represents a color value in RGBA format.

#### Defined in

[types/index.ts:123](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L123)

___

### MoebiusHSIObjectType

Ƭ **MoebiusHSIObjectType**: `Object`

Represents an HSI color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `i` | `number` |
| `s` | `number` |

#### Defined in

[types/index.ts:149](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L149)

___

### MoebiusHSLObjectType

Ƭ **MoebiusHSLObjectType**: `Object`

Represents an HSL color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `l` | `number` |
| `s` | `number` |

#### Defined in

[types/index.ts:134](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L134)

___

### MoebiusHSVObjectType

Ƭ **MoebiusHSVObjectType**: `Object`

Represents an HSV color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `s` | `number` |
| `v` | `number` |

#### Defined in

[types/index.ts:139](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L139)

___

### MoebiusHWBObjectType

Ƭ **MoebiusHWBObjectType**: `Object`

Represents an HWB color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `b` | `number` |
| `h` | `number` |
| `w` | `number` |

#### Defined in

[types/index.ts:159](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L159)

___

### MoebiusLABObjectType

Ƭ **MoebiusLABObjectType**: `Object`

Represents a LAB color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `l` | `number` |

#### Defined in

[types/index.ts:164](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L164)

___

### MoebiusLCHObjectType

Ƭ **MoebiusLCHObjectType**: `Object`

Represents an LCH color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `c` | `number` |
| `h` | `number` |
| `l` | `number` |

#### Defined in

[types/index.ts:144](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L144)

___

### MoebiusPaletteDefaultOptionsType

Ƭ **MoebiusPaletteDefaultOptionsType**: `Object`

Represents default options for generating a color palette.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bezier` | `boolean` |
| `colorScaleMode` | `string` |
| `correctLightness` | `boolean` |
| `divergentColor?` | [`MoebiusColorValueHexType`](types.md#moebiuscolorvaluehextype) |
| `diverging` | `boolean` |
| `noDuplicates` | `boolean` |
| `numberOfColors?` | `number` |
| `randomOffset` | `boolean` |
| `reverseDirection` | `boolean` |

#### Defined in

[types/index.ts:87](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L87)

___

### MoebiusPaletteOptionsType

Ƭ **MoebiusPaletteOptionsType**: `Object`

Represents options for generating a color palette.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseColor` | [`MoebiusColorInterface`](../interfaces/types.MoebiusColorInterface.md) |
| `bezier?` | `boolean` |
| `colorScaleMode?` | `string` |
| `correctLightness?` | `boolean` |
| `divergentColor?` | [`MoebiusColorValueHexType`](types.md#moebiuscolorvaluehextype) |
| `diverging?` | `boolean` |
| `divergingColor?` | `string` |
| `noDuplicates?` | `boolean` |
| `numberOfColors?` | `number` |
| `randomOffset?` | `boolean` |
| `reverseDirection?` | `boolean` |
| `secondaryColor` | [`MoebiusColorInterface`](../interfaces/types.MoebiusColorInterface.md) |

#### Defined in

[types/index.ts:69](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L69)

___

### MoebiusRGBObjectType

Ƭ **MoebiusRGBObjectType**: `Object`

Represents an RGB color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[types/index.ts:129](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L129)

___

### MoebiusXYZObjectType

Ƭ **MoebiusXYZObjectType**: `Object`

Represents an XYZ color object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[types/index.ts:154](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L154)
