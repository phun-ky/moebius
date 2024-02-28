import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getRandomColorHex } from '../get-random-color-hex';

describe('getRandomColorHex', () => {
  it('should generate a random hexadecimal color', () => {
    const result = getRandomColorHex();

    assert.strictEqual(typeof result, 'string');
    assert.match(result, /^#[0-9a-f]{6}$/i);
  });

  it('should generate different colors on successive calls', () => {
    const color1 = getRandomColorHex();
    const color2 = getRandomColorHex();

    assert.notStrictEqual(color1, color2);
  });

  it('should handle multiple calls in quick succession', () => {
    const colors = new Set();

    for (let i = 0; i < 1000; i++) {
      const color = getRandomColorHex();

      colors.add(color);
    }

    assert.strictEqual(colors.size, 1000);
  });
});
