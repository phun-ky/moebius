import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHSI } from '../hsi';

describe('UnitHSI', () => {
  it('should create an instance of UnitHSI', () => {
    const hsiUnit = new UnitHSI([30, 0.5, 0.8]);

    assert.strictEqual(typeof hsiUnit, 'object');
    assert.strictEqual(hsiUnit.constructor.name, 'UnitHSI');
    assert.strictEqual(typeof hsiUnit.h, 'number');
    assert.strictEqual(typeof hsiUnit.s, 'number');
    assert.strictEqual(typeof hsiUnit.i, 'number');
    assert.strictEqual(hsiUnit.h, 30);
    assert.strictEqual(hsiUnit.s, 0.5);
    assert.strictEqual(hsiUnit.i, 0.8);
  });

  it('should convert the HSI unit to a string representation', () => {
    const hsiUnit = new UnitHSI([30, 0.5, 0.8]);
    const hsiString = hsiUnit.toString();

    assert.strictEqual(typeof hsiString, 'string');
    assert.strictEqual(hsiString, '30, 0.5, 0.8');
  });

  it('should handle zero values for HSI', () => {
    const hsiUnit = new UnitHSI([0, 0, 0]);
    const hsiString = hsiUnit.toString();

    assert.strictEqual(typeof hsiString, 'string');
    assert.strictEqual(hsiString, '0, 0, 0');
  });

  it('should handle negative values for HSI', () => {
    const hsiUnit = new UnitHSI([-30, -0.5, -0.8]);
    const hsiString = hsiUnit.toString();

    assert.strictEqual(typeof hsiString, 'string');
    assert.strictEqual(hsiString, '-30, -0.5, -0.8');
  });
});
