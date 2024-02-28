import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHSL } from '../../color-objects';
import { toHSL } from '../to-hsl';

describe('toHSL', () => {
  it('should convert a color to its HSL object representation', () => {
    const result = toHSL('#3498db');

    assert.ok(result instanceof UnitHSL);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.l, 'number');
  });

  it('should handle a color in hexadecimal format with alpha channel', () => {
    const result = toHSL('#3498db80');

    assert.ok(result instanceof UnitHSL);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.l, 'number');
  });

  it('should handle uppercase hexadecimal format', () => {
    const result = toHSL('#3498DB');

    assert.ok(result instanceof UnitHSL);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.l, 'number');
  });

  it('should handle lowercase hexadecimal format with alpha channel', () => {
    const result = toHSL('#3498db80');

    assert.ok(result instanceof UnitHSL);
    assert.strictEqual(typeof result.h, 'number');
    assert.strictEqual(typeof result.s, 'number');
    assert.strictEqual(typeof result.l, 'number');
  });
});
