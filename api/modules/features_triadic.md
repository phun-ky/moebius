[@phun-ky/moebius](../README.md) / features/triadic

# Module: features/triadic

## Functions

### triadic

▸ **triadic**(`color`, `options?`): \`#${string}\`[]

Generates a triadic color palette based on the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`MoebiusChromaColorInputType`](types.md#moebiuschromacolorinputtype) | The input color in various formats (HEX, RGB, HSL, etc.). |
| `options` | `Record`<`string`, `unknown`\> \| [`MoebiusPaletteOptionsType`](types.md#moebiuspaletteoptionstype) | Additional options for palette generation. |

#### Returns

\`#${string}\`[]

An array of HEX values representing the triadic color palette.

**`Example`**

```ts
const triadicPalette = triadic('#3498db', { numberOfColors: 5 });
console.log(triadicPalette);
// Output: ['#3498db', '#db344f', '#4fdb34', '#9834db', '#34db98']
```

#### Defined in

features/triadic.ts:27
