[@phun-ky/moebius](../README.md) / classes/MoebiusColor

# classes/MoebiusColor

> Last updated 2025-05-05T09:02:27.560Z

##

## Classes

### MoebiusColor

Defined in: [classes/MoebiusColor.ts:26](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L26)

MoebiusColor class representing a color with various formats and conversions.

#### Example

```ts
const mColor = new MoebiusColor('#ff9900');
```

#### Implements

- [`MoebiusColorInterface`](../types.md#moebiuscolorinterface)

#### Constructors

##### Constructor

```ts
new MoebiusColor(color, name): MoebiusColor;
```

Defined in: [classes/MoebiusColor.ts:51](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L51)

Creates an instance of MoebiusColor.

###### Parameters

| Parameter | Type                                                                     | Description                 |
| --------- | ------------------------------------------------------------------------ | --------------------------- |
| `color`   | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype) | The hex value of the color. |
| `name`    | `string`                                                                 | The name of the color       |

###### Returns

[`MoebiusColor`](#moebiuscolor)

###### Throws

Will throw an error if init has not been run before creating an instance.

#### Properties

| Property                         | Type                                                                     | Defined in                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| <a id="cmyk"></a> `cmyk`         | [`MoebiusCMYKObjectType`](../types.md#moebiuscmykobjecttype)             | [classes/MoebiusColor.ts:40](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L40) |
| <a id="color"></a> `color`       | [`MoebiusChromaColorInputType`](../types.md#moebiuschromacolorinputtype) | [classes/MoebiusColor.ts:27](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L27) |
| <a id="hex"></a> `hex`           | `` `#${string}` ``                                                       | [classes/MoebiusColor.ts:29](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L29) |
| <a id="hsi"></a> `hsi`           | [`MoebiusHSIObjectType`](../types.md#moebiushsiobjecttype)               | [classes/MoebiusColor.ts:38](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L38) |
| <a id="hsl"></a> `hsl`           | [`MoebiusHSLObjectType`](../types.md#moebiushslobjecttype)               | [classes/MoebiusColor.ts:31](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L31) |
| <a id="hslfloat"></a> `hslFloat` | [`MoebiusHSLObjectType`](../types.md#moebiushslobjecttype)               | [classes/MoebiusColor.ts:42](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L42) |
| <a id="hsv"></a> `hsv`           | [`MoebiusHSVObjectType`](../types.md#moebiushsvobjecttype)               | [classes/MoebiusColor.ts:33](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L33) |
| <a id="hwb"></a> `hwb`           | [`MoebiusHWBObjectType`](../types.md#moebiushwbobjecttype)               | [classes/MoebiusColor.ts:32](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L32) |
| <a id="lab"></a> `lab`           | [`MoebiusLABObjectType`](../types.md#moebiuslabobjecttype)               | [classes/MoebiusColor.ts:34](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L34) |
| <a id="lch"></a> `lch`           | [`MoebiusLCHObjectType`](../types.md#moebiuslchobjecttype)               | [classes/MoebiusColor.ts:36](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L36) |
| <a id="name"></a> `name`         | `string`                                                                 | [classes/MoebiusColor.ts:28](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L28) |
| <a id="oklab"></a> `oklab`       | [`MoebiusLABObjectType`](../types.md#moebiuslabobjecttype)               | [classes/MoebiusColor.ts:39](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L39) |
| <a id="oklch"></a> `oklch`       | [`MoebiusLCHObjectType`](../types.md#moebiuslchobjecttype)               | [classes/MoebiusColor.ts:37](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L37) |
| <a id="rgb"></a> `rgb`           | `` `rgb(${number}, ${number}, ${number})` ``                             | [classes/MoebiusColor.ts:30](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L30) |
| <a id="rgbfloat"></a> `rgbFloat` | [`MoebiusRGBObjectType`](../types.md#moebiusrgbobjecttype)               | [classes/MoebiusColor.ts:41](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L41) |
| <a id="xyz"></a> `xyz`           | [`MoebiusXYZObjectType`](../types.md#moebiusxyzobjecttype)               | [classes/MoebiusColor.ts:35](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L35) |

#### Methods

##### toFloat()

```ts
toFloat(type?):
  | MoebiusHSLObjectType
  | MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:86](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L86)

Converts the color to a floating-point representation in the specified color space.

###### Parameters

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `type?`   | `string` | The color space type (e.g., 'rgb' or 'hsl'). |

###### Returns

\| [`MoebiusHSLObjectType`](../types.md#moebiushslobjecttype)
\| [`MoebiusRGBObjectType`](../types.md#moebiusrgbobjecttype)

The floating-point representation of the color in the specified color space.

##### toObject()

```ts
toObject(type?):
  | MoebiusHSLObjectType
  | MoebiusRGBObjectType;
```

Defined in: [classes/MoebiusColor.ts:78](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusColor.ts#L78)

Converts the color to an object in the specified color space.

###### Parameters

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `type?`   | `string` | The color space type (e.g., 'rgb' or 'hsl'). |

###### Returns

\| [`MoebiusHSLObjectType`](../types.md#moebiushslobjecttype)
\| [`MoebiusRGBObjectType`](../types.md#moebiusrgbobjecttype)

The color object in the specified color space.

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
