import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusPaletteOptionsType } from '../../types';
import { darkMode } from '../dark-mode';

describe('dark-mode', () => {
  it('should generate a dark mode color palette', () => {
    const baseColor = '#3498db';
    const secondaryColor = '#2ecc71';
    const options = {
      bezier: true,
      colorScaleMode: 'lch'
    } as MoebiusPaletteOptionsType;
    const palette = darkMode(baseColor, secondaryColor, options);

    assert.strictEqual(typeof palette, 'object');
    assert.strictEqual(Array.isArray(palette.primary), true);
    assert.strictEqual(Array.isArray(palette.surface), true);
    assert.strictEqual(Array.isArray(palette.mixed), true);

    [palette.primary, palette.surface, palette.mixed].forEach((accents) => {
      accents.forEach((color) => {
        assert.strictEqual(typeof color, 'string');
        assert.strictEqual(color.startsWith('#'), true);
      });
    });
  });
});
