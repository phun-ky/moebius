[@phun-ky/moebius](../index.md) / MoebiusReturnType

# Type Alias: MoebiusReturnType

```ts
type MoebiusReturnType = Promise<{
  MoebiusColor: (
    color: MoebiusChromaColorInputType,
    name?: string
  ) => MoebiusColor;
  MoebiusPalettes: typeof MoebiusPalettes;
  MoebiusSVGHelper: typeof MoebiusSVGHelper;
}>;
```

Defined in: [types/index.ts:83](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L83)

Describes a color with multiple representations and metadata.
