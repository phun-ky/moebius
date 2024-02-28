import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { luminanceShift } from '../luminance-shift';

describe('luminanceShift', () => {
  it('should generate a luminance shift palette', () => {
    const baseColors = ['#3498db', '#99db34'];
    const divergingColors = ['#db3434'];
    const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, {
      numberOfColors: 5
    });

    assert.strictEqual(Array.isArray(luminanceShiftPalette), true);
    assert.strictEqual(luminanceShiftPalette.length, 5);

    luminanceShiftPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
