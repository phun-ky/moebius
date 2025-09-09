[@phun-ky/moebius](../README.md) / features/luminance-shift

# features/luminance-shift

> Last updated 2025-09-09T07:55:09.196Z

##

## Functions

### luminanceShift()

```ts
function luminanceShift(colors, divergingColors?, options?): `#${string}`[];
```

Defined in: [features/luminance-shift.ts:121](https://github.com/phun-ky/moebius/blob/main/src/features/luminance-shift.ts#L121)

Generate a luminance shift palette based on an array of colors, with optional diverging colors.

#### Parameters

| Parameter          | Type                                                                                                                                                                                        | Default value | Description                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------- |
| `colors`           | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)\[]                                                                                                                 | `undefined`   | Array of base colors for generating the luminance shift palette. |
| `divergingColors?` | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)\[]                                                                                                                 | `[]`          | Array of diverging colors.                                       |
| `options?`         | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | `{}`          | Options for generating the palette.                              |

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
