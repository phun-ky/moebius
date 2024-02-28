[@phun-ky/moebius](../README.md) / [classes/MoebiusAccentColors](../modules/classes_MoebiusAccentColors.md) / MoebiusAccentColors

# Class: MoebiusAccentColors

[classes/MoebiusAccentColors](../modules/classes_MoebiusAccentColors.md).MoebiusAccentColors

Class representing a set of accent colors in various palettes.

## Implements

- [`MoebiusPaletteAccentColorsInterface`](../interfaces/types.MoebiusPaletteAccentColorsInterface.md)

## Constructors

### constructor

• **new MoebiusAccentColors**(`colors`, `options`): [`MoebiusAccentColors`](classes_MoebiusAccentColors.MoebiusAccentColors.md)

Creates an instance of MoebiusAccentColors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`MoebiusPaletteColorsInterface`](../interfaces/types.MoebiusPaletteColorsInterface.md) | Base colors for accent palettes. |
| `options` | [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating accent palettes. |

#### Returns

[`MoebiusAccentColors`](classes_MoebiusAccentColors.MoebiusAccentColors.md)

**`Example`**

```ts
const colors = {
  monochromatic: ['#ff0000', '#00ff00'],
  // other base palettes...
};
const options = { baseColor: { color: '#ff0000', name: 'Red', hex: '#ff0000' }, numberOfColors: 9 };
const accentColors = new MoebiusAccentColors(colors, options);
```

#### Defined in

[classes/MoebiusAccentColors.ts:40](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L40)

## Properties

### analogous

• **analogous**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[analogous](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#analogous)

#### Defined in

[classes/MoebiusAccentColors.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L24)

___

### complement

• **complement**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[complement](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#complement)

#### Defined in

[classes/MoebiusAccentColors.ts:18](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L18)

___

### hexadic

• **hexadic**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[hexadic](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#hexadic)

#### Defined in

[classes/MoebiusAccentColors.ts:23](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L23)

___

### interpolate

• **interpolate**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[interpolate](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#interpolate)

#### Defined in

[classes/MoebiusAccentColors.ts:15](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L15)

___

### luminanceShift

• **luminanceShift**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[luminanceShift](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#luminanceshift)

#### Defined in

[classes/MoebiusAccentColors.ts:16](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L16)

___

### monochromatic

• **monochromatic**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[monochromatic](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#monochromatic)

#### Defined in

[classes/MoebiusAccentColors.ts:17](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L17)

___

### pentadic

• **pentadic**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[pentadic](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#pentadic)

#### Defined in

[classes/MoebiusAccentColors.ts:22](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L22)

___

### split

• **split**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[split](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#split)

#### Defined in

[classes/MoebiusAccentColors.ts:19](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L19)

___

### tetradic

• **tetradic**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[tetradic](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#tetradic)

#### Defined in

[classes/MoebiusAccentColors.ts:21](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L21)

___

### triadic

• **triadic**: \`#$\{string}\`[][]

#### Implementation of

[MoebiusPaletteAccentColorsInterface](../interfaces/types.MoebiusPaletteAccentColorsInterface.md).[triadic](../interfaces/types.MoebiusPaletteAccentColorsInterface.md#triadic)

#### Defined in

[classes/MoebiusAccentColors.ts:20](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L20)

## Methods

### toArray

▸ **toArray**(): \`#$\{string}\`[]

Converts the accent palettes to a flat array.

#### Returns

\`#$\{string}\`[]

- Array of hex color values.

**`Example`**

```ts
const accentColors = new MoebiusAccentColors(baseColors, options);
const flatArray = accentColors.toArray();
console.log(flatArray); // ['#ff0000', '#00ff00', ...]
```

#### Defined in

[classes/MoebiusAccentColors.ts:60](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L60)
