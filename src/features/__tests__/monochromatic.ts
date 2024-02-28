import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { monochromatic } from '../monochromatic';

describe('monochromatic', () => {
  it('should generate a monochromatic color palette', () => {
    const baseColor = '#003f5c';
    const options = { numberOfColors: 5, bezier: true, randomOffset: false };
    const monochromaticPalette = monochromatic(baseColor, options);

    assert.strictEqual(Array.isArray(monochromaticPalette), true);
    assert.strictEqual(monochromaticPalette.length, 5);

    monochromaticPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
