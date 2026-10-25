[@phun-ky/moebius](../index.md) / MoebiusSVGHelper

# Interface: MoebiusSVGHelper

Defined in: [classes/MoebiusSVGHelper.ts:9](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L9)

Helper class for generating SVG paths for colored pie slices.

## Properties

### xlmns

```ts
xlmns: string = 'http://www.w3.org/2000/svg';
```

Defined in: [classes/MoebiusSVGHelper.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L10)

## Methods

### getColorPiePaths()

```ts
getColorPiePaths(colors: `#${string}`[][], size?: number): DocumentFragment;
```

Defined in: [classes/MoebiusSVGHelper.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L25)

Gets SVG paths for coloured pie slices based on the provided colors.

#### Parameters

##### colors

`` `#${string}` ``\[]\[]

Array of color groups.

##### size?

`number` = `256`

Size of the SVG.

#### Returns

[`DocumentFragment`](https://developer.mozilla.org/docs/Web/API/DocumentFragment)

- Document fragment containing the SVG paths.

#### Example

```ts
const svgHelper = new MoebiusSVGHelper();
const colors = [['#ff0000', '#00ff00'], ['#0000ff']];
const svgFragment = svgHelper.getColorPiePaths(colors, 256);
document.body.appendChild(svgFragment);
```
