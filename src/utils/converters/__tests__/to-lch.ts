import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitLCH } from '../../color-objects';
import { toLCH } from '../to-lch';

describe('toLCH', () => {
  it('should convert a color to its LCH object representation', () => {
    const result = toLCH('#3498db');

    assert.ok(result instanceof UnitLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toLCH('#3498db80');

    assert.ok(result instanceof UnitLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toLCH('#3498DB');

    assert.ok(result instanceof UnitLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toLCH('#3498db80');

    assert.ok(result instanceof UnitLCH);
    assert.strictEqual(typeof result.l, 'number');
    assert.strictEqual(typeof result.c, 'number');
    assert.strictEqual(typeof result.h, 'number');
  });
});
