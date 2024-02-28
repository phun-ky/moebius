import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { pieSlice } from '../pie-slice';

describe('pieSlice', () => {
  it('should generate an SVG path representing a pie slice', () => {
    const start = 45;
    const interval = 90;
    const radius = 50;
    const size = 256;
    const result = pieSlice(start, interval, radius, size);

    assert.strictEqual(typeof result, 'string');
    assert.match(
      result,
      /^M \d+(\.\d+)? \d+(\.\d+)? A \d+(\.\d+)? \d+(\.\d+)? 0 [01] 0 \d+(\.\d+)? \d+(\.\d+)? L \d+(\.\d+)? \d+(\.\d+)? Z$/i
    );
  });

  it('should handle a larger start angle than stop angle and generate a valid SVG path', () => {
    const start = 270;
    const interval = 180;
    const radius = 50;
    const size = 256;
    const result = pieSlice(start, interval, radius, size);

    assert.strictEqual(typeof result, 'string');
    assert.match(
      result,
      /^M \d+(\.\d+)? \d+(\.\d+)? A \d+(\.\d+)? \d+(\.\d+)? 0 [01] 0 \d+(\.\d+)? \d+(\.\d+)? L \d+(\.\d+)? \d+(\.\d+)? Z$/i
    );
  });

  it('should handle a size parameter other than the default (256) and generate a valid SVG path', () => {
    const start = 0;
    const interval = 90;
    const radius = 50;
    const size = 512;
    const result = pieSlice(start, interval, radius, size);

    assert.strictEqual(typeof result, 'string');
    assert.match(
      result,
      /^M \d+(\.\d+)? \d+(\.\d+)? A \d+(\.\d+)? \d+(\.\d+)? 0 [01] 0 \d+(\.\d+)? \d+(\.\d+)? L \d+(\.\d+)? \d+(\.\d+)? Z$/i
    );
  });

  it('should handle a default size parameter (256) when not provided and generate a valid SVG path', () => {
    const start = 180;
    const interval = 90;
    const radius = 30;
    const result = pieSlice(start, interval, radius);

    assert.strictEqual(typeof result, 'string');
    assert.match(
      result,
      /^M \d+(\.\d+)? \d+(\.\d+)? A \d+(\.\d+)? \d+(\.\d+)? 0 [01] 0 \d+(\.\d+)? \d+(\.\d+)? L \d+(\.\d+)? \d+(\.\d+)? Z$/i
    );
  });
});
