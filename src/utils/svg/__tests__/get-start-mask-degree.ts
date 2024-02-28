import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getStartMaskDegree } from '../get-start-mask-degree';

describe('getStartMaskDegree', () => {
  it('should calculate the starting mask degree based on the number of elements in a color group', () => {
    const initialDegree = 15;

    assert.strictEqual(getStartMaskDegree(initialDegree, 4), 0);
    assert.strictEqual(getStartMaskDegree(initialDegree, 8), 0);
    assert.strictEqual(getStartMaskDegree(initialDegree, 12), 0);
    assert.strictEqual(getStartMaskDegree(initialDegree, 3), 30);
    assert.strictEqual(getStartMaskDegree(initialDegree, 9), 30);
    assert.strictEqual(getStartMaskDegree(initialDegree, 7), 12);
    assert.strictEqual(getStartMaskDegree(initialDegree, 5), 55);
    assert.strictEqual(getStartMaskDegree(initialDegree, 6), initialDegree);
  });
});
