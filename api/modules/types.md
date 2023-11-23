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

types/index.ts:166

___

### MoebiusChromaColorInputType

Ƭ **MoebiusChromaColorInputType**: [`MoebiusCMYKObjectType`](types.md#moebiuscmykobjecttype) \| [`MoebiusLCHObjectType`](types.md#moebiuslchobjecttype) \| [`MoebiusHSLObjectType`](types.md#moebiushslobjecttype) \| [`MoebiusColorValueHexType`](types.md#moebiuscolorvaluehextype) \| `string`

#### Defined in

types/index.ts:191

___

### MoebiusColorValueHexType

Ƭ **MoebiusColorValueHexType**: \`#${string}\`

Represents a color value in hexadecimal format.

#### Defined in

types/index.ts:99

___

### MoebiusColorValueHslType

Ƭ **MoebiusColorValueHslType**: \`hsl(${number}, ${string}, ${string})\`

Represents a color value in HSL format.

#### Defined in

types/index.ts:104

___

### MoebiusColorValueHslaType

Ƭ **MoebiusColorValueHslaType**: \`hsl(${number}, ${string}, ${string}, ${number})\`

Represents a color value in HSLA format.

#### Defined in

types/index.ts:109

___

### MoebiusColorValueRgbType

Ƭ **MoebiusColorValueRgbType**: \`rgb(${number}, ${number}, ${number})\`

Represents a color value in RGB format.

#### Defined in

types/index.ts:115

___

### MoebiusColorValueRgbaType

Ƭ **MoebiusColorValueRgbaType**: \`rgb(${number}, ${number}, ${number}, ${number})\`

Represents a color value in RGBA format.

#### Defined in

types/index.ts:120

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

types/index.ts:146

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

types/index.ts:131

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

types/index.ts:136

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

types/index.ts:156

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

types/index.ts:161

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

types/index.ts:141

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

types/index.ts:84

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

types/index.ts:66

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

types/index.ts:126

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

types/index.ts:151
