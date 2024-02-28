import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHSV } from '../hsv';

describe('UnitHSV', () => {
  it('should create an instance of UnitHSV', () => {
    const hsvUnit = new UnitHSV([30, 0.5, 0.8]);

    assert.strictEqual(typeof hsvUnit, 'object');
    assert.strictEqual(hsvUnit.constructor.name, 'UnitHSV');
    assert.strictEqual(typeof hsvUnit.h, 'number');
    assert.strictEqual(typeof hsvUnit.s, 'number');
    assert.strictEqual(typeof hsvUnit.v, 'number');
    assert.strictEqual(hsvUnit.h, 30);
    assert.strictEqual(hsvUnit.s, 0.5);
    assert.strictEqual(hsvUnit.v, 0.8);
  });

  it('should convert the HSV unit to a string representation', () => {
    const hsvUnit = new UnitHSV([30, 0.5, 0.8]);
    const hsvString = hsvUnit.toString();

    assert.strictEqual(typeof hsvString, 'string');
    assert.strictEqual(hsvString, '30, 0.5, 0.8');
  });

  it('should handle zero values', () => {
    const hsvUnit = new UnitHSV([0, 0, 0]);
    const hsvString = hsvUnit.toString();

    assert.strictEqual(typeof hsvString, 'string');
    assert.strictEqual(hsvString, '0, 0, 0');
  });

  it('should handle negative values', () => {
    const hsvUnit = new UnitHSV([-30, -0.5, -0.8]);
    const hsvString = hsvUnit.toString();

    assert.strictEqual(typeof hsvString, 'string');
    assert.strictEqual(hsvString, '-30, -0.5, -0.8');
  });
});
