[@phun-ky/moebius](../README.md) / utils/a11y

# Module: utils/a11y

## Functions

### getA11yTextColor

▸ **getA11yTextColor**(`backgroundColor`, `ratio?`, `lightForegroundColor?`, `darkForegroundColor?`): `string`

Calculates accessible text color based on background color and specified contrast ratio.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `backgroundColor` | \`#${string}\` | `undefined` | The background color. |
| `ratio` | `number` | `5` | The desired contrast ratio. Default is 5. |
| `lightForegroundColor` | \`#${string}\` | `'#ffffff'` | The text color when the background is light. Default is '#ffffff'. |
| `darkForegroundColor` | \`#${string}\` | `'#000000'` | The text color when the background is dark. Default is '#000000'. |

#### Returns

`string`

- The calculated text color.

#### Defined in

[utils/a11y.ts:13](https://github.com/phun-ky/moebius/blob/main/src/utils/a11y.ts#L13)
