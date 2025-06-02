[@phun-ky/moebius](../README.md) / classes/MoebiusSVGHelper

# classes/MoebiusSVGHelper

> Last updated 2025-06-02T07:07:11.267Z

##

## Classes

### MoebiusSVGHelper

Defined in: [classes/MoebiusSVGHelper.ts:9](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L9)

Helper class for generating SVG paths for colored pie slices.

#### Constructors

##### Constructor

```ts
new MoebiusSVGHelper(): MoebiusSVGHelper;
```

###### Returns

[`MoebiusSVGHelper`](#moebiussvghelper)

#### Properties

| Property                   | Type     | Default value                  | Defined in                                                                                                         |
| -------------------------- | -------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| <a id="xlmns"></a> `xlmns` | `string` | `'http://www.w3.org/2000/svg'` | [classes/MoebiusSVGHelper.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L10) |

#### Methods

##### getColorPiePaths()

```ts
getColorPiePaths(colors, size?): DocumentFragment;
```

Defined in: [classes/MoebiusSVGHelper.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L25)

Gets SVG paths for coloured pie slices based on the provided colors.

###### Parameters

| Parameter | Type                     | Default value | Description            |
| --------- | ------------------------ | ------------- | ---------------------- |
| `colors`  | `` `#${string}` ``\[]\[] | `undefined`   | Array of color groups. |
| `size?`   | `number`                 | `256`         | Size of the SVG.       |

###### Returns

[`DocumentFragment`](https://developer.mozilla.org/docs/Web/API/DocumentFragment)

- Document fragment containing the SVG paths.

###### Example

```ts
const svgHelper = new MoebiusSVGHelper();
const colors = [['#ff0000', '#00ff00'], ['#0000ff']];
const svgFragment = svgHelper.getColorPiePaths(colors, 256);
document.body.appendChild(svgFragment);
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
