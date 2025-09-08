[@phun-ky/moebius](README.md) / main

# main

> Last updated 2025-09-08T05:21:11.584Z

##

## Functions

### Moebius()

```ts
function Moebius(): MoebiusReturnType;
```

Defined in: [main.ts:68](https://github.com/phun-ky/moebius/blob/main/src/main.ts#L68)

**`Function`**

Initializes and returns Moebius utilities with dynamic color naming support.

This includes:

- A subclass of `MoebiusColor` with nearest color name mapping
- `MoebiusPalettes` for generating color palettes
- `MoebiusSVGHelper` for generating SVG paths for colored pie slices.

#### Returns

[`MoebiusReturnType`](types.md#moebiusreturntype)

An object containing Moebius utility classes

#### Async

#### Example

```ts
const moebius = await Moebius();
const color = new moebius.MoebiusColor('#abc123');
console.log(color.name); // Closest color name, e.g., 'Avocado'
```

## References

### MoebiusChromaColorInputType

Re-exports [MoebiusChromaColorInputType](types.md#moebiuschromacolorinputtype)

---

### MoebiusCMYKObjectType

Re-exports [MoebiusCMYKObjectType](types.md#moebiuscmykobjecttype)

---

### MoebiusColorInterface

Re-exports [MoebiusColorInterface](types.md#moebiuscolorinterface)

---

### MoebiusColorValueHexType

Re-exports [MoebiusColorValueHexType](types.md#moebiuscolorvaluehextype)

---

### MoebiusColorValueHslaType

Re-exports [MoebiusColorValueHslaType](types.md#moebiuscolorvaluehslatype)

---

### MoebiusColorValueHslType

Re-exports [MoebiusColorValueHslType](types.md#moebiuscolorvaluehsltype)

---

### MoebiusColorValueRgbaType

Re-exports [MoebiusColorValueRgbaType](types.md#moebiuscolorvaluergbatype)

---

### MoebiusColorValueRgbType

Re-exports [MoebiusColorValueRgbType](types.md#moebiuscolorvaluergbtype)

---

### MoebiusHSIObjectType

Re-exports [MoebiusHSIObjectType](types.md#moebiushsiobjecttype)

---

### MoebiusHSLObjectType

Re-exports [MoebiusHSLObjectType](types.md#moebiushslobjecttype)

---

### MoebiusHSVObjectType

Re-exports [MoebiusHSVObjectType](types.md#moebiushsvobjecttype)

---

### MoebiusHWBObjectType

Re-exports [MoebiusHWBObjectType](types.md#moebiushwbobjecttype)

---

### MoebiusLABObjectType

Re-exports [MoebiusLABObjectType](types.md#moebiuslabobjecttype)

---

### MoebiusLCHObjectType

Re-exports [MoebiusLCHObjectType](types.md#moebiuslchobjecttype)

---

### MoebiusPaletteAccentColorsInterface

Re-exports [MoebiusPaletteAccentColorsInterface](types.md#moebiuspaletteaccentcolorsinterface)

---

### MoebiusPaletteColorsInterface

Re-exports [MoebiusPaletteColorsInterface](types.md#moebiuspalettecolorsinterface)

---

### MoebiusPaletteDefaultOptionsType

Re-exports [MoebiusPaletteDefaultOptionsType](types.md#moebiuspalettedefaultoptionstype)

---

### MoebiusPaletteInterface

Re-exports [MoebiusPaletteInterface](types.md#moebiuspaletteinterface)

---

### MoebiusPaletteOptionsType

Re-exports [MoebiusPaletteOptionsType](types.md#moebiuspaletteoptionstype)

---

### MoebiusReturnType

Re-exports [MoebiusReturnType](types.md#moebiusreturntype)

---

### MoebiusRGBObjectType

Re-exports [MoebiusRGBObjectType](types.md#moebiusrgbobjecttype)

---

### MoebiusThemeColorsInterface

Re-exports [MoebiusThemeColorsInterface](types.md#moebiusthemecolorsinterface)

---

### MoebiusXYZObjectType

Re-exports [MoebiusXYZObjectType](types.md#moebiusxyzobjecttype)

---

### NearestColorColorMatchInterface

Re-exports [NearestColorColorMatchInterface](types.md#nearestcolorcolormatchinterface)

---

### NearestColorColorSpecInterface

Re-exports [NearestColorColorSpecInterface](types.md#nearestcolorcolorspecinterface)

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
