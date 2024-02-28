import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { interpolate } from '../interpolate';

describe('interpolate', () => {
  it('should interpolate between two colors and generate a color palette', () => {
    const startColor = '#3498db';
    const endColor = '#db3434';
    const interpolatedPalette = interpolate(startColor, endColor, {
      numberOfColors: 5
    });

    assert.strictEqual(Array.isArray(interpolatedPalette), true);
    assert.strictEqual(interpolatedPalette.length, 5);

    interpolatedPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });

  it('should use default options if not provided', () => {
    const startColor = '#3498db';
    const endColor = '#db3434';
    const interpolatedPalette = interpolate(startColor, endColor);

    assert.strictEqual(Array.isArray(interpolatedPalette), true);
    assert.strictEqual(interpolatedPalette.length, 8);

    interpolatedPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
