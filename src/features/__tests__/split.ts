import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { split } from '../split';

describe('split', () => {
  it('should generate a split palette with default options', () => {
    const baseColor = '#3498db';
    const splitPalette = split(baseColor);

    assert(Array.isArray(splitPalette));
    assert.strictEqual(splitPalette.length, 8);
    assert.strictEqual(typeof splitPalette[0], 'string');
  });

  it('should generate a split palette with custom options', () => {
    const baseColor = '#3498db';
    const options = {
      numberOfColors: 5,
      colorScaleMode: 'lch',
      correctLightness: false
    };
    const splitPalette = split(baseColor, options);

    assert(Array.isArray(splitPalette));
    assert.strictEqual(splitPalette.length, 5);
    assert.strictEqual(typeof splitPalette[0], 'string');
  });
});
