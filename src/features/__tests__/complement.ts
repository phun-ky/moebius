import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { complement } from '../complement';

describe('complement', () => {
  it('should generate a complement color palette', () => {
    const baseColor = '#3498db';
    const options = { numberOfColors: 5 };
    const complementPalette = complement(baseColor, options);

    assert.strictEqual(Array.isArray(complementPalette), true);
    assert.strictEqual(complementPalette.length, options.numberOfColors);

    complementPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });

  it('should generate a complement color palette with default options', () => {
    const baseColor = '#3498db';
    const complementPalette = complement(baseColor);

    assert.strictEqual(Array.isArray(complementPalette), true);
    assert.strictEqual(complementPalette.length, 8); // Default number of colors

    complementPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
