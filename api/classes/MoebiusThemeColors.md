[@phun-ky/moebius](../README.md) / classes/MoebiusThemeColors

# classes/MoebiusThemeColors

> Last updated 2025-08-26T10:07:57.415Z

##

## Classes

### MoebiusThemeColors

Defined in: [classes/MoebiusThemeColors.ts:9](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusThemeColors.ts#L9)

Class representing a set of colors in various themes.

#### Implements

- [`MoebiusThemeColorsInterface`](../types.md#moebiusthemecolorsinterface)

#### Constructors

##### Constructor

```ts
new MoebiusThemeColors(colors): MoebiusThemeColors;
```

Defined in: [classes/MoebiusThemeColors.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusThemeColors.ts#L24)

Creates an instance of MoebiusThemeColors.

###### Parameters

| Parameter | Type                                                                     | Description                        |
| --------- | ------------------------------------------------------------------------ | ---------------------------------- |
| `colors`  | [`MoebiusThemeColorsInterface`](../types.md#moebiusthemecolorsinterface) | Palette colors to initialize with. |

###### Returns

[`MoebiusThemeColors`](#moebiusthemecolors)

###### Example

```ts
const colors = {
  interpolate: ['#ff0000', '#00ff00']
  // other themes...
};
const theme = new MoebiusThemeColors(colors);
```

#### Properties

| Property                         | Type                                                                                                                                                                         | Defined in                                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| <a id="darkmode"></a> `darkMode` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`MoebiusColorValueHexType`](../types.md#moebiuscolorvaluehextype)\[]> | [classes/MoebiusThemeColors.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusThemeColors.ts#L10) |

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
