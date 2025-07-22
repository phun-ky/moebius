[@phun-ky/moebius](../README.md) / classes/MoebiusPalettes

# classes/MoebiusPalettes

> Last updated 2025-07-22T17:47:05.808Z

##

## Classes

### MoebiusPalettes

Defined in: [classes/MoebiusPalettes.ts:23](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L23)

MoebiusPalettes class representing a set of color palettes and their variations.

#### Implements

- [`MoebiusPaletteInterface`](../types.md#moebiuspaletteinterface)

#### Constructors

##### Constructor

```ts
new MoebiusPalettes(options): MoebiusPalettes;
```

Defined in: [classes/MoebiusPalettes.ts:40](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L40)

Creates an instance of MoebiusPalettes.

###### Parameters

| Parameter | Type                                                                 | Description                           |
| --------- | -------------------------------------------------------------------- | ------------------------------------- |
| `options` | [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for configuring the palettes. |

###### Returns

[`MoebiusPalettes`](#moebiuspalettes)

#### Properties

| Property                                     | Type                                                                                                                                                                                                | Default value | Defined in                                                                                                       |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="accents"></a> `accents`               | [`MoebiusPaletteAccentColorsInterface`](../types.md#moebiuspaletteaccentcolorsinterface)                                                                                                            | `undefined`   | [classes/MoebiusPalettes.ts:34](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L34) |
| <a id="all"></a> `all`                       | `` `#${string}` ``\[]                                                                                                                                                                               | `[]`          | [classes/MoebiusPalettes.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L33) |
| <a id="basecolor"></a> `baseColor`           | [`MoebiusColorInterface`](../types.md#moebiuscolorinterface)                                                                                                                                        | `undefined`   | [classes/MoebiusPalettes.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L24) |
| <a id="colors"></a> `colors`                 | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteColorsInterface`](../types.md#moebiuspalettecolorsinterface) | `{}`          | [classes/MoebiusPalettes.ts:26](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L26) |
| <a id="defaultoptions"></a> `defaultOptions` | [`MoebiusPaletteDefaultOptionsType`](../types.md#moebiuspalettedefaultoptionstype)                                                                                                                  | `undefined`   | [classes/MoebiusPalettes.ts:28](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L28) |
| <a id="options"></a> `options`               | [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype)                                                                                                                                | `undefined`   | [classes/MoebiusPalettes.ts:32](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L32) |
| <a id="secondarycolor"></a> `secondaryColor` | [`MoebiusColorInterface`](../types.md#moebiuscolorinterface)                                                                                                                                        | `undefined`   | [classes/MoebiusPalettes.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L25) |
| <a id="themes"></a> `themes`                 | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusThemeColorsInterface`](../types.md#moebiusthemecolorsinterface)     | `{}`          | [classes/MoebiusPalettes.ts:27](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L27) |

#### Methods

##### analogous()

```ts
analogous(color, options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:286](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L286)

Generate an analogous color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the analogous palette. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.                  |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the analogous palette.

###### Example

```ts
const baseColor = '#3498db';
const analogousPalette = analogous(baseColor, { numberOfColors: 5 });
console.log(analogousPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#db3474']
```

##### complement()

```ts
complement(color, options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:102](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L102)

Generate a complement color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the complement palette. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.<                  |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the complement palette.

###### Example

```ts
const baseColor = '#3498db';
const complementPalette = complement(baseColor, { numberOfColors: 5 });
console.log(complementPalette); // ['#3498db', '#db3434', '#75db34', '#dbd134', '#db7434']
```

##### darkMode()

```ts
darkMode(
   baseColor,
   secondaryColor,
options?): Record<string, MoebiusColorValueHexType[]>;
```

Defined in: [classes/MoebiusPalettes.ts:129](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L129)

Generates a dark mode color palette based on the provided base and secondary colors.

###### Parameters

| Parameter        | Type                                                                                                                                                                                        | Description                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `baseColor`      | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)                                                                                                                    | The base color for the palette.      |
| `secondaryColor` | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)                                                                                                                    | The secondary color for the palette. |
| `options?`       | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Palette options.                     |

###### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`MoebiusColorValueHexType`](../types.md#moebiuscolorvaluehextype)\[]>

- The generated dark mode color palette.

###### Example

```ts
const baseColor = '#3498db';
const secondaryColor = '#2ecc71';
const options = { bezier: true, colorScaleMode: 'lch' };
const palette = darkMode(baseColor, secondaryColor, options);
console.log(palette);
```

##### harmonize()

```ts
harmonize(
   color,
   start,
   end,
   interval,
   options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:405](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L405)

Generate a harmonized color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the harmonized palette.          |
| `start`    | `number`                                                                                                                                                                                    | The starting angle for generating harmonized colors (degrees). |
| `end`      | `number`                                                                                                                                                                                    | The ending angle for generating harmonized colors (degrees).   |
| `interval` | `number`                                                                                                                                                                                    | The interval between harmonized colors (degrees).              |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.                            |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the harmonized palette.

###### Example

```ts
const baseColor = '#3498db';
const harmonizedPalette = harmonize(baseColor, 30, 210, 30, {
  noDuplicates: true
});
console.log(harmonizedPalette); // ['#3498db', '#75db34', '#dbd134', '#db7434', '#3498db']
```

##### hexadic()

```ts
hexadic(color, options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:260](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L260)

Generate a hexadic color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the hexadic palette. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.                |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the hexadic palette.

###### Example

```ts
const baseColor = '#3498db';
const hexadicPalette = hexadic(baseColor, { numberOfColors: 5 });
console.log(hexadicPalette); // ['#3498db', '#5d7f33', '#8473a9', '#ad7a95', '#db3434']
```

##### interpolate()

```ts
interpolate(
   primaryColor,
   secondaryColor,
   options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:315](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L315)

Interpolate between two colors and generate a color palette.

###### Parameters

| Parameter        | Type                                                                                                                                                                                        | Description                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `primaryColor`   | `` `#${string}` ``                                                                                                                                                                          | The starting color for interpolation. |
| `secondaryColor` | `` `#${string}` ``                                                                                                                                                                          | The ending color for interpolation.   |
| `options?`       | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.   |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the interpolated palette.

###### Example

```ts
const startColor = '#3498db';
const endColor = '#db3434';
const interpolatedPalette = interpolate(startColor, endColor, {
  numberOfColors: 5
});
console.log(interpolatedPalette); // ['#3498db', '#5d6d7e', '#8473a9', '#ad7a95', '#db3434']
```

##### luminanceShift()

```ts
luminanceShift(
   colors,
   divergingColors?,
   options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:346](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L346)

Generate a luminance shift palette based on an array of colors, with optional diverging colors.

###### Parameters

| Parameter          | Type                                                                                                                                                                                        | Default value | Description                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------- |
| `colors`           | `` `#${string}` ``\[]                                                                                                                                                                       | `undefined`   | Array of base colors for generating the luminance shift palette. |
| `divergingColors?` | `` `#${string}` ``\[]                                                                                                                                                                       | `[]`          | Array of diverging colors.                                       |
| `options?`         | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | `{}`          | Options for generating the palette.                              |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the luminance shift palette.

###### Example

```ts
const baseColors = ['#3498db', '#99db34'];
const divergingColors = ['#db3434'];
const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, {
  numberOfColors: 5
});
console.log(luminanceShiftPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

##### monochromatic()

```ts
monochromatic(color, options): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:379](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L379)

Generates a monochromatic color palette based on the given color.

###### Parameters

| Parameter | Type                                                                                                                                                                                        | Description                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `color`   | `` `#${string}` ``                                                                                                                                                                          | The base color for the palette.     |
| `options` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette. |

###### Returns

`` `#${string}` ``\[]

- An array of hex color values in the palette.

###### Example

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

##### pentadic()

```ts
pentadic(color, options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:234](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L234)

Generate a pentadic color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the pentadic palette. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.                 |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the pentadic palette.

###### Example

```ts
const baseColor = '#3498db';
const pentadicPalette = pentadic(baseColor, { numberOfColors: 5 });
console.log(pentadicPalette); // ['#3498db', '#dbd134', '#db3434', '#34db99', '#8f34db']
```

##### split()

```ts
split(color, options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:156](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L156)

Generate a split color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the split palette. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.              |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the split palette.

###### Example

```ts
const baseColor = '#3498db';
const splitPalette = split(baseColor, { numberOfColors: 5 });
console.log(splitPalette); // ['#3498db', '#99db34', '#dbd134', '#db3434', '#8f34db']
```

##### tetradic()

```ts
tetradic(color, options?): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:208](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L208)

Generate a tetradic color palette based on the input color.

###### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `color`    | `` `#${string}` ``                                                                                                                                                                          | The base color for generating the tetradic palette. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.                 |

###### Returns

`` `#${string}` ``\[]

- Array of hex color values representing the tetradic palette.

###### Example

```ts
const baseColor = '#3498db';
const tetradicPalette = tetradic(baseColor, { numberOfColors: 5 });
console.log(tetradicPalette); // ['#3498db', '#db3434', '#34db99', '#dbd134', '#8f34db']
```

##### triadic()

```ts
triadic(color, options): `#${string}`[];
```

Defined in: [classes/MoebiusPalettes.ts:182](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPalettes.ts#L182)

Generates a triadic color palette based on the input color.

###### Parameters

| Parameter | Type                                                                                                                                                                                        | Description                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `color`   | `` `#${string}` ``                                                                                                                                                                          | The input color in various formats (HEX, RGB, HSL, etc.). |
| `options` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Additional options for palette generation.                |

###### Returns

`` `#${string}` ``\[]

An array of HEX values representing the triadic color palette.

###### Example

```ts
const triadicPalette = triadic('#3498db', { numberOfColors: 5 });
console.log(triadicPalette);
// Output: ['#3498db', '#db344f', '#4fdb34', '#9834db', '#34db98']
```

---

## Contributing

Want to contribute? Please read the [CONTRIBUTING.md](https://github.com/phun-ky/moebius/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/phun-ky/moebius/blob/main/CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/phun-ky/moebius/blob/main/LICENSE) file for details.

## Changelog

See the [CHANGELOG.md](https://github.com/phun-ky/moebius/blob/main/CHANGELOG.md) for details on the latest updates.

## Sponsor me

I'm an Open Source evangelist, creating stuff that does not exist yet to help get rid of secondary activities and to enhance systems already in place, be it documentation or web sites.

The sponsorship is an unique opportunity to alleviate more hours for me to maintain my projects, create new ones and contribute to the large community we're all part of :)

[Support me on GitHub Sponsors](https://github.com/sponsors/phun-ky).

![logo](https://github.com/phun-ky/moebius/blob/main/public/images/logo/logo-ring.png?raw=true)

p.s. **Ukraine is still under brutal Russian invasion. A lot of Ukrainian people are hurt, without shelter and need help**. You can help in various ways, for instance, directly helping refugees, spreading awareness, putting pressure on your local government or companies. You can also support Ukraine by donating e.g. to [Red Cross](https://www.icrc.org/en/donate/ukraine), [Ukraine humanitarian organisation](https://savelife.in.ua/en/donate-en/#donate-army-card-weekly) or [donate Ambulances for Ukraine](https://www.gofundme.com/f/help-to-save-the-lives-of-civilians-in-a-war-zone).
