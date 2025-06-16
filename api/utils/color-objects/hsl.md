[@phun-ky/moebius](../../README.md) / utils/color-objects/hsl

# utils/color-objects/hsl

> Last updated 2025-06-16T14:49:22.156Z

##

## Classes

### UnitHSL

Defined in: [utils/color-objects/hsl.ts:4](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L4)

Represents an HSL (Hue, Saturation, Lightness) color unit.

#### Constructors

##### Constructor

```ts
new UnitHSL(components): UnitHSL;
```

Defined in: [utils/color-objects/hsl.ts:16](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L16)

Create a new UnitHSL instance.

###### Parameters

| Parameter    | Type                            | Description                    |
| ------------ | ------------------------------- | ------------------------------ |
| `components` | \[`number`, `number`, `number`] | The HSL components: \[h, s, l] |

###### Returns

[`UnitHSL`](#unithsl)

#### Properties

| Property           | Type     | Description                   | Defined in                                                                                                       |
| ------------------ | -------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="h"></a> `h` | `number` | Hue component (0–360)         | [utils/color-objects/hsl.ts:6](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L6)   |
| <a id="l"></a> `l` | `number` | Lightness component (0–100%)  | [utils/color-objects/hsl.ts:10](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L10) |
| <a id="s"></a> `s` | `number` | Saturation component (0–100%) | [utils/color-objects/hsl.ts:8](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L8)   |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/hsl.ts:31](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L31)

Converts the HSL unit to a CSS string representation.

###### Returns

`string`

- A string like "hsl(30, 50%, 80%)"

###### Example

```ts
const hslUnit = new UnitHSL([30, 0.5, 0.8]);
const hslString = hslUnit.toString(); // "hsl(30, 50%, 80%)"
```

---

### UnitHSLFloat

Defined in: [utils/color-objects/hsl.ts:39](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L39)

Represents an HSL (Hue, Saturation, Lightness) color unit with float values.

#### Constructors

##### Constructor

```ts
new UnitHSLFloat(components): UnitHSLFloat;
```

Defined in: [utils/color-objects/hsl.ts:51](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L51)

Create a new UnitHSLFloat instance.

###### Parameters

| Parameter    | Type                            | Description                    |
| ------------ | ------------------------------- | ------------------------------ |
| `components` | \[`number`, `number`, `number`] | The HSL components: \[h, s, l] |

###### Returns

[`UnitHSLFloat`](#unithslfloat)

#### Properties

| Property             | Type     | Description          | Defined in                                                                                                       |
| -------------------- | -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <a id="h-1"></a> `h` | `number` | Hue component        | [utils/color-objects/hsl.ts:41](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L41) |
| <a id="l-1"></a> `l` | `number` | Lightness component  | [utils/color-objects/hsl.ts:45](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L45) |
| <a id="s-1"></a> `s` | `number` | Saturation component | [utils/color-objects/hsl.ts:43](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L43) |

#### Methods

##### toString()

```ts
toString(): string;
```

Defined in: [utils/color-objects/hsl.ts:66](https://github.com/phun-ky/moebius/blob/main/src/utils/color-objects/hsl.ts#L66)

Converts the HSL float unit to a string.

###### Returns

`string`

- A string like "30, 0.50, 0.80"

###### Example

```ts
const hslFloatUnit = new UnitHSLFloat([30, 0.5, 0.8]);
const hslFloatString = hslFloatUnit.toString(); // "30, 0.50, 0.80"
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
