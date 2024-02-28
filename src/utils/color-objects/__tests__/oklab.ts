import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitOKLAB } from '../oklab';

describe('UnitOKLAB', () => {
  it('should create an instance of UnitOKLAB', () => {
    const oklabUnit = new UnitOKLAB([70, 30, 45]);

    assert.strictEqual(typeof oklabUnit, 'object');
    assert.strictEqual(oklabUnit.constructor.name, 'UnitOKLAB');
    assert.strictEqual(typeof oklabUnit.l, 'number');
    assert.strictEqual(typeof oklabUnit.a, 'number');
    assert.strictEqual(typeof oklabUnit.b, 'number');
    assert.strictEqual(oklabUnit.l, 70);
    assert.strictEqual(oklabUnit.a, 30);
    assert.strictEqual(oklabUnit.b, 45);
  });

  it('should convert the OKLAB unit to a string representation', () => {
    const oklabUnit = new UnitOKLAB([70, 30, 45]);
    const oklabString = oklabUnit.toString();

    assert.strictEqual(typeof oklabString, 'string');
    assert.strictEqual(oklabString, '70, 30, 45');
  });

  it('should handle negative values', () => {
    const oklabUnit = new UnitOKLAB([-70, -30, -45]);
    const oklabString = oklabUnit.toString();

    assert.strictEqual(typeof oklabString, 'string');
    assert.strictEqual(oklabString, '-70, -30, -45');
  });

  it('should handle zero values', () => {
    const oklabUnit = new UnitOKLAB([0, 0, 0]);
    const oklabString = oklabUnit.toString();

    assert.strictEqual(typeof oklabString, 'string');
    assert.strictEqual(oklabString, '0, 0, 0');
  });
});
