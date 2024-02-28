import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitXYZ } from '../../color-objects';
import { toXYZ } from '../to-xyz';

describe('toXYZ', () => {
  it('should convert a color from RGB to CIE 1931 XYZ color space', () => {
    const result = toXYZ('#3498db');

    assert.ok(result instanceof UnitXYZ);
    assert.strictEqual(typeof result.x, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.z, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toXYZ('#3498db80');

    assert.ok(result instanceof UnitXYZ);
    assert.strictEqual(typeof result.x, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.z, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toXYZ('#3498DB');

    assert.ok(result instanceof UnitXYZ);
    assert.strictEqual(typeof result.x, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.z, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toXYZ('#3498db80');

    assert.ok(result instanceof UnitXYZ);
    assert.strictEqual(typeof result.x, 'number');
    assert.strictEqual(typeof result.y, 'number');
    assert.strictEqual(typeof result.z, 'number');
  });
});
