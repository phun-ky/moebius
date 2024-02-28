import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitOKLCH } from '../../color-objects';
import { toOKLCH } from '../to-oklch';

describe('toOKLCH', () => {
  it('should convert a color to its OKLCH representation', () => {
    const result = toOKLCH('#3498db');

    assert.ok(result instanceof UnitOKLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toOKLCH('#3498db80');

    assert.ok(result instanceof UnitOKLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toOKLCH('#3498DB');

    assert.ok(result instanceof UnitOKLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toOKLCH('#3498db80');

    assert.ok(result instanceof UnitOKLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });
});
