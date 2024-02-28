import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusRGBObjectType } from '../../../types';
import { toFloat } from '../to-float';

describe('toFloat', () => {
  it('should convert a color to its float representation (RGB)', () => {
    const result = toFloat('#00ff00') as MoebiusRGBObjectType;

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitRGBFloat');
    assert.strictEqual(typeof result.r, 'number');
    assert.strictEqual(typeof result.g, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle a color in RGB format', () => {
    const result = toFloat('rgb(0, 255, 0)') as MoebiusRGBObjectType;

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitRGBFloat');
    assert.strictEqual(typeof result.r, 'number');
    assert.strictEqual(typeof result.g, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle a color in RGBA format', () => {
    const result = toFloat('rgba(0, 255, 0, 0.5)') as MoebiusRGBObjectType;

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(result.constructor.name, 'UnitRGBFloat');
    assert.strictEqual(typeof result.r, 'number');
    assert.strictEqual(typeof result.g, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });
});
