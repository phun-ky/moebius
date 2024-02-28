import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitLCH } from '../lch';

describe('UnitLCH', () => {
  it('should create an instance of UnitLCH', () => {
    const lchUnit = new UnitLCH([70, 30, 45]);

    assert.strictEqual(typeof lchUnit, 'object');
    assert.strictEqual(lchUnit.constructor.name, 'UnitLCH');
    assert.strictEqual(typeof lchUnit.l, 'number');
    assert.strictEqual(typeof lchUnit.c, 'number');
    assert.strictEqual(typeof lchUnit.h, 'number');
    assert.strictEqual(lchUnit.l, 70);
    assert.strictEqual(lchUnit.c, 30);
    assert.strictEqual(lchUnit.h, 45);
  });

  it('should convert the LCH unit to a string representation', () => {
    const lchUnit = new UnitLCH([70, 30, 45]);
    const lchString = lchUnit.toString();

    assert.strictEqual(typeof lchString, 'string');
    assert.strictEqual(lchString, '70, 30, 45');
  });

  it('should handle negative values', () => {
    const lchUnit = new UnitLCH([-70, -30, -45]);
    const lchString = lchUnit.toString();

    assert.strictEqual(typeof lchString, 'string');
    assert.strictEqual(lchString, '-70, -30, -45');
  });

  it('should handle zero values', () => {
    const lchUnit = new UnitLCH([0, 0, 0]);
    const lchString = lchUnit.toString();

    assert.strictEqual(typeof lchString, 'string');
    assert.strictEqual(lchString, '0, 0, 0');
  });
});
