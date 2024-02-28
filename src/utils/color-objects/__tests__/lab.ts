import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitLAB } from '../lab';

describe('UnitLAB', () => {
  it('should create an instance of UnitLAB', () => {
    const labUnit = new UnitLAB([70, 10, 20]);

    assert.strictEqual(typeof labUnit, 'object');
    assert.strictEqual(labUnit.constructor.name, 'UnitLAB');
    assert.strictEqual(typeof labUnit.l, 'number');
    assert.strictEqual(typeof labUnit.a, 'number');
    assert.strictEqual(typeof labUnit.b, 'number');
    assert.strictEqual(labUnit.l, 70);
    assert.strictEqual(labUnit.a, 10);
    assert.strictEqual(labUnit.b, 20);
  });

  it('should convert the LAB unit to a string representation', () => {
    const labUnit = new UnitLAB([70, 10, 20]);
    const labString = labUnit.toString();

    assert.strictEqual(typeof labString, 'string');
    assert.strictEqual(labString, '70, 10, 20');
  });

  it('should handle negative values', () => {
    const labUnit = new UnitLAB([-70, -10, -20]);
    const labString = labUnit.toString();

    assert.strictEqual(typeof labString, 'string');
    assert.strictEqual(labString, '-70, -10, -20');
  });

  it('should handle zero values', () => {
    const labUnit = new UnitLAB([0, 0, 0]);
    const labString = labUnit.toString();

    assert.strictEqual(typeof labString, 'string');
    assert.strictEqual(labString, '0, 0, 0');
  });
});
