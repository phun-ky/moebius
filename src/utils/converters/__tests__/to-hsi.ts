import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHSI } from '../../color-objects';
import { toHSI } from '../to-hsi';

describe('toHSI', () => {
  it('should convert a color to its HSI object representation', () => {
    const result = toHSI('#3498db');

    assert.ok(result instanceof UnitHSI);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.i, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toHSI('#3498db80');

    assert.ok(result instanceof UnitHSI);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.i, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toHSI('#3498DB');

    assert.ok(result instanceof UnitHSI);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.i, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toHSI('#3498db80');

    assert.ok(result instanceof UnitHSI);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.i, 'number');
  });
});
