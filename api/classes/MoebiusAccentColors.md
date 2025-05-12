[@phun-ky/moebius](../README.md) / classes/MoebiusAccentColors

# classes/MoebiusAccentColors

> Last updated 2025-05-12T08:46:26.529Z

##

## Classes

### MoebiusAccentColors

Defined in: [classes/MoebiusAccentColors.ts:13](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L13)

Class representing a set of accent colors in various palettes.

#### Implements

- [`MoebiusPaletteAccentColorsInterface`](../types.md#moebiuspaletteaccentcolorsinterface)

#### Constructors

##### Constructor

```ts
new MoebiusAccentColors(colors, options): MoebiusAccentColors;
```

Defined in: [classes/MoebiusAccentColors.ts:41](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L41)

Creates an instance of MoebiusAccentColors.

###### Parameters

| Parameter | Type                                                                         | Description                             |
| --------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| `colors`  | [`MoebiusPaletteColorsInterface`](../types.md#moebiuspalettecolorsinterface) | Base colors for accent palettes.        |
| `options` | [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype)         | Options for generating accent palettes. |

###### Returns

[`MoebiusAccentColors`](#moebiusaccentcolors)

###### Example

```ts
const colors = {
  monochromatic: ['#ff0000', '#00ff00']
  // other base palettes...
};
const options = {
  baseColor: { color: '#ff0000', name: 'Red', hex: '#ff0000' },
  numberOfColors: 9
};
const accentColors = new MoebiusAccentColors(colors, options);
```

#### Properties

| Property                                     | Type                     | Defined in                                                                                                               |
| -------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| <a id="analogous"></a> `analogous`           | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L25) |
| <a id="complement"></a> `complement`         | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:19](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L19) |
| <a id="hexadic"></a> `hexadic`               | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L24) |
| <a id="interpolate"></a> `interpolate`       | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:16](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L16) |
| <a id="luminanceshift"></a> `luminanceShift` | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:17](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L17) |
| <a id="monochromatic"></a> `monochromatic`   | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:18](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L18) |
| <a id="pentadic"></a> `pentadic`             | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:23](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L23) |
| <a id="split"></a> `split`                   | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:20](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L20) |
| <a id="tetradic"></a> `tetradic`             | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:22](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L22) |
| <a id="triadic"></a> `triadic`               | `` `#${string}` ``\[]\[] | [classes/MoebiusAccentColors.ts:21](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L21) |

#### Methods

##### toArray()

```ts
toArray(): `#${string}`[];
```

Defined in: [classes/MoebiusAccentColors.ts:61](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusAccentColors.ts#L61)

Converts the accent palettes to a flat array.

###### Returns

`` `#${string}` ``\[]

- Array of hex color values.

###### Example

```ts
const accentColors = new MoebiusAccentColors(baseColors, options);
const flatArray = accentColors.toArray();
console.log(flatArray); // ['#ff0000', '#00ff00', ...]
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
