import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { toHEX } from '../to-hex';


describe('toHEX', () => {
  it('should convert a color to its HEX representation', () => {
    const result = toHEX('#3498db');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.charAt(0), '#');
    assert.strictEqual(result.length, 7);
  });

  it('should handle a color in RGB format', () => {
    const result = toHEX('rgb(52, 152, 219)');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.charAt(0), '#');
    assert.strictEqual(result.length, 7);
  });

  it('should handle a color in HSL format', () => {
    const result = toHEX('hsl(207.76, 79%, 57%)');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.charAt(0), '#');
    assert.strictEqual(result.length, 7);
  });

  it('should handle a color in HEX format with alpha channel', () => {
    const result = toHEX('#3498db80');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.charAt(0), '#');
    assert.strictEqual(result.length, 9);
  });

  it('should handle uppercase HEX format with alpha channel', () => {
    const result = toHEX('#3498DB80');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.charAt(0), '#');
    assert.strictEqual(result.length, 9);
  });

  it('should handle lowercase HEX format with alpha channel', () => {
    const result = toHEX('#3498db80');

    assert.strictEqual(typeof result, 'string');
    assert.strictEqual(result.charAt(0), '#');
    assert.strictEqual(result.length, 9);
  });
});
