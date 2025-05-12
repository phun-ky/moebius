[@phun-ky/moebius](../../README.md) / utils/color-objects/lab

# utils/color-objects/lab

> Last updated 2025-05-12T08:46:27.703Z

##

## Classes

### UnitLAB

Defined in: [utils/color-objects/lab.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/lab.ts#L4)

Represents a LAB (CIELAB) color unit.

#### Constructors

##### Constructor

```ts
new UnitLAB(components): UnitLAB;
```

Defined in: [utils/color-objects/lab.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/lab.ts#L16)

Create a new UnitLAB instance.

###### Parameters

| Parameter    | Type                            | Description                    |
| ------------ | ------------------------------- | ------------------------------ |
| `components` | \[`number`, `number`, `number`] | The LAB components: \[l, a, b] |

###### Returns

[`UnitLAB`](#unitlab)

#### Properties

| Property           | Type     | Description         | Defined in                                                                                                       |
| ------------------ | -------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="a"></a> `a` | `number` | A color component   | [utils/color-objects/lab.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/lab.ts#L8)   |
| <a id="b"></a> `b` | `number` | B color component   | [utils/color-objects/lab.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/lab.ts#L10) |
| <a id="l"></a> `l` | `number` | Lightness component | [utils/color-objects/lab.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/lab.ts#L6)   |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/lab.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/lab.ts#L31)

Converts the LAB unit to a string representation.

###### Returns

`string`

- The string representation of the LAB unit.

###### Example

```ts
const labUnit = new UnitLAB([70, 10, 20]);
const labString = labUnit.toString(); // "70, 10, 20"
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
