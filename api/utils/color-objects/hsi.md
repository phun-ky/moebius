[@phun-ky/moebius](../../README.md) / utils/color-objects/hsi

# utils/color-objects/hsi

> Last updated 2025-09-29T08:40:48.195Z

##

## Classes

### UnitHSI

Defined in: [utils/color-objects/hsi.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsi.ts#L4)

Represents an HSI (Hue, Saturation, Intensity) color unit.

#### Constructors

##### Constructor

```ts
new UnitHSI(components): UnitHSI;
```

Defined in: [utils/color-objects/hsi.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsi.ts#L16)

Create a new UnitHSI instance.

###### Parameters

| Parameter    | Type                            | Description                    |
| ------------ | ------------------------------- | ------------------------------ |
| `components` | \[`number`, `number`, `number`] | The HSI components: \[h, s, i] |

###### Returns

[`UnitHSI`](#unithsi)

#### Properties

| Property           | Type     | Description          | Defined in                                                                                                       |
| ------------------ | -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="h"></a> `h` | `number` | Hue component        | [utils/color-objects/hsi.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsi.ts#L6)   |
| <a id="i"></a> `i` | `number` | Intensity component  | [utils/color-objects/hsi.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsi.ts#L10) |
| <a id="s"></a> `s` | `number` | Saturation component | [utils/color-objects/hsi.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsi.ts#L8)   |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/hsi.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsi.ts#L31)

Converts the HSI unit to a string representation.

###### Returns

`string`

- The string representation of the HSI unit.

###### Example

```ts
const hsiUnit = new UnitHSI([30, 0.5, 0.8]);
const hsiString = hsiUnit.toString(); // "30, 0.5, 0.8"
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
