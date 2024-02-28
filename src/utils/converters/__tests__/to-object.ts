import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MoebiusHSLObjectType, MoebiusRGBObjectType } from '../../../types';
import { toObject } from '../to-object';

describe('toObject', () => {
  it('should convert a color to its RGB object representation', () => {
    const result = toObject('#3498db') as MoebiusRGBObjectType;

    assert.ok(result);
    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(typeof result.r, 'number');
    assert.strictEqual(typeof result.g, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should convert a color to its HSL object representation', () => {
    const result = toObject('#3498db', 'hsl') as MoebiusHSLObjectType;

    assert.ok(result);
    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.l, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toObject('#3498db80', 'hsl') as MoebiusHSLObjectType;

    assert.ok(result);
    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.l, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toObject('#3498DB') as MoebiusRGBObjectType;

    assert.ok(result);
    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(typeof result.r, 'number');
    assert.strictEqual(typeof result.g, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toObject('#3498db80') as MoebiusRGBObjectType;

    assert.ok(result);
    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(typeof result.r, 'number');
    assert.strictEqual(typeof result.g, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });
});
