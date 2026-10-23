[@phun-ky/moebius](../index.md) / MoebiusColorNamesType

# Type Alias: MoebiusColorNamesType

```ts
type MoebiusColorNamesType =
  Record<string, string> | MoebiusColorNameEntryType[] | string | URL;
```

Defined in: [types/index.ts:64](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L64)

Where `Moebius()` gets color names from:

- a map of name to hex, used as is
- an array of `{ name, hex }` entries, used as is
- a URL (string or `URL`) to JSON in either of those shapes, or
  `{ colors: [{ name, hex }] }` as the color-names API returns
