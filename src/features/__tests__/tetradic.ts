import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { tetradic } from '../tetradic';

describe('tetradic', () => {
  it('should generate a tetradic palette with default options', () => {
    const baseColor = '#3498db';
    const tetradicPalette = tetradic(baseColor);

    assert(Array.isArray(tetradicPalette));
    assert.strictEqual(tetradicPalette.length, 8);
    assert.strictEqual(typeof tetradicPalette[0], 'string');
  });

  it('should generate a tetradic palette with custom options', () => {
    const baseColor = '#3498db';
    const options = {
      numberOfColors: 5,
      colorScaleMode: 'lch',
      correctLightness: false
    };
    const tetradicPalette = tetradic(baseColor, options);

    assert(Array.isArray(tetradicPalette));
    assert.strictEqual(tetradicPalette.length, 5);
    assert.strictEqual(typeof tetradicPalette[0], 'string');
  });
});
