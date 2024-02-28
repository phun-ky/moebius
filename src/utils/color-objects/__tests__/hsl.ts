import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { UnitHSL, UnitHSLFloat } from '../hsl';

describe('UnitHSL', () => {
  it('should create an instance of UnitHSL', () => {
    const hslUnit = new UnitHSL([30, 0.5, 0.8]);

    assert.strictEqual(typeof hslUnit, 'object');
    assert.strictEqual(hslUnit.constructor.name, 'UnitHSL');
    assert.strictEqual(typeof hslUnit.h, 'number');
    assert.strictEqual(typeof hslUnit.s, 'number');
    assert.strictEqual(typeof hslUnit.l, 'number');
    assert.strictEqual(hslUnit.h, 30);
    assert.strictEqual(hslUnit.s, 50);
    assert.strictEqual(hslUnit.l, 80);
  });

  it('should convert the HSL unit to a string representation', () => {
    const hslUnit = new UnitHSL([30, 0.5, 0.8]);
    const hslString = hslUnit.toString();

    assert.strictEqual(typeof hslString, 'string');
    assert.strictEqual(hslString, 'hsl(30, 50%, 80%)');
  });
});

describe('UnitHSLFloat', () => {
  it('should create an instance of UnitHSLFloat', () => {
    const hslFloatUnit = new UnitHSLFloat([30, 0.5, 0.8]);

    assert.strictEqual(typeof hslFloatUnit, 'object');
    assert.strictEqual(hslFloatUnit.constructor.name, 'UnitHSLFloat');
    assert.strictEqual(typeof hslFloatUnit.h, 'number');
    assert.strictEqual(typeof hslFloatUnit.s, 'number');
    assert.strictEqual(typeof hslFloatUnit.l, 'number');
    assert.strictEqual(hslFloatUnit.h, 30);
    assert.strictEqual(hslFloatUnit.s, 0.5);
    assert.strictEqual(hslFloatUnit.l, 0.8);
  });

  it('should convert the HSLFloat unit to a string representation', () => {
    const hslFloatUnit = new UnitHSLFloat([30, 0.5, 0.8]);
    const hslFloatString = hslFloatUnit.toString();

    assert.strictEqual(typeof hslFloatString, 'string');
    assert.strictEqual(hslFloatString, '30, 0.5, 0.8');
  });

  it('should handle zero values for HSLFloat', () => {
    const hslFloatUnit = new UnitHSLFloat([0, 0, 0]);
    const hslFloatString = hslFloatUnit.toString();

    assert.strictEqual(typeof hslFloatString, 'string');
    assert.strictEqual(hslFloatString, '0, 0, 0');
  });

  it('should handle negative values for HSLFloat', () => {
    const hslFloatUnit = new UnitHSLFloat([-30, -0.5, -0.8]);
    const hslFloatString = hslFloatUnit.toString();

    assert.strictEqual(typeof hslFloatString, 'string');
    assert.strictEqual(hslFloatString, '-30, -0.5, -0.8');
  });
});
