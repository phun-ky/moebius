import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { hexadic } from '../hexadic';

describe('hexadic', () => {
  it('should generate a hexadic palette', () => {
    const baseColor = '#3498db';
    const hexadicPalette = hexadic(baseColor, { numberOfColors: 5 });

    assert.strictEqual(Array.isArray(hexadicPalette), true);
    assert.strictEqual(hexadicPalette.length, 5);

    hexadicPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });

  it('should use default options if not provided', () => {
    const baseColor = '#3498db';
    const hexadicPalette = hexadic(baseColor);

    assert.strictEqual(Array.isArray(hexadicPalette), true);
    assert.strictEqual(hexadicPalette.length, 8);

    hexadicPalette.forEach((color) => {
      assert.strictEqual(typeof color, 'string');
      assert.strictEqual(color.startsWith('#'), true);
    });
  });
});
