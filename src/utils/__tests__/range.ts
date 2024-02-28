import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { range } from '../range';

describe('range', () => {
  it('should generate an array of numbers within the specified range with the given interval', () => {
    const result = range(1, 10, 2);

    assert.deepStrictEqual(result, [1, 3, 5, 7, 9]);
  });

  it('should handle a range with a start value greater than the stop value', () => {
    const result = range(10, 1, 2);

    assert.deepStrictEqual(result, []);
  });

  it('should handle a range with a start value equal to the stop value', () => {
    const result = range(1, 1, 2);

    assert.deepStrictEqual(result, []);
  });

  it('should generate an array of numbers with the correct interval', () => {
    const result = range(0, 10, 2);

    assert.deepStrictEqual(result, [0, 2, 4, 6, 8]);
  });

  it('should generate an array with a single number when the interval is greater than the range', () => {
    const result = range(1, 5, 10);

    assert.deepStrictEqual(result, [1]);
  });
});
