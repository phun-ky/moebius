import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { triadic } from '../triadic';

describe('triadic', () => {
  it('should generate a triadic palette with default options', () => {
    const baseColor = '#3498db';
    const triadicPalette = triadic(baseColor);

    assert(Array.isArray(triadicPalette));
    assert.strictEqual(triadicPalette.length, 8);
    assert.strictEqual(typeof triadicPalette[0], 'string');
  });

  it('should generate a triadic palette with custom options', () => {
    const baseColor = '#3498db';
    const options = {
      numberOfColors: 5,
      colorScaleMode: 'lch',
      correctLightness: false
    };
    const triadicPalette = triadic(baseColor, options);

    assert(Array.isArray(triadicPalette));
    assert.strictEqual(triadicPalette.length, 5);
    assert.strictEqual(typeof triadicPalette[0], 'string');
  });
});
