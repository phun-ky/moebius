[@phun-ky/moebius](../README.md) / utils/get-chroma-bezier-scale-colors

# utils/get-chroma-bezier-scale-colors

> Last updated 2025-05-06T10:03:14.693Z

##

## Functions

### getChromaBezierScaleColors()

```ts
function getChromaBezierScaleColors(colors, options?): any;
```

Defined in: [utils/get-chroma-bezier-scale-colors.ts:21](https://github.com/phun-ky/moebius/blob/main/src/utils/get-chroma-bezier-scale-colors.ts#L21)

Generates a color scale using Chroma.js's bezier interpolation.

#### Parameters

| Parameter  | Type                                                                                                                                                                                        | Description                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `colors`   | `` `#${string}` ``\[]                                                                                                                                                                       | The input colors for the bezier interpolation. |
| `options?` | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`> \| [`MoebiusPaletteOptionsType`](../types.md#moebiuspaletteoptionstype) | Options for generating the color scale.        |

#### Returns

`any`

- The generated color scale.

#### Example

```ts
const inputColors = ['#3498db', '#2ecc71', '#e74c3c'];
const options = {
  numberOfColors: 5,
  colorScaleMode: 'lch',
  correctLightness: false
};
const scaleColors = getChromaBezierScaleColors(inputColors, options);
console.log(scaleColors);
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
