import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  MoebiusColorValueHexType,
  MoebiusPaletteOptionsType
} from '../../types';
import { luminanceShift } from '../luminance-shift';

describe('luminanceShift', () => {
  it('should generate a luminance shift palette', () => {
    const baseColors: MoebiusColorValueHexType[] = ['#3498db', '#99db34'];
    const divergingColors: MoebiusColorValueHexType[] = ['#db3434'];
    const luminanceShiftPalette = luminanceShift(baseColors, divergingColors, {
      numberOfColors: 5
    } as MoebiusPaletteOptionsType);

    assert.strictEqual(Array.isArray(luminanceShiftPalette), true);
    assert.strictEqual(luminanceShiftPalette.length, 5);

    luminanceShiftPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });

  it('should reverse a diverging palette with reverseDirection', () => {
    const options = {
      numberOfColors: 7,
      diverging: true
    } as MoebiusPaletteOptionsType;
    const palette = luminanceShift(['#003f5c'], ['#ff9900'], options);
    const reversed = luminanceShift(['#003f5c'], ['#ff9900'], {
      ...options,
      reverseDirection: true
    } as MoebiusPaletteOptionsType);

    assert.deepStrictEqual(reversed, [...palette].reverse());
    assert.strictEqual(reversed[3], '#f5f5f5');
  });

  it('should not change a non-diverging palette with reverseDirection', () => {
    const options = { numberOfColors: 7 } as MoebiusPaletteOptionsType;

    assert.deepStrictEqual(
      luminanceShift(['#003f5c'], [], {
        ...options,
        reverseDirection: true
      } as MoebiusPaletteOptionsType),
      luminanceShift(['#003f5c'], [], options)
    );
  });
});
