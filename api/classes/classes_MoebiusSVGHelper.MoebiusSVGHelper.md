[@phun-ky/moebius](../README.md) / [classes/MoebiusSVGHelper](../modules/classes_MoebiusSVGHelper.md) / MoebiusSVGHelper

# Class: MoebiusSVGHelper

[classes/MoebiusSVGHelper](../modules/classes_MoebiusSVGHelper.md).MoebiusSVGHelper

Helper class for generating SVG paths for colored pie slices.

## Constructors

### constructor

• **new MoebiusSVGHelper**(): [`MoebiusSVGHelper`](classes_MoebiusSVGHelper.MoebiusSVGHelper.md)

#### Returns

[`MoebiusSVGHelper`](classes_MoebiusSVGHelper.MoebiusSVGHelper.md)

## Properties

### xlmns

• **xlmns**: `string` = `'http://www.w3.org/2000/svg'`

#### Defined in

[classes/MoebiusSVGHelper.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L10)

## Methods

### getColorPiePaths

▸ **getColorPiePaths**(`colors`, `size?`): `DocumentFragment`

Gets SVG paths for colored pie slices based on the provided colors.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `colors` | \`#$\{string}\`[][] | `undefined` | Array of color groups. |
| `size?` | `number` | `256` | Size of the SVG. |

#### Returns

`DocumentFragment`

- Document fragment containing the SVG paths.

**`Example`**

```ts
const svgHelper = new MoebiusSVGHelper();
const colors = [['#ff0000', '#00ff00'], ['#0000ff']];
const svgFragment = svgHelper.getColorPiePaths(colors, 256);
document.body.appendChild(svgFragment);
```

#### Defined in

[classes/MoebiusSVGHelper.ts:25](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusSVGHelper.ts#L25)
