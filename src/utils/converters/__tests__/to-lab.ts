import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitLAB } from '../../color-objects';
import { toLAB } from '../to-lab';

describe('toLAB', () => {
  it('should convert a color to its LAB object representation', () => {
    const result = toLAB('#3498db');

    assert.ok(result instanceof UnitLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toLAB('#3498db80');

    assert.ok(result instanceof UnitLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toLAB('#3498DB');

    assert.ok(result instanceof UnitLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toLAB('#3498db80');

    assert.ok(result instanceof UnitLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });
});
