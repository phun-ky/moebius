[@phun-ky/moebius](../../README.md) / utils/color-objects/hwb

# utils/color-objects/hwb

> Last updated 2025-07-07T13:14:45.741Z

##

## Classes

### UnitHWB

Defined in: [utils/color-objects/hwb.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hwb.ts#L4)

Represents an HWB (Hue, Whiteness, Blackness) color unit.

#### Constructors

##### Constructor

```ts
new UnitHWB(components): UnitHWB;
```

Defined in: [utils/color-objects/hwb.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hwb.ts#L16)

Create a new UnitHWB instance.

###### Parameters

| Parameter      | Type                                             | Description         |
| -------------- | ------------------------------------------------ | ------------------- |
| `components`   | { `b`: `number`; `h`: `number`; `w`: `number`; } | The HWB components. |
| `components.b` | `number`                                         | -                   |
| `components.h` | `number`                                         | -                   |
| `components.w` | `number`                                         | -                   |

###### Returns

[`UnitHWB`](#unithwb)

#### Properties

| Property           | Type     | Description         | Defined in                                                                                                       |
| ------------------ | -------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="b"></a> `b` | `number` | Blackness component | [utils/color-objects/hwb.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hwb.ts#L10) |
| <a id="h"></a> `h` | `number` | Hue component       | [utils/color-objects/hwb.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hwb.ts#L6)   |
| <a id="w"></a> `w` | `number` | Whiteness component | [utils/color-objects/hwb.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hwb.ts#L8)   |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/hwb.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hwb.ts#L31)

Converts the HWB unit to a string representation.

###### Returns

`string`

- A string like `"200, 0.2, 0.1"`

###### Example

```ts
const hwbUnit = new UnitHWB({ h: 200, w: 0.2, b: 0.1 });
const hwbString = hwbUnit.toString(); // "200, 0.2, 0.1"
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
