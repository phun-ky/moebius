import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { toCMYK } from '../to-cmyk';

describe('toCMYK', () => {
  it('should convert an RGB color to its CMYK representation', () => {
    const result = toCMYK('#00ff00');

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitCMYK');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.m, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.k, 'number');
  });

  it('should handle an RGB color in RGB format', () => {
    const result = toCMYK('rgb(0, 255, 0)');

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitCMYK');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.m, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.k, 'number');
  });

  it('should handle an RGB color in RGBA format', () => {
    const result = toCMYK('rgba(0, 255, 0, 0.5)');

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitCMYK');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.m, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.k, 'number');
  });

  it('should handle an RGB color in hex format with a higher intensity', () => {
    const result = toCMYK('#ff0000');

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitCMYK');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.m, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.k, 'number');
  });

  it('should handle an RGB color in hex format with a lower intensity', () => {
    const result = toCMYK('#0000ff');

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitCMYK');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.m, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.k, 'number');
  });
});
