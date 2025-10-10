[@phun-ky/moebius](../index.md) / Moebius

# Function: Moebius()

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

## Returns

[`MoebiusReturnType`](../type-aliases/MoebiusReturnType.md)

An object containing Moebius utility classes

## Async

## Example

```ts
const moebius = await Moebius();
const color = new moebius.MoebiusColor('#abc123');
console.log(color.name); // Closest color name, e.g., 'Avocado'
```
