import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { arrayShuffle } from '../array-shuffle';

describe('arrayShuffle', () => {
  it('should shuffle the elements of an array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = arrayShuffle(originalArray);

    assert.ok(Array.isArray(shuffledArray));
    assert.notStrictEqual(originalArray, shuffledArray);
    assert.strictEqual(originalArray.length, shuffledArray.length);

    // Check if the elements have changed their positions
    let sameOrder = true;

    for (let i = 0; i < originalArray.length; i++) {
      if (originalArray[i] !== shuffledArray[i]) {
        sameOrder = false;
        break;
      }
    }
    assert.strictEqual(sameOrder, false);
  });

  it('should handle an empty array and return an empty array', () => {
    const originalArray = [];
    const shuffledArray = arrayShuffle(originalArray);

    assert.ok(Array.isArray(shuffledArray));
    assert.deepEqual(originalArray, shuffledArray);
    assert.strictEqual(originalArray.length, shuffledArray.length);
  });

  it('should handle an array with a single element and return the same array', () => {
    const originalArray = [1];
    const shuffledArray = arrayShuffle(originalArray);

    assert.ok(Array.isArray(shuffledArray));
    assert.deepEqual(originalArray, shuffledArray);
    assert.strictEqual(originalArray.length, shuffledArray.length);
  });
});
