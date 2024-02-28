[@phun-ky/moebius](../README.md) / [classes/MoebiusPaletteColors](../modules/classes_MoebiusPaletteColors.md) / MoebiusPaletteColors

# Class: MoebiusPaletteColors

[classes/MoebiusPaletteColors](../modules/classes_MoebiusPaletteColors.md).MoebiusPaletteColors

Class representing a set of colors in various palettes.

## Implements

- [`MoebiusPaletteColorsInterface`](../interfaces/types.MoebiusPaletteColorsInterface.md)

## Constructors

### constructor

• **new MoebiusPaletteColors**(`colors`): [`MoebiusPaletteColors`](classes_MoebiusPaletteColors.MoebiusPaletteColors.md)

Creates an instance of MoebiusPaletteColors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`MoebiusPaletteColorsInterface`](../interfaces/types.MoebiusPaletteColorsInterface.md) | Palette colors to initialize with. |

#### Returns

[`MoebiusPaletteColors`](classes_MoebiusPaletteColors.MoebiusPaletteColors.md)

**`Example`**

```ts
const colors = {
  interpolate: ['#ff0000', '#00ff00'],
  // other palettes...
};
const palette = new MoebiusPaletteColors(colors);
```

#### Defined in

[classes/MoebiusPaletteColors.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L33)

## Properties

### analogous

• **analogous**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[analogous](../interfaces/types.MoebiusPaletteColorsInterface.md#analogous)

#### Defined in

[classes/MoebiusPaletteColors.ts:19](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L19)

___

### complement

• **complement**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[complement](../interfaces/types.MoebiusPaletteColorsInterface.md#complement)

#### Defined in

[classes/MoebiusPaletteColors.ts:13](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L13)

___

### hexadic

• **hexadic**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[hexadic](../interfaces/types.MoebiusPaletteColorsInterface.md#hexadic)

#### Defined in

[classes/MoebiusPaletteColors.ts:18](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L18)

___

### interpolate

• **interpolate**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[interpolate](../interfaces/types.MoebiusPaletteColorsInterface.md#interpolate)

#### Defined in

[classes/MoebiusPaletteColors.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L10)

___

### luminanceShift

• **luminanceShift**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[luminanceShift](../interfaces/types.MoebiusPaletteColorsInterface.md#luminanceshift)

#### Defined in

[classes/MoebiusPaletteColors.ts:11](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L11)

___

### monochromatic

• **monochromatic**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[monochromatic](../interfaces/types.MoebiusPaletteColorsInterface.md#monochromatic)

#### Defined in

[classes/MoebiusPaletteColors.ts:12](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L12)

___

### pentadic

• **pentadic**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[pentadic](../interfaces/types.MoebiusPaletteColorsInterface.md#pentadic)

#### Defined in

[classes/MoebiusPaletteColors.ts:17](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L17)

___

### split

• **split**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[split](../interfaces/types.MoebiusPaletteColorsInterface.md#split)

#### Defined in

[classes/MoebiusPaletteColors.ts:14](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L14)

___

### tetradic

• **tetradic**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[tetradic](../interfaces/types.MoebiusPaletteColorsInterface.md#tetradic)

#### Defined in

[classes/MoebiusPaletteColors.ts:16](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L16)

___

### triadic

• **triadic**: \`#$\{string}\`[]

#### Implementation of

[MoebiusPaletteColorsInterface](../interfaces/types.MoebiusPaletteColorsInterface.md).[triadic](../interfaces/types.MoebiusPaletteColorsInterface.md#triadic)

#### Defined in

[classes/MoebiusPaletteColors.ts:15](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L15)

## Methods

### toArray

▸ **toArray**(): \`#$\{string}\`[]

Converts the palettes to a flat array.

#### Returns

\`#$\{string}\`[]

- Array of hex color values.

**`Example`**

```ts
const palette = new MoebiusPaletteColors({ interpolate: ['#ff0000', '#00ff00'] });
const flatArray = palette.toArray();
console.log(flatArray); // ['#ff0000', '#00ff00']
```

#### Defined in

[classes/MoebiusPaletteColors.ts:49](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L49)
