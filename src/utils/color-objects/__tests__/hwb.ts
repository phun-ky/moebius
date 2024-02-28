import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHWB } from '../hwb';

describe('UnitHWB', () => {
  it('should create an instance of UnitHWB', () => {
    const hwbUnit = new UnitHWB({ h: 200, w: 0.2, b: 0.1 });

    assert.strictEqual(typeof hwbUnit, 'object');
    assert.strictEqual(hwbUnit.constructor.name, 'UnitHWB');
    assert.strictEqual(typeof hwbUnit.h, 'number');
    assert.strictEqual(typeof hwbUnit.w, 'number');
    assert.strictEqual(typeof hwbUnit.b, 'number');
    assert.strictEqual(hwbUnit.h, 200);
    assert.strictEqual(hwbUnit.w, 0.2);
    assert.strictEqual(hwbUnit.b, 0.1);
  });

  it('should convert the HWB unit to a string representation', () => {
    const hwbUnit = new UnitHWB({ h: 200, w: 0.2, b: 0.1 });
    const hwbString = hwbUnit.toString();

    assert.strictEqual(typeof hwbString, 'string');
    assert.strictEqual(hwbString, '200, 0.2, 0.1');
  });

  it('should handle zero values', () => {
    const hwbUnit = new UnitHWB({ h: 0, w: 0, b: 0 });
    const hwbString = hwbUnit.toString();

    assert.strictEqual(typeof hwbString, 'string');
    assert.strictEqual(hwbString, '0, 0, 0');
  });

  it('should handle negative values', () => {
    const hwbUnit = new UnitHWB({ h: -200, w: -0.2, b: -0.1 });
    const hwbString = hwbUnit.toString();

    assert.strictEqual(typeof hwbString, 'string');
    assert.strictEqual(hwbString, '-200, -0.2, -0.1');
  });
});
