[@phun-ky/moebius](../../README.md) / utils/color-objects/oklch

# utils/color-objects/oklch

> Last updated 2025-06-16T14:49:22.313Z

##

## Classes

### UnitOKLCH

Defined in: [utils/color-objects/oklch.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/oklch.ts#L4)

Represents an OKLCH color unit.

#### Constructors

##### Constructor

```ts
new UnitOKLCH(components): UnitOKLCH;
```

Defined in: [utils/color-objects/oklch.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/oklch.ts#L16)

Create a new UnitOKLCH instance.

###### Parameters

| Parameter    | Type                            | Description                      |
| ------------ | ------------------------------- | -------------------------------- |
| `components` | \[`number`, `number`, `number`] | The OKLCH components: \[l, c, h] |

###### Returns

[`UnitOKLCH`](#unitoklch)

#### Properties

| Property           | Type     | Description         | Defined in                                                                                                           |
| ------------------ | -------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <a id="c"></a> `c` | `number` | Chroma component    | [utils/color-objects/oklch.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/oklch.ts#L8)   |
| <a id="h"></a> `h` | `number` | Hue component       | [utils/color-objects/oklch.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/oklch.ts#L10) |
| <a id="l"></a> `l` | `number` | Lightness component | [utils/color-objects/oklch.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/oklch.ts#L6)   |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/oklch.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/oklch.ts#L31)

Converts the OKLCH unit to a string representation.

###### Returns

`string`

- The string representation of the OKLCH unit.

###### Example

```ts
const oklchUnit = new UnitOKLCH([70, 30, 45]);
const oklchString = oklchUnit.toString(); // "70.00, 30.00, 45.00"
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
