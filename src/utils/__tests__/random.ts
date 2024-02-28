import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { random } from '../random';

describe('random', () => {
  it('should generate a random integer within the specified range (inclusive)', () => {
    const result = random(10, 1);

    assert.ok(result >= 1 && result <= 10);
    assert.strictEqual(result, Math.floor(result)); // Ensure it is an integer
  });

  it('should handle a range with the maximum value equal to the minimum value', () => {
    const result = random(5, 5);

    assert.strictEqual(result, 5);
  });

  it('should handle a range with negative numbers', () => {
    const result = random(-5, -1);

    assert.ok(result >= -5 && result <= -1);
    assert.strictEqual(result, Math.floor(result)); // Ensure it is an integer
  });

  it('should handle a range with negative and positive numbers', () => {
    const result = random(5, -5);

    assert.ok(result >= -5 && result <= 5);
    assert.strictEqual(result, Math.floor(result)); // Ensure it is an integer
  });
});
