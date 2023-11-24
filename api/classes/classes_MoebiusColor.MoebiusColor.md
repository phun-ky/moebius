[@phun-ky/moebius](../README.md) / [classes/MoebiusColor](../modules/classes_MoebiusColor.md) / MoebiusColor

# Class: MoebiusColor

[classes/MoebiusColor](../modules/classes_MoebiusColor.md).MoebiusColor

MoebiusColor class representing a color with various formats and conversions.

**`Example`**

```ts
const mColor = new MoebiusColor('#ff9900')
```

## Implements

- [`MoebiusColorInterface`](../interfaces/types.MoebiusColorInterface.md)

## Constructors

### constructor

• **new MoebiusColor**(`color`, `name`): [`MoebiusColor`](classes_MoebiusColor.MoebiusColor.md)

Creates an instance of MoebiusColor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | - |
| `name` | `string` | The name of the color |

#### Returns

[`MoebiusColor`](classes_MoebiusColor.MoebiusColor.md)

**`Throws`**

Will throw an error if init has not been run before creating an instance.

#### Defined in

[classes/MoebiusColor.ts:49](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L49)

## Properties

### cmyk

• **cmyk**: [`MoebiusCMYKObjectType`](../modules/types.md#moebiuscmykobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[cmyk](../interfaces/types.MoebiusColorInterface.md#cmyk)

#### Defined in

[classes/MoebiusColor.ts:40](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L40)

___

### color

• **color**: \`#${string}\`

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[color](../interfaces/types.MoebiusColorInterface.md#color)

#### Defined in

[classes/MoebiusColor.ts:27](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L27)

___

### hex

• **hex**: \`#${string}\`

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[hex](../interfaces/types.MoebiusColorInterface.md#hex)

#### Defined in

[classes/MoebiusColor.ts:29](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L29)

___

### hsi

• **hsi**: [`MoebiusHSIObjectType`](../modules/types.md#moebiushsiobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[hsi](../interfaces/types.MoebiusColorInterface.md#hsi)

#### Defined in

[classes/MoebiusColor.ts:38](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L38)

___

### hsl

• **hsl**: [`MoebiusHSLObjectType`](../modules/types.md#moebiushslobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[hsl](../interfaces/types.MoebiusColorInterface.md#hsl)

#### Defined in

[classes/MoebiusColor.ts:31](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L31)

___

### hsv

• **hsv**: [`MoebiusHSVObjectType`](../modules/types.md#moebiushsvobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[hsv](../interfaces/types.MoebiusColorInterface.md#hsv)

#### Defined in

[classes/MoebiusColor.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L33)

___

### hwb

• **hwb**: [`MoebiusHWBObjectType`](../modules/types.md#moebiushwbobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[hwb](../interfaces/types.MoebiusColorInterface.md#hwb)

#### Defined in

[classes/MoebiusColor.ts:32](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L32)

___

### lab

• **lab**: [`MoebiusLABObjectType`](../modules/types.md#moebiuslabobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[lab](../interfaces/types.MoebiusColorInterface.md#lab)

#### Defined in

[classes/MoebiusColor.ts:34](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L34)

___

### lch

• **lch**: [`MoebiusLCHObjectType`](../modules/types.md#moebiuslchobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[lch](../interfaces/types.MoebiusColorInterface.md#lch)

#### Defined in

[classes/MoebiusColor.ts:36](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L36)

___

### name

• **name**: `string`

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[name](../interfaces/types.MoebiusColorInterface.md#name)

#### Defined in

[classes/MoebiusColor.ts:28](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L28)

___

### oklab

• **oklab**: [`MoebiusLABObjectType`](../modules/types.md#moebiuslabobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[oklab](../interfaces/types.MoebiusColorInterface.md#oklab)

#### Defined in

[classes/MoebiusColor.ts:39](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L39)

___

### oklch

• **oklch**: [`MoebiusLCHObjectType`](../modules/types.md#moebiuslchobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[oklch](../interfaces/types.MoebiusColorInterface.md#oklch)

#### Defined in

[classes/MoebiusColor.ts:37](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L37)

___

### rgb

• **rgb**: \`rgb(${number}, ${number}, ${number})\`

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[rgb](../interfaces/types.MoebiusColorInterface.md#rgb)

#### Defined in

[classes/MoebiusColor.ts:30](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L30)

___

### xyz

• **xyz**: [`MoebiusXYZObjectType`](../modules/types.md#moebiusxyzobjecttype)

#### Implementation of

[MoebiusColorInterface](../interfaces/types.MoebiusColorInterface.md).[xyz](../interfaces/types.MoebiusColorInterface.md#xyz)

#### Defined in

[classes/MoebiusColor.ts:35](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L35)

## Methods

### toFloat

▸ **toFloat**(`type?`): [`MoebiusHSLObjectType`](../modules/types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](../modules/types.md#moebiusrgbobjecttype)

Converts the color to a floating-point representation in the specified color space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The color space type (e.g., 'rgb' or 'hsl'). |

#### Returns

[`MoebiusHSLObjectType`](../modules/types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](../modules/types.md#moebiusrgbobjecttype)

The floating-point representation of the color in the specified color space.

#### Defined in

[classes/MoebiusColor.ts:79](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L79)

___

### toObject

▸ **toObject**(`type?`): [`MoebiusHSLObjectType`](../modules/types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](../modules/types.md#moebiusrgbobjecttype)

Converts the color to an object in the specified color space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `string` | The color space type (e.g., 'rgb' or 'hsl'). |

#### Returns

[`MoebiusHSLObjectType`](../modules/types.md#moebiushslobjecttype) \| [`MoebiusRGBObjectType`](../modules/types.md#moebiusrgbobjecttype)

The color object in the specified color space.

#### Defined in

[classes/MoebiusColor.ts:71](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L71)
