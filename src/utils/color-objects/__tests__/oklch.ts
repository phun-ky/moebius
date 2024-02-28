import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitOKLCH } from '../oklch';

describe('UnitOKLCH', () => {
  it('should create an instance of UnitOKLCH', () => {
    const oklchUnit = new UnitOKLCH([70, 30, 45]);

    assert.strictEqual(typeof oklchUnit, 'object');
    assert.strictEqual(oklchUnit.constructor.name, 'UnitOKLCH');
    assert.strictEqual(typeof oklchUnit.l, 'number');
    assert.strictEqual(typeof oklchUnit.c, 'number');
    assert.strictEqual(typeof oklchUnit.h, 'number');
    assert.strictEqual(oklchUnit.l, 70);
    assert.strictEqual(oklchUnit.c, 30);
    assert.strictEqual(oklchUnit.h, 45);
  });

  it('should convert the OKLCH unit to a string representation', () => {
    const oklchUnit = new UnitOKLCH([70, 30, 45]);
    const oklchString = oklchUnit.toString();

    assert.strictEqual(typeof oklchString, 'string');
    assert.strictEqual(oklchString, '70, 30, 45');
  });

  it('should handle negative values', () => {
    const oklchUnit = new UnitOKLCH([-70, -30, -45]);
    const oklchString = oklchUnit.toString();

    assert.strictEqual(typeof oklchString, 'string');
    assert.strictEqual(oklchString, '-70, -30, -45');
  });

  it('should handle zero values', () => {
    const oklchUnit = new UnitOKLCH([0, 0, 0]);
    const oklchString = oklchUnit.toString();

    assert.strictEqual(typeof oklchString, 'string');
    assert.strictEqual(oklchString, '0, 0, 0');
  });
});
