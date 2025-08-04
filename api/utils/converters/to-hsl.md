[@phun-ky/moebius](../../README.md) / utils/converters/to-hsl

# utils/converters/to-hsl

> Last updated 2025-08-04T06:19:05.623Z

##

## Functions

### toHSL()

```ts
function toHSL(color): MoebiusHSLObjectType;
```

Defined in: [utils/converters/to-hsl.ts:18](https://github.com/phun-ky/moebius/blob/main/src/utils/converters/to-hsl.ts#L18)

Converts a color to its corresponding HSL object representation.

#### Parameters

| Parameter | Type                                                                        | Description                    |
| --------- | --------------------------------------------------------------------------- | ------------------------------ |
| `color`   | [`MoebiusChromaColorInputType`](../../types.md#moebiuschromacolorinputtype) | The input color in hex format. |

#### Returns

[`MoebiusHSLObjectType`](../../types.md#moebiushslobjecttype)

The HSL color representation object.

#### Example

```ts
const hslObject = toHSL('#3498db');
console.log(hslObject); // Output: { h: 207.76, s: 0.86, l: 0.56 }
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
