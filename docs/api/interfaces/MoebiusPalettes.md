[@phun-ky/moebius](../index.md) / MoebiusPalettes

# Interface: MoebiusPalettes

Defined in: [classes/MoebiusPalettes.ts:23](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L23)

MoebiusPalettes class representing a set of color palettes and their variations.

## Implements

- [`MoebiusPaletteInterface`](MoebiusPaletteInterface.md)

## Properties

### accents

```ts
accents: MoebiusPaletteAccentColorsInterface;
```

Defined in: [classes/MoebiusPalettes.ts:34](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L34)

#### Implementation of

```ts
MoebiusPaletteInterface.accents;
```

---

### all

```ts
all: `#${string}`[] = [];
```

Defined in: [classes/MoebiusPalettes.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L33)

#### Implementation of

```ts
MoebiusPaletteInterface.all;
```

---

### baseColor

```ts
baseColor: MoebiusColorInterface;
```

Defined in: [classes/MoebiusPalettes.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L24)

#### Implementation of

```ts
MoebiusPaletteInterface.baseColor;
```

---

### colors

```ts
colors: MoebiusPaletteColorsInterface;
```

Defined in: [classes/MoebiusPalettes.ts:26](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L26)

#### Implementation of

```ts
MoebiusPaletteInterface.colors;
```

---

### defaultOptions

```ts
defaultOptions: MoebiusPaletteDefaultOptionsType;
```

Defined in: [classes/MoebiusPalettes.ts:28](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L28)

#### Implementation of

```ts
MoebiusPaletteInterface.defaultOptions;
```

---

### options

```ts
options: MoebiusPaletteOptionsType;
```

Defined in: [classes/MoebiusPalettes.ts:32](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L32)

#### Implementation of

```ts
MoebiusPaletteInterface.options;
```

---

### secondaryColor

```ts
secondaryColor: MoebiusColorInterface;
```

Defined in: [classes/MoebiusPalettes.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L25)

#### Implementation of

```ts
MoebiusPaletteInterface.secondaryColor;
```

---

### themes

```ts
themes: MoebiusThemeColorsInterface;
```

Defined in: [classes/MoebiusPalettes.ts:27](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L27)

#### Implementation of

```ts
MoebiusPaletteInterface.themes;
```

## Methods

### analogous()

```ts
analogous(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:286](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L286)

Generate an analogous color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the analogous palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the analogous palette.

#### Example

```ts
const baseColor = '#3498db';
const analogousPalette = analogous(baseColor, { numberOfColors: 5 });
console.log(analogousPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#db3474']
```

---

### complement()

```ts
complement(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:102](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L102)

Generate a complement color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the complement palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.<

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the complement palette.

#### Example

```ts
const baseColor = '#3498db';
const complementPalette = complement(baseColor, { numberOfColors: 5 });
console.log(complementPalette); // ['#3498db', '#db3434', '#75db34', '#dbd134', '#db7434']
```

---

### darkMode()

```ts
darkMode(
   baseColor: MoebiusChromaColorInputType,
   secondaryColor: MoebiusChromaColorInputType,
   options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>
): Record<string, MoebiusColorValueHexType[]>;
```

Defined in: [classes/MoebiusPalettes.ts:129](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L129)

Generates a dark mode color palette based on the provided base and secondary colors.

#### Parameters

##### baseColor

[`MoebiusChromaColorInputType`](../type-aliases/MoebiusChromaColorInputType.md)

The base color for the palette.

##### secondaryColor

[`MoebiusChromaColorInputType`](../type-aliases/MoebiusChromaColorInputType.md)

The secondary color for the palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Palette options.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`MoebiusColorValueHexType`](../type-aliases/MoebiusColorValueHexType.md)\[]>

- The generated dark mode color palette.

#### Example

```ts
const baseColor = '#3498db';
const secondaryColor = '#2ecc71';
const options = { bezier: true, colorScaleMode: 'lch' };
const palette = darkMode(baseColor, secondaryColor, options);
console.log(palette);
```

---

### harmonize()

```ts
harmonize(
   color: `#${string}`,
   start: number,
   end: number,
   interval: number,
   options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>
): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:405](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L405)

Generate a harmonized color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the harmonized palette.

##### start

`number`

The starting angle for generating harmonized colors (degrees).

##### end

`number`

The ending angle for generating harmonized colors (degrees).

##### interval

`number`

The interval between harmonized colors (degrees).

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the harmonized palette.

#### Example

```ts
const baseColor = '#3498db';
const harmonizedPalette = harmonize(baseColor, 30, 210, 30, {
  noDuplicates: true
});
console.log(harmonizedPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#3498db']
```

---

### hexadic()

```ts
hexadic(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:260](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L260)

Generate a hexadic color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the hexadic palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the hexadic palette.

#### Example

```ts
const baseColor = '#3498db';
const hexadicPalette = hexadic(baseColor, { numberOfColors: 5 });
console.log(hexadicPalette); // ['#3498db', '#5d7f33', '#8473a9', '#ad7a95', '#db3434']
```

---

### interpolate()

```ts
interpolate(
   primaryColor: `#${string}`,
   secondaryColor: `#${string}`,
   options?: MoebiusPaletteOptionsType
): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:315](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L315)

Interpolate between two colors and generate a color palette.

#### Parameters

##### primaryColor

`` `#${string}` ``

The starting color for interpolation.

##### secondaryColor

`` `#${string}` ``

The ending color for interpolation.

##### options?

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

Options for generating the palette.

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the interpolated palette.

#### Example

```ts
const startColor = '#3498db';
const endColor = '#db3434';
const interpolatedPalette = interpolate(startColor, endColor, {
  numberOfColors: 5
});
console.log(interpolatedPalette); // ['#3498db', '#5d6d7e', '#8473a9', '#ad7a95', '#db3434']
```

---

### luminanceShift()

```ts
luminanceShift(
   colors: `#${string}`[],
   divergingColors?: `#${string}`[],
   options?: MoebiusPaletteOptionsType
): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:346](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L346)

Generate a luminance shift palette based on an array of colors, with optional diverging colors.

#### Parameters

##### colors

`` `#${string}` ``\[]

Array of base colors for generating the luminance shift palette.

##### divergingColors?

`` `#${string}` ``\[] = `[]`

Array of diverging colors.

##### options?

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

Options for generating the palette.

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the luminance shift palette.

#### Example

```ts
const baseColors = ['#3498db', '#99db34'];
const divergingColors = ['#db3434'];
const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, {
  numberOfColors: 5
});
console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

---

### monochromatic()

```ts
monochromatic(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:379](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L379)

Generates a monochromatic color palette based on the given color.

#### Parameters

##### color

`` `#${string}` ``

The base color for the palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

#### Returns

`` `#${string}` ``\[]

- An array of hex color values in the palette.

#### Example

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
  '#002df5' // blueBouquet
];
```

---

### pentadic()

```ts
pentadic(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:234](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L234)

Generate a pentadic color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the pentadic palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the pentadic palette.

#### Example

```ts
const baseColor = '#3498db';
const pentadicPalette = pentadic(baseColor, { numberOfColors: 5 });
console.log(pentadicPalette); // ['#3498db', '#dbd134', '#db3434', '#34db99', '#8f34db']
```

---

### split()

```ts
split(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:156](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L156)

Generate a split color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the split palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the split palette.

#### Example

```ts
const baseColor = '#3498db';
const splitPalette = split(baseColor, { numberOfColors: 5 });
console.log(splitPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

---

### tetradic()

```ts
tetradic(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:208](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L208)

Generate a tetradic color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The base color for generating the tetradic palette.

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Options for generating the palette.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the tetradic palette.

#### Example

```ts
const baseColor = '#3498db';
const tetradicPalette = tetradic(baseColor, { numberOfColors: 5 });
console.log(tetradicPalette); // ['#3498db', '#db3434', '#34db99', '#dbd134', '#8f34db']
```

---

### triadic()

```ts
triadic(color: `#${string}`, options?:
  | MoebiusPaletteOptionsType
  | Record<string, unknown>): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:182](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L182)

Generates a triadic color palette based on the input color.

#### Parameters

##### color

`` `#${string}` ``

The input color in various formats (HEX, RGB, HSL, etc.).

##### options?

| [`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)
| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

Additional options for palette generation.

[`MoebiusPaletteOptionsType`](../type-aliases/MoebiusPaletteOptionsType.md)

---

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`>

#### Returns

`` `#${string}` ``\[]

An array of HEX values representing the triadic color palette.

#### Example

```ts
const triadicPalette = triadic('#3498db', { numberOfColors: 5 });
console.log(triadicPalette);
// Output: ['#3498db', '#db344f', '#4fdb34', '#9834db', '#34db98']
```
