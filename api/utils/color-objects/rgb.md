[@phun-ky/moebius](../../README.md) / utils/color-objects/rgb

# utils/color-objects/rgb

> Last updated 2025-09-29T08:40:48.390Z

##

## Classes

### UnitRGBFloat

Defined in: [utils/color-objects/rgb.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/rgb.ts#L4)

Represents an RGB float color unit.

#### Constructors

##### Constructor

```ts
new UnitRGBFloat(components): UnitRGBFloat;
```

Defined in: [utils/color-objects/rgb.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/rgb.ts#L16)

Create a new UnitRGBFloat instance.

###### Parameters

| Parameter      | Type                                             | Description               |
| -------------- | ------------------------------------------------ | ------------------------- |
| `components`   | { `b`: `number`; `g`: `number`; `r`: `number`; } | The RGB float components. |
| `components.b` | `number`                                         | -                         |
| `components.g` | `number`                                         | -                         |
| `components.r` | `number`                                         | -                         |

###### Returns

[`UnitRGBFloat`](#unitrgbfloat)

#### Properties

| Property           | Type     | Description     | Defined in                                                                                                       |
| ------------------ | -------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="b"></a> `b` | `number` | Blue component  | [utils/color-objects/rgb.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/rgb.ts#L10) |
| <a id="g"></a> `g` | `number` | Green component | [utils/color-objects/rgb.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/rgb.ts#L8)   |
| <a id="r"></a> `r` | `number` | Red component   | [utils/color-objects/rgb.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/rgb.ts#L6)   |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/rgb.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/rgb.ts#L31)

Converts the RGB float unit to a string representation.

###### Returns

`string`

- The string representation of the RGB float unit.

###### Example

```ts
const rgbFloatUnit = new UnitRGBFloat({ r: 255, g: 128, b: 0 });
const rgbFloatString = rgbFloatUnit.toString(); // "255, 128, 0"
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
