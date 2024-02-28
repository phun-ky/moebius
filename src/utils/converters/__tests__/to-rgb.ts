import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { toRGB } from '../to-rgb';

describe('toRGB', () => {
  it('should convert a color to its RGB representation', () => {
    const result = toRGB('#3498db');

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^rgb\(\d+, \d+, \d+\)$/);
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toRGB('#3498db80');

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^rgb\(\d+, \d+, \d+\)$/);
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toRGB('#3498DB');

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^rgb\(\d+, \d+, \d+\)$/);
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toRGB('#3498db80');

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^rgb\(\d+, \d+, \d+\)$/);
  });
});
