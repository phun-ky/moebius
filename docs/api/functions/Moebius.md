[@phun-ky/moebius](../index.md) / Moebius

# Function: Moebius()

```ts
function Moebius(options?: MoebiusOptionsType): MoebiusReturnType;
```

Defined in: [main.ts:65](https://github.com/phun-ky/moebius/blob/main/src/main.ts#L65)

**`Function`**

Initializes and returns Moebius utilities with dynamic color naming support.

This includes:

- A subclass of `MoebiusColor` with nearest color name mapping
- `MoebiusPalettes` for generating color palettes
- `MoebiusSVGHelper` for generating SVG paths for colored pie slices.

## Parameters

### options?

[`MoebiusOptionsType`](../type-aliases/MoebiusOptionsType.md)

Options; `colorNames` sets where
color names come from. Without it, names are fetched from
https://color-names.herokuapp.com/v1/, which is deprecated.

## Returns

[`MoebiusReturnType`](../type-aliases/MoebiusReturnType.md)

An object containing Moebius utility classes

## Async

## Throws

If `options` is not an object, or `colorNames` has an
unsupported shape.

## Throws

If a `colorNames` URL responds with an error status.

## Example

```ts
const moebius = await Moebius({ colorNames: '/colornames.json' });
const color = new moebius.MoebiusColor('#abc123');
console.log(color.name); // Closest color name, e.g., 'Avocado'
```
