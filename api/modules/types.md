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

[types/index.ts:168](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L168)

___

### MoebiusChromaColorInputType

Ƭ **MoebiusChromaColorInputType**: [`MoebiusCMYKObjectType`](types.md#moebiuscmykobjecttype) \| [`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype) \| [`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusColorValueHexType`](types.md#moebiuscolorvaluehextype) \| `string`

#### Defined in

[types/index.ts:193](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L193)

___

### MoebiusColorValueHexType

Ƭ **MoebiusColorValueHexType**: \`#${string}\`

Represents a color value in hexadecimal format.

#### Defined in

[types/index.ts:101](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L101)

___

### MoebiusColorValueHslType

Ƭ **MoebiusColorValueHslType**: \`hsl(${number}, ${string}, ${string})\`

Represents a color value in HSL format.

#### Defined in

[types/index.ts:106](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L106)

___

### MoebiusColorValueHslaType

Ƭ **MoebiusColorValueHslaType**: \`hsl(${number}, ${string}, ${string}, ${number})\`

Represents a color value in HSLA format.

#### Defined in

[types/index.ts:111](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L111)

___

### MoebiusColorValueRgbType

Ƭ **MoebiusColorValueRgbType**: \`rgb(${number}, ${number}, ${number})\`

Represents a color value in RGB format.

#### Defined in

[types/index.ts:117](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L117)

___

### MoebiusColorValueRgbaType

Ƭ **MoebiusColorValueRgbaType**: \`rgb(${number}, ${number}, ${number}, ${number})\`

Represents a color value in RGBA format.

#### Defined in

[types/index.ts:122](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L122)

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

[types/index.ts:148](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L148)

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

[types/index.ts:133](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L133)

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

[types/index.ts:138](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L138)

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

[types/index.ts:158](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L158)

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

[types/index.ts:163](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L163)

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

[types/index.ts:143](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L143)

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

[types/index.ts:86](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L86)

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

[types/index.ts:68](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L68)

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

[types/index.ts:128](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L128)

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

[types/index.ts:153](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L153)
