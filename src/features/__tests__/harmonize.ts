import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { harmonize } from '../harmonize';

describe('harmonize', () => {
  it('should generate a harmonized palette', () => {
    const baseColor = '#3498db';
    const start = 30;
    const end = 210;
    const interval = 30;
    const harmonizedPalette = harmonize(baseColor, start, end, interval, { noDuplicates: true, numberOfColors: 8 });

    assert.strictEqual(Array.isArray(harmonizedPalette), true);

    harmonizedPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });

    assert.strictEqual(harmonizedPalette.length, 8);
  });

  it('should remove duplicates when noDuplicates is true', () => {
    const baseColor = '#3498db';
    const start = 30;
    const end = 210;
    const interval = 30;
    const harmonizedPalette = harmonize(baseColor, start, end, interval, { noDuplicates: true });
    const uniqueColors = [...new Set(harmonizedPalette)];

    assert.deepStrictEqual(harmonizedPalette, uniqueColors);
  });

  it('should not remove duplicates when noDuplicates is false', () => {
    const baseColor = '#050505';
    const start = 30;
    const end = 210;
    const interval = 30;
    const harmonizedPalette = harmonize(baseColor, start, end, interval, { noDuplicates: false });
    const uniqueColors = [...new Set(harmonizedPalette)];

    assert.notDeepStrictEqual(harmonizedPalette, uniqueColors);
  });
});
