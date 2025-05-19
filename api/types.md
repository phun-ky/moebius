[@phun-ky/moebius](README.md) / types

# types

> Last updated 2025-05-19T10:12:42.019Z

##

## Interfaces

### MoebiusColorInterface

Defined in: [types/index.ts:4](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L4)

Represents a color object with various color representations.

#### Properties

| Property                         | Type                                                          | Defined in                                                                               |
| -------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <a id="cmyk"></a> `cmyk`         | [`MoebiusCMYKObjectType`](#moebiuscmykobjecttype)             | [types/index.ts:20](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L20) |
| <a id="color"></a> `color`       | [`MoebiusChromaColorInputType`](#moebiuschromacolorinputtype) | [types/index.ts:5](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L5)   |
| <a id="hex"></a> `hex`           | `` `#${string}` ``                                            | [types/index.ts:7](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L7)   |
| <a id="hsi"></a> `hsi`           | [`MoebiusHSIObjectType`](#moebiushsiobjecttype)               | [types/index.ts:18](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L18) |
| <a id="hsl"></a> `hsl`           | [`MoebiusHSLObjectType`](#moebiushslobjecttype)               | [types/index.ts:9](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L9)   |
| <a id="hslfloat"></a> `hslFloat` | [`MoebiusHSLObjectType`](#moebiushslobjecttype)               | [types/index.ts:10](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L10) |
| <a id="hsv"></a> `hsv`           | [`MoebiusHSVObjectType`](#moebiushsvobjecttype)               | [types/index.ts:13](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L13) |
| <a id="hwb"></a> `hwb`           | [`MoebiusHWBObjectType`](#moebiushwbobjecttype)               | [types/index.ts:12](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L12) |
| <a id="lab"></a> `lab`           | [`MoebiusLABObjectType`](#moebiuslabobjecttype)               | [types/index.ts:14](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L14) |
| <a id="lch"></a> `lch`           | [`MoebiusLCHObjectType`](#moebiuslchobjecttype)               | [types/index.ts:16](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L16) |
| <a id="name"></a> `name`         | `string`                                                      | [types/index.ts:6](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L6)   |
| <a id="oklab"></a> `oklab`       | [`MoebiusLABObjectType`](#moebiuslabobjecttype)               | [types/index.ts:19](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L19) |
| <a id="oklch"></a> `oklch`       | [`MoebiusLCHObjectType`](#moebiuslchobjecttype)               | [types/index.ts:17](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L17) |
| <a id="rgb"></a> `rgb`           | `` `rgb(${number}, ${number}, ${number})` ``                  | [types/index.ts:8](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L8)   |
| <a id="rgbfloat"></a> `rgbFloat` | [`MoebiusRGBObjectType`](#moebiusrgbobjecttype)               | [types/index.ts:11](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L11) |
| <a id="xyz"></a> `xyz`           | [`MoebiusXYZObjectType`](#moebiusxyzobjecttype)               | [types/index.ts:15](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L15) |

---

### MoebiusPaletteAccentColorsInterface

Defined in: [types/index.ts:60](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L60)

Represents a palette of accent colors with different schemes.

#### Properties

| Property                                     | Type                     | Defined in                                                                               |
| -------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| <a id="analogous"></a> `analogous`           | `` `#${string}` ``\[]\[] | [types/index.ts:70](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L70) |
| <a id="complement"></a> `complement`         | `` `#${string}` ``\[]\[] | [types/index.ts:64](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L64) |
| <a id="hexadic"></a> `hexadic`               | `` `#${string}` ``\[]\[] | [types/index.ts:69](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L69) |
| <a id="interpolate"></a> `interpolate`       | `` `#${string}` ``\[]\[] | [types/index.ts:61](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L61) |
| <a id="luminanceshift"></a> `luminanceShift` | `` `#${string}` ``\[]\[] | [types/index.ts:62](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L62) |
| <a id="monochromatic"></a> `monochromatic`   | `` `#${string}` ``\[]\[] | [types/index.ts:63](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L63) |
| <a id="pentadic"></a> `pentadic`             | `` `#${string}` ``\[]\[] | [types/index.ts:68](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L68) |
| <a id="split"></a> `split`                   | `` `#${string}` ``\[]\[] | [types/index.ts:65](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L65) |
| <a id="tetradic"></a> `tetradic`             | `` `#${string}` ``\[]\[] | [types/index.ts:67](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L67) |
| <a id="triadic"></a> `triadic`               | `` `#${string}` ``\[]\[] | [types/index.ts:66](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L66) |

---

### MoebiusPaletteColorsInterface

Defined in: [types/index.ts:37](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L37)

Represents a palette of colors with different schemes.

#### Properties

| Property                                       | Type                  | Defined in                                                                               |
| ---------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| <a id="analogous-1"></a> `analogous`           | `` `#${string}` ``\[] | [types/index.ts:47](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L47) |
| <a id="complement-1"></a> `complement`         | `` `#${string}` ``\[] | [types/index.ts:41](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L41) |
| <a id="hexadic-1"></a> `hexadic`               | `` `#${string}` ``\[] | [types/index.ts:46](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L46) |
| <a id="interpolate-1"></a> `interpolate`       | `` `#${string}` ``\[] | [types/index.ts:38](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L38) |
| <a id="luminanceshift-1"></a> `luminanceShift` | `` `#${string}` ``\[] | [types/index.ts:39](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L39) |
| <a id="monochromatic-1"></a> `monochromatic`   | `` `#${string}` ``\[] | [types/index.ts:40](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L40) |
| <a id="pentadic-1"></a> `pentadic`             | `` `#${string}` ``\[] | [types/index.ts:45](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L45) |
| <a id="split-1"></a> `split`                   | `` `#${string}` ``\[] | [types/index.ts:42](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L42) |
| <a id="tetradic-1"></a> `tetradic`             | `` `#${string}` ``\[] | [types/index.ts:44](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L44) |
| <a id="triadic-1"></a> `triadic`               | `` `#${string}` ``\[] | [types/index.ts:43](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L43) |

---

### MoebiusPaletteInterface

Defined in: [types/index.ts:23](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L23)

#### Properties

| Property                                     | Type                                                                                                                                                                                     | Defined in                                                                               |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <a id="accents"></a> `accents`               | [`MoebiusPaletteAccentColorsInterface`](#moebiuspaletteaccentcolorsinterface)                                                                                                            | [types/index.ts:31](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L31) |
| <a id="all"></a> `all`                       | `` `#${string}` ``\[]                                                                                                                                                                    | [types/index.ts:30](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L30) |
| <a id="basecolor"></a> `baseColor`           | [`MoebiusColorInterface`](#moebiuscolorinterface)                                                                                                                                        | [types/index.ts:24](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L24) |
| <a id="colors"></a> `colors`                 | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteColorsInterface`](#moebiuspalettecolorsinterface) | [types/index.ts:26](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L26) |
| <a id="defaultoptions"></a> `defaultOptions` | [`MoebiusPaletteDefaultOptionsType`](#moebiuspalettedefaultoptionstype)                                                                                                                  | [types/index.ts:28](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L28) |
| <a id="options"></a> `options`               | [`MoebiusPaletteOptionsType`](#moebiuspaletteoptionstype)                                                                                                                                | [types/index.ts:29](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L29) |
| <a id="secondarycolor"></a> `secondaryColor` | [`MoebiusColorInterface`](#moebiuscolorinterface)                                                                                                                                        | [types/index.ts:25](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L25) |
| <a id="themes"></a> `themes`                 | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusThemeColorsInterface`](#moebiusthemecolorsinterface)     | [types/index.ts:27](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L27) |

---

### MoebiusThemeColorsInterface

Defined in: [types/index.ts:53](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L53)

Represents a palette of colors with different themes.

#### Properties

| Property                         | Type                                                                                                                         | Defined in                                                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <a id="darkmode"></a> `darkMode` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `` `#${string}` ``\[]> | [types/index.ts:54](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L54) |

---

### NearestColorColorMatchInterface

Defined in: [types/index.ts:195](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L195)

Represents a color match for nearest color matching.

#### Properties

| Property                   | Type                                            | Defined in                                                                                 |
| -------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <a id="name-1"></a> `name` | `string`                                        | [types/index.ts:196](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L196) |
| <a id="rgb-1"></a> `rgb`   | [`MoebiusRGBObjectType`](#moebiusrgbobjecttype) | [types/index.ts:198](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L198) |
| <a id="value"></a> `value` | `string`                                        | [types/index.ts:197](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L197) |

---

### NearestColorColorSpecInterface

Defined in: [types/index.ts:186](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L186)

Represents a color specification for nearest color matching.

#### Properties

| Property                     | Type                                            | Defined in                                                                                 |
| ---------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <a id="name-2"></a> `name`   | `string`                                        | [types/index.ts:187](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L187) |
| <a id="rgb-2"></a> `rgb`     | [`MoebiusRGBObjectType`](#moebiusrgbobjecttype) | [types/index.ts:189](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L189) |
| <a id="source"></a> `source` | `string`                                        | [types/index.ts:188](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L188) |

## Type Aliases

### MoebiusChromaColorInputType

```ts
type MoebiusChromaColorInputType =
  | MoebiusCMYKObjectType
  | MoebiusLCHObjectType
  | MoebiusHSLObjectType
  | MoebiusColorValueHexType
  | string;
```

Defined in: [types/index.ts:201](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L201)

---

### MoebiusCMYKObjectType

```ts
type MoebiusCMYKObjectType = {
  c: number;
  k: number;
  m: number;
  y: number;
};
```

Defined in: [types/index.ts:176](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L176)

Represents a CMYK color object.

#### Properties

##### c

```ts
c: number;
```

Defined in: [types/index.ts:177](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L177)

##### k

```ts
k: number;
```

Defined in: [types/index.ts:180](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L180)

##### m

```ts
m: number;
```

Defined in: [types/index.ts:178](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L178)

##### y

```ts
y: number;
```

Defined in: [types/index.ts:179](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L179)

---

### MoebiusColorValueHexType

```ts
type MoebiusColorValueHexType = `#${string}`;
```

Defined in: [types/index.ts:109](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L109)

Represents a color value in hexadecimal format.

---

### MoebiusColorValueHslaType

```ts
type MoebiusColorValueHslaType =
  `hsl(${number}, ${string}, ${string}, ${number})`;
```

Defined in: [types/index.ts:119](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L119)

Represents a color value in HSLA format.

---

### MoebiusColorValueHslType

```ts
type MoebiusColorValueHslType = `hsl(${number}, ${string}, ${string})`;
```

Defined in: [types/index.ts:114](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L114)

Represents a color value in HSL format.

---

### MoebiusColorValueRgbaType

```ts
type MoebiusColorValueRgbaType =
  `rgb(${number}, ${number}, ${number}, ${number})`;
```

Defined in: [types/index.ts:130](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L130)

Represents a color value in RGBA format.

---

### MoebiusColorValueRgbType

```ts
type MoebiusColorValueRgbType = `rgb(${number}, ${number}, ${number})`;
```

Defined in: [types/index.ts:125](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L125)

Represents a color value in RGB format.

---

### MoebiusHSIObjectType

```ts
type MoebiusHSIObjectType = {
  h: number;
  i: number;
  s: number;
};
```

Defined in: [types/index.ts:156](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L156)

Represents an HSI color object.

#### Properties

##### h

```ts
h: number;
```

Defined in: [types/index.ts:156](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L156)

##### i

```ts
i: number;
```

Defined in: [types/index.ts:156](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L156)

##### s

```ts
s: number;
```

Defined in: [types/index.ts:156](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L156)

---

### MoebiusHSLObjectType

```ts
type MoebiusHSLObjectType = {
  h: number;
  l: number;
  s: number;
};
```

Defined in: [types/index.ts:141](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L141)

Represents an HSL color object.

#### Properties

##### h

```ts
h: number;
```

Defined in: [types/index.ts:141](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L141)

##### l

```ts
l: number;
```

Defined in: [types/index.ts:141](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L141)

##### s

```ts
s: number;
```

Defined in: [types/index.ts:141](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L141)

---

### MoebiusHSVObjectType

```ts
type MoebiusHSVObjectType = {
  h: number;
  s: number;
  v: number;
};
```

Defined in: [types/index.ts:146](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L146)

Represents an HSV color object.

#### Properties

##### h

```ts
h: number;
```

Defined in: [types/index.ts:146](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L146)

##### s

```ts
s: number;
```

Defined in: [types/index.ts:146](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L146)

##### v

```ts
v: number;
```

Defined in: [types/index.ts:146](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L146)

---

### MoebiusHWBObjectType

```ts
type MoebiusHWBObjectType = {
  b: number;
  h: number;
  w: number;
};
```

Defined in: [types/index.ts:166](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L166)

Represents an HWB color object.

#### Properties

##### b

```ts
b: number;
```

Defined in: [types/index.ts:166](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L166)

##### h

```ts
h: number;
```

Defined in: [types/index.ts:166](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L166)

##### w

```ts
w: number;
```

Defined in: [types/index.ts:166](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L166)

---

### MoebiusLABObjectType

```ts
type MoebiusLABObjectType = {
  a: number;
  b: number;
  l: number;
};
```

Defined in: [types/index.ts:171](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L171)

Represents a LAB color object.

#### Properties

##### a

```ts
a: number;
```

Defined in: [types/index.ts:171](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L171)

##### b

```ts
b: number;
```

Defined in: [types/index.ts:171](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L171)

##### l

```ts
l: number;
```

Defined in: [types/index.ts:171](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L171)

---

### MoebiusLCHObjectType

```ts
type MoebiusLCHObjectType = {
  c: number;
  h: number;
  l: number;
};
```

Defined in: [types/index.ts:151](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L151)

Represents an LCH color object.

#### Properties

##### c

```ts
c: number;
```

Defined in: [types/index.ts:151](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L151)

##### h

```ts
h: number;
```

Defined in: [types/index.ts:151](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L151)

##### l

```ts
l: number;
```

Defined in: [types/index.ts:151](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L151)

---

### MoebiusPaletteDefaultOptionsType

```ts
type MoebiusPaletteDefaultOptionsType = {
  bezier: boolean;
  colorScaleMode: string;
  correctLightness: boolean;
  divergentColor?: MoebiusColorValueHexType;
  diverging: boolean;
  noDuplicates: boolean;
  numberOfColors?: number;
  randomOffset: boolean;
  reverseDirection: boolean;
};
```

Defined in: [types/index.ts:94](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L94)

Represents default options for generating a color palette.

#### Properties

##### bezier

```ts
bezier: boolean;
```

Defined in: [types/index.ts:97](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L97)

##### colorScaleMode

```ts
colorScaleMode: string;
```

Defined in: [types/index.ts:101](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L101)

##### correctLightness

```ts
correctLightness: boolean;
```

Defined in: [types/index.ts:99](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L99)

##### divergentColor?

```ts
optional divergentColor: MoebiusColorValueHexType;
```

Defined in: [types/index.ts:95](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L95)

##### diverging

```ts
diverging: boolean;
```

Defined in: [types/index.ts:96](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L96)

##### noDuplicates

```ts
noDuplicates: boolean;
```

Defined in: [types/index.ts:100](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L100)

##### numberOfColors?

```ts
optional numberOfColors: number;
```

Defined in: [types/index.ts:103](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L103)

##### randomOffset

```ts
randomOffset: boolean;
```

Defined in: [types/index.ts:98](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L98)

##### reverseDirection

```ts
reverseDirection: boolean;
```

Defined in: [types/index.ts:102](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L102)

---

### MoebiusPaletteOptionsType

```ts
type MoebiusPaletteOptionsType = {
  baseColor: MoebiusColorInterface;
  bezier?: boolean;
  colorScaleMode?: string;
  correctLightness?: boolean;
  divergentColor?: MoebiusColorValueHexType;
  diverging?: boolean;
  divergingColor?: string;
  noDuplicates?: boolean;
  numberOfColors?: number;
  randomOffset?: boolean;
  reverseDirection?: boolean;
  secondaryColor: MoebiusColorInterface;
};
```

Defined in: [types/index.ts:76](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L76)

Represents options for generating a color palette.

#### Properties

##### baseColor

```ts
baseColor: MoebiusColorInterface;
```

Defined in: [types/index.ts:77](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L77)

##### bezier?

```ts
optional bezier: boolean;
```

Defined in: [types/index.ts:81](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L81)

##### colorScaleMode?

```ts
optional colorScaleMode: string;
```

Defined in: [types/index.ts:85](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L85)

##### correctLightness?

```ts
optional correctLightness: boolean;
```

Defined in: [types/index.ts:83](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L83)

##### divergentColor?

```ts
optional divergentColor: MoebiusColorValueHexType;
```

Defined in: [types/index.ts:79](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L79)

##### diverging?

```ts
optional diverging: boolean;
```

Defined in: [types/index.ts:80](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L80)

##### divergingColor?

```ts
optional divergingColor: string;
```

Defined in: [types/index.ts:86](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L86)

##### noDuplicates?

```ts
optional noDuplicates: boolean;
```

Defined in: [types/index.ts:84](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L84)

##### numberOfColors?

```ts
optional numberOfColors: number;
```

Defined in: [types/index.ts:88](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L88)

##### randomOffset?

```ts
optional randomOffset: boolean;
```

Defined in: [types/index.ts:82](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L82)

##### reverseDirection?

```ts
optional reverseDirection: boolean;
```

Defined in: [types/index.ts:87](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L87)

##### secondaryColor

```ts
secondaryColor: MoebiusColorInterface;
```

Defined in: [types/index.ts:78](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L78)

---

### MoebiusRGBObjectType

```ts
type MoebiusRGBObjectType = {
  b: number;
  g: number;
  r: number;
};
```

Defined in: [types/index.ts:136](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L136)

Represents an RGB color object.

#### Properties

##### b

```ts
b: number;
```

Defined in: [types/index.ts:136](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L136)

##### g

```ts
g: number;
```

Defined in: [types/index.ts:136](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L136)

##### r

```ts
r: number;
```

Defined in: [types/index.ts:136](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L136)

---

### MoebiusXYZObjectType

```ts
type MoebiusXYZObjectType = {
  x: number;
  y: number;
  z: number;
};
```

Defined in: [types/index.ts:161](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L161)

Represents an XYZ color object.

#### Properties

##### x

```ts
x: number;
```

Defined in: [types/index.ts:161](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L161)

##### y

```ts
y: number;
```

Defined in: [types/index.ts:161](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L161)

##### z

```ts
z: number;
```

Defined in: [types/index.ts:161](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L161)

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
