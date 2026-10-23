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

  it('should not throw when the base color has fewer unique accents than the secondary color', () => {
    // Darkening #003f5c reaches #000000 after a few steps, and noDuplicates
    // drops the repeats, so its accent list is shorter than #ff9900's
    const options = {
      reverseDirection: false,
      noDuplicates: true
    } as MoebiusPaletteOptionsType;
    const palette = darkMode('#003f5c', '#ff9900', options);

    assert.ok(palette.mixed.length > 0);
    assert.ok(palette.mixed.length <= palette.primary.length);
    palette.mixed.forEach((color) => {
      assert.match(color, /^#[0-9a-f]{6}$/);
    });
  });
});
