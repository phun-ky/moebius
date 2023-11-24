[@phun-ky/moebius](../README.md) / utils/range

# Module: utils/range

## Functions

### range

▸ **range**(`start`, `stop`, `interval`): `number`[]

Generates an array of numbers within a specified range with a given interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The starting value of the range. |
| `stop` | `number` | The stopping value of the range. |
| `interval` | `number` | The interval between numbers in the range. |

#### Returns

`number`[]

- An array of numbers in the specified range.

**`Example`**

```ts
const result = range(1, 10, 2);
console.log(result); // [1, 3, 5, 7, 9]
```

#### Defined in

[utils/range.ts:13](https://github.com/phun-ky/moebius/blob/main/src/utils/range.ts#L13)
