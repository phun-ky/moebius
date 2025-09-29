[@phun-ky/moebius](../README.md) / features/dark-mode

# features/dark-mode

> Last updated 2025-09-29T08:40:47.705Z

##

## Functions

### darkMode()

```ts
function darkMode(
  baseColor,
  secondaryColor,
  options?
): Record<string, MoebiusColorValueHexType[]>;
```

Defined in: [features/dark-mode.ts:31](https://github.com/phun-ky/moebius/blob/main/src/features/dark-mode.ts#L31)

Generates a dark mode color palette based on the provided base and secondary colors.

#### Parameters

| Parameter        | Type                                                                                                                                                                                        | Description                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `baseColor`      | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)                                                                                                                    | The base color for the palette.      |
| `secondaryColor` | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)                                                                                                                    | The secondary color for the palette. |
| `options?`       | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Palette options.                     |

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`MoebiusColorValueHexType`](../types.md#moebiuscolorvaluehextype)\[]>

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
