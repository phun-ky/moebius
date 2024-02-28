[@phun-ky/moebius](../README.md) / [classes/MoebiusThemeColors](../modules/classes_MoebiusThemeColors.md) / MoebiusThemeColors

# Class: MoebiusThemeColors

[classes/MoebiusThemeColors](../modules/classes_MoebiusThemeColors.md).MoebiusThemeColors

Class representing a set of colors in various themes.

## Implements

- [`MoebiusThemeColorsInterface`](../interfaces/types.MoebiusThemeColorsInterface.md)

## Constructors

### constructor

• **new MoebiusThemeColors**(`colors`): [`MoebiusThemeColors`](classes_MoebiusThemeColors.MoebiusThemeColors.md)

Creates an instance of MoebiusThemeColors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | [`MoebiusThemeColorsInterface`](../interfaces/types.MoebiusThemeColorsInterface.md) | Palette colors to initialize with. |

#### Returns

[`MoebiusThemeColors`](classes_MoebiusThemeColors.MoebiusThemeColors.md)

**`Example`**

```ts
const colors = {
  interpolate: ['#ff0000', '#00ff00'],
  // other themes...
};
const theme = new MoebiusThemeColors(colors);
```

#### Defined in

[classes/MoebiusThemeColors.ts:24](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusThemeColors.ts#L24)

## Properties

### darkmode

• **darkmode**: `Record`\<`string`, \`#$\{string}\`[]\>

#### Implementation of

[MoebiusThemeColorsInterface](../interfaces/types.MoebiusThemeColorsInterface.md).[darkmode](../interfaces/types.MoebiusThemeColorsInterface.md#darkmode)

#### Defined in

[classes/MoebiusThemeColors.ts:10](https://github.com/phun-ky/moebius/blob/main/src/classes/MoebiusThemeColors.ts#L10)
