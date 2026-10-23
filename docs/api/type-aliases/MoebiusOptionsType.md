[@phun-ky/moebius](../index.md) / MoebiusOptionsType

# Type Alias: MoebiusOptionsType

```ts
type MoebiusOptionsType = {
  colorNames?: MoebiusColorNamesType | false;
};
```

Defined in: [types/index.ts:70](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L70)

Options for `Moebius()`.

## Properties

### colorNames?

```ts
optional colorNames?: MoebiusColorNamesType | false;
```

Defined in: [types/index.ts:77](https://github.com/phun-ky/moebius/blob/main/src/types/index.ts#L77)

Color names to match colors against, or `false` for no names: no list
is loaded and every color's `name` is `''`. Without it, `Moebius()`
fetches names from https://color-names.herokuapp.com/v1/, which is
deprecated and will stop being the default in 3.0.
