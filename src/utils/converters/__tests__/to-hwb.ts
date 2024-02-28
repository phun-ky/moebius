import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHWB } from '../../color-objects';
import { toHWB } from '../to-hwb';

describe('toHWB', () => {
  it('should convert a color to its HWB object representation', () => {
    const result = toHWB('#3498db');

    assert.ok(result instanceof UnitHWB);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.w, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toHWB('#3498db80');

    assert.ok(result instanceof UnitHWB);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.w, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toHWB('#3498DB');

    assert.ok(result instanceof UnitHWB);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.w, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toHWB('#3498db80');

    assert.ok(result instanceof UnitHWB);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.w, 'number');
    assert.strictEqual(typeof result.b, 'number');
  });
});
