import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHSV } from '../../color-objects';
import { toHSV } from '../to-hsv';

describe('toHSV', () => {
  it('should convert a color to its HSV object representation', () => {
    const result = toHSV('#3498db');

    assert.ok(result instanceof UnitHSV);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.v, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toHSV('#3498db80');

    assert.ok(result instanceof UnitHSV);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.v, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toHSV('#3498DB');

    assert.ok(result instanceof UnitHSV);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.v, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toHSV('#3498db80');

    assert.ok(result instanceof UnitHSV);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.v, 'number');
  });
});
