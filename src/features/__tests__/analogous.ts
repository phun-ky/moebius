import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { analogous } from '../analogous';

describe('analogous', () => {
  it('should generate an analogous color palette', () => {
    const baseColor = '#3498db';
    const options = { numberOfColors: 5 };
    const analogousPalette = analogous(baseColor, options);

    assert.strictEqual(Array.isArray(analogousPalette), true);
    assert.strictEqual(analogousPalette.length, options.numberOfColors);

    analogousPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });

  it('should generate an analogous color palette with default options', () => {
    const baseColor = '#3498db';
    const analogousPalette = analogous(baseColor);

    assert.strictEqual(Array.isArray(analogousPalette), true);
    assert.strictEqual(analogousPalette.length, 8); // Default number of colors

    analogousPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
