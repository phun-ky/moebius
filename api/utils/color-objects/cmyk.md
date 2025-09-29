[@phun-ky/moebius](../../README.md) / utils/color-objects/cmyk

# utils/color-objects/cmyk

> Last updated 2025-09-29T08:40:48.169Z

##

## Classes

### UnitCMYK

Defined in: [utils/color-objects/cmyk.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L4)

Represents a CMYK color unit.

#### Constructors

##### Constructor

```ts
new UnitCMYK(components): UnitCMYK;
```

Defined in: [utils/color-objects/cmyk.ts:18](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L18)

Create a new UnitCMYK instance.

###### Parameters

| Parameter      | Type                                                            | Description          |
| -------------- | --------------------------------------------------------------- | -------------------- |
| `components`   | { `c`: `number`; `k`: `number`; `m`: `number`; `y`: `number`; } | The CMYK components. |
| `components.c` | `number`                                                        | -                    |
| `components.k` | `number`                                                        | -                    |
| `components.m` | `number`                                                        | -                    |
| `components.y` | `number`                                                        | -                    |

###### Returns

[`UnitCMYK`](#unitcmyk)

#### Properties

| Property           | Type     | Description           | Defined in                                                                                                         |
| ------------------ | -------- | --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <a id="c"></a> `c` | `number` | Cyan component        | [utils/color-objects/cmyk.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L6)   |
| <a id="k"></a> `k` | `number` | Black (Key) component | [utils/color-objects/cmyk.ts:12](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L12) |
| <a id="m"></a> `m` | `number` | Magenta component     | [utils/color-objects/cmyk.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L8)   |
| <a id="y"></a> `y` | `number` | Yellow component      | [utils/color-objects/cmyk.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L10) |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/cmyk.ts:34](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/cmyk.ts#L34)

Converts the CMYK unit to a string representation.

###### Returns

`string`

- The string representation of the CMYK unit.

###### Example

```ts
const cmykUnit = new UnitCMYK({ c: 0.2, m: 0.4, y: 0.6, k: 0.1 });
const cmykString = cmykUnit.toString(); // "0.2, 0.4, 0.6, 0.1"
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
