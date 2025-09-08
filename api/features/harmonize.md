[@phun-ky/moebius](../README.md) / features/harmonize

# features/harmonize

> Last updated 2025-09-08T05:21:11.403Z

##

## Functions

### harmonize()

```ts
function harmonize(color, start, end, interval, options?): `#${string}`[];
```

Defined in: [features/harmonize.ts:27](https://github.com/phun-ky/moebius/blob/main/src/features/harmonize.ts#L27)

Generate a harmonized color palette based on the input color.

#### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `color`    | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype)                                                                                                                    | The base color for generating the harmonized palette.          |
| `start`    | `number`                                                                                                                                                                                    | The starting angle for generating harmonized colors (degrees). |
| `end`      | `number`                                                                                                                                                                                    | The ending angle for generating harmonized colors (degrees).   |
| `interval` | `number`                                                                                                                                                                                    | The interval between harmonized colors (degrees).              |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the palette.                            |

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
