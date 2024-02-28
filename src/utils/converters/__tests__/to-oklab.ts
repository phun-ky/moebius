import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitOKLAB } from '../../color-objects';
import { toOKLAB } from '../to-oklab';

describe('toOKLAB', () => {
  it('should convert a color to its OKLAB representation', () => {
    const result = toOKLAB('#3498db');

    assert.ok(result instanceof UnitOKLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toOKLAB('#3498db80');

    assert.ok(result instanceof UnitOKLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toOKLAB('#3498DB');

    assert.ok(result instanceof UnitOKLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toOKLAB('#3498db80');

    assert.ok(result instanceof UnitOKLAB);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.a, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });
});
