[@phun-ky/moebius](../../README.md) / utils/converters/to-rgb

# utils/converters/to-rgb

> Last updated 2025-05-19T10:12:42.684Z

##

## Functions

### toRGB()

```ts
function toRGB(color): `rgb(${number}, ${number}, ${number})`;
```

Defined in: [utils/converters/to-rgb.ts:20](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-rgb.ts#L20)

Converts a color to its RGB representation.

#### Parameters

| Parameter | Type                                                                        | Description                                    |
| --------- | --------------------------------------------------------------------------- | ---------------------------------------------- |
| `color`   | [`MoebiusChromaColorInputType`](../../types.md#moebiuschromacolorinputtype) | The input color in any valid chroma-js format. |

#### Returns

`` `rgb(${number}, ${number}, ${number})` ``

The RGB representation of the input color.

#### Example

```ts
const rgbColor = toRGB('#3498db');
console.log(rgbColor); // Output: 'rgb(52, 152, 219)'
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
