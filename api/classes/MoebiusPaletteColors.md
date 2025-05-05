[@phun-ky/moebius](../README.md) / classes/MoebiusPaletteColors

# classes/MoebiusPaletteColors

> Last updated 2025-05-05T09:02:27.640Z

##

## Classes

### MoebiusPaletteColors

Defined in: [classes/MoebiusPaletteColors.ts:9](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L9)

Class representing a set of colors in various palettes.

#### Implements

- [`MoebiusPaletteColorsInterface`](../types.md#moebiuspalettecolorsinterface)

#### Constructors

##### Constructor

```ts
new MoebiusPaletteColors(colors): MoebiusPaletteColors;
```

Defined in: [classes/MoebiusPaletteColors.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L33)

Creates an instance of MoebiusPaletteColors.

###### Parameters

| Parameter | Type                                                                         | Description                        |
| --------- | ---------------------------------------------------------------------------- | ---------------------------------- |
| `colors`  | [`MoebiusPaletteColorsInterface`](../types.md#moebiuspalettecolorsinterface) | Palette colors to initialize with. |

###### Returns

[`MoebiusPaletteColors`](#moebiuspalettecolors)

###### Example

```ts
const colors = {
  interpolate: ['#ff0000', '#00ff00']
  // other palettes...
};
const palette = new MoebiusPaletteColors(colors);
```

#### Properties

| Property                                     | Type                  | Defined in                                                                                                                 |
| -------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <a id="analogous"></a> `analogous`           | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:19](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L19) |
| <a id="complement"></a> `complement`         | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:13](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L13) |
| <a id="hexadic"></a> `hexadic`               | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:18](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L18) |
| <a id="interpolate"></a> `interpolate`       | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L10) |
| <a id="luminanceshift"></a> `luminanceShift` | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:11](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L11) |
| <a id="monochromatic"></a> `monochromatic`   | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:12](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L12) |
| <a id="pentadic"></a> `pentadic`             | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:17](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L17) |
| <a id="split"></a> `split`                   | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:14](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L14) |
| <a id="tetradic"></a> `tetradic`             | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:16](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L16) |
| <a id="triadic"></a> `triadic`               | `` `#${string}` ``\[] | [classes/MoebiusPaletteColors.ts:15](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L15) |

#### Methods

##### toArray()

```ts
toArray(): `#${string}`[];
```

Defined in: [classes/MoebiusPaletteColors.ts:49](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusPaletteColors.ts#L49)

Converts the palettes to a flat array.

###### Returns

`` `#${string}` ``\[]

- Array of hex color values.

###### Example

```ts
const palette = new MoebiusPaletteColors({
  interpolate: ['#ff0000', '#00ff00']
});
const flatArray = palette.toArray();
console.log(flatArray); // ['#ff0000', '#00ff00']
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
