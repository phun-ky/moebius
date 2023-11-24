[@phun-ky/moebius](../README.md) / utils/random

# Module: utils/random

## Functions

### random

▸ **random**(`max`, `min`): `number`

Generates a random integer within a specified range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `max` | `number` | The maximum value (inclusive) for the random number. |
| `min` | `number` | The minimum value (inclusive) for the random number. |

#### Returns

`number`

- A random integer within the specified range.

**`Example`**

```ts
// Generate a random integer between 1 and 10, inclusive
const randomNumber = random(10, 1);
console.log(randomNumber); // Example output: 5
```

#### Defined in

[utils/random.ts:15](https://github.com/phun-ky/moebius/blob/main/src/utils/random.ts#L15)
