[@phun-ky/moebius](../README.md) / [classes/MoebiusPalettes](../modules/classes_MoebiusPalettes.md) / MoebiusPalettes

# Class: MoebiusPalettes

[classes/MoebiusPalettes](../modules/classes_MoebiusPalettes.md).MoebiusPalettes

MoebiusPalettes class representing a set of color palettes and their variations.

## Implements

- [`MoebiusPaletteInterface`](../interfaces/types.MoebiusPaletteInterface.md)

## Constructors

### constructor

• **new MoebiusPalettes**(`options`): [`MoebiusPalettes`](classes_MoebiusPalettes.MoebiusPalettes.md)

Creates an instance of MoebiusPalettes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for configuring the palettes. |

#### Returns

[`MoebiusPalettes`](classes_MoebiusPalettes.MoebiusPalettes.md)

#### Defined in

[classes/MoebiusPalettes.ts:37](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L37)

## Properties

### accents

• **accents**: [`MoebiusPaletteAccentColorsInterface`](../interfaces/types.MoebiusPaletteAccentColorsInterface.md)

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[accents](../interfaces/types.MoebiusPaletteInterface.md#accents)

#### Defined in

[classes/MoebiusPalettes.ts:31](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L31)

___

### all

• **all**: \`#${string}\`[] = `[]`

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[all](../interfaces/types.MoebiusPaletteInterface.md#all)

#### Defined in

[classes/MoebiusPalettes.ts:30](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L30)

___

### baseColor

• **baseColor**: [`MoebiusColorInterface`](../interfaces/types.MoebiusColorInterface.md)

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[baseColor](../interfaces/types.MoebiusPaletteInterface.md#basecolor)

#### Defined in

[classes/MoebiusPalettes.ts:22](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L22)

___

### colors

• **colors**: `Record`<`string`, `unknown`\> \| [`MoebiusPaletteColorsInterface`](../interfaces/types.MoebiusPaletteColorsInterface.md) = `{}`

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[colors](../interfaces/types.MoebiusPaletteInterface.md#colors)

#### Defined in

[classes/MoebiusPalettes.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L24)

___

### defaultOptions

• **defaultOptions**: [`MoebiusPaletteDefaultOptionsType`](../modules/types.md#moebiuspalettedefaultoptionstype)

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[defaultOptions](../interfaces/types.MoebiusPaletteInterface.md#defaultoptions)

#### Defined in

[classes/MoebiusPalettes.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L25)

___

### options

• **options**: [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype)

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[options](../interfaces/types.MoebiusPaletteInterface.md#options)

#### Defined in

[classes/MoebiusPalettes.ts:29](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L29)

___

### secondaryColor

• **secondaryColor**: [`MoebiusColorInterface`](../interfaces/types.MoebiusColorInterface.md)

#### Implementation of

[MoebiusPaletteInterface](../interfaces/types.MoebiusPaletteInterface.md).[secondaryColor](../interfaces/types.MoebiusPaletteInterface.md#secondarycolor)

#### Defined in

[classes/MoebiusPalettes.ts:23](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L23)

## Methods

### analogous

▸ **analogous**(`color`, `options?`): \`#${string}\`[]

Generate an analogous color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the analogous palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the analogous palette.

**`Example`**

```ts
const baseColor = '#3498db';
const analogousPalette = analogous(baseColor, { numberOfColors: 5 });
console.log(analogousPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#db3474']
```

#### Defined in

[classes/MoebiusPalettes.ts:283](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L283)

___

### complement

▸ **complement**(`color`, `options?`): \`#${string}\`[]

Generate a complement color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the complement palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the complement palette.

**`Example`**

```ts
const baseColor = '#3498db';
const complementPalette = complement(baseColor, { numberOfColors: 5 });
console.log(complementPalette); // ['#3498db', '#db3434', '#75db34', '#dbd134', '#db7434']
```

#### Defined in

[classes/MoebiusPalettes.ts:99](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L99)

___

### darkmode

▸ **darkmode**(`baseColor`, `secondaryColor`, `options?`): `Record`<`string`, \`#${string}\`[]\>

Generates a dark mode color palette based on the provided base and secondary colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | [`MoebiusChromaColorInputType`](../modules/types.md#moebiuschromacolorinputtype) | The base color for the palette. |
| `secondaryColor` | [`MoebiusChromaColorInputType`](../modules/types.md#moebiuschromacolorinputtype) | The secondary color for the palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Palette options. |

#### Returns

`Record`<`string`, \`#${string}\`[]\>

- The generated dark mode color palette.

**`Example`**

```ts
const baseColor = '#3498db';
const secondaryColor = '#2ecc71';
const options = { bezier: true, colorScaleMode: 'lch' };
const palette = darkmode(baseColor, secondaryColor, options);
console.log(palette);
```

#### Defined in

[classes/MoebiusPalettes.ts:126](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L126)

___

### harmonize

▸ **harmonize**(`color`, `start`, `end`, `interval`, `options?`): \`#${string}\`[]

Generate a harmonized color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the harmonized palette. |
| `start` | `number` | The starting angle for generating harmonized colors (degrees). |
| `end` | `number` | The ending angle for generating harmonized colors (degrees). |
| `interval` | `number` | The interval between harmonized colors (degrees). |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the harmonized palette.

**`Example`**

```ts
const baseColor = '#3498db';
const harmonizedPalette = harmonize(baseColor, 30, 210, 30, { noDuplicates: true });
console.log(harmonizedPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#3498db']
```

#### Defined in

[classes/MoebiusPalettes.ts:402](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L402)

___

### hexadic

▸ **hexadic**(`color`, `options?`): \`#${string}\`[]

Generate a hexadic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the hexadic palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the hexadic palette.

**`Example`**

```ts
const baseColor = '#3498db';
const hexadicPalette = hexadic(baseColor, { numberOfColors: 5 });
console.log(hexadicPalette); // ['#3498db', '#5d7f33', '#8473a9', '#ad7a95', '#db3434']
```

#### Defined in

[classes/MoebiusPalettes.ts:257](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L257)

___

### interpolate

▸ **interpolate**(`primaryColor`, `secondaryColor`, `options?`): \`#${string}\`[]

Interpolate between two colors and generate a color palette.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `primaryColor` | \`#${string}\` | The starting color for interpolation. |
| `secondaryColor` | \`#${string}\` | The ending color for interpolation. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the interpolated palette.

**`Example`**

```ts
const startColor = '#3498db';
const endColor = '#db3434';
const interpolatedPalette = interpolate(startColor, endColor, { numberOfColors: 5 });
console.log(interpolatedPalette); // ['#3498db', '#5d6d7e', '#8473a9', '#ad7a95', '#db3434']
```

#### Defined in

[classes/MoebiusPalettes.ts:312](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L312)

___

### luminanceShift

▸ **luminanceShift**(`colors`, `divergingColors?`, `options?`): \`#${string}\`[]

Generate a luminance shift palette based on an array of colors, with optional diverging colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | \`#${string}\`[] | `undefined` | Array of base colors for generating the luminance shift palette. |
| `divergingColors?` | \`#${string}\`[] | `[]` | Array of diverging colors. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | `{}` | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the luminance shift palette.

**`Example`**

```ts
const baseColors = ['#3498db', '#99db34'];
const divergingColors = ['#db3434'];
const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, { numberOfColors: 5 });
console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

#### Defined in

[classes/MoebiusPalettes.ts:343](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L343)

___

### monochromatic

▸ **monochromatic**(`color`, `options?`): \`#${string}\`[]

Generates a monochromatic color palette based on the given color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for the palette. |
| `options` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- An array of hex color values in the palette.

**`Example`**

```typescript
const baseColor = '#003f5c';
const options = { numberOfColors: 5, bezier: true, randomOffset: false };
const monochromaticPalette = monochromatic(baseColor, options);
console.log(monochromaticPalette);
[
  '#003f5c', // maniacMansion,
  '#014268', // darkImperialBlue,
  '#024575', // macraggeBlue,
  '#044784', // bridgeport,
  '#064898', // frightNight,
  '#0745b6', // absoluteZero,
  '#002df5', // blueBouquet
];
```

#### Defined in

[classes/MoebiusPalettes.ts:376](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L376)

___

### pentadic

▸ **pentadic**(`color`, `options?`): \`#${string}\`[]

Generate a pentadic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the pentadic palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the pentadic palette.

**`Example`**

```ts
const baseColor = '#3498db';
const pentadicPalette = pentadic(baseColor, { numberOfColors: 5 });
console.log(pentadicPalette); // ['#3498db', '#dbd134', '#db3434', '#34db99', '#8f34db']
```

#### Defined in

[classes/MoebiusPalettes.ts:231](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L231)

___

### split

▸ **split**(`color`, `options?`): \`#${string}\`[]

Generate a split color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the split palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the split palette.

**`Example`**

```ts
const baseColor = '#3498db';
const splitPalette = split(baseColor, { numberOfColors: 5 });
console.log(splitPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

#### Defined in

[classes/MoebiusPalettes.ts:153](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L153)

___

### tetradic

▸ **tetradic**(`color`, `options?`): \`#${string}\`[]

Generate a tetradic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The base color for generating the tetradic palette. |
| `options?` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

#### Returns

\`#${string}\`[]

- Array of hex color values representing the tetradic palette.

**`Example`**

```ts
const baseColor = '#3498db';
const tetradicPalette = tetradic(baseColor, { numberOfColors: 5 });
console.log(tetradicPalette); // ['#3498db', '#db3434', '#34db99', '#dbd134', '#8f34db']
```

#### Defined in

[classes/MoebiusPalettes.ts:205](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L205)

___

### triadic

▸ **triadic**(`color`, `options?`): \`#${string}\`[]

Generates a triadic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | \`#${string}\` | The input color in various formats (HEX, RGB, HSL, etc.). |
| `options` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](../modules/types.md#moebiuspaletteoptionstype) | Additional options for palette generation. |

#### Returns

\`#${string}\`[]

An array of HEX values representing the triadic color palette.

**`Example`**

```ts
const triadicPalette = triadic('#3498db', { numberOfColors: 5 });
console.log(triadicPalette);
// Output: ['#3498db', '#db344f', '#4fdb34', '#9834db', '#34db98']
```

#### Defined in

[classes/MoebiusPalettes.ts:179](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L179)
