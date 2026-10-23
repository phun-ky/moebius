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

  it('should reverse a diverging palette with reverseDirection', () => {
    const options = { numberOfColors: 7, diverging: true };
    const palette = luminanceShift(['#003f5c'], ['#ff9900'], options);
    const reversed = luminanceShift(['#003f5c'], ['#ff9900'], {
      ...options,
      reverseDirection: true
    });

    assert.deepStrictEqual(reversed, [...palette].reverse());
    assert.strictEqual(reversed[3], '#f5f5f5');
  });

  it('should not change a non-diverging palette with reverseDirection', () => {
    const options = { numberOfColors: 7 };

    assert.deepStrictEqual(
      luminanceShift(['#003f5c'], [], { ...options, reverseDirection: true }),
      luminanceShift(['#003f5c'], [], options)
    );
  });
});
