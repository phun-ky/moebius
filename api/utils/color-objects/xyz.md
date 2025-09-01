[@phun-ky/moebius](../../README.md) / utils/color-objects/xyz

# utils/color-objects/xyz

> Last updated 2025-09-01T12:36:55.422Z

##

## Classes

### UnitXYZ

Defined in: [utils/color-objects/xyz.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/xyz.ts#L4)

Represents an XYZ color unit.

#### Constructors

##### Constructor

```ts
new UnitXYZ(components): UnitXYZ;
```

Defined in: [utils/color-objects/xyz.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/xyz.ts#L16)

Create a new UnitXYZ instance.

###### Parameters

| Parameter      | Type                                             | Description         |
| -------------- | ------------------------------------------------ | ------------------- |
| `components`   | { `x`: `number`; `y`: `number`; `z`: `number`; } | The XYZ components. |
| `components.x` | `number`                                         | -                   |
| `components.y` | `number`                                         | -                   |
| `components.z` | `number`                                         | -                   |

###### Returns

[`UnitXYZ`](#unitxyz)

#### Properties

| Property           | Type     | Description | Defined in                                                                                                       |
| ------------------ | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="x"></a> `x` | `number` | X component | [utils/color-objects/xyz.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/xyz.ts#L6)   |
| <a id="y"></a> `y` | `number` | Y component | [utils/color-objects/xyz.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/xyz.ts#L8)   |
| <a id="z"></a> `z` | `number` | Z component | [utils/color-objects/xyz.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/xyz.ts#L10) |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/xyz.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/xyz.ts#L31)

Converts the XYZ unit to a string representation.

###### Returns

`string`

- The string representation of the XYZ unit.

###### Example

```ts
const xyzUnit = new UnitXYZ({ x: 0.4, y: 0.6, z: 0.8 });
const xyzString = xyzUnit.toString(); // "0.4, 0.6, 0.8"
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
